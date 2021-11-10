
declare class MLKCommonPoseDetectorOptions extends NSObject {

	static alloc(): MLKCommonPoseDetectorOptions; // inherited from NSObject

	static new(): MLKCommonPoseDetectorOptions; // inherited from NSObject

	detectorMode: number;
}

declare class MLKPose extends NSObject {

	static alloc(): MLKPose; // inherited from NSObject

	static new(): MLKPose; // inherited from NSObject

	readonly landmarks: NSArray<MLKPoseLandmark>;

	landmarkOfType(type: string): MLKPoseLandmark;
}

declare class MLKPoseDetector extends NSObject {

	static alloc(): MLKPoseDetector; // inherited from NSObject

	static new(): MLKPoseDetector; // inherited from NSObject

	static poseDetectorWithOptions(options: MLKCommonPoseDetectorOptions): MLKPoseDetector;

	processImageCompletion(image: MLKCompatibleImage, completion: (p1: NSArray<MLKPose>, p2: NSError) => void): void;

	resultsInImageError(image: MLKCompatibleImage): NSArray<MLKPose>;
}

declare var MLKPoseDetectorModeSingleImage: number;

declare var MLKPoseDetectorModeStream: number;

declare class MLKPoseLandmark extends NSObject {

	static alloc(): MLKPoseLandmark; // inherited from NSObject

	static new(): MLKPoseLandmark; // inherited from NSObject

	readonly inFrameLikelihood: number;

	readonly position: MLKVision3DPoint;

	readonly type: string;
}

declare var MLKPoseLandmarkTypeLeftAnkle: string;

declare var MLKPoseLandmarkTypeLeftEar: string;

declare var MLKPoseLandmarkTypeLeftElbow: string;

declare var MLKPoseLandmarkTypeLeftEye: string;

declare var MLKPoseLandmarkTypeLeftEyeInner: string;

declare var MLKPoseLandmarkTypeLeftEyeOuter: string;

declare var MLKPoseLandmarkTypeLeftHeel: string;

declare var MLKPoseLandmarkTypeLeftHip: string;

declare var MLKPoseLandmarkTypeLeftIndexFinger: string;

declare var MLKPoseLandmarkTypeLeftKnee: string;

declare var MLKPoseLandmarkTypeLeftPinkyFinger: string;

declare var MLKPoseLandmarkTypeLeftShoulder: string;

declare var MLKPoseLandmarkTypeLeftThumb: string;

declare var MLKPoseLandmarkTypeLeftToe: string;

declare var MLKPoseLandmarkTypeLeftWrist: string;

declare var MLKPoseLandmarkTypeMouthLeft: string;

declare var MLKPoseLandmarkTypeMouthRight: string;

declare var MLKPoseLandmarkTypeNose: string;

declare var MLKPoseLandmarkTypeRightAnkle: string;

declare var MLKPoseLandmarkTypeRightEar: string;

declare var MLKPoseLandmarkTypeRightElbow: string;

declare var MLKPoseLandmarkTypeRightEye: string;

declare var MLKPoseLandmarkTypeRightEyeInner: string;

declare var MLKPoseLandmarkTypeRightEyeOuter: string;

declare var MLKPoseLandmarkTypeRightHeel: string;

declare var MLKPoseLandmarkTypeRightHip: string;

declare var MLKPoseLandmarkTypeRightIndexFinger: string;

declare var MLKPoseLandmarkTypeRightKnee: string;

declare var MLKPoseLandmarkTypeRightPinkyFinger: string;

declare var MLKPoseLandmarkTypeRightShoulder: string;

declare var MLKPoseLandmarkTypeRightThumb: string;

declare var MLKPoseLandmarkTypeRightToe: string;

declare var MLKPoseLandmarkTypeRightWrist: string;
