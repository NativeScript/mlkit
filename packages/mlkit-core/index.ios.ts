import {
  BarcodeFormats,
  barcodeFormatsProperty,
  CameraPosition,
  cameraPositionProperty,
  DetectionType,
  detectionTypeProperty,
  faceDetectionMinFaceSizeProperty,
  faceDetectionPerformanceModeProperty,
  faceDetectionTrackingEnabledProperty,
  imageLabelerConfidenceThresholdProperty,
  MLKitViewBase,
  objectDetectionClassifyProperty,
  objectDetectionMultipleProperty,
  pauseProperty,
  processEveryNthFrameProperty,
  torchOnProperty,
  aspectRatioProperty,
  retrieveLatestImageProperty,
  customObjectDetectionMaximumNumLabelsProperty,
  customObjectDetectionConfidenceThresholdProperty,
  customObjectDetectionModelNameProperty,
  customObjectDetectionClassifyProperty,
  customObjectDetectionMultipleProperty,
  TNSObjectDetectionResult,
  BoundingBoxSettings,
  boundingBoxSettingsProperty,
  DEFAULT_BOUNDING_BOX_SETTINGS,
} from './common';
import { Color, File, ImageSource, Utils } from '@nativescript/core';
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

export { BarcodeFormats, barcodeFormatsProperty, CameraPosition, cameraPositionProperty, DetectionType, faceDetectionMinFaceSizeProperty, faceDetectionPerformanceModeProperty, faceDetectionTrackingEnabledProperty, imageLabelerConfidenceThresholdProperty as imageLablerConfidenceThresholdProperty, objectDetectionClassifyProperty, objectDetectionMultipleProperty, customObjectDetectionMaximumNumLabelsProperty, customObjectDetectionConfidenceThresholdProperty, customObjectDetectionModelNameProperty, customObjectDetectionClassifyProperty, customObjectDetectionMultipleProperty } from './common';

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
  _customObjectDetector: MLKObjectDetector;
  _localModel: MLKLocalModel;
  _poseDetector: MLKPoseDetector;
  _selfieSegmentor: MLKSegmenter;
  _barcodeScannerOptions: MLKBarcodeScannerOptions;
  _faceDetectorOptions: MLKFaceDetectorOptions;
  _imageLabelerOptions: MLKImageLabelerOptions;
  _objectDetectionOptions: MLKObjectDetectorOptions;
  _customObjectDetectionOptions: MLKCustomObjectDetectorOptions;
  _poseDetectionOptions: MLKPoseDetectorOptions;
  _selfieSegmentationOptions: MLKSelfieSegmenterOptions;
  _overlayLayer: CALayer;
  _boundingBoxSettings: BoundingBoxSettings;

  _mlkitHelper: TNSMLKitHelper;
  _onScanCallback: (result: any, type) => void;

  constructor() {
    super();
    this._mlkitHelper = TNSMLKitHelper.alloc().init();

    const ref = new WeakRef(this);
    const _onScanCallback = (result: any, type) => {
      const owner = ref.deref();
      if (owner) {
        if (owner.detectionType === DetectionType.None || !owner.hasListeners?.(MLKitView.detectionEvent)) {
          return;
        }
        try {
          let data = JSON.parse(result);
          if (owner.detectionType === DetectionType.Object || owner.detectionType === DetectionType.CustomObject) {
            if (owner._boundingBoxSettings?.drawBBoxes || owner._boundingBoxSettings?.drawEdgeMarks) {
              owner.drawBoundingBoxes(data);
            }
          }
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

    this._overlayLayer = CALayer.layer();
    this._overlayLayer.frame = nativeView.bounds;
    nativeView.layer.addSublayer(this._overlayLayer);

    return nativeView;
  }

  [retrieveLatestImageProperty.setNative](value: boolean) {
    if (!this._mlkitHelper) {
      return;
    }
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

  // @ts-ignore
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
    let type = 10; /* None */
    switch (value) {
      case DetectionType.All:
        type = 8;
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
      case DetectionType.CustomObject:
        type = 5;
        break;
      case DetectionType.Pose:
        type = 6;
        break;
      case DetectionType.Text:
        type = 7;
        break;
      case DetectionType.Selfie:
        type = 9;
        break;
      default:
        type = 10;
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

    if (!this._customObjectDetector && (this.detectionType === DetectionType.CustomObject || this.detectionType === DetectionType.All)) {
      this._setupCustomObjectDetection();
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

  // @ts-ignore
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

  [customObjectDetectionModelNameProperty.setNative](value) {
    this._setupCustomObjectDetection();
  }

  [customObjectDetectionClassifyProperty.setNative](value) {
    this._setupCustomObjectDetection();
  }

  [customObjectDetectionMultipleProperty.setNative](value) {
    this._setupCustomObjectDetection();
  }

  [customObjectDetectionMaximumNumLabelsProperty.setNative](value) {
    this._setupCustomObjectDetection();
  }

  [customObjectDetectionConfidenceThresholdProperty.setNative](value) {
    this._setupCustomObjectDetection();
  }

  [boundingBoxSettingsProperty.setNative](value) {
    this._boundingBoxSettings = { ...DEFAULT_BOUNDING_BOX_SETTINGS, ...(value as BoundingBoxSettings) };
  }

  _setupCustomObjectDetection() {
    if (!OBJECT_DETECTION_SUPPORTED()) {
      return;
    }

    if (this.customObjectDetectionModelName !== this.customObjectDetectionLoadedModel) {
      // Construct the model file path
      const modelFilePath = NSBundle.mainBundle.pathForResourceOfType(this.customObjectDetectionModelName, 'tflite');
      if (File.exists(modelFilePath)) {
        this._localModel = MLKLocalModel.alloc().initWithPath(modelFilePath);
        this.customObjectDetectionLoadedModel = this.customObjectDetectionModelName;
        this._customObjectDetectionOptions = MLKCustomObjectDetectorOptions.alloc().initWithLocalModel(this._localModel);
      } else {
        console.error('TFLite model file not found.');
      }
    }
    if (this._customObjectDetectionOptions) {
      this._customObjectDetectionOptions.detectorMode = MLKObjectDetectorModeStream;
      this._customObjectDetectionOptions.shouldEnableMultipleObjects = this.customObjectDetectionMultiple;
      this._customObjectDetectionOptions.shouldEnableClassification = this.customObjectDetectionClassify;
      if (this.customObjectDetectionConfidenceThreshold != null) {
        this._customObjectDetectionOptions.classificationConfidenceThreshold = this.customObjectDetectionConfidenceThreshold;
      }
      this._customObjectDetectionOptions.maxPerObjectLabelCount = this.customObjectDetectionMaximumNumLabels;
      this._customObjectDetector = MLKObjectDetector.objectDetectorWithOptions(this._customObjectDetectionOptions);
      this._mlkitHelper.customObjectDetector = this._customObjectDetector;
    }
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
    if (this._overlayLayer) {
      this._overlayLayer.frame = this.nativeView.bounds;
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

  private adjustBoundingBoxForVideoGravity(x: number, y: number, width: number, height: number, imageWidth: number, imageHeight: number, imageOrientation: number, displayedWidth: number, displayedHeight: number, videoGravity: string): { x: number; y: number; width: number; height: number } {
    let scaleX = 1;
    let scaleY = 1;
    let offsetX = 0;
    let offsetY = 0;

    // Handle orientation-specific adjustments
    let adjustedImageWidth = imageWidth;
    let adjustedImageHeight = imageHeight;

    if ([2, 3, 6, 7].includes(imageOrientation)) {
      adjustedImageWidth = imageHeight;
      adjustedImageHeight = imageWidth;
    }

    // Determine scaling and offsets based on video gravity
    const imageAspectRatio = adjustedImageWidth / adjustedImageHeight;
    const viewAspectRatio = displayedWidth / displayedHeight;

    switch (videoGravity) {
      case 'AVLayerVideoGravityResizeAspect': {
        // 'aspect'
        if (imageAspectRatio > viewAspectRatio) {
          // Letterboxing on the top and bottom
          scaleX = displayedWidth / adjustedImageWidth;
          scaleY = scaleX;
          offsetY = (displayedHeight - adjustedImageHeight * scaleY) / 2;
        } else {
          // Letterboxing on the left and right
          scaleY = displayedHeight / adjustedImageHeight;
          scaleX = scaleY;
          offsetX = (displayedWidth - adjustedImageWidth * scaleX) / 2;
        }
        break;
      }
      case 'AVLayerVideoGravityResizeAspectFill': {
        // 'aspectFill'
        if (imageAspectRatio > viewAspectRatio) {
          // Cropping on the left and right
          scaleY = displayedHeight / adjustedImageHeight;
          scaleX = scaleY;
          offsetX = (displayedWidth - adjustedImageWidth * scaleX) / 2;
        } else {
          // Cropping on the top and bottom
          scaleX = displayedWidth / adjustedImageWidth;
          scaleY = scaleX;
          offsetY = (displayedHeight - adjustedImageHeight * scaleY) / 2;
        }
        break;
      }
      case 'AVLayerVideoGravityResize': {
        // 'fill'
        scaleX = displayedWidth / adjustedImageWidth;
        scaleY = displayedHeight / adjustedImageHeight;
        break;
      }
    }

    // Adjust coordinates and dimensions for orientation
    const adjusted = this.adjustBoundingBox(x, y, width, height, imageWidth, imageHeight, imageOrientation);

    // Scale and shift the bounding box for display
    return {
      x: adjusted.x * scaleX + offsetX,
      y: adjusted.y * scaleY + offsetY,
      width: adjusted.width * scaleX,
      height: adjusted.height * scaleY,
    };
  }

  private adjustBoundingBox(x: number, y: number, width: number, height: number, imageWidth: number, imageHeight: number, imageOrientation: number): { x: number; y: number; width: number; height: number } {
    let adjustedX = x;
    let adjustedY = y;
    let adjustedWidth = width;
    let adjustedHeight = height;

    switch (imageOrientation) {
      case 1: // Down
        adjustedX = imageWidth - x - width;
        adjustedY = imageHeight - y - height;
        break;
      case 2: // Left
        adjustedX = y;
        adjustedY = imageWidth - x - width;
        adjustedWidth = height;
        adjustedHeight = width;
        break;
      case 3: // Right
        adjustedX = imageHeight - y - height;
        adjustedY = x;
        adjustedWidth = height;
        adjustedHeight = width;
        break;
      case 4: // Up Mirrored
        adjustedX = imageWidth - x - width;
        break;
      case 5: // Down Mirrored
        adjustedY = imageHeight - y - height;
        break;
      case 6: // Left Mirrored
        adjustedX = imageHeight - y - height;
        adjustedY = imageWidth - x - width;
        adjustedWidth = height;
        adjustedHeight = width;
        break;
      case 7: // Right Mirrored
        adjustedX = y;
        adjustedY = x;
        adjustedWidth = height;
        adjustedHeight = width;
        break;
      default: // Up
        break;
    }
    return { x: adjustedX, y: adjustedY, width: adjustedWidth, height: adjustedHeight };
  }

  public drawBoundingBoxes(objects: TNSObjectDetectionResult[]) {
    if (!this._overlayLayer) return;
    const img_info_string = (this._mlkitHelper as any).getCaptureInfo() as string;
    const img_info = JSON.parse(img_info_string) as { width: number; height: number; orientation: number };

    // Clear previous bounding boxes
    if (this._overlayLayer.sublayers) {
      this._overlayLayer.sublayers = null;
    }

    if (objects) {
      // Draw bounding boxes for each detected object
      objects.forEach((object) => {
        const bbox = object.bounds;
        if (!bbox) {
          console.warn('No bounds found for object:', object);
          return;
        }

        let bestLabel = null;
        if (object.labels && object.labels.length > 0) {
          // Take the most confident label, MLKit seems to ignore threshold value
          bestLabel = object.labels.reduce((maxLabel, label) => (label.confidence > maxLabel.confidence ? label : maxLabel));
          if (bestLabel.confidence < this.customObjectDetectionConfidenceThreshold) {
            return;
          }
        }
        const tbbox = this.adjustBoundingBoxForVideoGravity(bbox.x, bbox.y, bbox.width, bbox.height, img_info.width, img_info.height, img_info.orientation, this._preview.bounds.size.width, this._preview.bounds.size.height, this._preview.videoGravity);

        if (this._boundingBoxSettings.drawBBoxes) {
          const boxLayer = CALayer.layer();
          boxLayer.frame = CGRectMake(tbbox.x, tbbox.y, tbbox.width, tbbox.height);

          boxLayer.borderWidth = this._boundingBoxSettings.bBoxLineWidth;
          boxLayer.borderColor = new Color(this._boundingBoxSettings.bBoxLineColor).ios.CGColor;
          boxLayer.backgroundColor = UIColor.clearColor.CGColor;
          boxLayer.cornerRadius = this._boundingBoxSettings.bBoxCornerness;
          this._overlayLayer.addSublayer(boxLayer);
        }

        // Draw edge marks with rounded corners
        const edgeMarkLength = Math.min(tbbox.width, tbbox.height) * this._boundingBoxSettings.edgeMarkLengthFactor;
        const lineWidth = this._boundingBoxSettings.edgeMarkLineWidth; // Thickness of edge marks

        // Create layers for each edge mark
        if (this._boundingBoxSettings.drawEdgeMarks) {
          const createEdgeLayer = (x: number, y: number, width: number, height: number) => {
            const layer = CALayer.layer();
            layer.frame = CGRectMake(x, y, width, height);
            layer.cornerRadius = this._boundingBoxSettings.bBoxCornerness;
            layer.backgroundColor = UIColor.redColor.CGColor;
            return layer;
          };
          // Top-left corner
          this._overlayLayer.addSublayer(createEdgeLayer(tbbox.x, tbbox.y, edgeMarkLength, lineWidth));
          this._overlayLayer.addSublayer(createEdgeLayer(tbbox.x, tbbox.y, lineWidth, edgeMarkLength));

          // Top-right corner
          this._overlayLayer.addSublayer(createEdgeLayer(tbbox.x + tbbox.width - edgeMarkLength, tbbox.y, edgeMarkLength, lineWidth));
          this._overlayLayer.addSublayer(createEdgeLayer(tbbox.x + tbbox.width - lineWidth, tbbox.y, lineWidth, edgeMarkLength));

          // Bottom-left corner
          this._overlayLayer.addSublayer(createEdgeLayer(tbbox.x, tbbox.y + tbbox.height - edgeMarkLength, lineWidth, edgeMarkLength));
          this._overlayLayer.addSublayer(createEdgeLayer(tbbox.x, tbbox.y + tbbox.height - lineWidth, edgeMarkLength, lineWidth));

          // Bottom-right corner
          this._overlayLayer.addSublayer(createEdgeLayer(tbbox.x + tbbox.width - edgeMarkLength, tbbox.y + tbbox.height - lineWidth, edgeMarkLength, lineWidth));
          this._overlayLayer.addSublayer(createEdgeLayer(tbbox.x + tbbox.width - lineWidth, tbbox.y + tbbox.height - edgeMarkLength, lineWidth, edgeMarkLength));
        }

        // draw label
        if (this._boundingBoxSettings.drawLabels) {
          const textLayer = this.drawText(tbbox, bestLabel);
          this._overlayLayer.addSublayer(textLayer); // Add the text layer
        }
      });
    }
  }
  private drawText(bbox: { x: number; y: number; width: number; height: number }, label: { text: string; confidence: number; index?: number }): CATextLayer {
    const textLayer = CATextLayer.layer();
    const mappedLabelText = this._boundingBoxSettings.labelMappings[label.text] ?? label.text;
    const labelText = this._boundingBoxSettings.showConfidence ? `${mappedLabelText} ${label.confidence.toFixed(2)}` : `${mappedLabelText}`;
    textLayer.string = labelText;

    const fontSize = 14;
    textLayer.fontSize = fontSize;
    textLayer.foregroundColor = new Color(this._boundingBoxSettings.labelTextColor).ios.CGColor;
    textLayer.backgroundColor = new Color(this._boundingBoxSettings.labelBackgroundColor).ios.CGColor;

    let mode = kCAAlignmentNatural;
    switch (this._boundingBoxSettings.labelAlignment) {
      case 'left':
        mode = kCAAlignmentLeft;
        break;
      case 'center':
        mode = kCAAlignmentCenter;
        break;
      case 'right':
        mode = kCAAlignmentRight;
        break;
    }
    textLayer.alignmentMode = mode;
    textLayer.cornerRadius = this._boundingBoxSettings.labelCornerness;
    textLayer.masksToBounds = true;

    // Calculate text width to ensure it fits the content
    const textAttributes = NSDictionary.dictionaryWithObjectForKey(UIFont.systemFontOfSize(fontSize), NSFontAttributeName);
    const textSize = NSString.stringWithString(labelText).sizeWithAttributes(textAttributes);

    // Ensure the label width is at least as wide as the bounding box
    const labelWidth = Math.max(textSize.width + 10, bbox.width); // Add padding to text size
    const labelHeight = textSize.height + 8; // Add padding to text height

    // Position the label above the bounding box, centered horizontally
    const padding = 4; // Space between the text and the bounding box
    const labelX = bbox.x + (bbox.width - labelWidth) / 2; // Center horizontally above the bounding box
    const labelY = bbox.y - labelHeight - padding; // Position above the bounding box

    textLayer.frame = CGRectMake(labelX, labelY, labelWidth, labelHeight);
    textLayer.bounds = CGRectMake(0, -textLayer.fontSize / 4, labelWidth, labelHeight);
    return textLayer;
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
