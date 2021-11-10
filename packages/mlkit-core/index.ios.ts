import { Utils } from "@nativescript/core";
import { BarcodeFormats, barcodeFormatsProperty, CameraPosition, cameraPositionProperty, DetectionType, MLKitViewBase } from "./common";
import '@nativescript/core';
import lazy from "@nativescript/core/utils/lazy";


const BARCODE_SCANNER_SUPPORTED = lazy(() => typeof MLKBarcodeScanner);
const TEXT_RECOGNITION_SUPPORTED = lazy(() => typeof MLKTextRecognizer);
const FACE_DETECTION_SUPPORTED = lazy(() => typeof MLKFaceDetector);
const IMAGE_LABELING_SUPPORTED = lazy(() => typeof MLKImageLabeler);
const OBJECT_DETECTION_SUPPORTED = lazy(() => typeof MLKObjectDetector);
const POSE_DETECTION_SUPPORTED = lazy(() => typeof MLKPoseDetector);



@ObjCClass(AVCaptureVideoDataOutputSampleBufferDelegate)
@NativeClass()
class AVCaptureVideoDataOutputSampleBufferDelegateImpl extends NSObject implements AVCaptureVideoDataOutputSampleBufferDelegate {
    _owner: WeakRef<MLKitView>;
    static initWithOwner(owner: WeakRef<MLKitView>): AVCaptureVideoDataOutputSampleBufferDelegateImpl {
        const delegate = <AVCaptureVideoDataOutputSampleBufferDelegateImpl>AVCaptureVideoDataOutputSampleBufferDelegateImpl.new();
        delegate._owner = owner;
        return delegate;
    }

    captureOutputDidOutputSampleBufferFromConnection(output: AVCaptureOutput, sampleBuffer: any, connection: AVCaptureConnection) {
        let detector = DetectionType.None;
        const owner = this._owner?.get?.();
        if (owner) {
            detector = owner.dectectionType;
            if (detector === DetectionType.None) {
                return;
            }
        }
    }
}


export class MLKitView extends MLKitViewBase {
    #session: AVCaptureSession;
    #device: AVCaptureDevice;
    #preview: AVCaptureVideoPreviewLayer;
    #delegate: AVCaptureVideoDataOutputSampleBufferDelegateImpl;
    #output: AVCaptureVideoDataOutput;
    #outputQueue;
    #onDetection: (data: { [key: string]: any }) => void;
    #textRecognizer: MLKTextRecognizer;
    #barcodeScanner: MLKBarcodeScanner;
    #digitalInkRecognizer: MLKDigitalInkRecognizer;
    #faceDetector: MLKFaceDetector;
    #imageLabeler: MLKImageLabeler;
    #objectDetector: MLKObjectDetector;
    #poseDetector: MLKPoseDetector;
    #barcodeScannerOptions: MLKBarcodeScannerOptions;
    #faceDetectorOptions: MLKFaceDetectorOptions;
    createNativeView() {
        return UIView.new();
    }

    initNativeView() {
        super.initNativeView();
        this.#delegate = AVCaptureVideoDataOutputSampleBufferDelegateImpl.initWithOwner(new WeakRef(this));
        this.#outputQueue = dispatch_get_global_queue(qos_class_t.QOS_CLASS_DEFAULT, 0);
    }


    [cameraPositionProperty.setNative](value: CameraPosition) {
        this.#openCamera(true);
    }

    public static isAvailable() {
        return UIImagePickerController.isSourceTypeAvailable(
            UIImagePickerControllerSourceType.Camera
        );
    }


