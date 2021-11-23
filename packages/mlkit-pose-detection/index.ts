export enum PoseType {
    LeftAnkle = "leftAnkle",
    LeftEar = "leftEar",
    LeftElbow = "leftElbow",
    LeftEye = "leftEye",
    LeftEyeInner = "leftEyeInner",
    LeftEyeOuter = "leftEyeOuter",
    LeftHeel = "leftHeel",
    LeftHip = "leftHip",
    LeftIndexFinger = "leftIndex",
    LeftKnee = "leftKnee",
    LeftPinkyFinger = "leftPinky",
    LeftShoulder = "leftShoulder",
    LeftThumb = "leftThumb",
    LeftToe = "leftToe",
    LeftWrist = "leftWrist",
    MouthLeft = "mouthLeft",
    MouthRight = "mouthRight",
    Nose = "nose",
    RightAnkle = "rightAnkle",
    RightEar = "rightEar",
    RightElbow = "rightElbow",
    RightEye = "rightEye",
    RightEyeInner = "rightEyeInner",
    RightEyeOuter = "rightEyeOuter",
    RightHeel = "rightHeel",
    RightHip = "rightHip",
    RightIndexFinger = "rightIndex",
    RightKnee = "rightKnee",
    RightPinkyFinger = "rightPinky",
    RightShoulder = "rightShoulder",
    RightThumb = "rightThumb",
    RightToe = "rightToe",
    RightWrist = "rightWrist",
    Unknown = "unknown"
}

export interface PoseLandMarkPosition {
    x: number
    y: number
    z: number
}

export interface PoseLandMark {
    inFrameLikelihood: number
    position: PoseLandMarkPosition
    type?: PoseType
}

export interface PoseResult {
    landmarks: [PoseLandMark]
}