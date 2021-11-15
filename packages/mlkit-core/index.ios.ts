import { Utils } from "@nativescript/core";
import { BarcodeFormats, barcodeFormatsProperty, CameraPosition, cameraPositionProperty, DetectionType, detectionTypeProperty, faceDetectionMinFaceSizeProperty, faceDetectionPerformanceModeProperty, faceDetectionTrackingEnabledProperty, imageLabelerConfidenceThresholdProperty, MLKitViewBase, objectDetectionClassifyProperty, objectDetectionMultipleProperty, onDetectionProperty } from "./common";
import '@nativescript/core';
import lazy from "@nativescript/core/utils/lazy";


const BARCODE_SCANNER_SUPPORTED = lazy(() => typeof MLKBarcodeScanner);
const TEXT_RECOGNITION_SUPPORTED = lazy(() => typeof MLKTextRecognizer);
const FACE_DETECTION_SUPPORTED = lazy(() => typeof MLKFaceDetector);
const IMAGE_LABELING_SUPPORTED = lazy(() => typeof MLKImageLabeler);
const OBJECT_DETECTION_SUPPORTED = lazy(() => typeof MLKObjectDetector);
const POSE_DETECTION_SUPPORTED = lazy(() => typeof MLKPoseDetector);


export { BarcodeFormats, barcodeFormatsProperty, CameraPosition, cameraPositionProperty, DetectionType, faceDetectionMinFaceSizeProperty, faceDetectionPerformanceModeProperty, faceDetectionTrackingEnabledProperty, imageLabelerConfidenceThresholdProperty as imageLablerConfidenceThresholdProperty, objectDetectionClassifyProperty, objectDetectionMultipleProperty } from './common';


declare const TNSMLKitHelper, TNSMLKitHelperCameraPosition;

export class MLKitView extends MLKitViewBase {
    #device: AVCaptureDevice;
    #preview: AVCaptureVideoPreviewLayer;
    #textRecognizer: MLKTextRecognizer;
    #barcodeScanner: MLKBarcodeScanner;
    #digitalInkRecognizer: MLKDigitalInkRecognizer;
    #faceDetector: MLKFaceDetector;
    #imageLabeler: MLKImageLabeler;
    #objectDetector: MLKObjectDetector;
    #poseDetector: MLKPoseDetector;
    #barcodeScannerOptions: MLKBarcodeScannerOptions;
    #faceDetectorOptions: MLKFaceDetectorOptions;
    #imageLabelerOptions: MLKImageLabelerOptions;
    #objectDetectionOptions: MLKObjectDetectorOptions;
    #poseDetectionOptions: MLKPoseDetectorOptions;
    #mlkitHelper;

    constructor() {
        super();
        this.#mlkitHelper = TNSMLKitHelper.alloc().init();
        this.#mlkitHelper.onScanCallback = this._onScanCallback;
    }

