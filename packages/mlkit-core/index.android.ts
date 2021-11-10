import { BarcodeFormats, barcodeFormatsProperty, CameraPosition, cameraPositionProperty, DetectionType, MLKitViewBase } from "./common";
import { Application, Device, Utils, AndroidActivityRequestPermissionsEventData } from '@nativescript/core';
import lazy from '@nativescript/core/utils/lazy';

const DetectorType_All = lazy(() => io.github.triniwiz.fancycamera.DetectorType.All);
const DetectorType_Barcode = lazy(() => io.github.triniwiz.fancycamera.DetectorType.Barcode);
const DetectorType_DigitalInk = lazy(() => io.github.triniwiz.fancycamera.DetectorType.DigitalInk);
const DetectorType_Face = lazy(() => io.github.triniwiz.fancycamera.DetectorType.Face);
const DetectorType_Image = lazy(() => io.github.triniwiz.fancycamera.DetectorType.Image);
const DetectorType_None = lazy(() => io.github.triniwiz.fancycamera.DetectorType.None);
const DetectorType_Object = lazy(() => io.github.triniwiz.fancycamera.DetectorType.Object);
const DetectorType_Pose = lazy(() => io.github.triniwiz.fancycamera.DetectorType.Pose);
const DetectorType_Text = lazy(() => io.github.triniwiz.fancycamera.DetectorType.Text);

const BARCODE_SCANNER_SUPPORTED = lazy(() => typeof io.github.triniwiz.fancycamera?.barcodescanning?.BarcodeScanner);
const TEXT_RECOGNITION_SUPPORTED = lazy(() => typeof io.github.triniwiz.fancycamera?.textrecognition?.TextRecognition);
const FACE_DETECTION_SUPPORTED = lazy(() => typeof io.github.triniwiz.fancycamera?.facedetection?.FaceDetection);
const IMAGE_LABELING_SUPPORTED = lazy(() => typeof io.github.triniwiz.fancycamera?.imagelabeling?.ImageLabeling);
const OBJECT_DETECTION_SUPPORTED = lazy(() => typeof io.github.triniwiz.fancycamera?.objectdetection?.ObjectDetection);
const POSE_DETECTION_SUPPORTED = lazy(() => typeof io.github.triniwiz.fancycamera?.posedetection?.PoseDetection);


