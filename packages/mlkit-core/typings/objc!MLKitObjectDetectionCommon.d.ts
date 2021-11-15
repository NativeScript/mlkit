
declare class MLKCommonObjectDetectorOptions extends NSObject {

	static alloc(): MLKCommonObjectDetectorOptions; // inherited from NSObject

	static new(): MLKCommonObjectDetectorOptions; // inherited from NSObject

	detectorMode: number;

	shouldEnableClassification: boolean;

	shouldEnableMultipleObjects: boolean;
}

declare class MLKObject extends NSObject {

	static alloc(): MLKObject; // inherited from NSObject

	static new(): MLKObject; // inherited from NSObject

	readonly frame: CGRect;

	readonly labels: NSArray<MLKObjectLabel>;

	readonly trackingID: number;
}

declare class MLKObjectDetector extends NSObject {

	static alloc(): MLKObjectDetector; // inherited from NSObject

	static new(): MLKObjectDetector; // inherited from NSObject

	static objectDetectorWithOptions(options: MLKCommonObjectDetectorOptions): MLKObjectDetector;

	processImageCompletion(image: MLKCompatibleImage, completion: (p1: NSArray<MLKObject>, p2: NSError) => void): void;

	resultsInImageError(image: MLKCompatibleImage): NSArray<MLKObject>;
}

declare var MLKObjectDetectorModeSingleImage: number;

declare var MLKObjectDetectorModeStream: number;

declare class MLKObjectLabel extends NSObject {

	static alloc(): MLKObjectLabel; // inherited from NSObject

	static new(): MLKObjectLabel; // inherited from NSObject

	readonly confidence: number;

	readonly index: number;

	readonly text: string;
}
