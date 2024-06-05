import { BarcodeFormats, barcodeFormatsProperty, CameraPosition, cameraPositionProperty, DetectionType, detectionTypeProperty, faceDetectionMinFaceSizeProperty, faceDetectionPerformanceModeProperty, faceDetectionTrackingEnabledProperty, imageLabelerConfidenceThresholdProperty, MLKitViewBase, objectDetectionClassifyProperty, objectDetectionMultipleProperty, pauseProperty, processEveryNthFrameProperty, torchOnProperty } from './common';
import { Application, Device, Utils, AndroidActivityRequestPermissionsEventData, ImageSource } from '@nativescript/core';
import lazy from '@nativescript/core/utils/lazy';
import { StillImageDetectionOptions } from '.';

const IMAGE_PROCESSOR_All = lazy(() => {
  const ret = [];

  if (BARCODE_SCANNER_SUPPORTED()) {
    ret.push(IMAGE_PROCESSOR_Barcode());
  }

  if (FACE_DETECTION_SUPPORTED()) {
    ret.push(IMAGE_PROCESSOR_Face());
  }

  if (IMAGE_LABELING_SUPPORTED()) {
    ret.push(IMAGE_PROCESSOR_Image());
  }

  if (IMAGE_PROCESSOR_Object()) {
    ret.push(IMAGE_PROCESSOR_Object());
  }

  if (POSE_DETECTION_SUPPORTED()) {
    ret.push(IMAGE_PROCESSOR_Pose());
  }

  if (TEXT_RECOGNITION_SUPPORTED()) {
    ret.push(IMAGE_PROCESSOR_Text());
  }

  if (SELFIE_SEGMENTATION_SUPPORTED()) {
    ret.push(IMAGE_PROCESSOR_Selfie());
  }

  return ret;
});
const IMAGE_PROCESSOR_Barcode = lazy(() => new io.github.triniwiz.fancycamera.barcodescanning.BarcodeScanner());
const IMAGE_PROCESSOR_DigitalInk = lazy(() => new (io as any).github.triniwiz.fancycamera.digitalink.DigitalInk());
const IMAGE_PROCESSOR_Face = lazy(() => new io.github.triniwiz.fancycamera.facedetection.FaceDetection());
const IMAGE_PROCESSOR_Image = lazy(() => new io.github.triniwiz.fancycamera.imagelabeling.ImageLabeling());
const IMAGE_PROCESSOR_Object = lazy(() => new io.github.triniwiz.fancycamera.objectdetection.ObjectDetection());
const IMAGE_PROCESSOR_Pose = lazy(() => new io.github.triniwiz.fancycamera.posedetection.PoseDetection());
const IMAGE_PROCESSOR_Text = lazy(() => new io.github.triniwiz.fancycamera.textrecognition.TextRecognition());
const IMAGE_PROCESSOR_Selfie = lazy(() => new io.github.triniwiz.fancycamera.selfiesegmentation.SelfieSegmentation());

const BARCODE_SCANNER_SUPPORTED = lazy(() => typeof io.github.triniwiz.fancycamera?.barcodescanning?.BarcodeScanner !== 'undefined');
const TEXT_RECOGNITION_SUPPORTED = lazy(() => typeof io.github.triniwiz.fancycamera?.textrecognition?.TextRecognition !== 'undefined');
const FACE_DETECTION_SUPPORTED = lazy(() => typeof io.github.triniwiz.fancycamera?.facedetection?.FaceDetection !== 'undefined');
const IMAGE_LABELING_SUPPORTED = lazy(() => typeof io.github.triniwiz.fancycamera?.imagelabeling?.ImageLabeling !== 'undefined');
const OBJECT_DETECTION_SUPPORTED = lazy(() => typeof io.github.triniwiz.fancycamera?.objectdetection?.ObjectDetection !== 'undefined');
const POSE_DETECTION_SUPPORTED = lazy(() => typeof io.github.triniwiz.fancycamera?.posedetection?.PoseDetection !== 'undefined');
const SELFIE_SEGMENTATION_SUPPORTED = lazy(() => typeof io.github.triniwiz.fancycamera?.selfiesegmentation?.SelfieSegmentation !== 'undefined');

const TORCH_MODE_ON = lazy(() => io.github.triniwiz.fancycamera.CameraFlashMode.TORCH);
const TORCH_MODE_OFF = lazy(() => io.github.triniwiz.fancycamera.CameraFlashMode.OFF);

