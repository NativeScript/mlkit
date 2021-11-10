
declare class MLKCommonTextRecognizerOptions extends NSObject {

	static alloc(): MLKCommonTextRecognizerOptions; // inherited from NSObject

	static new(): MLKCommonTextRecognizerOptions; // inherited from NSObject
}

declare class MLKText extends NSObject {

	static alloc(): MLKText; // inherited from NSObject

	static new(): MLKText; // inherited from NSObject

	readonly blocks: NSArray<MLKTextBlock>;

	readonly text: string;
}

declare class MLKTextBlock extends NSObject {

	static alloc(): MLKTextBlock; // inherited from NSObject

	static new(): MLKTextBlock; // inherited from NSObject

	readonly cornerPoints: NSArray<NSValue>;

	readonly frame: CGRect;

	readonly lines: NSArray<MLKTextLine>;

	readonly recognizedLanguages: NSArray<MLKTextRecognizedLanguage>;

	readonly text: string;
}

declare class MLKTextElement extends NSObject {

	static alloc(): MLKTextElement; // inherited from NSObject

	static new(): MLKTextElement; // inherited from NSObject

	readonly cornerPoints: NSArray<NSValue>;

	readonly frame: CGRect;

	readonly text: string;
}

declare class MLKTextLine extends NSObject {

	static alloc(): MLKTextLine; // inherited from NSObject

	static new(): MLKTextLine; // inherited from NSObject

	readonly cornerPoints: NSArray<NSValue>;

	readonly elements: NSArray<MLKTextElement>;

	readonly frame: CGRect;

	readonly recognizedLanguages: NSArray<MLKTextRecognizedLanguage>;

	readonly text: string;
}

declare class MLKTextRecognizedLanguage extends NSObject {

	static alloc(): MLKTextRecognizedLanguage; // inherited from NSObject

	static new(): MLKTextRecognizedLanguage; // inherited from NSObject

	readonly languageCode: string;
}

declare class MLKTextRecognizer extends NSObject {

	static alloc(): MLKTextRecognizer; // inherited from NSObject

	static new(): MLKTextRecognizer; // inherited from NSObject

	static textRecognizer(): MLKTextRecognizer;

	static textRecognizerWithOptions(options: MLKCommonTextRecognizerOptions): MLKTextRecognizer;

	processImageCompletion(image: MLKCompatibleImage, completion: (p1: MLKText, p2: NSError) => void): void;

	resultsInImageError(image: MLKCompatibleImage): MLKText;
}
