import Foundation
import UIKit
import MLKit

#if canImport(MLKitBarcodeScanning)
import MLKitBarcodeScanning
#endif

#if canImport(MLKitFaceDetection)
import MLKitFaceDetection
#endif

#if canImport(MLKitTextRecognition)
import MLKitTextRecognition
#endif

#if canImport(MLKitDigitalInkRecognition)
import MLKitDigitalInkRecognition
#endif

#if canImport(MLKitImageLabeling)
import MLKitImageLabeling
#endif

#if canImport(MLKitObjectDetection)
import MLKitObjectDetection
#endif

#if canImport(MLKitPoseDetection)
import MLKitPoseDetection
#endif


#if canImport(MLKitSegmentationSelfie)
import MLKitSegmentationSelfie
#endif


@objcMembers
@objc(TNSMLResult)
public class TNSMLResult: NSObject {
    var result: Any
    var type: String
    public init(_ result: Any, _ type: String) {
        self.result = result
        self.type = type
    }
}

@objcMembers
@objc(TNSML)
public class TNSML: NSObject {
    private static let encoder = JSONEncoder()
    private static let queue = DispatchQueue(label: "TNSML", attributes: .concurrent)
    
    
    public static func processImage(_ image: UIImage, _ json: NSDictionary, _ callback: @escaping ((Any) -> Void)){
        if(isMLSupported()){
            let inputImage = VisionImage(image: image)
            process(inputImage, json, callback)
        }
    }
    
    
    private static func process(_ inputImage: VisionImage, _ json: NSDictionary, _ callback: @escaping ((Any) -> Void)){
        queue.async {
            
            let detectorType = TNSMLKitDetectionType.init(rawValue: json["detectorType"] as? UInt32 ?? TNSMLKitDetectionType.None.rawValue)
            
            
            var results: [TNSMLResult] = []
            
        
#if canImport(MLKitBarcodeScanning)
            if(detectorType == .Barcode || detectorType == .All){
                var formatRaw = 0
                let barcodeScanning = json["barcodeScanning"] as? NSDictionary
                if(barcodeScanning != nil){
                    let formatArray = barcodeScanning!["format"] as? [String]
                    
                    if(formatArray != nil){
                        for item in formatArray! {
                            let format = BarcodeFormats(rawValue: item)
                            if(format != nil){
                                formatRaw |= format!.format.rawValue
                            }
                        }
                    }
                    
                    if(formatRaw == 0){
                        formatRaw = BarcodeFormat.all.rawValue
                    }
                }else {
                    formatRaw = BarcodeFormat.all.rawValue
                }
                
                
                
                
                let options = BarcodeScannerOptions(formats: BarcodeFormat(rawValue: formatRaw))
                do {
                    let scanner = BarcodeScanner.barcodeScanner(options: options)
                    let result = try scanner.results(in: inputImage)
                    let barCodes = handleBarcodeScanner(result)
                    if(!barCodes.isEmpty) {
                        let response = toJSON(barCodes)
                        if(response != nil){
                            results.append(TNSMLResult(
                                response!,
                                TNSMLKitDetectionType.Barcode.string()
                            ))
                        }
                    }
                } catch {}
                
            }
#endif
            
            
           
#if canImport(MLKitFaceDetection)
            if(detectorType == .Face || detectorType == .All){
                let faceDetection = json["faceDetection"] as? NSDictionary
                let options = FaceDetectorOptions()
                if(faceDetection != nil){
                    options.isTrackingEnabled = faceDetection!["faceTracking"] as? Bool ?? false
                    options.minFaceSize = CGFloat(faceDetection!["minimumFaceSize"] as? Float ?? 0.1)
                    options.performanceMode = (faceDetection!["detectionMode"] as? String ?? "fast")  == "accurate" ? .accurate : .fast
                    
                    
                    options.landmarkMode = (faceDetection!["landmarkMode"] as? String ?? "all")  == "none" ? .none : .all
                    
                    options.contourMode = (faceDetection!["contourMode"] as? String ?? "all")  == "none" ? .none : .all
                    
                    options.classificationMode = (faceDetection!["classificationMode"] as? String ?? "all")  == "none" ? .none : .all
                    
                }else {
                    options.isTrackingEnabled = false
                    options.minFaceSize = CGFloat(0.1)
                    options.performanceMode = .fast
                    options.classificationMode = .all
                    options.landmarkMode = .all
                    options.contourMode = .all
                }
                
                
                
                
                let faceDetector = FaceDetector.faceDetector(options: options)
                do {
                    let result = try faceDetector.results(in: inputImage)
                    let faces = handleFaceDetection(result)
                    
                    if(!faces.isEmpty) {
                        let response = toJSON(faces)
                        if response != nil {
                            results.append(TNSMLResult(
                                response!,
                                TNSMLKitDetectionType.Face.string()
                            ))
                        }
                    }
                } catch {}
            }
#endif
            
            
            
#if canImport(MLKitPoseDetection)
            if(detectorType == .Pose || detectorType == .All){
                let options = PoseDetectorOptions()
                options.detectorMode = .singleImage
                let poseDetector = PoseDetector.poseDetector(options: options)
                do {
                    let result = try poseDetector.results(in: inputImage)
                    let poses = handlePoseDetection(result)
                    
                    if(!poses.isEmpty) {
                        let response = toJSON(poses)
                        if response != nil {
                            results.append(TNSMLResult(
                                response!,
                                TNSMLKitDetectionType.Pose.string()
                            ))
                        }
                    }
                } catch {}
            }
#endif
            
            
            
#if canImport(MLKitImageLabeling)
            if(detectorType == .Image || detectorType == .All){
                let options = ImageLabelerOptions()
                
                let imageLabeling = json["imageLabeling"] as? NSDictionary
                
                if(imageLabeling != nil){
                    options.confidenceThreshold = (imageLabeling!["confidenceThreshold"] as? Float ?? 0.5) as NSNumber
                }else {
                    options.confidenceThreshold = 0.5
                }
                
                let imageLabeler = ImageLabeler.imageLabeler(options: options)
                do {
                    let result = try imageLabeler.results(in: inputImage)
                    let labels = handleImageLabeling(result)
                    
                    if(!labels.isEmpty) {
                        let response = toJSON(labels)
                        if response != nil {
                            results.append(TNSMLResult(
                                response!,
                                TNSMLKitDetectionType.Image.string()
                            ))
                        }
                    }
                } catch {}
            }
#endif
            
            
            
#if canImport(MLKitObjectDetection)
            if(detectorType == .Object || detectorType == .All){
                let options = ObjectDetectorOptions()
                
                
                let objectDetection = json["objectDetection"] as? NSDictionary
                
                if(objectDetection != nil){
                    options.shouldEnableMultipleObjects = objectDetection!["multiple"] as? Bool ?? false
                    options.shouldEnableClassification = objectDetection!["classification"] as? Bool ?? false
                    
                }else {
                    options.shouldEnableMultipleObjects = false
                    options.shouldEnableClassification = false
                }
                
                
                let objectDetector = ObjectDetector.objectDetector(options: options)
                do {
                    let result = try objectDetector.results(in: inputImage)
                    let objects = handleObjectDetection(result)
                    
                    if(!objects.isEmpty) {
                        let response = toJSON(objects)
                        results.append(TNSMLResult(
                            response!,
                            TNSMLKitDetectionType.Object.string()
                        ))
                    }
                } catch {}
            }
#endif
            
            
            
            
#if canImport(MLKitTextRecognition)
            if(detectorType == .Text || detectorType == .All){
                let textRecognizer = TextRecognizer.textRecognizer(options: TextRecognizerOptions())
                do {
                    let result = try textRecognizer.results(in: inputImage)
                    let texts = handleTextRecognition(result)
                    
                    if(!texts.isEmpty) {
                        let response = toJSON(texts)
                        if response != nil {
                            results.append(TNSMLResult(
                                response!,
                                TNSMLKitDetectionType.Text.string()
                            ))
                        }
                    }
                } catch {}
            }
#endif
            
            
#if canImport(MLKitSegmentationSelfie)
            if(detectorType == .Selfie || detectorType == .All){
                let options = SelfieSegmenterOptions()
                options.segmenterMode = .singleImage
                let selfieSegmentation = json["selfieSegmentation"] as? NSDictionary
                
                if(selfieSegmentation != nil){
                    options.shouldEnableRawSizeMask = selfieSegmentation!["enableRawSizeMask"] as? Bool ?? false
                   
                }else {
                    options.shouldEnableRawSizeMask = false
                }
                
                let selfieSegmentor = Segmenter.segmenter(options: options)
                do {
                    let mask = try selfieSegmentor.results(in: inputImage)
                    let maskWidth = CVPixelBufferGetWidth(mask.buffer)
                    let maskHeight = CVPixelBufferGetHeight(mask.buffer)

                    CVPixelBufferLockBaseAddress(mask.buffer, CVPixelBufferLockFlags.readOnly)
                    let maskBytesPerRow = CVPixelBufferGetBytesPerRow(mask.buffer)
                    let maskAddress =
                        CVPixelBufferGetBaseAddress(mask.buffer)!.bindMemory(
                            to: Float32.self, capacity: maskBytesPerRow * maskHeight)
                    let data = Data(bytes: maskAddress, count: maskBytesPerRow * maskHeight)
                    var ret: [String: Any] = [:]
                    ret["width"] = maskWidth
                    ret["height"] = maskHeight
                    ret["data"] = data
                    results.append(TNSMLResult(
                        ret,
                        TNSMLKitDetectionType.Selfie.string()
                    ))
                    
                }catch {}
            }
#endif
            
            
            DispatchQueue.main.async {
                callback(results)
            }
            
        }
    }
    
    
    
    private static func toJSON<T: Encodable>(_ value: T)-> String?{
        do{
            let json = try encoder.encode(value)
            return String(data: json, encoding: .utf8) ?? nil
        }catch{
            return nil
        }
    }
    
    
    private static func isMLSupported() -> Bool{
        var supported = false
#if canImport(MLKitBarcodeScanning)
        supported = true
#endif
        
#if canImport(MLKitFaceDetection)
        supported = true
#endif
        
#if canImport(MLKitTextRecognition)
        supported = true
#endif
        
#if canImport(MLKitDigitalInkRecognition)
        supported = true
#endif
        
#if canImport(MLKitImageLabeling)
        supported = true
#endif
        
#if canImport(MLKitObjectDetection)
        supported = true
#endif
        
#if canImport(MLKitPoseDetection)
        supported = true
#endif
        
#if canImport(MLKitSegmentationSelfie)
        supported = true
#endif
        
        return supported
    }
}
