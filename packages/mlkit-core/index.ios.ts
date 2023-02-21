import { ImageSource, Utils } from '@nativescript/core';
import { BarcodeFormats, barcodeFormatsProperty, CameraPosition, cameraPositionProperty, DetectionType, detectionTypeProperty, faceDetectionMinFaceSizeProperty, faceDetectionPerformanceModeProperty, faceDetectionTrackingEnabledProperty, imageLabelerConfidenceThresholdProperty, MLKitViewBase, objectDetectionClassifyProperty, objectDetectionMultipleProperty, pauseProperty, processEveryNthFrameProperty, torchOnProperty, aspectRatioProperty } from './common';
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

function getGravity(value) {
  switch (value) {
    case 'fill':
      return AVLayerVideoGravityResize;
    case 'aspectFill':
      return AVLayerVideoGravityResizeAspectFill;
    case 'aspect':
      return AVLayerVideoGravityResizeAspect;
  }
  return null;
}

export class MLKitView extends MLKitViewBase {
  _device: AVCaptureDevice;
  _preview: AVCaptureVideoPreviewLayer;
  _textRecognizer: MLKTextRecognizer;
  _barcodeScanner: MLKBarcodeScanner;
  _digitalInkRecognizer: MLKDigitalInkRecognizer;
  _faceDetector: MLKFaceDetector;
  _imageLabeler: MLKImageLabeler;
  _objectDetector: MLKObjectDetector;
  _poseDetector: MLKPoseDetector;
  _selfieSegmentor: MLKSegmenter;
  _barcodeScannerOptions: MLKBarcodeScannerOptions;
  _faceDetectorOptions: MLKFaceDetectorOptions;
  _imageLabelerOptions: MLKImageLabelerOptions;
  _objectDetectionOptions: MLKObjectDetectorOptions;
  _poseDetectionOptions: MLKPoseDetectorOptions;
  _selfieSegmentationOptions: MLKSelfieSegmenterOptions;

  _mlkitHelper: TNSMLKitHelper;
  _onScanCallback: (result: any, type) => void;

  constructor() {
    super();
    this._mlkitHelper = TNSMLKitHelper.alloc().init();

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
    this._mlkitHelper.onScanCallback = _onScanCallback;
  }

  createNativeView() {
    const nativeView = UIView.new();
    this._preview = AVCaptureVideoPreviewLayer.layerWithSession(this._mlkitHelper.session);
    this._preview.videoGravity = getGravity(this.aspectRatio) ?? AVLayerVideoGravityResizeAspect;
    nativeView.layer.insertSublayerAtIndex(this._preview, 0);
    return nativeView;
  }

  //@ts-ignore
  get retrieveLatestImage(): boolean {
    if (!this._mlkitHelper) {
      return false;
    }
    return this._mlkitHelper.retrieveLatestImage;
  }

  set retrieveLatestImage(value: boolean) {
    this._mlkitHelper.retrieveLatestImage = value;
  }

  _latestImage: ImageSource = null;

  //@ts-ignore
  get latestImage(): ImageSource {
    if (!this._mlkitHelper) {
      return null;
    }

    const image = this._mlkitHelper.latestImage;
    if (!image) {
      return null;
    }

    if (image !== this._latestImage?.ios) {
      this._latestImage = new ImageSource(image);
    }

    return this._latestImage;
  }

  initNativeView() {
    super.initNativeView();
    this._setupDetectors();
  }

  [aspectRatioProperty.setNative](ratio) {
    if (this._preview) {
      switch (ratio) {
        case 'fill':
        case 'aspectFill':
        case 'aspect':
          this._preview.videoGravity = getGravity(ratio);
          break;
      }
    }
  }

  [cameraPositionProperty.setNative](value: CameraPosition) {
    switch (value) {
      case CameraPosition.FRONT:
        this._mlkitHelper.cameraPosition = TNSMLKitHelperCameraPosition.FRONT;
        break;
      case CameraPosition.BACK:
        this._mlkitHelper.cameraPosition = TNSMLKitHelperCameraPosition.BACK;
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
      this._mlkitHelper.torchMode = TNSMLKitTorchMode.On;
    } else {
      this._mlkitHelper.torchMode = TNSMLKitTorchMode.Off;
    }
  }

  [pauseProperty.setNative](value: boolean) {
    this._mlkitHelper.pause = value;
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

    this._setupDetectors();
    this._mlkitHelper.detectorType = type;
  }

  [processEveryNthFrameProperty.setNative](value) {
    if (this._mlkitHelper) {
      this._mlkitHelper.processEveryNthFrame = value;
    }
  }

  _setupDetectors() {
    if (!this._textRecognizer && (this.detectionType === DetectionType.Text || this.detectionType === DetectionType.All)) {
      if (TEXT_RECOGNITION_SUPPORTED()) {
        this._textRecognizer = MLKTextRecognizer.textRecognizer();
        this._mlkitHelper.textRecognizer = this._textRecognizer;
      }
    }

    if (!this._barcodeScanner && (this.detectionType === DetectionType.Barcode || this.detectionType === DetectionType.All)) {
      this._setupBarcodeScanner(this.barcodeFormats);
    }

    // TODO
    if (!this._digitalInkRecognizer && (this.detectionType === DetectionType.DigitalInk || this.detectionType === DetectionType.All)) {
      // MLKDigitalInkRecognizer.digitalInkRecognizerWithOptions()
    }

    if (!this._faceDetector && (this.detectionType === DetectionType.Face || this.detectionType === DetectionType.All)) {
      this._setupFaceDetector();
    }

    if (!this._imageLabeler && (this.detectionType === DetectionType.Image || this.detectionType === DetectionType.All)) {
      this._setImageLabeler();
    }

    if (!this._objectDetector && (this.detectionType === DetectionType.Object || this.detectionType === DetectionType.All)) {
      this._setupObjectDetection();
    }

    if (!this._poseDetector && (this.detectionType === DetectionType.Pose || this.detectionType === DetectionType.All)) {
      this._setPoseDetection();
    }

    if (!this._selfieSegmentor && (this.detectionType === DetectionType.Selfie || this.detectionType === DetectionType.All)) {
      this._setSelfieSegmentation();
    }
  }