export class MLKitView extends MLKitViewBase {
    #camera: io.github.triniwiz.fancycamera.FancyCamera;
    static #hasCamera: boolean;
    #onDetection: (data: { [key: string]: any }) => void;
    #onTextListener: io.github.triniwiz.fancycamera.ImageAnalysisCallback;
    #onBarcodeListener: io.github.triniwiz.fancycamera.ImageAnalysisCallback;
    #onDigitalInkListener: io.github.triniwiz.fancycamera.ImageAnalysisCallback;
    #onFaceListener: io.github.triniwiz.fancycamera.ImageAnalysisCallback;
    #onImageListener: io.github.triniwiz.fancycamera.ImageAnalysisCallback;
    #onObjectListener: io.github.triniwiz.fancycamera.ImageAnalysisCallback;
    #onPoseListener: io.github.triniwiz.fancycamera.ImageAnalysisCallback;
    #permissionHandler = (args: AndroidActivityRequestPermissionsEventData) => {
        this.#camera.onPermissionHandler(
            args.requestCode, args.permissions, args.grantResults
        )
    }
    #barcodeScannerOptions: io.github.triniwiz.fancycamera.barcodescanning.BarcodeScanner.Options;
    #faceDetectionOptions: io.github.triniwiz.fancycamera.facedetection.FaceDetection.Options;
    

    #getFancyCamera() {
        return (this.#camera as any)?.getChildAt?.(0) as io.github.triniwiz.fancycamera.CameraBase;
    }

    createNativeView() {
        this.#camera = new io.github.triniwiz.fancycamera.FancyCamera(this._context);
        Application.android.on('activityRequestPermissions', this.#permissionHandler);
        return this.#camera;
    }


    [cameraPositionProperty.setNative](value: CameraPosition) {
        if (this.#camera) {
            switch (value) {
                case CameraPosition.FRONT:
                    this.#camera.setPosition(
                        io.github.triniwiz.fancycamera.CameraPosition.FRONT
                    )
                    break;
                default:
                    this.#camera.setPosition(
                        io.github.triniwiz.fancycamera.CameraPosition.BACK
                    )
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

    //@ts-ignore
    set onDetection(value) {
        this.#onDetection = value;
        const ref = new WeakRef(this);
        if (!this.#onTextListener && (this.dectectionType === DetectionType.Text || this.dectectionType === DetectionType.All)) {
            this.#onTextListener = new io.github.triniwiz.fancycamera.ImageAnalysisCallback({
                onSuccess(param0: string) {
                    try {
                        ref?.get?.().onDetection?.(JSON.parse(param0));
                    } catch (e) { }
                },
                onError(param0: string, param1: java.lang.Exception) {

                }
            });
            this.#camera.setOnTextRecognitionListener(this.#onTextListener);
        }

        if (!this.#onBarcodeListener && (this.dectectionType === DetectionType.Barcode || this.dectectionType === DetectionType.All)) {
            this.#onBarcodeListener = new io.github.triniwiz.fancycamera.ImageAnalysisCallback({
                onSuccess(param0: string) {
                    try {
                        ref?.get?.().onDetection?.(JSON.parse(param0));
                    } catch (e) { }
                },
                onError(param0: string, param1: java.lang.Exception) {

                }
            });
            this.#camera.setOnBarcodeScanningListener(this.#onBarcodeListener);
        }

        // todo
        if (!this.#onDigitalInkListener && (this.dectectionType === DetectionType.DigitalInk || this.dectectionType === DetectionType.All)) {
            /* this.#onDigitalInkListener = new io.github.triniwiz.fancycamera.ImageAnalysisCallback({
                 onSuccess(param0: string) {
                     try {
                         ref?.get?.().onDetection?.(JSON.parse(param0));
                     } catch (e) { }
                  },
                 onError(param0: string, param1: java.lang.Exception) {
 
                 }
             }); */
        }

        if (!this.#onFaceListener && (this.dectectionType === DetectionType.Face || this.dectectionType === DetectionType.All)) {
            this.#faceDetectionOptions = new io.github.triniwiz.fancycamera.facedetection.FaceDetection.Options();
            this.#onFaceListener = new io.github.triniwiz.fancycamera.ImageAnalysisCallback({
                onSuccess(param0: string) {
                    try {
                        ref?.get?.().onDetection?.(JSON.parse(param0));
                    } catch (e) { }
                },
                onError(param0: string, param1: java.lang.Exception) {

                }
            });
            this.#camera.setOnFacesDetectedListener(this.#onFaceListener);
        }

        if (!this.#onImageListener && (this.dectectionType === DetectionType.Image || this.dectectionType === DetectionType.All)) {
            this.#onImageListener = new io.github.triniwiz.fancycamera.ImageAnalysisCallback({
                onSuccess(param0: string) {
                    try {
                        ref?.get?.().onDetection?.(JSON.parse(param0));
                    } catch (e) { }
                },
                onError(param0: string, param1: java.lang.Exception) {

                }
            });
            this.#camera.setOnImageLabelingListener(this.#onImageListener);
        }

        if (!this.#onObjectListener && (this.dectectionType === DetectionType.Object || this.dectectionType === DetectionType.All)) {
            this.#onObjectListener = new io.github.triniwiz.fancycamera.ImageAnalysisCallback({
                onSuccess(param0: string) {
                    try {
                        ref?.get?.().onDetection?.(JSON.parse(param0));
                    } catch (e) { }
                },
                onError(param0: string, param1: java.lang.Exception) {

                }
            });
            this.#camera.setOnObjectDetectedListener(this.#onObjectListener);
        }

        if (!this.#onPoseListener && (this.dectectionType === DetectionType.Pose || this.dectectionType === DetectionType.All)) {
            this.#onPoseListener = new io.github.triniwiz.fancycamera.ImageAnalysisCallback({
                onSuccess(param0: string) {
                    try {
                        ref?.get?.().onDetection?.(JSON.parse(param0));
                    } catch (e) { }
                },
                onError(param0: string, param1: java.lang.Exception) {

                }
            });
            this.#camera.setOnPoseDetectedListener(this.#onPoseListener);
        }

        let type = DetectorType_None();
        switch (this.dectectionType) {
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
        }

        this.#camera.setDetectorType(type);

    }

    get onDetection() {
        return this.#onDetection;
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
            if (value.indexOf(BarcodeFormats.ALL)) {
                formats = Array.create('io.github.triniwiz.fancycamera.barcodescanning.BarcodeScanner.BarcodeFormat', 1);
                formats[0] = io.github.triniwiz.fancycamera.barcodescanning.BarcodeScanner.BarcodeFormat.ALL;
            } else {
                formats = value.map(format => {
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
                })
            }

            this.#barcodeScannerOptions.setBarcodeFormat(formats);
        }

        this.#getFancyCamera().setBarcodeScannerOptions(this.#barcodeScannerOptions);
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