export { BarcodeFormats, barcodeFormatsProperty, CameraPosition, cameraPositionProperty, DetectionType, faceDetectionMinFaceSizeProperty, faceDetectionPerformanceModeProperty, faceDetectionTrackingEnabledProperty, imageLabelerConfidenceThresholdProperty, objectDetectionClassifyProperty, objectDetectionMultipleProperty } from './common';

export class MLKitView extends MLKitViewBase {
  _camera: io.github.triniwiz.fancycamera.FancyCamera;
  static _hasCamera: boolean;
  _onTextListener: io.github.triniwiz.fancycamera.ImageAnalysisCallback;
  _onBarcodeListener: io.github.triniwiz.fancycamera.ImageAnalysisCallback;
  _onDigitalInkListener: io.github.triniwiz.fancycamera.ImageAnalysisCallback;
  _onFaceListener: io.github.triniwiz.fancycamera.ImageAnalysisCallback;
  _onImageListener: io.github.triniwiz.fancycamera.ImageAnalysisCallback;
  _onObjectListener: io.github.triniwiz.fancycamera.ImageAnalysisCallback;
  _onPoseListener: io.github.triniwiz.fancycamera.ImageAnalysisCallback;
  _permissionHandler = (args: AndroidActivityRequestPermissionsEventData) => {
    if (this.pause) {
      return;
    }
    this._camera.onPermissionHandler(args.requestCode, args.permissions, args.grantResults);
  };
  _barcodeScannerOptions: io.github.triniwiz.fancycamera.barcodescanning.BarcodeScanner.Options;
  _faceDetectionOptions: io.github.triniwiz.fancycamera.facedetection.FaceDetection.Options;
  _imageLabelerOptions: io.github.triniwiz.fancycamera.imagelabeling.ImageLabeling.Options;
  _objectDetectionOptions: io.github.triniwiz.fancycamera.objectdetection.ObjectDetection.Options;

  _getFancyCamera() {
    return (this._camera as any)?.getChildAt?.(0) as io.github.triniwiz.fancycamera.CameraBase;
  }

  createNativeView() {
    this._camera = new io.github.triniwiz.fancycamera.FancyCamera(this._context);
    Application.android.on('activityRequestPermissions', this._permissionHandler);
    return this._camera;
  }

  // @ts-ignore
  get retrieveLatestImage(): boolean {
    if (!this._camera) {
      return false;
    }
    return this._camera.getRetrieveLatestImage();
  }

  set retrieveLatestImage(value: boolean) {
    this._camera.setRetrieveLatestImage(value);
  }

  _latestImage: ImageSource = null;

  // @ts-ignore
  get latestImage(): ImageSource {
    if (!this._camera) {
      return null;
    }

    const image = this._camera.getLatestImage();
    if (!image) {
      return null;
    }

    if (image !== this._latestImage?.android) {
      this._latestImage = new ImageSource(image);
    }

    return this._latestImage;
  }

  [cameraPositionProperty.setNative](value: CameraPosition) {
    if (this._camera) {
      switch (value) {
        case CameraPosition.FRONT:
          this._camera.setPosition(io.github.triniwiz.fancycamera.CameraPosition.FRONT);
          break;
        default:
          this._camera.setPosition(io.github.triniwiz.fancycamera.CameraPosition.BACK);
          break;
      }
    }
  }

  public static isAvailable() {
    if (this._hasCamera === undefined) {
      if (parseInt(Device.sdkVersion) >= 21) {
        try {
          const manager: android.hardware.camera2.CameraManager = Utils.android.getApplicationContext().getSystemService(android.content.Context.CAMERA_SERVICE);
          this._hasCamera = manager.getCameraIdList().length > 0;
        } catch (e) {
          this._hasCamera = false;
        }
      } else {
        this._hasCamera = android.hardware.Camera.getNumberOfCameras() > 0;
      }
    }
    return this._hasCamera;
  }

  [torchOnProperty.setNative](value: boolean) {
    if (this._camera) {
      if (value) {
        this._camera.setFlashMode(TORCH_MODE_ON());
      } else {
        this._camera.setFlashMode(TORCH_MODE_OFF());
      }
    }
  }

  [pauseProperty.setNative](value: boolean) {
    if (this._camera) {
      this._camera.setPause(value);
    }
  }

