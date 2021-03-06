import { BarcodeFormats, barcodeFormatsProperty, CameraPosition, cameraPositionProperty, DetectionType, detectionTypeProperty, faceDetectionMinFaceSizeProperty, faceDetectionPerformanceModeProperty, faceDetectionTrackingEnabledProperty, imageLabelerConfidenceThresholdProperty, MLKitViewBase, objectDetectionClassifyProperty, objectDetectionMultipleProperty, pauseProperty, processEveryNthFrameProperty, torchOnProperty } from './common';
import { Application, Device, Utils, AndroidActivityRequestPermissionsEventData, ImageSource } from '@nativescript/core';
import lazy from '@nativescript/core/utils/lazy';
import { StillImageDetectionOptions } from '.';

const DetectorType_All = lazy(() => io.github.triniwiz.fancycamera.DetectorType.All);
const DetectorType_Barcode = lazy(() => io.github.triniwiz.fancycamera.DetectorType.Barcode);
const DetectorType_DigitalInk = lazy(() => io.github.triniwiz.fancycamera.DetectorType.DigitalInk);
const DetectorType_Face = lazy(() => io.github.triniwiz.fancycamera.DetectorType.Face);
const DetectorType_Image = lazy(() => io.github.triniwiz.fancycamera.DetectorType.Image);
const DetectorType_None = lazy(() => io.github.triniwiz.fancycamera.DetectorType.None);
const DetectorType_Object = lazy(() => io.github.triniwiz.fancycamera.DetectorType.Object);
const DetectorType_Pose = lazy(() => io.github.triniwiz.fancycamera.DetectorType.Pose);
const DetectorType_Text = lazy(() => io.github.triniwiz.fancycamera.DetectorType.Text);
const DetectorType_Selfie = lazy(() => (io as any).github.triniwiz.fancycamera.DetectorType.Selfie);

const BARCODE_SCANNER_SUPPORTED = lazy(() => typeof io.github.triniwiz.fancycamera?.barcodescanning?.BarcodeScanner !== 'undefined');
const TEXT_RECOGNITION_SUPPORTED = lazy(() => typeof io.github.triniwiz.fancycamera?.textrecognition?.TextRecognition !== 'undefined');
const FACE_DETECTION_SUPPORTED = lazy(() => typeof io.github.triniwiz.fancycamera?.facedetection?.FaceDetection !== 'undefined');
const IMAGE_LABELING_SUPPORTED = lazy(() => typeof io.github.triniwiz.fancycamera?.imagelabeling?.ImageLabeling !== 'undefined');
const OBJECT_DETECTION_SUPPORTED = lazy(() => typeof io.github.triniwiz.fancycamera?.objectdetection?.ObjectDetection !== 'undefined');
const POSE_DETECTION_SUPPORTED = lazy(() => typeof io.github.triniwiz.fancycamera?.posedetection?.PoseDetection !== 'undefined');

const TORCH_MODE_ON = lazy(() => io.github.triniwiz.fancycamera.CameraFlashMode.TORCH);
const TORCH_MODE_OFF = lazy(() => io.github.triniwiz.fancycamera.CameraFlashMode.OFF);

export { BarcodeFormats, barcodeFormatsProperty, CameraPosition, cameraPositionProperty, DetectionType, faceDetectionMinFaceSizeProperty, faceDetectionPerformanceModeProperty, faceDetectionTrackingEnabledProperty, imageLabelerConfidenceThresholdProperty, objectDetectionClassifyProperty, objectDetectionMultipleProperty } from './common';

