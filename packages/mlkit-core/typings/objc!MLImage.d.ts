
declare class GMLImage extends NSObject implements MLKCompatibleImage {

	static alloc(): GMLImage; // inherited from NSObject

	static new(): GMLImage; // inherited from NSObject

	readonly height: number;

	readonly image: UIImage;

	readonly imageSourceType: number;

	orientation: UIImageOrientation;

	readonly pixelBuffer: any;

	readonly sampleBuffer: any;

	readonly width: number;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { image: UIImage; });

	constructor(o: { pixelBuffer: any; });

	constructor(o: { sampleBuffer: any; });

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	initWithImage(image: UIImage): this;

	initWithPixelBuffer(pixelBuffer: any): this;

	initWithSampleBuffer(sampleBuffer: any): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare var GMLImageSourceTypeImage: number;

declare var GMLImageSourceTypePixelBuffer: number;

declare var GMLImageSourceTypeSampleBuffer: number;