  [detectionTypeProperty.setNative](value) {
    switch (value) {
      case DetectionType.All:
        {
          const all = IMAGE_PROCESSOR_All();
          if (all.length) {
            this._camera.addImageProcessors(all);
          } else {
            this._camera.clearImageProcessor();
          }
        }
        break;
      case DetectionType.Barcode:
        this._camera.clearImageProcessor();
        this._camera.addImageProcessor(IMAGE_PROCESSOR_Barcode());
        break;
      case DetectionType.DigitalInk:
        this._camera.clearImageProcessor();
        break;
      case DetectionType.Face:
        this._camera.clearImageProcessor();
        this._camera.addImageProcessor(IMAGE_PROCESSOR_Face());
        break;
      case DetectionType.Image:
        this._camera.clearImageProcessor();
        this._camera.addImageProcessor(IMAGE_PROCESSOR_Image());
        break;
      case DetectionType.Object:
        this._camera.clearImageProcessor();
        this._camera.addImageProcessor(IMAGE_PROCESSOR_Object());
        break;
      case DetectionType.Pose:
        this._camera.clearImageProcessor();
        this._camera.addImageProcessor(IMAGE_PROCESSOR_Pose());
        break;
      case DetectionType.Text:
        this._camera.clearImageProcessor();
        this._camera.addImageProcessor(IMAGE_PROCESSOR_Text());
        break;
      case DetectionType.Selfie:
        this._camera.clearImageProcessor();
        this._camera.addImageProcessor(IMAGE_PROCESSOR_Selfie());
        break;
      default:
        this._camera.clearImageProcessor();
        break;
    }

    this._setListeners();
  }

  [processEveryNthFrameProperty.setNative](value) {
    if (this._camera) {
      this._camera.setProcessEveryNthFrame(value);
    }
  }

  initNativeView() {
    super.initNativeView();
    this._setListeners();
  }