export class MLKitView extends MLKitViewBase {
  #camera: io.github.triniwiz.fancycamera.FancyCamera;
  static #hasCamera: boolean;
  #onTextListener: io.github.triniwiz.fancycamera.ImageAnalysisCallback;
  #onBarcodeListener: io.github.triniwiz.fancycamera.ImageAnalysisCallback;
  #onDigitalInkListener: io.github.triniwiz.fancycamera.ImageAnalysisCallback;
  #onFaceListener: io.github.triniwiz.fancycamera.ImageAnalysisCallback;
  #onImageListener: io.github.triniwiz.fancycamera.ImageAnalysisCallback;
  #onObjectListener: io.github.triniwiz.fancycamera.ImageAnalysisCallback;
  #onPoseListener: io.github.triniwiz.fancycamera.ImageAnalysisCallback;
  #permissionHandler = (args: AndroidActivityRequestPermissionsEventData) => {
    if (this.pause) {
      return;
    }
    this.#camera.onPermissionHandler(args.requestCode, args.permissions, args.grantResults);
  };
  #barcodeScannerOptions: io.github.triniwiz.fancycamera.barcodescanning.BarcodeScanner.Options;
  #faceDetectionOptions: io.github.triniwiz.fancycamera.facedetection.FaceDetection.Options;
  #imageLabelerOptions: io.github.triniwiz.fancycamera.imagelabeling.ImageLabeling.Options;
  #objectDetectionOptions: io.github.triniwiz.fancycamera.objectdetection.ObjectDetection.Options;

  #getFancyCamera() {
    return (this.#camera as any)?.getChildAt?.(0) as io.github.triniwiz.fancycamera.CameraBase;
  }

  createNativeView() {
    this.#camera = new io.github.triniwiz.fancycamera.FancyCamera(this._context);
    Application.android.on('activityRequestPermissions', this.#permissionHandler);
    return this.#camera;
  }

  //@ts-ignore
  get retrieveLatestImage(): boolean {
    if (!this.#camera) {
      return false;
    }
    return this.#camera.getRetrieveLatestImage();
  }

  set retrieveLatestImage(value: boolean) {
    this.#camera.setRetrieveLatestImage(value);
  }

  #latestImage: ImageSource = null;

  //@ts-ignore
  get latestImage(): ImageSource {
    if (!this.#camera) {
      return null;
    }

    const image = this.#camera.getLatestImage();
    if (!image) {
      return null;
    }

    if (image !== this.#latestImage?.android) {
      this.#latestImage = new ImageSource(image);
    }

    return this.#latestImage;
  }

  [cameraPositionProperty.setNative](value: CameraPosition) {
    if (this.#camera) {
      switch (value) {
        case CameraPosition.FRONT:
          this.#camera.setPosition(io.github.triniwiz.fancycamera.CameraPosition.FRONT);
          break;
        default:
          this.#camera.setPosition(io.github.triniwiz.fancycamera.CameraPosition.BACK);
          break;
      }
    }
  }

  public static isAvailable() {
    if (this.#hasCamera === undefined) {
      if (parseInt(Device.sdkVersion) >= 21) {
        try {
          const manager: android.hardware.camera2.CameraManager = Utils.android.getApplicationContext().getSystemService(android.content.Context.CAMERA_SERVICE);
          this.#hasCamera = manager.getCameraIdList().length > 0;
        } catch (e) {
          this.#hasCamera = false;
        }
      } else {
        this.#hasCamera = android.hardware.Camera.getNumberOfCameras() > 0;
      }
    }
    return this.#hasCamera;
  }

  [torchOnProperty.setNative](value: boolean) {
    if (this.#camera) {
      if (value) {
        this.#camera.setFlashMode(TORCH_MODE_ON());
      } else {
        this.#camera.setFlashMode(TORCH_MODE_OFF());
      }
    }
  }

  [pauseProperty.setNative](value: boolean) {
    if (this.#camera) {
      this.#camera.setPause(value);
    }
  }

  [detectionTypeProperty.setNative](value) {
    let type = DetectorType_None();
    switch (value) {
      case DetectionType.All:
        type = DetectorType_All();
        break;
      case DetectionType.Barcode:
        type = DetectorType_Barcode();
        break;
      case DetectionType.DigitalInk:
        type = DetectorType_DigitalInk();
        break;
      case DetectionType.Face:
        type = DetectorType_Face();
        break;
      case DetectionType.Image:
        type = DetectorType_Image();
        break;
      case DetectionType.Object:
        type = DetectorType_Object();
        break;
      case DetectionType.Pose:
        type = DetectorType_Pose();
        break;
      case DetectionType.Text:
        type = DetectorType_Text();
        break;
      case DetectionType.Selfie:
        type = DetectorType_Selfie();
        break;
      default:
        type = DetectorType_None();
        break;
    }
    this.#camera.setDetectorType(type);
    this.#setListeners();
  }

  [processEveryNthFrameProperty.setNative](value) {
    if (this.#camera) {
      this.#camera.setProcessEveryNthFrame(value);
    }
  }

  initNativeView() {
    super.initNativeView();
    this.#setListeners();
  }

  #setListeners() {
    const ref = new WeakRef(this);
    if (!this.#onTextListener && (this.detectionType === DetectionType.Text || this.detectionType === DetectionType.All)) {
      this.#onTextListener = new io.github.triniwiz.fancycamera.ImageAnalysisCallback({
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
      this.#camera.setOnTextRecognitionListener(this.#onTextListener);
    }

    if (!this.#onBarcodeListener && (this.detectionType.includes(DetectionType.Barcode) || this.detectionType.includes(DetectionType.All))) {
      this.#onBarcodeListener = new io.github.triniwiz.fancycamera.ImageAnalysisCallback({
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
      this.#camera.setOnBarcodeScanningListener(this.#onBarcodeListener);
    }

    // todo
    if (!this.#onDigitalInkListener && (this.detectionType === DetectionType.DigitalInk || this.detectionType === DetectionType.All)) {
      /* this.#onDigitalInkListener = new io.github.triniwiz.fancycamera.ImageAnalysisCallback({
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

    if (!this.#onFaceListener && (this.detectionType === DetectionType.Face || this.detectionType === DetectionType.All)) {
      if (FACE_DETECTION_SUPPORTED()) {
        this.#faceDetectionOptions = new io.github.triniwiz.fancycamera.facedetection.FaceDetection.Options();
      }
      this.#onFaceListener = new io.github.triniwiz.fancycamera.ImageAnalysisCallback({
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
      this.#camera.setOnFacesDetectedListener(this.#onFaceListener);
    }

    if (!this.#onImageListener && (this.detectionType === DetectionType.Image || this.detectionType === DetectionType.All)) {
      this.#onImageListener = new io.github.triniwiz.fancycamera.ImageAnalysisCallback({
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
      this.#camera.setOnImageLabelingListener(this.#onImageListener);
    }

    if (!this.#onObjectListener && (this.detectionType === DetectionType.Object || this.detectionType === DetectionType.All)) {
      this.#onObjectListener = new io.github.triniwiz.fancycamera.ImageAnalysisCallback({
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
      this.#camera.setOnObjectDetectedListener(this.#onObjectListener);
    }

    if (!this.#onPoseListener && (this.detectionType === DetectionType.Pose || this.detectionType === DetectionType.All)) {
      this.#onPoseListener = new io.github.triniwiz.fancycamera.ImageAnalysisCallback({
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
      this.#camera.setOnPoseDetectedListener(this.#onPoseListener);
    }
  }

  [barcodeFormatsProperty.setNative](value: BarcodeFormats[]) {
    if (!BARCODE_SCANNER_SUPPORTED()) {
      return;
    }
    if (!this.#barcodeScannerOptions) {
      this.#barcodeScannerOptions = new io.github.triniwiz.fancycamera.barcodescanning.BarcodeScanner.Options();
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

      this.#barcodeScannerOptions.setBarcodeFormat(formats);
    }

    this.#camera.setBarcodeScannerOptions(this.#barcodeScannerOptions);
  }

  [faceDetectionTrackingEnabledProperty.setNative](value) {
    if (!FACE_DETECTION_SUPPORTED()) {
      return;
    }
    if (!this.#faceDetectionOptions) {
      this.#faceDetectionOptions = new io.github.triniwiz.fancycamera.facedetection.FaceDetection.Options();
    }

    this.#faceDetectionOptions.setFaceTracking(value);

    this.#camera.setFaceDetectionOptions(this.#faceDetectionOptions);
  }

  [faceDetectionMinFaceSizeProperty.setNative](value) {
    if (!FACE_DETECTION_SUPPORTED()) {
      return;
    }

    if (!this.#faceDetectionOptions) {
      this.#faceDetectionOptions = new io.github.triniwiz.fancycamera.facedetection.FaceDetection.Options();
    }

    this.#faceDetectionOptions.setMinimumFaceSize(value);
    this.#camera.setFaceDetectionOptions(this.#faceDetectionOptions);
  }

  [faceDetectionPerformanceModeProperty.setNative](value) {
    if (!FACE_DETECTION_SUPPORTED()) {
      return;
    }

    if (!this.#faceDetectionOptions) {
      this.#faceDetectionOptions = new io.github.triniwiz.fancycamera.facedetection.FaceDetection.Options();
    }

    this.#faceDetectionOptions.setMinimumFaceSize(value);
    this.#camera.setFaceDetectionOptions(this.#faceDetectionOptions);
  }

  [imageLabelerConfidenceThresholdProperty.setNative](value) {
    if (!IMAGE_LABELING_SUPPORTED()) {
      return;
    }
    if (!this.#imageLabelerOptions) {
      this.#imageLabelerOptions = new io.github.triniwiz.fancycamera.imagelabeling.ImageLabeling.Options();
    }

    this.#imageLabelerOptions.setConfidenceThreshold(value);
    this.#camera.setImageLabelingOptions(this.#imageLabelerOptions);
  }

  [objectDetectionClassifyProperty.setNative](value) {
    if (!OBJECT_DETECTION_SUPPORTED()) {
      return;
    }

    if (!this.#objectDetectionOptions) {
      this.#objectDetectionOptions = new io.github.triniwiz.fancycamera.objectdetection.ObjectDetection.Options();
    }

    this.#objectDetectionOptions.setClassification(value);
    this.#camera.setObjectDetectionOptions(this.#objectDetectionOptions);
  }

  [objectDetectionMultipleProperty.setNative](value) {
    if (!OBJECT_DETECTION_SUPPORTED()) {
      return;
    }

    if (!this.#objectDetectionOptions) {
      this.#objectDetectionOptions = new io.github.triniwiz.fancycamera.objectdetection.ObjectDetection.Options();
    }

    this.#objectDetectionOptions.setMultiple(value);
    this.#camera.setObjectDetectionOptions(this.#objectDetectionOptions);
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
    Application.android.off('activityRequestPermissions', this.#permissionHandler);
    super.disposeNativeView();
  }

  public stopPreview(): void {
    this.#camera.stopPreview();
  }

  public toggleCamera(): void {
    this.#camera.toggleCamera();
  }

  public startPreview(): void {
    this.#camera.startPreview();
  }

  requestCameraPermission() {
    return new Promise<void>((resolve, reject) => {
      Application.android.once('activityRequestPermissions', (args: AndroidActivityRequestPermissionsEventData) => {
        if (this.#camera.hasCameraPermission()) {
          resolve();
        } else {
          reject();
        }
      });
      this.#camera.requestCameraPermission();
    });
  }

  hasCameraPermission(): boolean {
    return this.#camera.hasCameraPermission();
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

    (io as any).github.triniwiz.fancycamera.ML.processImage(
      nativeImage,
      rotation || 0,
      JSON.stringify({
        ...{
          barcodeScanning: {
            barcodeFormat: [0],
          },
          faceDetection: {},
          imageLabeling: {},
          objectDetection: {},
          selfieSegmentation: {},
        },
        ...options,
        ...{ detectorType: type },
      }),
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
