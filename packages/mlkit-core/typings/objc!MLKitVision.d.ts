
interface MLKCompatibleImage extends NSObjectProtocol {
}
declare var MLKCompatibleImage: {

	prototype: MLKCompatibleImage;
};

declare class MLKVision3DPoint extends MLKVisionPoint {

	static alloc(): MLKVision3DPoint; // inherited from NSObject

	static new(): MLKVision3DPoint; // inherited from NSObject

	readonly z: number;
}

declare class MLKVisionImage extends NSObject implements MLKCompatibleImage {

	static alloc(): MLKVisionImage; // inherited from NSObject

	static new(): MLKVisionImage; // inherited from NSObject

	orientation: UIImageOrientation;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { buffer: any; });

	constructor(o: { image: UIImage; });

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	initWithBuffer(sampleBuffer: any): this;

	initWithImage(image: UIImage): this;

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

declare class MLKVisionPoint extends NSObject {

	static alloc(): MLKVisionPoint; // inherited from NSObject

	static new(): MLKVisionPoint; // inherited from NSObject

	readonly x: number;

	readonly y: number;
}