  _setListeners() {
    const ref = new WeakRef(this);
    if (!this._onTextListener && (this.detectionType === DetectionType.Text || this.detectionType === DetectionType.All)) {
      this._onTextListener = new io.github.triniwiz.fancycamera.ImageAnalysisCallback({
        onSuccess(param0: string) {
          const hasListener = ref?.get?.().hasListeners?.(MLKitView.detectionEvent);
          if (!hasListener) {
            return;
          }
          try {
            ref?.get?.().notify?.({
              eventName: MLKitView.detectionEvent,
              object: ref?.get?.(),
              data: JSON.parse(param0),
              type: DetectionType.Text,
            });
          } catch (e) {}
        },
        onError(param0: string, param1: java.lang.Exception) {},
      });
      this._camera.setOnTextRecognitionListener(this._onTextListener);
    }

    if (!this._onBarcodeListener && (this.detectionType.includes(DetectionType.Barcode) || this.detectionType.includes(DetectionType.All))) {
      this._onBarcodeListener = new io.github.triniwiz.fancycamera.ImageAnalysisCallback({
        onSuccess(param0: string) {
          const hasListener = ref?.get?.().hasListeners?.(MLKitView.detectionEvent);
          if (!hasListener) {
            return;
          }
          try {
            ref?.get?.().notify?.({
              eventName: MLKitView.detectionEvent,
              object: ref?.get?.(),
              data: JSON.parse(param0),
              type: DetectionType.Barcode,
            });
          } catch (e) {}
        },
        onError(param0: string, param1: java.lang.Exception) {},
      });
      this._camera.setOnBarcodeScanningListener(this._onBarcodeListener);
    }

    // todo
    if (!this._onDigitalInkListener && (this.detectionType === DetectionType.DigitalInk || this.detectionType === DetectionType.All)) {
      /* this._onDigitalInkListener = new io.github.triniwiz.fancycamera.ImageAnalysisCallback({
                 onSuccess(param0: string) {
                       const hasListener = ref?.get?.().hasListeners?.(MLKitView.detectionEvent);
                    if(!hasListener){
                        return;
                    }
                     try {
                         ref?.get?.().notify?.({
                            eventName: MLKitView.detectionEvent,
                            object: ref?.get?.(),
                            data: JSON.parse(param0),
                            type: DetectionType.DigitalInk
                        });
                     } catch (e) { }
                  },
                 onError(param0: string, param1: java.lang.Exception) {

                 }
             }); */
    }

    if (!this._onFaceListener && (this.detectionType === DetectionType.Face || this.detectionType === DetectionType.All)) {
      if (FACE_DETECTION_SUPPORTED()) {
        this._faceDetectionOptions = new io.github.triniwiz.fancycamera.facedetection.FaceDetection.Options();
      }
      this._onFaceListener = new io.github.triniwiz.fancycamera.ImageAnalysisCallback({
        onSuccess(param0: string) {
          const hasListener = ref?.get?.().hasListeners?.(MLKitView.detectionEvent);
          if (!hasListener) {
            return;
          }
          try {
            ref?.get?.().notify?.({
              eventName: MLKitView.detectionEvent,
              object: ref?.get?.(),
              data: JSON.parse(param0),
              type: DetectionType.Face,
            });
          } catch (e) {}
        },
        onError(param0: string, param1: java.lang.Exception) {},
      });
      this._camera.setOnFacesDetectedListener(this._onFaceListener);
    }

    if (!this._onImageListener && (this.detectionType === DetectionType.Image || this.detectionType === DetectionType.All)) {
      this._onImageListener = new io.github.triniwiz.fancycamera.ImageAnalysisCallback({
        onSuccess(param0: string) {
          const hasListener = ref?.get?.().hasListeners?.(MLKitView.detectionEvent);
          if (!hasListener) {
            return;
          }
          try {
            ref?.get?.().notify?.({
              eventName: MLKitView.detectionEvent,
              object: ref?.get?.(),
              data: JSON.parse(param0),
              type: DetectionType.Image,
            });
          } catch (e) {}
        },
        onError(param0: string, param1: java.lang.Exception) {},
      });
      this._camera.setOnImageLabelingListener(this._onImageListener);
    }

    if (!this._onObjectListener && (this.detectionType === DetectionType.Object || this.detectionType === DetectionType.All)) {
      this._onObjectListener = new io.github.triniwiz.fancycamera.ImageAnalysisCallback({
        onSuccess(param0: string) {
          const hasListener = ref?.get?.().hasListeners?.(MLKitView.detectionEvent);
          if (!hasListener) {
            return;
          }
          try {
            ref?.get?.().notify?.({
              eventName: MLKitView.detectionEvent,
              object: ref?.get?.(),
              data: JSON.parse(param0),
              type: DetectionType.Object,
            });
          } catch (e) {}
        },
        onError(param0: string, param1: java.lang.Exception) {},
      });
      this._camera.setOnObjectDetectedListener(this._onObjectListener);
    }

    if (!this._onPoseListener && (this.detectionType === DetectionType.Pose || this.detectionType === DetectionType.All)) {
      this._onPoseListener = new io.github.triniwiz.fancycamera.ImageAnalysisCallback({
        onSuccess(param0: string) {
          const hasListener = ref?.get?.().hasListeners?.(MLKitView.detectionEvent);
          if (!hasListener) {
            return;
          }
          try {
            ref?.get?.().notify?.({
              eventName: MLKitView.detectionEvent,
              object: ref?.get?.(),
              data: JSON.parse(param0),
              type: DetectionType.Pose,
            });
          } catch (e) {}
        },
        onError(param0: string, param1: java.lang.Exception) {},
      });
      this._camera.setOnPoseDetectedListener(this._onPoseListener);
    }
  }

