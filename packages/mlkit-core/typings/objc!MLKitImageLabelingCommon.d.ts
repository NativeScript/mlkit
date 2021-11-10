
declare class MLKCommonImageLabelerOptions extends NSObject {

	static alloc(): MLKCommonImageLabelerOptions; // inherited from NSObject

	static new(): MLKCommonImageLabelerOptions; // inherited from NSObject

	confidenceThreshold: number;
}

declare class MLKImageLabel extends NSObject {

	static alloc(): MLKImageLabel; // inherited from NSObject

	static new(): MLKImageLabel; // inherited from NSObject

	readonly confidence: number;

	readonly index: number;

	readonly text: string;
}

declare class MLKImageLabeler extends NSObject {

	static alloc(): MLKImageLabeler; // inherited from NSObject

	static imageLabelerWithOptions(options: MLKCommonImageLabelerOptions): MLKImageLabeler;

	static new(): MLKImageLabeler; // inherited from NSObject

	processImageCompletion(image: MLKCompatibleImage, completion: (p1: NSArray<MLKImageLabel>, p2: NSError) => void): void;

	resultsInImageError(image: MLKCompatibleImage): NSArray<MLKImageLabel>;
}
