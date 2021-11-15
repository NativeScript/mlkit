import Foundation

#if canImport(MLKitFaceDetection)
import MLKitFaceDetection

struct TNSFaceDetectionResult: Codable {
    var leftEyeOpenProbability: Double
    var rightEyeOpenProbability: Double
    var smilingProbability: Double
    var bounds: TNSBounds
    var headEulerAngleX: Double
    var headEulerAngleY: Double
    var headEulerAngleZ: Double
}



class TNSFaceDetection: NSObject {
    
    static func createFaceDetectionResult(_  faces: [Face]) -> [TNSFaceDetectionResult] {
        var results: [TNSFaceDetectionResult] = []
        for face in faces {
            
            let result = TNSFaceDetectionResult(leftEyeOpenProbability: Double(face.leftEyeOpenProbability), rightEyeOpenProbability: Double(face.rightEyeOpenProbability), smilingProbability: Double(face.smilingProbability), bounds: createBounds(face.frame), headEulerAngleX: Double(face.headEulerAngleX), headEulerAngleY: Double(face.headEulerAngleY), headEulerAngleZ: Double(face.headEulerAngleZ))
            results.append(result)
        }
        return results
    }
}

#endif