  [barcodeFormatsProperty.setNative](value: BarcodeFormats[]) {
    if (!BARCODE_SCANNER_SUPPORTED()) {
      return;
    }
    if (!this._barcodeScannerOptions) {
      this._barcodeScannerOptions = new io.github.triniwiz.fancycamera.barcodescanning.BarcodeScanner.Options();
    }
    let formats;
    if (Array.isArray(value)) {
      if (value.indexOf(BarcodeFormats.ALL) !== -1) {
        formats = Array.create('io.github.triniwiz.fancycamera.barcodescanning.BarcodeScanner$BarcodeFormat', 1);
        formats[0] = io.github.triniwiz.fancycamera.barcodescanning.BarcodeScanner.BarcodeFormat.ALL;
      } else {
        formats = value.map((format) => {
          switch (format) {
            case BarcodeFormats.AZTEC:
              return io.github.triniwiz.fancycamera.barcodescanning.BarcodeScanner.BarcodeFormat.AZTEC;
            case BarcodeFormats.CODABAR:
              return io.github.triniwiz.fancycamera.barcodescanning.BarcodeScanner.BarcodeFormat.CODABAR;
            case BarcodeFormats.CODE_128:
              return io.github.triniwiz.fancycamera.barcodescanning.BarcodeScanner.BarcodeFormat.CODE_128;
            case BarcodeFormats.CODE_39:
              return io.github.triniwiz.fancycamera.barcodescanning.BarcodeScanner.BarcodeFormat.CODE_39;
            case BarcodeFormats.CODE_93:
              return io.github.triniwiz.fancycamera.barcodescanning.BarcodeScanner.BarcodeFormat.CODE_93;
            case BarcodeFormats.DATA_MATRIX:
              return io.github.triniwiz.fancycamera.barcodescanning.BarcodeScanner.BarcodeFormat.DATA_MATRIX;
            case BarcodeFormats.EAN_13:
              return io.github.triniwiz.fancycamera.barcodescanning.BarcodeScanner.BarcodeFormat.EAN_13;
            case BarcodeFormats.EAN_8:
              return io.github.triniwiz.fancycamera.barcodescanning.BarcodeScanner.BarcodeFormat.EAN_8;
            case BarcodeFormats.ITF:
              return io.github.triniwiz.fancycamera.barcodescanning.BarcodeScanner.BarcodeFormat.ITF;
            case BarcodeFormats.PDF417:
              return io.github.triniwiz.fancycamera.barcodescanning.BarcodeScanner.BarcodeFormat.PDF417;
            case BarcodeFormats.QR_CODE:
              return io.github.triniwiz.fancycamera.barcodescanning.BarcodeScanner.BarcodeFormat.QR_CODE;
            case BarcodeFormats.UPC_A:
              return io.github.triniwiz.fancycamera.barcodescanning.BarcodeScanner.BarcodeFormat.UPC_A;
            case BarcodeFormats.UPC_E:
              return io.github.triniwiz.fancycamera.barcodescanning.BarcodeScanner.BarcodeFormat.UPC_E;
            default:
              return io.github.triniwiz.fancycamera.barcodescanning.BarcodeScanner.BarcodeFormat.ALL;
          }
        });
      }

      const scanner = IMAGE_PROCESSOR_Barcode();
      this._barcodeScannerOptions.setBarcodeFormat(formats);
      scanner.setOptions(this._barcodeScannerOptions);
    }
  }

  [faceDetectionTrackingEnabledProperty.setNative](value) {
    if (!FACE_DETECTION_SUPPORTED()) {
      return;
    }
    if (!this._faceDetectionOptions) {
      this._faceDetectionOptions = new io.github.triniwiz.fancycamera.facedetection.FaceDetection.Options();
    }

    this._faceDetectionOptions.setFaceTracking(value);

    const detector = IMAGE_PROCESSOR_Face();
    detector.setOptions(this._faceDetectionOptions);
  }

  [faceDetectionMinFaceSizeProperty.setNative](value) {
    if (!FACE_DETECTION_SUPPORTED()) {
      return;
    }

    if (!this._faceDetectionOptions) {
      this._faceDetectionOptions = new io.github.triniwiz.fancycamera.facedetection.FaceDetection.Options();
    }

    this._faceDetectionOptions.setMinimumFaceSize(value);

    const detector = IMAGE_PROCESSOR_Face();
    detector.setOptions(this._faceDetectionOptions);
  }

  [faceDetectionPerformanceModeProperty.setNative](value) {
    if (!FACE_DETECTION_SUPPORTED()) {
      return;
    }

    if (!this._faceDetectionOptions) {
      this._faceDetectionOptions = new io.github.triniwiz.fancycamera.facedetection.FaceDetection.Options();
    }

    this._faceDetectionOptions.setMinimumFaceSize(value);

    const detector = IMAGE_PROCESSOR_Face();
    detector.setOptions(this._faceDetectionOptions);
  }

  [imageLabelerConfidenceThresholdProperty.setNative](value) {
    if (!IMAGE_LABELING_SUPPORTED()) {
      return;
    }
    if (!this._imageLabelerOptions) {
      this._imageLabelerOptions = new io.github.triniwiz.fancycamera.imagelabeling.ImageLabeling.Options();
    }

    this._imageLabelerOptions.setConfidenceThreshold(value);

    const detector = IMAGE_PROCESSOR_Image();
    detector.setOptions(this._imageLabelerOptions);
  }

