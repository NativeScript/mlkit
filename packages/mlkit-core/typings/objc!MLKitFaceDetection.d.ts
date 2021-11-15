
declare class MLKFace extends NSObject {

	static alloc(): MLKFace; // inherited from NSObject

	static new(): MLKFace; // inherited from NSObject

	readonly contours: NSArray<MLKFaceContour>;

	readonly frame: CGRect;

	readonly hasHeadEulerAngleX: boolean;

	readonly hasHeadEulerAngleY: boolean;

	readonly hasHeadEulerAngleZ: boolean;

	readonly hasLeftEyeOpenProbability: boolean;

	readonly hasRightEyeOpenProbability: boolean;

	readonly hasSmilingProbability: boolean;

	readonly hasTrackingID: boolean;

	readonly headEulerAngleX: number;

	readonly headEulerAngleY: number;

	readonly headEulerAngleZ: number;

	readonly landmarks: NSArray<MLKFaceLandmark>;

	readonly leftEyeOpenProbability: number;

	readonly rightEyeOpenProbability: number;

	readonly smilingProbability: number;

	readonly trackingID: number;

	contourOfType(type: string): MLKFaceContour;

	landmarkOfType(type: string): MLKFaceLandmark;
}

declare class MLKFaceContour extends NSObject {

	static alloc(): MLKFaceContour; // inherited from NSObject

	static new(): MLKFaceContour; // inherited from NSObject

	readonly points: NSArray<MLKVisionPoint>;

	readonly type: string;
}

declare var MLKFaceContourTypeFace: string;

declare var MLKFaceContourTypeLeftCheek: string;

declare var MLKFaceContourTypeLeftEye: string;

declare var MLKFaceContourTypeLeftEyebrowBottom: string;

declare var MLKFaceContourTypeLeftEyebrowTop: string;

declare var MLKFaceContourTypeLowerLipBottom: string;

declare var MLKFaceContourTypeLowerLipTop: string;

declare var MLKFaceContourTypeNoseBottom: string;

declare var MLKFaceContourTypeNoseBridge: string;

declare var MLKFaceContourTypeRightCheek: string;

declare var MLKFaceContourTypeRightEye: string;

declare var MLKFaceContourTypeRightEyebrowBottom: string;

declare var MLKFaceContourTypeRightEyebrowTop: string;

declare var MLKFaceContourTypeUpperLipBottom: string;

declare var MLKFaceContourTypeUpperLipTop: string;

declare class MLKFaceDetector extends NSObject {

	static alloc(): MLKFaceDetector; // inherited from NSObject

	static faceDetector(): MLKFaceDetector;

	static faceDetectorWithOptions(options: MLKFaceDetectorOptions): MLKFaceDetector;

	static new(): MLKFaceDetector; // inherited from NSObject

	processImageCompletion(image: MLKCompatibleImage, completion: (p1: NSArray<MLKFace>, p2: NSError) => void): void;

	resultsInImageError(image: MLKCompatibleImage): NSArray<MLKFace>;
}

declare var MLKFaceDetectorClassificationModeAll: number;

declare var MLKFaceDetectorClassificationModeNone: number;

declare var MLKFaceDetectorContourModeAll: number;

declare var MLKFaceDetectorContourModeNone: number;

declare var MLKFaceDetectorLandmarkModeAll: number;

declare var MLKFaceDetectorLandmarkModeNone: number;

declare class MLKFaceDetectorOptions extends NSObject {

	static alloc(): MLKFaceDetectorOptions; // inherited from NSObject

	static new(): MLKFaceDetectorOptions; // inherited from NSObject

	classificationMode: number;

	contourMode: number;

	landmarkMode: number;

	minFaceSize: number;

	performanceMode: number;

	trackingEnabled: boolean;
}

declare var MLKFaceDetectorPerformanceModeAccurate: number;

declare var MLKFaceDetectorPerformanceModeFast: number;

declare class MLKFaceLandmark extends NSObject {

	static alloc(): MLKFaceLandmark; // inherited from NSObject

	static new(): MLKFaceLandmark; // inherited from NSObject

	readonly position: MLKVisionPoint;

	readonly type: string;
}

declare var MLKFaceLandmarkTypeLeftCheek: string;

declare var MLKFaceLandmarkTypeLeftEar: string;

declare var MLKFaceLandmarkTypeLeftEye: string;

declare var MLKFaceLandmarkTypeMouthBottom: string;

declare var MLKFaceLandmarkTypeMouthLeft: string;

declare var MLKFaceLandmarkTypeMouthRight: string;

declare var MLKFaceLandmarkTypeNoseBase: string;

declare var MLKFaceLandmarkTypeRightCheek: string;

declare var MLKFaceLandmarkTypeRightEar: string;

declare var MLKFaceLandmarkTypeRightEye: string;
