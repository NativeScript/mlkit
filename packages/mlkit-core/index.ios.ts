import { ImageSource, Utils } from '@nativescript/core';
import { BarcodeFormats, barcodeFormatsProperty, CameraPosition, cameraPositionProperty, DetectionType, detectionTypeProperty, faceDetectionMinFaceSizeProperty, faceDetectionPerformanceModeProperty, faceDetectionTrackingEnabledProperty, imageLabelerConfidenceThresholdProperty, MLKitViewBase, objectDetectionClassifyProperty, objectDetectionMultipleProperty, pauseProperty, processEveryNthFrameProperty, torchOnProperty } from './common';
import '@nativescript/core';
import lazy from '@nativescript/core/utils/lazy';
import { DetectionEvent, StillImageDetectionOptions } from '.';

const BARCODE_SCANNER_SUPPORTED = lazy(() => typeof MLKBarcodeScanner !== 'undefined');
const TEXT_RECOGNITION_SUPPORTED = lazy(() => typeof MLKTextRecognizer !== 'undefined');
const FACE_DETECTION_SUPPORTED = lazy(() => typeof MLKFaceDetector !== 'undefined');
const IMAGE_LABELING_SUPPORTED = lazy(() => typeof MLKImageLabeler !== 'undefined');
const OBJECT_DETECTION_SUPPORTED = lazy(() => typeof MLKObjectDetector !== 'undefined');
const POSE_DETECTION_SUPPORTED = lazy(() => typeof MLKPoseDetector !== 'undefined');
const DIGITALINK_RECOGNITION_SUPPORTED = lazy(() => typeof MLKDigitalInkRecognizer !== 'undefined');
const SELFIE_SEGMENTATION_SUPPORTED = lazy(() => typeof MLKSegmenter !== 'undefined');

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
  #selfieSegmentor: MLKSegmenter;
  #barcodeScannerOptions: MLKBarcodeScannerOptions;
  #faceDetectorOptions: MLKFaceDetectorOptions;
  #imageLabelerOptions: MLKImageLabelerOptions;
  #objectDetectionOptions: MLKObjectDetectorOptions;
  #poseDetectionOptions: MLKPoseDetectorOptions;
  #selfieSegmentationOptions: MLKSelfieSegmenterOptions;

  #mlkitHelper: TNSMLKitHelper;
  _onScanCallback: (result: any, type) => void;

  constructor() {
    super();
    this.#mlkitHelper = TNSMLKitHelper.alloc().init();

    const ref = new WeakRef(this);
    const _onScanCallback = (result: any, type) => {
      const owner = ref.get?.();
      if (owner) {
        if (owner.detectionType === DetectionType.None || !owner.hasListeners?.(MLKitView.detectionEvent)) {
          return;
        }
        try {
          const data = JSON.parse(result);
          owner.notify(<DetectionEvent>{
            eventName: MLKitView.detectionEvent,
            object: owner,
            data,
            type,
          });
        } catch (e) {}
      }
    };

    this._onScanCallback = _onScanCallback;
    this.#mlkitHelper.onScanCallback = _onScanCallback;
  }

  createNativeView() {
    const nativeView = UIView.new();
    this.#preview = AVCaptureVideoPreviewLayer.layerWithSession(this.#mlkitHelper.session);
    this.#preview.videoGravity = AVLayerVideoGravityResizeAspect;
    nativeView.layer.insertSublayerAtIndex(this.#preview, 0);
    return nativeView;
  }

  //@ts-ignore
  get retrieveLatestImage(): boolean {
    if (!this.#mlkitHelper) {
      return false;
    }
    return this.#mlkitHelper.retrieveLatestImage;
  }

  set retrieveLatestImage(value: boolean) {
    this.#mlkitHelper.retrieveLatestImage = value;
  }

  #latestImage: ImageSource = null;

  //@ts-ignore
  get latestImage(): ImageSource {
    if (!this.#mlkitHelper) {
      return null;
    }

    const image = this.#mlkitHelper.latestImage;
    if (!image) {
      return null;
    }

    if (image !== this.#latestImage?.ios) {
      this.#latestImage = new ImageSource(image);
    }

    return this.#latestImage;
  }

  initNativeView() {
    super.initNativeView();
    this.#setupDetectors();
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

  get _selfieSegmentor() {
    return this.#selfieSegmentor;
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
    return UIImagePickerController.isSourceTypeAvailable(UIImagePickerControllerSourceType.Camera);
  }

  [torchOnProperty.setNative](value: boolean) {
    if (value) {
      this.#mlkitHelper.torchMode = TNSMLKitTorchMode.On;
    } else {
      this.#mlkitHelper.torchMode = TNSMLKitTorchMode.Off;
    }
  }

  [pauseProperty.setNative](value: boolean) {
    this.#mlkitHelper.pause = value;
  }

  [detectionTypeProperty.setNative](value) {
    let type = 9; /* None */
    switch (value) {
      case DetectionType.All:
        type = 7;
        break;
      case DetectionType.Barcode:
        type = 0;
        break;
      case DetectionType.DigitalInk:
        type = 1;
        break;
      case DetectionType.Face:
        type = 2;
        break;
      case DetectionType.Image:
        type = 3;
        break;
      case DetectionType.Object:
        type = 4;
        break;
      case DetectionType.Pose:
        type = 5;
        break;
      case DetectionType.Text:
        type = 6;
        break;
      case DetectionType.Selfie:
        type = 8;
        break;
      default:
        type = 9;
        break;
    }

    this.#setupDetectors();
    this.#mlkitHelper.detectorType = type;
  }

  [processEveryNthFrameProperty.setNative](value) {
    if (this.#mlkitHelper) {
      this.#mlkitHelper.processEveryNthFrame = value;
    }
  }

  #setupDetectors() {
    if (!this.#textRecognizer && (this.detectionType === DetectionType.Text || this.detectionType === DetectionType.All)) {
      if (TEXT_RECOGNITION_SUPPORTED()) {
        this.#textRecognizer = MLKTextRecognizer.textRecognizer();
        this.#mlkitHelper.textRecognizer = this.#textRecognizer;
      }
    }

    if (!this.#barcodeScanner && (this.detectionType === DetectionType.Barcode || this.detectionType === DetectionType.All)) {
      this.#setupBarcodeScanner(this.barcodeFormats);
    }

    // TODO
    if (!this.#digitalInkRecognizer && (this.detectionType === DetectionType.DigitalInk || this.detectionType === DetectionType.All)) {
      // MLKDigitalInkRecognizer.digitalInkRecognizerWithOptions()
    }

    if (!this.#faceDetector && (this.detectionType === DetectionType.Face || this.detectionType === DetectionType.All)) {
      this.#setupFaceDetector();
    }

    if (!this.#imageLabeler && (this.detectionType === DetectionType.Image || this.detectionType === DetectionType.All)) {
      this.#setImageLabeler();
    }

    if (!this.#objectDetector && (this.detectionType === DetectionType.Object || this.detectionType === DetectionType.All)) {
      this.#setupObjectDetection();
    }

    if (!this.#poseDetector && (this.detectionType === DetectionType.Pose || this.detectionType === DetectionType.All)) {
      this.#setPoseDetection();
    }

    if (!this.#selfieSegmentor && (this.detectionType === DetectionType.Selfie || this.detectionType === DetectionType.All)) {
      this.#setSelfieSegmentation();
    }
  }

  #setSelfieSegmentation() {
    if (!SELFIE_SEGMENTATION_SUPPORTED()) {
      return;
    }

    if (!this.#selfieSegmentationOptions) {
      this.#selfieSegmentationOptions = MLKSelfieSegmenterOptions.new();
    }

    this.#selfieSegmentationOptions.shouldEnableRawSizeMask = true;
    this.#selfieSegmentor = MLKSegmenter.segmenterWithOptions(this.#selfieSegmentationOptions);
    this.#mlkitHelper.selfieSegmentor = this.#selfieSegmentor;
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
      if (value.indexOf(BarcodeFormats.ALL) !== -1) {
        formats = MLKBarcodeFormat.All;
      } else {
        value.forEach((format) => {
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
    if (!FACE_DETECTION_SUPPORTED()) {
      return;
    }

    if (!this.#faceDetectorOptions) {
      this.#faceDetectorOptions = MLKFaceDetectorOptions.new();
    }

    this.#faceDetectorOptions.landmarkMode = MLKFaceDetectorLandmarkModeAll;
    this.#faceDetectorOptions.classificationMode = MLKFaceDetectorClassificationModeAll;
    this.#faceDetectorOptions.performanceMode = this.faceDetectionPerformanceMode === 'accurate' ? (this.#faceDetectorOptions.performanceMode = MLKFaceDetectorPerformanceModeAccurate) : (this.#faceDetectorOptions.performanceMode = MLKFaceDetectorPerformanceModeFast);
    this.#faceDetectorOptions.trackingEnabled = this.faceDetectionTrackingEnabled;
    this.#faceDetectorOptions.minFaceSize = this.faceDetectionMinFaceSize;
    this.#faceDetector = MLKFaceDetector.faceDetectorWithOptions(this.#faceDetectorOptions);
    this.#mlkitHelper.faceDetector = this.#faceDetector;
  }

  [imageLabelerConfidenceThresholdProperty.setNative](value) {
    this.#setImageLabeler();
  }

  #setImageLabeler() {
    if (!IMAGE_LABELING_SUPPORTED()) {
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
    if (!OBJECT_DETECTION_SUPPORTED()) {
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
    if (!POSE_DETECTION_SUPPORTED()) {
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
    if (!this.pause) {
      this.#mlkitHelper.startPreview();
    }
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
      AVCaptureDevice.requestAccessForMediaTypeCompletionHandler(AVMediaTypeVideo, (cameraPermissionStatus) => {
        if (cameraPermissionStatus) {
          this.startPreview();
          resolve();
        } else {
          reject();
        }
      });
    });
  }

  hasCameraPermission(): boolean {
    return AVCaptureDevice.authorizationStatusForMediaType(AVMediaTypeVideo) === AVAuthorizationStatus.Authorized;
  }
}

export function detectWithStillImage(image: any, options?: StillImageDetectionOptions) {
  return new Promise((resolve, reject) => {
    let nativeImage;
    if (image instanceof ImageSource) {
      nativeImage = image.ios;
    } else if (image instanceof UIImage) {
      nativeImage = image;
    } else {
      reject('Please use a valid Image');
    }

    let type = 9; /* None */
    switch (options?.detectorType) {
      case DetectionType.All:
        type = 7;
        break;
      case DetectionType.Barcode:
        type = 0;
        break;
      case DetectionType.DigitalInk:
        type = 1;
        break;
      case DetectionType.Face:
        type = 2;
        break;
      case DetectionType.Image:
        type = 3;
        break;
      case DetectionType.Object:
        type = 4;
        break;
      case DetectionType.Pose:
        type = 5;
        break;
      case DetectionType.Text:
        type = 6;
        break;
      case DetectionType.Selfie:
        type = 8;
        break;
      default:
        type = 9;
        break;
    }

    TNSML.processImage(
      nativeImage,
      {
        ...(options || {}),
        detectorType: type,
      } as any,
      (ret: NSArray<TNSMLResult>) => {
        const result = {};
        const count = ret.count;
        for (let i = 0; i < count; i++) {
          const item = ret.objectAtIndex(i);
          try {
            if (item.type === DetectionType.Selfie) {
              result[item.type] = {
                data: interop.bufferFromData(item.result),
                width: item.result.width,
                height: item.result.height,
              };
            } else {
              result[item.type] = JSON.parse(item.result);
            }
          } catch (e) {}
        }
        resolve(result);
      }
    );
  });
}