    createNativeView() {
        const nativeView = UIView.new();
        this.#preview = AVCaptureVideoPreviewLayer.layerWithSession(this.#mlkitHelper.session);
        this.#preview.videoGravity = AVLayerVideoGravityResizeAspect;
        nativeView.layer.insertSublayerAtIndex(this.#preview, 0);
        return nativeView;
    }

    get _device() {
        return this.#device;
    }

    get _textRecognizer(): MLKTextRecognizer {
        return this.#textRecognizer;
    }

    get _barcodeScanner(): MLKBarcodeScanner {
        return this.#barcodeScanner;
    }

    get _digitalInkRecognizer(): MLKDigitalInkRecognizer {
        return this.#digitalInkRecognizer;
    }

    get _faceDetector(): MLKFaceDetector {
        return this.#faceDetector;
    }

    get _imageLabeler(): MLKImageLabeler {
        return this.#imageLabeler;
    }

    get _objectDetector(): MLKObjectDetector {
        return this.#objectDetector;
    }
    get _poseDetector(): MLKPoseDetector {
        return this.#poseDetector;
    }


    [cameraPositionProperty.setNative](value: CameraPosition) {
        switch (value) {
            case CameraPosition.FRONT:
                this.#mlkitHelper.cameraPosition = TNSMLKitHelperCameraPosition.FRONT;
                break;
            case CameraPosition.BACK:
                this.#mlkitHelper.cameraPosition = TNSMLKitHelperCameraPosition.BACK;
                break;
            default:
                break;
        }
    }

    public static isAvailable() {
        return UIImagePickerController.isSourceTypeAvailable(
            UIImagePickerControllerSourceType.Camera
        );
    }


    [detectionTypeProperty.setNative](value) {
        let type = 8 /* None */
        switch (value) {
            case DetectionType.All:
                type = 7;
                break;
            case DetectionType.Barcode:
                type = 0;
                break;
            case DetectionType.DigitalInk:
                type = 1
                break;
            case DetectionType.Face:
                type = 2
                break;
            case DetectionType.Image:
                type = 3
                break;
            case DetectionType.Object:
                type = 4
                break;
            case DetectionType.Pose:
                type = 5
                break;
            case DetectionType.Text:
                type = 6
                break;
            default:
                type = 8;
                break;
        }

        this.#mlkitHelper.detectorType = type;
    }


    _onScanCallback(result: string, type) {
        if (this.detectionType === DetectionType.None || !this.onDetection) {
            return;
        }
        try {
            const data = JSON.parse(result);
            this?.onDetection(data, type);
        } catch (e) { }
    }


    [onDetectionProperty.setNative](value) {
        if (TEXT_RECOGNITION_SUPPORTED() && !this.#textRecognizer && (this.detectionType === DetectionType.Text || this.detectionType === DetectionType.All)) {
            this.#textRecognizer = MLKTextRecognizer.textRecognizer();
            this.#mlkitHelper.textRecognizer = this.#textRecognizer;
        }

        if (typeof MLKBarcodeScanner && !this.#barcodeScanner && (this.detectionType === DetectionType.Barcode || this.detectionType === DetectionType.All)) {
            this.#setupBarcodeScanner(this.barcodeFormats);
        }

        // TODO
        if (typeof MLKDigitalInkRecognizer && !this.#digitalInkRecognizer && (this.detectionType === DetectionType.DigitalInk || this.detectionType === DetectionType.All)) {
            // MLKDigitalInkRecognizer.digitalInkRecognizerWithOptions()
        }


        if (typeof MLKFaceDetector && !this.#faceDetector && (this.detectionType === DetectionType.Face || this.detectionType === DetectionType.All)) {
            this.#setupFaceDetector();
        }

        if (typeof MLKImageLabeler && !this.#imageLabeler && (this.detectionType === DetectionType.Image || this.detectionType === DetectionType.All)) {
            this.#setImageLabeler()
        }

        if (typeof MLKObjectDetector && !this.#objectDetector && (this.detectionType === DetectionType.Object || this.detectionType === DetectionType.All)) {
            this.#setupObjectDetection();
        }

        if (typeof MLKPoseDetector && !this.#poseDetector && (this.detectionType === DetectionType.Pose || this.detectionType === DetectionType.All)) {
            this.#setPoseDetection();
        }
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
                    }
                });
            }
        }
        if (!formats) {
            formats = MLKBarcodeFormat.All;
        }

        this.#barcodeScannerOptions = MLKBarcodeScannerOptions.alloc().initWithFormats(formats);
        this.#barcodeScanner = MLKBarcodeScanner.barcodeScannerWithOptions(this.#barcodeScannerOptions);
        this.#mlkitHelper.barcodeScanner = this.#barcodeScanner;
    }

    [faceDetectionTrackingEnabledProperty.setNative](value) {
        this.#setupFaceDetector();
    }

    [faceDetectionMinFaceSizeProperty.setNative](value) {
        this.#setupFaceDetector();
    }

    [faceDetectionPerformanceModeProperty.setNative](value) {
        this.#setupFaceDetector();
    }

    #setupFaceDetector() {
        if (!FACE_DETECTION_SUPPORTED) {
            return;
        }

        if (!this.#faceDetectorOptions) {
            this.#faceDetectorOptions = MLKFaceDetectorOptions.new();
        }

        this.#faceDetectorOptions.landmarkMode = MLKFaceDetectorLandmarkModeAll;
        this.#faceDetectorOptions.classificationMode = MLKFaceDetectorClassificationModeAll;
        this.#faceDetectorOptions.performanceMode = this.faceDetectionPerformanceMode === 'accurate' ? this.#faceDetectorOptions.performanceMode = MLKFaceDetectorPerformanceModeAccurate : this.#faceDetectorOptions.performanceMode = MLKFaceDetectorPerformanceModeFast;
        this.#faceDetectorOptions.trackingEnabled = this.faceDetectionTrackingEnabled;
        this.#faceDetectorOptions.minFaceSize = this.faceDetectionMinFaceSize;
        this.#faceDetector = MLKFaceDetector.faceDetectorWithOptions(this.#faceDetectorOptions);
        this.#mlkitHelper.faceDetector = this.#faceDetector;
    }

    [imageLabelerConfidenceThresholdProperty.setNative](value) {
        this.#setImageLabeler();
    }

    #setImageLabeler() {
        if (!IMAGE_LABELING_SUPPORTED) {
            return;
        }
        if (!this.#imageLabelerOptions) {
            this.#imageLabelerOptions = MLKImageLabelerOptions.new();
        }
        this.#imageLabelerOptions.confidenceThreshold = this.imageLabelerConfidenceThreshold;
        this.#imageLabeler = MLKImageLabeler.imageLabelerWithOptions(this.#imageLabelerOptions);
        this.#mlkitHelper.imageLabeler = this.#imageLabeler;
    }


    [objectDetectionClassifyProperty.setNative](value) {
        this.#setupObjectDetection();
    }

    [objectDetectionMultipleProperty.setNative](value) {
        this.#setupObjectDetection();
    }

    #setupObjectDetection() {
        if (!OBJECT_DETECTION_SUPPORTED) {
            return;
        }
        if (!this.#objectDetectionOptions) {
            this.#objectDetectionOptions = MLKObjectDetectorOptions.new();
        }

        this.#objectDetectionOptions.detectorMode = MLKObjectDetectorModeStream;

        this.#objectDetectionOptions.shouldEnableMultipleObjects = this.objectDetectionMultiple;
        this.#objectDetectionOptions.shouldEnableClassification = this.objectDetectionClassify;

        this.#objectDetector = MLKObjectDetector.objectDetectorWithOptions(this.#objectDetectionOptions);
        this.#mlkitHelper.objectDetector = this.#objectDetector;
    }


    #setPoseDetection() {
        if (!POSE_DETECTION_SUPPORTED) {
            return;
        }
        if (!this.#poseDetectionOptions) {
            this.#poseDetectionOptions = MLKPoseDetectorOptions.new();
        }

        this.#poseDetectionOptions.detectorMode = 1; // MLKPoseDetectorModeStream;

        this.#poseDetector = MLKPoseDetector.poseDetectorWithOptions(this.#poseDetectionOptions);

        this.#mlkitHelper.poseDetector = this.#poseDetector;
    }

    onLoaded() {
        super.onLoaded();
        this.startPreview();
    }

    onUnloaded() {
        this.stopPreview();
        super.onUnloaded();
    }

    public stopPreview(): void {
        this.#mlkitHelper.stopPreview();
    }

    public toggleCamera(): void {
        this.#mlkitHelper.toggleCamera();
    }

    public startPreview(): void {
        this.#mlkitHelper.openCamera();
        this.#mlkitHelper.startPreview();
    }


    public onLayout(left: number, top: number, right: number, bottom: number) {
        if (this.#preview) {
            this.#preview.frame = this.nativeView.bounds;
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
