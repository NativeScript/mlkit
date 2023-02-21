# @nativescript/mlkit-pose-detection

## Installation

```cli
npm install @nativescript/mlkit-pose-detection
```

## Use @nativescript/mlkit-pose-detection

For an example, see [@nativescript/mlkit-core](../mlkit-core#mlkit-pose-detection).

## API

### PoseResult

```ts
interface PoseResult {
    landmarks: [PoseLandMark]
}
```
### PoseLandMark
```ts
interface PoseLandMark {
    inFrameLikelihood: number
    position: PoseLandMarkPosition
    type?: PoseType
}
```
### PoseLandMarkPosition
```ts
interface PoseLandMarkPosition {
    x: number
    y: number
    z: number
}
```
### PoseType
```ts
enum PoseType {
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
```

## License

Apache License Version 2.0
