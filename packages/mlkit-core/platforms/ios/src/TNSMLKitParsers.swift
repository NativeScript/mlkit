import Foundation


import Foundation
#if canImport(MLKitBarcodeScanning)
import MLKitBarcodeScanning

func handleBarcodeScanner(_ barcode: [Barcode]) -> [TNSBarcodeScannerResult]{
    var result: [TNSBarcodeScannerResult] = []
    for value in barcode {
        result.append(
            TNSBarcodeScanner.createBarcodeScannerResult(value)
        )
    }
    return result
}
#endif



#if canImport(MLKitFaceDetection)
import MLKitFaceDetection
func handleFaceDetection(_ faces: [Face]) -> [TNSFaceDetectionResult]{
    return TNSFaceDetection.createFaceDetectionResult(faces)
}
#endif


#if canImport(MLKitTextRecognition)
import MLKitTextRecognition
func handleTextRecognition(_ text: Text) -> [TNSTextRecognizerResult]{
    return TNSTextRecognizer.createTextRecognizer(text)
}
#endif


#if canImport(MLKitImageLabeling)
import MLKitImageLabeling
func handleImageLabeling(_ labeling: [ImageLabel]) -> [TNSImageLabelingResult]{
    return TNSImageLabeling.createImageLabeling(labeling)
}
#endif


#if canImport(MLKitObjectDetection)
import MLKitObjectDetection
func handleObjectDetection(_ objects: [Object]) -> [TNSObjectDetectionResult]{
    return TNSObjectDetection.createObjectDetection(objects)
}
#endif



#if canImport(MLKitPoseDetection)
import MLKitPoseDetection
func handlePoseDetection(_ poses: [Pose]) -> [TNSPoseDetectionResult]{
    return TNSPoseDetection.createPoseDetection(poses)
}
#endif
