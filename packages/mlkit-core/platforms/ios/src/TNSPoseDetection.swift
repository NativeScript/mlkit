import Foundation
#if canImport(MLKitPoseDetection)
import MLKitPoseDetection


func getPoseType(_ type: PoseLandmarkType) -> String {
    switch (type) {
    case PoseLandmarkType.leftAnkle:
            return "leftAnkle"
        case PoseLandmarkType.leftEar:
            return "leftEar"
        case PoseLandmarkType.leftElbow:
            return "leftElbow"
        case PoseLandmarkType.leftEye:
            return "leftEye"
        case PoseLandmarkType.leftEyeInner:
            return "leftEyeInner"
        case PoseLandmarkType.leftEyeOuter:
            return "leftEyeOuter"
        case PoseLandmarkType.leftHeel:
            return "leftHeel"
        case PoseLandmarkType.leftHip:
            return "leftHip"
        case PoseLandmarkType.leftIndexFinger:
            return "leftIndex"
        case PoseLandmarkType.leftKnee:
            return "leftKnee"
        case PoseLandmarkType.leftPinkyFinger:
            return "leftPinky"
        case PoseLandmarkType.leftShoulder:
            return "leftShoulder"
        case PoseLandmarkType.leftThumb:
            return "leftThumb"
        case PoseLandmarkType.leftToe:
            return "leftToe"
        case PoseLandmarkType.leftWrist:
            return "leftWrist"
        case PoseLandmarkType.mouthLeft:
            return "mouthLeft"
        case PoseLandmarkType.mouthRight:
            return "mouthRight"
        case PoseLandmarkType.nose:
            return "nose"
        case PoseLandmarkType.rightAnkle:
            return "rightAnkle"
        case PoseLandmarkType.rightEar:
            return "rightEar"
        case PoseLandmarkType.rightElbow:
            return "rightElbow"
        case PoseLandmarkType.rightEye:
            return "rightEye"
        case PoseLandmarkType.rightEyeInner:
            return "rightEyeInner"
        case PoseLandmarkType.rightEyeOuter:
            return "rightEyeOuter"
        case PoseLandmarkType.rightHeel:
            return "rightHeel"
        case PoseLandmarkType.rightHip:
            return "rightHip"
        case PoseLandmarkType.rightIndexFinger:
            return "rightIndex"
        case PoseLandmarkType.rightKnee:
            return "rightKnee"
        case PoseLandmarkType.rightPinkyFinger:
            return "rightPinky"
        case PoseLandmarkType.rightShoulder:
            return "rightShoulder"
        case PoseLandmarkType.rightThumb:
            return "rightThumb"
        case PoseLandmarkType.rightToe:
            return "rightToe"
        case PoseLandmarkType.rightWrist:
            return "rightWrist"
        default:
            return "unknown"
    }
}

struct TNSPoseLandMarkPosition: Codable {
    var x: Double
    var y: Double
    var z: Double
}

struct TNSPoseLandMark:Codable {
    var inFrameLikelihood: Double
    var position: TNSPoseLandMarkPosition
    var type: String?
}

struct TNSPoseDetectionResult: Codable {
    var landmarks: [TNSPoseLandMark]
}

class TNSPoseDetection: NSObject {
    static func createPoseDetection(_ poses: [Pose]) -> [TNSPoseDetectionResult]{
        var result:[TNSPoseDetectionResult] = []
        for pose in poses {
            var landmarks: [TNSPoseLandMark] = []
            for landmark in pose.landmarks {
                landmarks.append(
                    TNSPoseLandMark(inFrameLikelihood: Double(landmark.inFrameLikelihood), position: TNSPoseLandMarkPosition(x: landmark.position.x, y: landmark.position.y, z: landmark.position.z), type: getPoseType(landmark.type))
                )
            }
            result.append(TNSPoseDetectionResult(landmarks: landmarks))
        }
        
        return result
    }
}
#endif