  _setSelfieSegmentation() {
    if (!SELFIE_SEGMENTATION_SUPPORTED()) {
      return;
    }

    if (!this._selfieSegmentationOptions) {
      this._selfieSegmentationOptions = MLKSelfieSegmenterOptions.new();
    }

    this._selfieSegmentationOptions.shouldEnableRawSizeMask = true;
    this._selfieSegmentor = MLKSegmenter.segmenterWithOptions(this._selfieSegmentationOptions);
    this._mlkitHelper.selfieSegmentor = this._selfieSegmentor;
  }

  [barcodeFormatsProperty.setNative](value: BarcodeFormats[]) {
    this._setupBarcodeScanner(value);
  }

  _setupBarcodeScanner(value) {
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

    this._barcodeScannerOptions = MLKBarcodeScannerOptions.alloc().initWithFormats(formats);
    this._barcodeScanner = MLKBarcodeScanner.barcodeScannerWithOptions(this._barcodeScannerOptions);
    this._mlkitHelper.barcodeScanner = this._barcodeScanner;
  }

  [faceDetectionTrackingEnabledProperty.setNative](value) {
    this._setupFaceDetector();
  }

  [faceDetectionMinFaceSizeProperty.setNative](value) {
    this._setupFaceDetector();
  }

  [faceDetectionPerformanceModeProperty.setNative](value) {
    this._setupFaceDetector();
  }

  _setupFaceDetector() {
    if (!FACE_DETECTION_SUPPORTED()) {
      return;
    }

    if (!this._faceDetectorOptions) {
      this._faceDetectorOptions = MLKFaceDetectorOptions.new();
    }

    this._faceDetectorOptions.landmarkMode = MLKFaceDetectorLandmarkModeAll;
    this._faceDetectorOptions.classificationMode = MLKFaceDetectorClassificationModeAll;
    this._faceDetectorOptions.performanceMode = this.faceDetectionPerformanceMode === 'accurate' ? (this._faceDetectorOptions.performanceMode = MLKFaceDetectorPerformanceModeAccurate) : (this._faceDetectorOptions.performanceMode = MLKFaceDetectorPerformanceModeFast);
    this._faceDetectorOptions.trackingEnabled = this.faceDetectionTrackingEnabled;
    this._faceDetectorOptions.minFaceSize = this.faceDetectionMinFaceSize;
    this._faceDetector = MLKFaceDetector.faceDetectorWithOptions(this._faceDetectorOptions);
    this._mlkitHelper.faceDetector = this._faceDetector;
  }

  [imageLabelerConfidenceThresholdProperty.setNative](value) {
    this._setImageLabeler();
  }

  _setImageLabeler() {
    if (!IMAGE_LABELING_SUPPORTED()) {
      return;
    }
    if (!this._imageLabelerOptions) {
      this._imageLabelerOptions = MLKImageLabelerOptions.new();
    }
    this._imageLabelerOptions.confidenceThreshold = this.imageLabelerConfidenceThreshold;
    this._imageLabeler = MLKImageLabeler.imageLabelerWithOptions(this._imageLabelerOptions);
    this._mlkitHelper.imageLabeler = this._imageLabeler;
  }

  [objectDetectionClassifyProperty.setNative](value) {
    this._setupObjectDetection();
  }

  [objectDetectionMultipleProperty.setNative](value) {
    this._setupObjectDetection();
  }

  _setupObjectDetection() {
    if (!OBJECT_DETECTION_SUPPORTED()) {
      return;
    }
    if (!this._objectDetectionOptions) {
      this._objectDetectionOptions = MLKObjectDetectorOptions.new();
    }

    this._objectDetectionOptions.detectorMode = MLKObjectDetectorModeStream;

    this._objectDetectionOptions.shouldEnableMultipleObjects = this.objectDetectionMultiple;
    this._objectDetectionOptions.shouldEnableClassification = this.objectDetectionClassify;

    this._objectDetector = MLKObjectDetector.objectDetectorWithOptions(this._objectDetectionOptions);
    this._mlkitHelper.objectDetector = this._objectDetector;
  }

  _setPoseDetection() {
    if (!POSE_DETECTION_SUPPORTED()) {
      return;
    }
    if (!this._poseDetectionOptions) {
      this._poseDetectionOptions = MLKPoseDetectorOptions.new();
    }

    this._poseDetectionOptions.detectorMode = 1; // MLKPoseDetectorModeStream;

    this._poseDetector = MLKPoseDetector.poseDetectorWithOptions(this._poseDetectionOptions);

    this._mlkitHelper.poseDetector = this._poseDetector;
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
    this._mlkitHelper.stopPreview();
  }

  public toggleCamera(): void {
    this._mlkitHelper.toggleCamera();
  }

  public startPreview(): void {
    this._mlkitHelper.openCamera();
    if (!this.pause) {
      this._mlkitHelper.startPreview();
    }
  }

  public onLayout(left: number, top: number, right: number, bottom: number) {
    if (this._preview) {
      this._preview.frame = this.nativeView.bounds;
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
