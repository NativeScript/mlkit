
declare class TNSBarcodeScanner extends NSObject {

	static alloc(): TNSBarcodeScanner; // inherited from NSObject

	static new(): TNSBarcodeScanner; // inherited from NSObject
}

declare class TNSFaceDetection extends NSObject {

	static alloc(): TNSFaceDetection; // inherited from NSObject

	static new(): TNSFaceDetection; // inherited from NSObject
}

declare class TNSImageLabeling extends NSObject {

	static alloc(): TNSImageLabeling; // inherited from NSObject

	static new(): TNSImageLabeling; // inherited from NSObject
}

declare class TNSML extends NSObject {

	static alloc(): TNSML; // inherited from NSObject

	static new(): TNSML; // inherited from NSObject

	static processImage(image: UIImage, json: NSDictionary<any, any>, callback: (p1: any) => void): void;
}

declare const enum TNSMLKitDetectionType {

	Barcode = 0,

	DigitalInk = 1,

	Face = 2,

	Image = 3,

	Object = 4,

	Pose = 5,

	Text = 6,

	All = 7,

	Selfie = 8,

	None = 9
}

declare class TNSMLKitHelper extends NSObject implements AVCaptureVideoDataOutputSampleBufferDelegate {

	static alloc(): TNSMLKitHelper; // inherited from NSObject

	static new(): TNSMLKitHelper; // inherited from NSObject

	barcodeScanner: MLKBarcodeScanner;

	cameraPosition: TNSMLKitHelperCameraPosition;

	detectorType: TNSMLKitDetectionType;

	digitalInkRecognizer: MLKDigitalInkRecognizer;

	faceDetector: MLKFaceDetector;

	imageLabeler: MLKImageLabeler;

	objectDetector: MLKObjectDetector;

	onError: (p1: NSError) => void;

	onScanCallback: (p1: any, p2: string) => void;

	readonly output: AVCaptureVideoDataOutput;

	pause: boolean;

	poseDetector: MLKPoseDetector;

	readonly queue: NSObject;

	selfieSegmentor: MLKSegmenter;

	readonly session: AVCaptureSession;

	readonly sessionQueue: NSObject;

	textRecognizer: MLKTextRecognizer;

	torchMode: TNSMLKitTorchMode;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	captureOutputDidDropSampleBufferFromConnection(output: AVCaptureOutput, sampleBuffer: any, connection: AVCaptureConnection): void;

	captureOutputDidOutputSampleBufferFromConnection(output: AVCaptureOutput, sampleBuffer: any, connection: AVCaptureConnection): void;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	getOrientationWithDeviceOrientationCameraPosition(deviceOrientation: UIDeviceOrientation, cameraPosition: AVCaptureDevicePosition): UIImageOrientation;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	openCamera(): void;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	startPreview(): void;

	stopPreview(): void;

	toggleCamera(): void;
}

declare const enum TNSMLKitHelperCameraPosition {

	Front = 0,

	Back = 1
}

declare const enum TNSMLKitTorchMode {

	Off = 0,

	On = 1,

	Auto = 2
}

declare class TNSMLResult extends NSObject {

	static alloc(): TNSMLResult; // inherited from NSObject

	static new(): TNSMLResult; // inherited from NSObject

	result: any;

	type: string;

	constructor();

	init(result: any, type: string): this;
}

declare class TNSObjectDetection extends NSObject {

	static alloc(): TNSObjectDetection; // inherited from NSObject

	static new(): TNSObjectDetection; // inherited from NSObject
}

declare class TNSPoseDetection extends NSObject {

	static alloc(): TNSPoseDetection; // inherited from NSObject

	static new(): TNSPoseDetection; // inherited from NSObject
}

declare class TNSTextRecognizer extends NSObject {

	static alloc(): TNSTextRecognizer; // inherited from NSObject

	static new(): TNSTextRecognizer; // inherited from NSObject
}