    //@ts-ignore
    set onDetection(value) {
        this.#onDetection = value;
        const ref = new WeakRef(this);
        if (typeof MLKTextRecognizer && !this.#textRecognizer && (this.dectectionType === DetectionType.Text || this.dectectionType === DetectionType.All)) {
            this.#textRecognizer = MLKTextRecognizer.textRecognizer();
        }

        if (typeof MLKBarcodeScanner && !this.#barcodeScanner && (this.dectectionType === DetectionType.Barcode || this.dectectionType === DetectionType.All)) {
            this.#setupBarcodeScanner(this.barcodeFormats);
        }

        // TODO
        if (typeof MLKDigitalInkRecognizer && !this.#digitalInkRecognizer && (this.dectectionType === DetectionType.DigitalInk || this.dectectionType === DetectionType.All)) {
            // MLKDigitalInkRecognizer.digitalInkRecognizerWithOptions()
        }


        if (typeof MLKFaceDetector && !this.#faceDetector && (this.dectectionType === DetectionType.Face || this.dectectionType === DetectionType.All)) {
            this.#setupFaceDetector();
        }

        if (typeof MLKImageLabeler && !this.#imageLabeler && (this.dectectionType === DetectionType.Image || this.dectectionType === DetectionType.All)) {
            const opt = MLKCommonImageLabelerOptions.new();
            this.#imageLabeler = MLKImageLabeler.imageLabelerWithOptions(opt);
        }


        if (typeof MLKObjectDetector && !this.#objectDetector && (this.dectectionType === DetectionType.Object || this.dectectionType === DetectionType.All)) {
            const opts = MLKCommonObjectDetectorOptions.new();
            this.#objectDetector = MLKObjectDetector.objectDetectorWithOptions(opts);
        }

        if (typeof MLKPoseDetector && !this.#poseDetector && (this.dectectionType === DetectionType.Pose || this.dectectionType === DetectionType.All)) {
            const opts = MLKCommonPoseDetectorOptions.new();
            opts.detectorMode = MLKPoseDetectorModeStream;
            this.#poseDetector = MLKPoseDetector.poseDetectorWithOptions(opts);
        }

    }

    get onDetection() {
        return this.#onDetection;
    }

    [barcodeFormatsProperty.setNative](value: BarcodeFormats[]) {
        this.#setupBarcodeScanner(value);
    }

    #setupBarcodeScanner(value) {
        if (!BARCODE_SCANNER_SUPPORTED()) {
            return;
        }
        let formats: MLKBarcodeFormat = 0;
        if (Array.isArray(value)) {
            if (value.indexOf(BarcodeFormats.ALL)) {
                formats = MLKBarcodeFormat.All;
            } else {
                value.forEach(format => {
                    switch (format) {
                        case BarcodeFormats.AZTEC:
                            formats |= MLKBarcodeFormat.Aztec;
                            break;
                        case BarcodeFormats.CODABAR:
                            formats |= MLKBarcodeFormat.CodaBar;
                            break;
                        case BarcodeFormats.CODE_128:
                            formats |= MLKBarcodeFormat.Code128;
                            break;
                        case BarcodeFormats.CODE_39:
                            formats |= MLKBarcodeFormat.Code39;
                            break;
                        case BarcodeFormats.CODE_93:
                            formats |= MLKBarcodeFormat.Code93;
                            break;
                        case BarcodeFormats.DATA_MATRIX:
                            formats |= MLKBarcodeFormat.DataMatrix;
                            break;
                        case BarcodeFormats.EAN_13:
                            formats |= MLKBarcodeFormat.EAN13;
                            break;
                        case BarcodeFormats.EAN_8:
                            formats |= MLKBarcodeFormat.EAN8;
                            break;
                        case BarcodeFormats.ITF:
                            formats |= MLKBarcodeFormat.ITF;
                            break;
                        case BarcodeFormats.PDF417:
                            formats |= MLKBarcodeFormat.PDF417;
                            break;
                        case BarcodeFormats.QR_CODE:
                            formats |= MLKBarcodeFormat.QRCode;
                            break;
                        case BarcodeFormats.UPC_A:
                            formats |= MLKBarcodeFormat.UPCA;
                            break;
                        case BarcodeFormats.UPC_E:
                            formats |= MLKBarcodeFormat.UPCE;
                            break;
                        default:
                            formats |= MLKBarcodeFormat.All;
                            break;
                            break;
                    }
                });
            }
        }
        if (!formats) {
            formats = MLKBarcodeFormat.All;
        }

