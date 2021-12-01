
declare class MLKCommonSegmenterOptions extends NSObject {

	static alloc(): MLKCommonSegmenterOptions; // inherited from NSObject

	static new(): MLKCommonSegmenterOptions; // inherited from NSObject

	segmenterMode: number;

	shouldEnableRawSizeMask: boolean;
}

declare class MLKSegmentationMask extends NSObject {

	static alloc(): MLKSegmentationMask; // inherited from NSObject

	static new(): MLKSegmentationMask; // inherited from NSObject

	readonly buffer: any;
}

declare class MLKSegmenter extends NSObject {

	static alloc(): MLKSegmenter; // inherited from NSObject

	static new(): MLKSegmenter; // inherited from NSObject

	static segmenterWithOptions(options: MLKCommonSegmenterOptions): MLKSegmenter;

	processImageCompletion(image: MLKCompatibleImage, completion: (p1: MLKSegmentationMask, p2: NSError) => void): void;

	resultsInImageError(image: MLKCompatibleImage): MLKSegmentationMask;
}

declare var MLKSegmenterModeSingleImage: number;

declare var MLKSegmenterModeStream: number;