  [objectDetectionClassifyProperty.setNative](value) {
    if (!OBJECT_DETECTION_SUPPORTED()) {
      return;
    }

    if (!this._objectDetectionOptions) {
      this._objectDetectionOptions = new io.github.triniwiz.fancycamera.objectdetection.ObjectDetection.Options();
    }

    this._objectDetectionOptions.setClassification(value);

    const detector = IMAGE_PROCESSOR_Object();
    detector.setOptions(this._objectDetectionOptions);
  }

  [objectDetectionMultipleProperty.setNative](value) {
    if (!OBJECT_DETECTION_SUPPORTED()) {
      return;
    }

    if (!this._objectDetectionOptions) {
      this._objectDetectionOptions = new io.github.triniwiz.fancycamera.objectdetection.ObjectDetection.Options();
    }

    this._objectDetectionOptions.setMultiple(value);

    const detector = IMAGE_PROCESSOR_Object();
    detector.setOptions(this._objectDetectionOptions);
  }

  onLoaded() {
    super.onLoaded();
    this.startPreview();
  }

  onUnloaded() {
    this.stopPreview();
    super.onUnloaded();
  }

  disposeNativeView() {
    Application.android.off('activityRequestPermissions', this._permissionHandler);
    super.disposeNativeView();
  }

  public stopPreview(): void {
    this._camera.stopPreview();
  }

  public toggleCamera(): void {
    this._camera.toggleCamera();
  }

  public startPreview(): void {
    this._camera.startPreview();
  }

  requestCameraPermission() {
    return new Promise<void>((resolve, reject) => {
      Application.android.once('activityRequestPermissions', (args: AndroidActivityRequestPermissionsEventData) => {
        if (this._camera.hasCameraPermission()) {
          resolve();
        } else {
          reject();
        }
      });
      this._camera.requestCameraPermission();
    });
  }

  hasCameraPermission(): boolean {
    return this._camera.hasCameraPermission();
  }
}

export function detectWithStillImage(image: any, options?: StillImageDetectionOptions) {
  return new Promise((resolve, reject) => {
    let nativeImage;
    let rotation = 0;
    if (image instanceof ImageSource) {
      nativeImage = image.android;
      rotation = image.rotationAngle;
    } else if (image instanceof android.graphics.Bitmap) {
      nativeImage = image;
    } else {
      reject('Please use a valid Image');
    }

    let processors = []; /* None */
    switch (options?.detectorType) {
      case DetectionType.All:
        processors = IMAGE_PROCESSOR_All();
        break;
      case DetectionType.Barcode:
        processors = [IMAGE_PROCESSOR_Barcode()];
        break;
      case DetectionType.DigitalInk:
        processors = [];
        break;
      case DetectionType.Face:
        processors = [IMAGE_PROCESSOR_Face()];
        break;
      case DetectionType.Image:
        processors = [IMAGE_PROCESSOR_Image()];
        break;
      case DetectionType.Object:
        processors = [IMAGE_PROCESSOR_Object()];
        break;
      case DetectionType.Pose:
        processors = [IMAGE_PROCESSOR_Pose()];
        break;
      case DetectionType.Text:
        processors = [IMAGE_PROCESSOR_Text()];
        break;
      case DetectionType.Selfie:
        processors = [IMAGE_PROCESSOR_Selfie()];
        break;
      default:
        processors = [];
        break;
    }

    io.github.triniwiz.fancycamera.ML.processImage(
      nativeImage,
      rotation || 0,
      java.util.Arrays.asList(processors),
      new io.github.triniwiz.fancycamera.ImageAnalysisCallback({
        onSuccess(param0: any) {
          const results = {};
          const size = param0.size();
          for (let i = 0; i < size; i++) {
            const item = param0.get(i);
            const type = item[0];
            const result = item[1];
            try {
              if (type.toString() === DetectionType.Selfie) {
                results[type] = {
                  width: result.geWidth(),
                  height: result.getHeight(),
                  buffer: (ArrayBuffer as any).from(result.getBuffer()),
                };
              } else {
                results[type] = JSON.parse(result.toString());
              }
            } catch (e) {}
          }
          resolve(results);
        },
        onError(param0: string, param1: java.lang.Exception) {
          reject(param0);
        },
      })
    );
  });
}