        this.#barcodeScannerOptions = MLKBarcodeScannerOptions.alloc().initWithFormats(formats);
        this.#barcodeScanner = MLKBarcodeScanner.barcodeScannerWithOptions(this.#barcodeScannerOptions);
    }

    #setupFaceDetector() {
        if (!FACE_DETECTION_SUPPORTED) {
            return;
        }

        if (!this.#faceDetectorOptions) {
            this.#faceDetectorOptions = MLKFaceDetectorOptions.new();
        }

        this.#faceDetectorOptions.performanceMode = this.faceDetectionPerformanceMode === 'accurate' ? this.#faceDetectorOptions.performanceMode = MLKFaceDetectorPerformanceModeAccurate : this.#faceDetectorOptions.performanceMode = MLKFaceDetectorPerformanceModeFast;
        this.#faceDetectorOptions.trackingEnabled = this.faceDetectionTrackingEnabled;
        this.#faceDetectorOptions.minFaceSize = this.faceDetectionMinFaceSize;
        this.#faceDetector = MLKFaceDetector.faceDetectorWithOptions(this.#faceDetectorOptions);
    }


    onLoaded() {
        super.onLoaded();
        this.startPreview();
    }

    onUnloaded() {
        this.stopPreview();
        super.onUnloaded();
    }


    #openCamera(restart = false) {
        try {
            if (this.#session && this.#session.running) {
                if (!restart) {
                    return;
                }
                this.#session.stopRunning();
            }
            this.#session = AVCaptureSession.new();
            const devices = AVCaptureDevice.devicesWithMediaType(AVMediaTypeVideo);
            const pos = this.cameraPosition === CameraPosition.BACK ? AVCaptureDevicePosition.Back : AVCaptureDevicePosition.Front;
            devices.enumerateObjectsUsingBlock((device) => {
                if (device.position === pos) {
                    this.#device = device;
                }
            });

            const input = AVCaptureDeviceInput.deviceInputWithDeviceError(this.#device);

            this.#output = AVCaptureVideoDataOutput.new();
            this.#output.alwaysDiscardsLateVideoFrames = true;

            this.#output.setSampleBufferDelegateQueue(this.#delegate, this.#outputQueue);

            if (!input) {
                this.notify({
                    eventName: 'error',
                    object: this,
                    message: 'Error trying to open camera.'
                })
                return;
            }
            this.#session.beginConfiguration();
            this.#session.sessionPreset = AVCaptureSessionPreset1280x720;
            this.#session.addInput(input);

            this.#session.addOutput(this.#output);

            this.#preview = AVCaptureVideoPreviewLayer.layerWithSession(this.#session);

            this.#session.startRunning();

            dispatch_async(dispatch_get_current_queue(), () => {
                this.#preview.videoGravity = AVLayerVideoGravityResizeAspect;
                this.#preview.frame = this.nativeView.bounds;
                this.nativeView.layer.addSublayer(this.#preview);
            });

            this.#session.commitConfiguration();

        } catch (e) {
            this.notify({
                eventName: 'error',
                object: this,
                message: e.message
            });
        }
    }


    public stopPreview(): void {
        if (this.#session.running) {
            this.#session.stopRunning();
        }
    }

    public toggleCamera(): void {
        if (this.cameraPosition === CameraPosition.BACK) {
            this.cameraPosition = CameraPosition.FRONT
        } else {
            this.cameraPosition = CameraPosition.BACK
        }
        this.#openCamera(true);
    }

    public startPreview(): void {
        this.#openCamera();
    }


    public onLayout(left: number, top: number, right: number, bottom: number) {
        if (!this.#preview) {
            dispatch_async(dispatch_get_current_queue(), () => {
                this.#preview.frame = this.nativeView.bounds;
            });
        }
    }

    public onMeasure(widthMeasureSpec: number, heightMeasureSpec: number) {
        const width = Utils.layout.getMeasureSpecSize(widthMeasureSpec);
        const height = Utils.layout.getMeasureSpecSize(heightMeasureSpec);
        this.setMeasuredDimension(width, height);
    }


    requestCameraPermission() {
        return new Promise<void>((resolve, reject) => {
            AVCaptureDevice.requestAccessForMediaTypeCompletionHandler(AVMediaTypeVideo, cameraPermissionStatus => {
                if (cameraPermissionStatus) {
                    resolve()
                } else {
                    reject();
                }
            });
        });
    }


    hasCameraPermission(): boolean {
        return AVCaptureDevice.authorizationStatusForMediaType(AVMediaTypeVideo) === AVAuthorizationStatus.Authorized
    }
}
