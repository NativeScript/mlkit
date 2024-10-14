declare namespace io {
  export namespace github {
    export namespace triniwiz {
      export namespace fancycamera {
        export class BitmapUtils {
          public static class: java.lang.Class<io.github.triniwiz.fancycamera.BitmapUtils>;
          public static INSTANCE: io.github.triniwiz.fancycamera.BitmapUtils;
          public getBitmap(nv21Buffer: androidx.camera.core.ImageProxy): globalAndroid.graphics.Bitmap;
          public getBitmap(stream: java.nio.ByteBuffer, bmp: io.github.triniwiz.fancycamera.FrameMetadata): globalAndroid.graphics.Bitmap;
          public getBitmap(stream: androidNative.Array<number>, bmp: io.github.triniwiz.fancycamera.FrameMetadata): globalAndroid.graphics.Bitmap;
          public getBitmapFromContentUri(orientation: globalAndroid.content.ContentResolver, rotationDegrees: globalAndroid.net.Uri): globalAndroid.graphics.Bitmap;
        }
      }
    }
  }
}

declare namespace io {
  export namespace github {
    export namespace triniwiz {
      export namespace fancycamera {
        export class Camera extends io.github.triniwiz.fancycamera.CameraBase {
          public static class: java.lang.Class<io.github.triniwiz.fancycamera.Camera>;
          public getDisplayRatio(): string;
          public cameraRecording(): boolean;
          public getRetrieveLatestImage(): boolean;
          public setZoomRatio(value: number): void;
          public getAllowExifRotation(): boolean;
          public getDisableHEVC(): boolean;
          public getAutoFocus(): boolean;
          public getQuality(): io.github.triniwiz.fancycamera.Quality;
          public isStarted(): boolean;
          public startPreview(): void;
          public getMaxAudioBitRate(): number;
          public setMaxAudioBitRate(value: number): void;
          public setAutoSquareCrop(value: boolean): void;
          public getWhiteBalance(): io.github.triniwiz.fancycamera.WhiteBalance;
          public getImageProcessors(): androidx.databinding.ObservableList<io.github.triniwiz.fancycamera.ImageProcessor<any>>;
          public isWideAngleSupported(): boolean;
          public isForceStopping(): boolean;
          public setRotation(value: io.github.triniwiz.fancycamera.CameraOrientation): void;
          public getAutoSquareCrop(): boolean;
          public getPictureSize(): string;
          public getSaveToGallery(): boolean;
          public isRecording(): boolean;
          public startRecording(): void;
          public getNumberOfCameras(): number;
          public getSupportedRatios(): androidNative.Array<string>;
          public release(): void;
          public getLock(): any;
          public setMaxVideoBitrate(value: number): void;
          public setZoom(value: number): void;
          public orientationUpdated(): void;
          public setLock(value: any): void;
          public getRotation(): io.github.triniwiz.fancycamera.CameraOrientation;
          public setForceStopping(value: boolean): void;
          public setQuality(value: io.github.triniwiz.fancycamera.Quality): void;
          public setDisableHEVC(value: boolean): void;
          public setWhiteBalance(value: io.github.triniwiz.fancycamera.WhiteBalance): void;
          public stop(): void;
          public isAudioLevelsEnabled(): boolean;
          public constructor(context: globalAndroid.content.Context);
          public setImageProcessors(value: androidx.databinding.ObservableList<io.github.triniwiz.fancycamera.ImageProcessor<any>>): void;
          public setRetrieveLatestImage(value: boolean): void;
          public setDisplayRatio(value: string): void;
          public getAmplitudeEMA(): number;
          public stopPreview(): void;
          public getAvailablePictureSizes(thisCollection$iv: string): androidNative.Array<io.github.triniwiz.fancycamera.Size>;
          public setDefaultLens(value: io.github.triniwiz.fancycamera.CameraLens): void;
          public getPosition(): io.github.triniwiz.fancycamera.CameraPosition;
          public setEnableTapToFocus(value: boolean): void;
          public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
          public setCamera(value: globalAndroid.hardware.Camera): void;
          public getFlashMode(): io.github.triniwiz.fancycamera.CameraFlashMode;
          public setEnablePinchZoom(value: boolean): void;
          public setMaxVideoFrameRate(value: number): void;
          public getMaxVideoBitrate(): number;
          public getCamera(): globalAndroid.hardware.Camera;
          public takePhoto(): void;
          public getMaxVideoFrameRate(): number;
          public getPreviewSurface(): any;
          public setAllowExifRotation(value: boolean): void;
          public getAmplitude(): number;
          public getZoom(): number;
          public setRecording(value: boolean): void;
          public getEnableTapToFocus(): boolean;
          public constructor(callback: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number);
          public setPause(value: boolean): void;
          public getEnablePinchZoom(): boolean;
          public setSaveToGallery(value: boolean): void;
          public getDefaultLens(): io.github.triniwiz.fancycamera.CameraLens;
          public setPosition(value: io.github.triniwiz.fancycamera.CameraPosition): void;
          public toggleCamera(): void;
          public setStarted(value: boolean): void;
          public stopRecording(): void;
          public getPause(): boolean;
          public hasFlash(): boolean;
          public setAudioLevelsEnabled(value: boolean): void;
          public setAutoFocus(value: boolean): void;
          public getDb(): number;
          public getZoomRatio(): number;
        }
        export namespace Camera {
          export class WhenMappings {
            public static class: java.lang.Class<io.github.triniwiz.fancycamera.Camera.WhenMappings>;
          }
        }
      }
    }
  }
}

declare namespace io {
  export namespace github {
    export namespace triniwiz {
      export namespace fancycamera {
        export class Camera2 extends io.github.triniwiz.fancycamera.CameraBase {
          public static class: java.lang.Class<io.github.triniwiz.fancycamera.Camera2>;
          public setEnablePinchZoom(value: boolean): void;
          public constructor(callback: globalAndroid.content.Context, $this$imageProcessors_u24lambda_u240: globalAndroid.util.AttributeSet, $i$f$afterMeasured: number);
          public getDisplayRatio(): string;
          public cameraRecording(): boolean;
          public getMinZoomRatio(): number;
          public getRetrieveLatestImage(): boolean;
          public getAllowExifRotation(): boolean;
          public getDisableHEVC(): boolean;
          public getAutoFocus(): boolean;
          public getQuality(): io.github.triniwiz.fancycamera.Quality;
          public getMaxAudioBitRate(): number;
          public setMaxAudioBitRate(value: number): void;
          public startPreview(): void;
          public setFlashMode(test: io.github.triniwiz.fancycamera.CameraFlashMode): void;
          public setAutoSquareCrop(value: boolean): void;
          public setStoredZoom(value: number): void;
          public getWhiteBalance(): io.github.triniwiz.fancycamera.WhiteBalance;
          public getImageProcessors(): androidx.databinding.ObservableList<io.github.triniwiz.fancycamera.ImageProcessor<any>>;
          public isWideAngleSupported(): boolean;
          public setAmplitudeEMA(value: number): void;
          public setRotation(value: io.github.triniwiz.fancycamera.CameraOrientation): void;
          public getAutoSquareCrop(): boolean;
          public getDeviceCameraInfo(): java.util.List<io.github.triniwiz.fancycamera.Camera2.CameraInfo>;
          public getPictureSize(): string;
          public getSaveToGallery(): boolean;
          public setPosition(value: io.github.triniwiz.fancycamera.CameraPosition): void;
          public startRecording(): void;
          public setQuality(wasBound: io.github.triniwiz.fancycamera.Quality): void;
          public getNumberOfCameras(): number;
          public getBackCameraId(): string;
          public getSupportedRatios(): androidNative.Array<string>;
          public release(): void;
          public setMaxVideoBitrate(value: number): void;
          public setZoom(value: number): void;
          public orientationUpdated(): void;
          public getRotation(): io.github.triniwiz.fancycamera.CameraOrientation;
          public setCameraWithId(id: string): void;
          public setDisableHEVC(value: boolean): void;
          public setWhiteBalance(value: io.github.triniwiz.fancycamera.WhiteBalance): void;
          public isAudioLevelsEnabled(): boolean;
          public stop(): void;
          public constructor(context: globalAndroid.content.Context);
          public setImageProcessors(value: androidx.databinding.ObservableList<io.github.triniwiz.fancycamera.ImageProcessor<any>>): void;
          public setZoomRatio(value: number): void;
          public setRetrieveLatestImage(value: boolean): void;
          public setDisplayRatio(value: string): void;
          public getAmplitudeEMA(): number;
          public stopPreview(): void;
          public getAvailablePictureSizes(thisCollection$iv: string): androidNative.Array<io.github.triniwiz.fancycamera.Size>;
          public setDb(value: number): void;
          public getPosition(): io.github.triniwiz.fancycamera.CameraPosition;
          public setEnableTapToFocus(value: boolean): void;
          public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
          public getMaxZoomRatio(): number;
          public setExternalCameraId(value: string): void;
          public getFlashMode(): io.github.triniwiz.fancycamera.CameraFlashMode;
          public setMaxVideoFrameRate(value: number): void;
          public getMaxVideoBitrate(): number;
          public getCurrentCameraInfo(): io.github.triniwiz.fancycamera.Camera2.CameraInfo;
          public getMaxVideoFrameRate(): number;
          public takePhoto(): void;
          public getPreviewSurface(): any;
          public setAllowExifRotation(value: boolean): void;
          public getAmplitude(): number;
          public getZoom(): number;
          public getExternalCameraId(): string;
          public getEnableTapToFocus(): boolean;
          public getStoredZoom(): number;
          public getEnablePinchZoom(): boolean;
          public setPause(value: boolean): void;
          public setSaveToGallery(value: boolean): void;
          public setAmplitude(value: number): void;
          public getDefaultLens(): io.github.triniwiz.fancycamera.CameraLens;
          public toggleCamera(): void;
          public stopRecording(): void;
          public getPause(): boolean;
          public hasFlash(): boolean;
          public setAutoFocus(value: boolean): void;
          public setDefaultLens(value: io.github.triniwiz.fancycamera.CameraLens): void;
          public getStoredZoomRatio(): number;
          public setStoredZoomRatio(value: number): void;
          public getDb(): number;
          public setAudioLevelsEnabled(value: boolean): void;
          public getFrontCameraId(): string;
          public getZoomRatio(): number;
        }
        export namespace Camera2 {
          export class Camera2CameraCharacteristicsImpl extends io.github.triniwiz.fancycamera.Camera2.CameraCharacteristicsImpl {
            public static class: java.lang.Class<io.github.triniwiz.fancycamera.Camera2.Camera2CameraCharacteristicsImpl>;
            public constructor(characteristics: globalAndroid.hardware.camera2.CameraCharacteristics);
            public getCameraCharacteristic(param0: globalAndroid.hardware.camera2.CameraCharacteristics.Key): any;
            public getCameraCharacteristic(key: globalAndroid.hardware.camera2.CameraCharacteristics.Key): any;
          }
          export class CameraCharacteristicsImpl {
            public static class: java.lang.Class<io.github.triniwiz.fancycamera.Camera2.CameraCharacteristicsImpl>;
            /**
             * Constructs a new instance of the io.github.triniwiz.fancycamera.Camera2$CameraCharacteristicsImpl interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: { getCameraCharacteristic(param0: globalAndroid.hardware.camera2.CameraCharacteristics.Key): any });
            public constructor();
            public getCameraCharacteristic(param0: globalAndroid.hardware.camera2.CameraCharacteristics.Key): any;
          }
          export class CameraInfo {
            public static class: java.lang.Class<io.github.triniwiz.fancycamera.Camera2.CameraInfo>;
            public getMaxZoom(): number;
            public getMinZoom(): number;
            public getFocalLengths(): androidNative.Array<number>;
            public toString(): string;
            public getActiveSize(): globalAndroid.graphics.Rect;
            public getLensFacing(): number;
            public constructor(id: string, implementationType: string, characteristics: io.github.triniwiz.fancycamera.Camera2.CameraCharacteristicsImpl);
            public getZoomRange(): globalAndroid.util.Range<java.lang.Float>;
            public getId(): string;
            public getMaxDigitalZoom(): number;
            public getImplementationType(): string;
            public getCapabilities(): androidNative.Array<number>;
            public getHardwareLevel(): number;
          }
          export class CameraxCameraCharacteristicsImpl extends io.github.triniwiz.fancycamera.Camera2.CameraCharacteristicsImpl {
            public static class: java.lang.Class<io.github.triniwiz.fancycamera.Camera2.CameraxCameraCharacteristicsImpl>;
            public constructor(characteristics: androidx.camera.camera2.interop.Camera2CameraInfo);
            public getCameraCharacteristic(param0: globalAndroid.hardware.camera2.CameraCharacteristics.Key): any;
            public getCameraCharacteristic(key: globalAndroid.hardware.camera2.CameraCharacteristics.Key): any;
          }
          export class WhenMappings {
            public static class: java.lang.Class<io.github.triniwiz.fancycamera.Camera2.WhenMappings>;
          }
        }
      }
    }
  }
}

declare namespace io {
  export namespace github {
    export namespace triniwiz {
      export namespace fancycamera {
        export abstract class CameraBase {
          public static class: java.lang.Class<io.github.triniwiz.fancycamera.CameraBase>;
          public setOnImageLabelingListener$fancycamera_release(value: io.github.triniwiz.fancycamera.ImageAnalysisCallback): void;
          public setPause(param0: boolean): void;
          public getAllowExifRotation(): boolean;
          public setLatestImage$fancycamera_release(value: globalAndroid.graphics.Bitmap): void;
          public finalize(): void;
          public setMaxVideoFrameRate(param0: number): void;
          public getAutoFocus(): boolean;
          public setOnImageLabelingListener(callback: io.github.triniwiz.fancycamera.ImageAnalysisCallback): void;
          public setEnableAudio(value: boolean): void;
          public setAllowExifRotation(param0: boolean): void;
          public startPreview(): void;
          public getDATETIME_FORMAT$fancycamera_release(): java.lang.ThreadLocal<java.text.SimpleDateFormat>;
          public setAutoSquareCrop(param0: boolean): void;
          public setOnSelfieSegmentationListener(callback: io.github.triniwiz.fancycamera.ImageAnalysisCallback): void;
          public isWideAngleSupported(): boolean;
          public setRotation(param0: io.github.triniwiz.fancycamera.CameraOrientation): void;
          public getCamcorderProfile$fancycamera_release(profile: io.github.triniwiz.fancycamera.Quality): globalAndroid.media.CamcorderProfile;
          public setOnFacesDetectedListener$fancycamera_release(value: io.github.triniwiz.fancycamera.ImageAnalysisCallback): void;
          public getOnPoseDetectedListener$fancycamera_release(): io.github.triniwiz.fancycamera.ImageAnalysisCallback;
          public getSaveToGallery(): boolean;
          public setOnObjectDetectedListener$fancycamera_release(value: io.github.triniwiz.fancycamera.ImageAnalysisCallback): void;
          public setQuality(param0: io.github.triniwiz.fancycamera.Quality): void;
          public setListener$fancycamera_release(value: io.github.triniwiz.fancycamera.CameraEventListener): void;
          public getSupportedRatios(): androidNative.Array<string>;
          public hasCameraPermission(): boolean;
          public setOnBarcodeScanningListener(callback: io.github.triniwiz.fancycamera.ImageAnalysisCallback): void;
          public setSaveToGallery(param0: boolean): void;
          public setAudioLevelsEnabled(param0: boolean): void;
          public setOnPoseDetectedListener$fancycamera_release(value: io.github.triniwiz.fancycamera.ImageAnalysisCallback): void;
          public setOnBarcodeScanningListener$fancycamera_release(value: io.github.triniwiz.fancycamera.ImageAnalysisCallback): void;
          public setMTimerTask$fancycamera_release(value: java.util.TimerTask): void;
          public orientationUpdated(): void;
          public convertFromExifDateTime$fancycamera_release(dateTime: string): java.util.Date;
          public getOnSelfieSegmentationListener$fancycamera_release(): io.github.triniwiz.fancycamera.ImageAnalysisCallback;
          public getDATE_FORMAT$fancycamera_release(): java.lang.ThreadLocal<java.text.SimpleDateFormat>;
          public setCurrentOrientation(value: number): void;
          public constructor(context: globalAndroid.content.Context);
          public getCurrentFrame$fancycamera_release(): number;
          public setRecorder$fancycamera_release(value: globalAndroid.media.MediaRecorder): void;
          public getOnSurfaceUpdateListener$fancycamera_release(): io.github.triniwiz.fancycamera.SurfaceUpdateListener;
          public getMDuration$fancycamera_release(): number;
          public setRetrieveLatestImage(param0: boolean): void;
          public getPosition(): io.github.triniwiz.fancycamera.CameraPosition;
          public resetCurrentFrame$fancycamera_release(): void;
          public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
          public getProcessEveryNthFrame(): number;
          public getMainHandler$fancycamera_release(): globalAndroid.os.Handler;
          public startDurationTimer$fancycamera_release(): void;
          public stopDurationTimer$fancycamera_release(): void;
          public getDuration(): number;
          public requestAudioPermission(): void;
          public hasAudioPermission(): boolean;
          public getOnBarcodeScanningListener$fancycamera_release(): io.github.triniwiz.fancycamera.ImageAnalysisCallback;
          public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number);
          public getMaxVideoBitrate(): number;
          public initListener$fancycamera_release(instance: globalAndroid.media.MediaRecorder): void;
          public setFlashMode(param0: io.github.triniwiz.fancycamera.CameraFlashMode): void;
          public getMTimerTask$fancycamera_release(): java.util.TimerTask;
          public getMaxVideoFrameRate(): number;
          public takePhoto(): void;
          public setOnTextRecognitionListener(callback: io.github.triniwiz.fancycamera.ImageAnalysisCallback): void;
          public getAvailablePictureSizes(param0: string): androidNative.Array<io.github.triniwiz.fancycamera.Size>;
          public getRecorder$fancycamera_release(): globalAndroid.media.MediaRecorder;
          public setAutoFocus(param0: boolean): void;
          public getEnableTapToFocus(): boolean;
          public getEnablePinchZoom(): boolean;
          public setonSurfaceUpdateListener(callback: io.github.triniwiz.fancycamera.SurfaceUpdateListener): void;
          public getVIDEO_RECORDER_PERMISSIONS_REQUEST$fancycamera_release(): number;
          public stopRecording(): void;
          public hasFlash(): boolean;
          public getEnableAudio(): boolean;
          public setMaxAudioBitRate(param0: number): void;
          public getDb(): number;
          public convertToExifDateTime$fancycamera_release(timestamp: number): string;
          public stringSizeToSize$fancycamera_release(width: string): io.github.triniwiz.fancycamera.Size;
          public cameraRecording(): boolean;
          public getDisplayRatio(): string;
          public getRetrieveLatestImage(): boolean;
          public deInitListener$fancycamera_release(): void;
          public setEnablePinchZoom(param0: boolean): void;
          public toggleFlash(): void;
          public getDisableHEVC(): boolean;
          public getQuality(): io.github.triniwiz.fancycamera.Quality;
          public requestCameraPermission(): void;
          public getMaxAudioBitRate(): number;
          public getWhiteBalance(): io.github.triniwiz.fancycamera.WhiteBalance;
          public getImageProcessors(): androidx.databinding.ObservableList<io.github.triniwiz.fancycamera.ImageProcessor<any>>;
          public getTIME_FORMAT$fancycamera_release(): java.lang.ThreadLocal<java.text.SimpleDateFormat>;
          public hasStoragePermission(): boolean;
          public getListener$fancycamera_release(): io.github.triniwiz.fancycamera.CameraEventListener;
          public isProcessingEveryNthFrame$fancycamera_release(): boolean;
          public getAutoSquareCrop(): boolean;
          public getLatestImage$fancycamera_release(): globalAndroid.graphics.Bitmap;
          public getOverridePhotoWidth(): number;
          public setWhiteBalance(param0: io.github.triniwiz.fancycamera.WhiteBalance): void;
          public getPictureSize(): string;
          public startRecording(): void;
          public setDisableHEVC(param0: boolean): void;
          public incrementCurrentFrame$fancycamera_release(): void;
          public setCurrentFrame$fancycamera_release(value: number): void;
          public getNumberOfCameras(): number;
          public setZoom(param0: number): void;
          public requestPermission(): void;
          public release(): void;
          public getOnTextRecognitionListener$fancycamera_release(): io.github.triniwiz.fancycamera.ImageAnalysisCallback;
          public setOnSelfieSegmentationListener$fancycamera_release(value: io.github.triniwiz.fancycamera.ImageAnalysisCallback): void;
          public setGettingAudioLevels$fancycamera_release(value: boolean): void;
          public getRotation(): io.github.triniwiz.fancycamera.CameraOrientation;
          public isGettingAudioLevels$fancycamera_release(): boolean;
          public setPosition(param0: io.github.triniwiz.fancycamera.CameraPosition): void;
          public getOnFacesDetectedListener$fancycamera_release(): io.github.triniwiz.fancycamera.ImageAnalysisCallback;
          public isAudioLevelsEnabled(): boolean;
          public setOverridePhotoHeight(value: number): void;
          public stop(): void;
          public setMaxVideoBitrate(param0: number): void;
          public getOnImageLabelingListener$fancycamera_release(): io.github.triniwiz.fancycamera.ImageAnalysisCallback;
          public getAmplitudeEMA(): number;
          public stopPreview(): void;
          public setMTimer$fancycamera_release(value: java.util.Timer): void;
          public getMTimer$fancycamera_release(): java.util.Timer;
          public getOnObjectDetectedListener$fancycamera_release(): io.github.triniwiz.fancycamera.ImageAnalysisCallback;
          public getOverridePhotoHeight(): number;
          public setPictureSize(param0: string): void;
          public setProcessEveryNthFrame(value: number): void;
          public setOnFacesDetectedListener(callback: io.github.triniwiz.fancycamera.ImageAnalysisCallback): void;
          public setDefaultLens(param0: io.github.triniwiz.fancycamera.CameraLens): void;
          public getFlashMode(): io.github.triniwiz.fancycamera.CameraFlashMode;
          public setZoomRatio(param0: number): void;
          public hasPermission(): boolean;
          public setOnObjectDetectedListener(callback: io.github.triniwiz.fancycamera.ImageAnalysisCallback): void;
          public setOnSurfaceUpdateListener$fancycamera_release(value: io.github.triniwiz.fancycamera.SurfaceUpdateListener): void;
          public getPreviewSurface(): any;
          public getAmplitude(): number;
          public getZoom(): number;
          public getVIDEO_RECORDER_PERMISSIONS$fancycamera_release(): androidNative.Array<string>;
          public setDisplayRatio(param0: string): void;
          public requestStoragePermission(): void;
          public getDefaultLens(): io.github.triniwiz.fancycamera.CameraLens;
          public toggleCamera(): void;
          public setEnableTapToFocus(param0: boolean): void;
          public getPause(): boolean;
          public setOnTextRecognitionListener$fancycamera_release(value: io.github.triniwiz.fancycamera.ImageAnalysisCallback): void;
          public setMDuration$fancycamera_release(value: number): void;
          public setOverridePhotoWidth(value: number): void;
          public getCurrentOrientation(): number;
          public setOnPoseDetectedListener(callback: io.github.triniwiz.fancycamera.ImageAnalysisCallback): void;
          public getZoomRatio(): number;
        }
        export namespace CameraBase {
          export class Companion {
            public static class: java.lang.Class<io.github.triniwiz.fancycamera.CameraBase.Companion>;
            public getEMA_FILTER$fancycamera_release(): number;
          }
          export class WhenMappings {
            public static class: java.lang.Class<io.github.triniwiz.fancycamera.CameraBase.WhenMappings>;
          }
        }
      }
    }
  }
}

declare namespace io {
  export namespace github {
    export namespace triniwiz {
      export namespace fancycamera {
        export class CameraEventListener {
          public static class: java.lang.Class<io.github.triniwiz.fancycamera.CameraEventListener>;
          /**
           * Constructs a new instance of the io.github.triniwiz.fancycamera.CameraEventListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: { onReady(): void; onCameraOpen(): void; onCameraClose(): void; onCameraPhoto(param0: java.io.File): void; onCameraVideo(param0: java.io.File): void; onCameraAnalysis(param0: io.github.triniwiz.fancycamera.ImageAnalysis): void; onCameraError(param0: string, param1: java.lang.Exception): void; onCameraVideoStart(): void });
          public constructor();
          public onCameraOpen(): void;
          public onCameraClose(): void;
          public onCameraAnalysis(param0: io.github.triniwiz.fancycamera.ImageAnalysis): void;
          public onCameraVideo(param0: java.io.File): void;
          public onCameraVideoStart(): void;
          public onReady(): void;
          public onCameraError(param0: string, param1: java.lang.Exception): void;
          public onCameraPhoto(param0: java.io.File): void;
        }
      }
    }
  }
}

declare namespace io {
  export namespace github {
    export namespace triniwiz {
      export namespace fancycamera {
        export abstract class CameraEventListenerUI extends io.github.triniwiz.fancycamera.CameraEventListener {
          public static class: java.lang.Class<io.github.triniwiz.fancycamera.CameraEventListenerUI>;
          public onCameraOpenUI(): void;
          public onCameraPhoto(bundle: java.io.File): void;
          public onCameraClose(): void;
          public onCameraVideoUI(param0: java.io.File): void;
          public onCameraError(param0: string, param1: java.lang.Exception): void;
          public onCameraAnalysisUI(param0: io.github.triniwiz.fancycamera.ImageAnalysis): void;
          public onCameraErrorUI(param0: string, param1: java.lang.Exception): void;
          public onCameraVideoStartUI(): void;
          public onReadyUI(): void;
          public onCameraOpen(): void;
          public onCameraAnalysis(param0: io.github.triniwiz.fancycamera.ImageAnalysis): void;
          public onCameraVideo(param0: java.io.File): void;
          public constructor();
          public onCameraVideoStart(): void;
          public onCameraCloseUI(): void;
          public onReady(): void;
          public onCameraPhotoUI(param0: java.io.File): void;
        }
        export namespace CameraEventListenerUI {
          export class Companion {
            public static class: java.lang.Class<io.github.triniwiz.fancycamera.CameraEventListenerUI.Companion>;
          }
        }
      }
    }
  }
}

declare namespace io {
  export namespace github {
    export namespace triniwiz {
      export namespace fancycamera {
        export class CameraFlashMode {
          public static class: java.lang.Class<io.github.triniwiz.fancycamera.CameraFlashMode>;
          public static OFF: io.github.triniwiz.fancycamera.CameraFlashMode;
          public static ON: io.github.triniwiz.fancycamera.CameraFlashMode;
          public static AUTO: io.github.triniwiz.fancycamera.CameraFlashMode;
          public static RED_EYE: io.github.triniwiz.fancycamera.CameraFlashMode;
          public static TORCH: io.github.triniwiz.fancycamera.CameraFlashMode;
          public static values(): androidNative.Array<io.github.triniwiz.fancycamera.CameraFlashMode>;
          public getValue(): number;
          public static valueOf(value: string): io.github.triniwiz.fancycamera.CameraFlashMode;
        }
        export namespace CameraFlashMode {
          export class Companion {
            public static class: java.lang.Class<io.github.triniwiz.fancycamera.CameraFlashMode.Companion>;
            public from(it: number): io.github.triniwiz.fancycamera.CameraFlashMode;
          }
        }
      }
    }
  }
}

declare namespace io {
  export namespace github {
    export namespace triniwiz {
      export namespace fancycamera {
        export class CameraLens {
          public static class: java.lang.Class<io.github.triniwiz.fancycamera.CameraLens>;
          public static auto: io.github.triniwiz.fancycamera.CameraLens;
          public static telephoto: io.github.triniwiz.fancycamera.CameraLens;
          public static wide: io.github.triniwiz.fancycamera.CameraLens;
          public static ultrawide: io.github.triniwiz.fancycamera.CameraLens;
          public static valueOf(value: string): io.github.triniwiz.fancycamera.CameraLens;
          public static values(): androidNative.Array<io.github.triniwiz.fancycamera.CameraLens>;
        }
      }
    }
  }
}

declare namespace io {
  export namespace github {
    export namespace triniwiz {
      export namespace fancycamera {
        export class CameraOrientation {
          public static class: java.lang.Class<io.github.triniwiz.fancycamera.CameraOrientation>;
          public static UNKNOWN: io.github.triniwiz.fancycamera.CameraOrientation;
          public static PORTRAIT: io.github.triniwiz.fancycamera.CameraOrientation;
          public static PORTRAIT_UPSIDE_DOWN: io.github.triniwiz.fancycamera.CameraOrientation;
          public static LANDSCAPE_LEFT: io.github.triniwiz.fancycamera.CameraOrientation;
          public static LANDSCAPE_RIGHT: io.github.triniwiz.fancycamera.CameraOrientation;
          public static values(): androidNative.Array<io.github.triniwiz.fancycamera.CameraOrientation>;
          public static valueOf(value: string): io.github.triniwiz.fancycamera.CameraOrientation;
          public getValue(): number;
        }
        export namespace CameraOrientation {
          export class Companion {
            public static class: java.lang.Class<io.github.triniwiz.fancycamera.CameraOrientation.Companion>;
            public from(it: number): io.github.triniwiz.fancycamera.CameraOrientation;
          }
        }
      }
    }
  }
}

declare namespace io {
  export namespace github {
    export namespace triniwiz {
      export namespace fancycamera {
        export class CameraPosition {
          public static class: java.lang.Class<io.github.triniwiz.fancycamera.CameraPosition>;
          public static BACK: io.github.triniwiz.fancycamera.CameraPosition;
          public static FRONT: io.github.triniwiz.fancycamera.CameraPosition;
          public static values(): androidNative.Array<io.github.triniwiz.fancycamera.CameraPosition>;
          public getValue(): number;
          public static valueOf(value: string): io.github.triniwiz.fancycamera.CameraPosition;
          public getLenFacing(): number;
        }
        export namespace CameraPosition {
          export class Companion {
            public static class: java.lang.Class<io.github.triniwiz.fancycamera.CameraPosition.Companion>;
            public from(it: number): io.github.triniwiz.fancycamera.CameraPosition;
          }
          export class WhenMappings {
            public static class: java.lang.Class<io.github.triniwiz.fancycamera.CameraPosition.WhenMappings>;
          }
        }
      }
    }
  }
}

declare namespace io {
  export namespace github {
    export namespace triniwiz {
      export namespace fancycamera {
        export class DetectorType {
          public static class: java.lang.Class<io.github.triniwiz.fancycamera.DetectorType>;
          public static Barcode: io.github.triniwiz.fancycamera.DetectorType;
          public static DigitalInk: io.github.triniwiz.fancycamera.DetectorType;
          public static Face: io.github.triniwiz.fancycamera.DetectorType;
          public static Image: io.github.triniwiz.fancycamera.DetectorType;
          public static Object: io.github.triniwiz.fancycamera.DetectorType;
          public static Pose: io.github.triniwiz.fancycamera.DetectorType;
          public static Text: io.github.triniwiz.fancycamera.DetectorType;
          public static All: io.github.triniwiz.fancycamera.DetectorType;
          public static Selfie: io.github.triniwiz.fancycamera.DetectorType;
          public static None: io.github.triniwiz.fancycamera.DetectorType;
          public toString(): string;
          public static fromInt(value: number): io.github.triniwiz.fancycamera.DetectorType;
          public static values(): androidNative.Array<io.github.triniwiz.fancycamera.DetectorType>;
          public static valueOf(value: string): io.github.triniwiz.fancycamera.DetectorType;
          public static fromName(value: string): io.github.triniwiz.fancycamera.DetectorType;
        }
        export namespace DetectorType {
          export class Companion {
            public static class: java.lang.Class<io.github.triniwiz.fancycamera.DetectorType.Companion>;
            public fromInt(value: number): io.github.triniwiz.fancycamera.DetectorType;
            public fromName(value: string): io.github.triniwiz.fancycamera.DetectorType;
          }
        }
      }
    }
  }
}

declare namespace io {
  export namespace github {
    export namespace triniwiz {
      export namespace fancycamera {
        export class Event {
          public static class: java.lang.Class<io.github.triniwiz.fancycamera.Event>;
          public getMessage(): string;
          public getFile(): java.io.File;
          public getType(): io.github.triniwiz.fancycamera.EventType;
          public constructor(type: io.github.triniwiz.fancycamera.EventType, file: java.io.File, message: string);
        }
      }
    }
  }
}

declare namespace io {
  export namespace github {
    export namespace triniwiz {
      export namespace fancycamera {
        export class EventType {
          public static class: java.lang.Class<io.github.triniwiz.fancycamera.EventType>;
          public static Photo: io.github.triniwiz.fancycamera.EventType;
          public static Video: io.github.triniwiz.fancycamera.EventType;
          public static values(): androidNative.Array<io.github.triniwiz.fancycamera.EventType>;
          public static valueOf(value: string): io.github.triniwiz.fancycamera.EventType;
        }
      }
    }
  }
}

declare namespace io {
  export namespace github {
    export namespace triniwiz {
      export namespace fancycamera {
        export class FancyCamera {
          public static class: java.lang.Class<io.github.triniwiz.fancycamera.FancyCamera>;
          public getAllowExifRotation(): boolean;
          public getAutoFocus(): boolean;
          public setOnImageLabelingListener(callback: io.github.triniwiz.fancycamera.ImageAnalysisCallback): void;
          public setEnableTapToFocus(value: boolean): void;
          public startPreview(): void;
          public isWideAngleSupported(): boolean;
          public setOnSelfieSegmentationListener(callback: io.github.triniwiz.fancycamera.ImageAnalysisCallback): void;
          public setAutoFocus(value: boolean): void;
          public getSaveToGallery(): boolean;
          public setOverridePhotoHeight(value: number): void;
          public removeImageProcessors(processors: androidNative.Array<io.github.triniwiz.fancycamera.ImageProcessor<any>>): void;
          public getLatestImage(): globalAndroid.graphics.Bitmap;
          public addImageProcessor(processor: io.github.triniwiz.fancycamera.ImageProcessor<any>): void;
          public setFlashMode(value: io.github.triniwiz.fancycamera.CameraFlashMode): void;
          public hasCameraPermission(): boolean;
          public setOnBarcodeScanningListener(callback: io.github.triniwiz.fancycamera.ImageAnalysisCallback): void;
          public setZoom(value: number): void;
          public setWhiteBalance(value: io.github.triniwiz.fancycamera.WhiteBalance): void;
          public constructor(context: globalAndroid.content.Context);
          public getRatio(): string;
          public setRetrieveLatestImage(value: boolean): void;
          public removeImageProcessor(processor: io.github.triniwiz.fancycamera.ImageProcessor<any>): void;
          public setCameraOrientation(orientation: io.github.triniwiz.fancycamera.CameraOrientation): void;
          public getPosition(): io.github.triniwiz.fancycamera.CameraPosition;
          public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
          public getProcessEveryNthFrame(): number;
          public setEnablePinchZoom(value: boolean): void;
          public getDuration(): number;
          public requestAudioPermission(): void;
          public hasAudioPermission(): boolean;
          public onPermissionHandler(requestCode: number, permissions: androidNative.Array<string>, grantResults: androidNative.Array<number>): void;
          public getMaxVideoBitrate(): number;
          public setSaveToGallery(value: boolean): void;
          public getMaxVideoFrameRate(): number;
          public takePhoto(): void;
          public setOnTextRecognitionListener(callback: io.github.triniwiz.fancycamera.ImageAnalysisCallback): void;
          public setRatio(value: string): void;
          public getEnableTapToFocus(): boolean;
          public getEnablePinchZoom(): boolean;
          public setPause(value: boolean): void;
          public setPosition(value: io.github.triniwiz.fancycamera.CameraPosition): void;
          public setonSurfaceUpdateListener(callback: io.github.triniwiz.fancycamera.SurfaceUpdateListener): void;
          public stopRecording(): void;
          public getEnableAudio(): boolean;
          public static setForceV1(value: boolean): void;
          public setDefaultLens(value: io.github.triniwiz.fancycamera.CameraLens): void;
          public getHasFlash(): boolean;
          public getDb(): number;
          public getRetrieveLatestImage(): boolean;
          public getCameraOrientation(): io.github.triniwiz.fancycamera.CameraOrientation;
          public toggleFlash(): void;
          public setEnableAudio(value: boolean): void;
          public getDisableHEVC(): boolean;
          public setAllowExifRotation(value: boolean): void;
          public getQuality(): io.github.triniwiz.fancycamera.Quality;
          public requestCameraPermission(): void;
          public getMaxAudioBitRate(): number;
          public setMaxAudioBitRate(value: number): void;
          public getWhiteBalance(): io.github.triniwiz.fancycamera.WhiteBalance;
          public setAutoSquareCrop(value: boolean): void;
          public hasStoragePermission(): boolean;
          public getAutoSquareCrop(): boolean;
          public getOverridePhotoWidth(): number;
          public removeImageProcessor(iterator: number): void;
          public getPictureSize(): string;
          public startRecording(): void;
          public getNumberOfCameras(): number;
          public static getForceV1(): boolean;
          public requestPermission(): void;
          public release(): void;
          public setMaxVideoBitrate(value: number): void;
          public clearImageProcessor(): void;
          public setDisableHEVC(value: boolean): void;
          public isAudioLevelsEnabled(): boolean;
          public stop(): void;
          public stopPreview(): void;
          public getOverridePhotoHeight(): number;
          public setOnFacesDetectedListener(callback: io.github.triniwiz.fancycamera.ImageAnalysisCallback): void;
          public getFlashMode(): io.github.triniwiz.fancycamera.CameraFlashMode;
          public setMaxVideoFrameRate(value: number): void;
          public hasPermission(): boolean;
          public getGetSupportedRatios(): androidNative.Array<string>;
          public addImageProcessors(processors: androidNative.Array<io.github.triniwiz.fancycamera.ImageProcessor<any>>): void;
          public setOnObjectDetectedListener(callback: io.github.triniwiz.fancycamera.ImageAnalysisCallback): void;
          public getZoom(): number;
          public requestStoragePermission(): void;
          public getDefaultLens(): io.github.triniwiz.fancycamera.CameraLens;
          public setQuality(value: io.github.triniwiz.fancycamera.Quality): void;
          public toggleCamera(): void;
          public getPause(): boolean;
          public getAvailablePictureSizes(ratio: string): androidNative.Array<io.github.triniwiz.fancycamera.Size>;
          public setProcessEveryNthFrame(value: number): void;
          public setOverridePhotoWidth(value: number): void;
          public setListener(listener: io.github.triniwiz.fancycamera.CameraEventListener): void;
          public getPreviewView(): any;
          public setEnableAudioLevels(enableAudioLevels: boolean): void;
          public setAudioLevelsEnabled(value: boolean): void;
          public setPictureSize(value: string): void;
          public setOnPoseDetectedListener(callback: io.github.triniwiz.fancycamera.ImageAnalysisCallback): void;
          public getImageProcessors(): java.util.List<io.github.triniwiz.fancycamera.ImageProcessor<any>>;
        }
        export namespace FancyCamera {
          export class Companion {
            public static class: java.lang.Class<io.github.triniwiz.fancycamera.FancyCamera.Companion>;
            public setForceV1(value: boolean): void;
            public getForceV1(): boolean;
          }
        }
      }
    }
  }
}

declare namespace io {
  export namespace github {
    export namespace triniwiz {
      export namespace fancycamera {
        export class FancyCameraFileProvider {
          public static class: java.lang.Class<io.github.triniwiz.fancycamera.FancyCameraFileProvider>;
          public constructor();
        }
      }
    }
  }
}

declare namespace io {
  export namespace github {
    export namespace triniwiz {
      export namespace fancycamera {
        export class FrameMetadata {
          public static class: java.lang.Class<io.github.triniwiz.fancycamera.FrameMetadata>;
          public getRotation(): number;
          public getHeight(): number;
          public getWidth(): number;
        }
        export namespace FrameMetadata {
          export class Builder {
            public static class: java.lang.Class<io.github.triniwiz.fancycamera.FrameMetadata.Builder>;
            public constructor();
            public setWidth(width: number): io.github.triniwiz.fancycamera.FrameMetadata.Builder;
            public setRotation(rotation: number): io.github.triniwiz.fancycamera.FrameMetadata.Builder;
            public setHeight(height: number): io.github.triniwiz.fancycamera.FrameMetadata.Builder;
            public build(): io.github.triniwiz.fancycamera.FrameMetadata;
          }
        }
      }
    }
  }
}

declare namespace io {
  export namespace github {
    export namespace triniwiz {
      export namespace fancycamera {
        export class ImageAnalysis {
          public static class: java.lang.Class<io.github.triniwiz.fancycamera.ImageAnalysis>;
          public constructor();
        }
      }
    }
  }
}

declare namespace io {
  export namespace github {
    export namespace triniwiz {
      export namespace fancycamera {
        export class ImageAnalysisCallback {
          public static class: java.lang.Class<io.github.triniwiz.fancycamera.ImageAnalysisCallback>;
          /**
           * Constructs a new instance of the io.github.triniwiz.fancycamera.ImageAnalysisCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: { onSuccess(param0: any): void; onError(param0: string, param1: java.lang.Exception): void });
          public constructor();
          public onSuccess(param0: any): void;
          public onError(param0: string, param1: java.lang.Exception): void;
        }
      }
    }
  }
}

declare namespace io {
  export namespace github {
    export namespace triniwiz {
      export namespace fancycamera {
        export class ImageProcessor<T> extends java.lang.Object {
          public static class: java.lang.Class<io.github.triniwiz.fancycamera.ImageProcessor<any>>;
          /**
           * Constructs a new instance of the io.github.triniwiz.fancycamera.ImageProcessor<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: { getType(): number; process(param0: com.google.mlkit.vision.common.InputImage): java.util.concurrent.FutureTask<T>; process(param0: androidNative.Array<number>, param1: number, param2: number, param3: number, param4: number): java.util.concurrent.FutureTask<T>; process(param0: globalAndroid.media.Image, param1: number): java.util.concurrent.FutureTask<T>; process(param0: globalAndroid.graphics.Bitmap, param1: number): java.util.concurrent.FutureTask<T> });
          public constructor();
          public getType(): number;
          public process(param0: com.google.mlkit.vision.common.InputImage): java.util.concurrent.FutureTask<T>;
          public process(param0: globalAndroid.media.Image, param1: number): java.util.concurrent.FutureTask<T>;
          public process(param0: androidNative.Array<number>, param1: number, param2: number, param3: number, param4: number): java.util.concurrent.FutureTask<T>;
          public process(param0: globalAndroid.graphics.Bitmap, param1: number): java.util.concurrent.FutureTask<T>;
        }
        export namespace ImageProcessor {
          export class DefaultImpls {
            public static class: java.lang.Class<io.github.triniwiz.fancycamera.ImageProcessor.DefaultImpls>;
            public static process(input: io.github.triniwiz.fancycamera.ImageProcessor<any>, $this: androidNative.Array<number>, bytes: number, width: number, height: number, rotation: number): java.util.concurrent.FutureTask<any>;
            public static process($this: io.github.triniwiz.fancycamera.ImageProcessor<any>, image: globalAndroid.media.Image, rotation: number): java.util.concurrent.FutureTask<any>;
            public static process(input: io.github.triniwiz.fancycamera.ImageProcessor<any>, $this: globalAndroid.graphics.Bitmap, bitmap: number): java.util.concurrent.FutureTask<any>;
            public static getType($this: io.github.triniwiz.fancycamera.ImageProcessor<any>): number;
          }
        }
      }
    }
  }
}

declare namespace io {
  export namespace github {
    export namespace triniwiz {
      export namespace fancycamera {
        export class ML {
          public static class: java.lang.Class<io.github.triniwiz.fancycamera.ML>;
          public static processImage(image: globalAndroid.graphics.Bitmap, rotation: number, imageProcessors: java.util.List<any>, callback: io.github.triniwiz.fancycamera.ImageAnalysisCallback): void;
          public constructor();
          public static process(byteArray: androidNative.Array<number>, width: number, height: number, rotation: number, format: number, imageProcessors: java.util.List<any>, callback: io.github.triniwiz.fancycamera.ImageAnalysisCallback): void;
        }
        export namespace ML {
          export class Companion {
            public static class: java.lang.Class<io.github.triniwiz.fancycamera.ML.Companion>;
          }
        }
      }
    }
  }
}

declare namespace io {
  export namespace github {
    export namespace triniwiz {
      export namespace fancycamera {
        export class Quality {
          public static class: java.lang.Class<io.github.triniwiz.fancycamera.Quality>;
          public static MAX_480P: io.github.triniwiz.fancycamera.Quality;
          public static MAX_720P: io.github.triniwiz.fancycamera.Quality;
          public static MAX_1080P: io.github.triniwiz.fancycamera.Quality;
          public static MAX_2160P: io.github.triniwiz.fancycamera.Quality;
          public static HIGHEST: io.github.triniwiz.fancycamera.Quality;
          public static LOWEST: io.github.triniwiz.fancycamera.Quality;
          public static QVGA: io.github.triniwiz.fancycamera.Quality;
          public static values(): androidNative.Array<io.github.triniwiz.fancycamera.Quality>;
          public getValue(): number;
          public static valueOf(value: string): io.github.triniwiz.fancycamera.Quality;
        }
        export namespace Quality {
          export class Companion {
            public static class: java.lang.Class<io.github.triniwiz.fancycamera.Quality.Companion>;
            public from(it: number): io.github.triniwiz.fancycamera.Quality;
          }
        }
      }
    }
  }
}

declare namespace io {
  export namespace github {
    export namespace triniwiz {
      export namespace fancycamera {
        export class Size {
          public static class: java.lang.Class<io.github.triniwiz.fancycamera.Size>;
          public toString(): string;
          public getHeight(): number;
          public getWidth(): number;
          public constructor(width: number, height: number);
        }
      }
    }
  }
}

declare namespace io {
  export namespace github {
    export namespace triniwiz {
      export namespace fancycamera {
        export class SurfaceUpdateListener {
          public static class: java.lang.Class<io.github.triniwiz.fancycamera.SurfaceUpdateListener>;
          /**
           * Constructs a new instance of the io.github.triniwiz.fancycamera.SurfaceUpdateListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
           */
          public constructor(implementation: { onUpdate(): void });
          public constructor();
          public onUpdate(): void;
        }
      }
    }
  }
}

declare namespace io {
  export namespace github {
    export namespace triniwiz {
      export namespace fancycamera {
        export class WhiteBalance {
          public static class: java.lang.Class<io.github.triniwiz.fancycamera.WhiteBalance>;
          public static Auto: io.github.triniwiz.fancycamera.WhiteBalance;
          public static Sunny: io.github.triniwiz.fancycamera.WhiteBalance;
          public static Cloudy: io.github.triniwiz.fancycamera.WhiteBalance;
          public static Shadow: io.github.triniwiz.fancycamera.WhiteBalance;
          public static Twilight: io.github.triniwiz.fancycamera.WhiteBalance;
          public static Fluorescent: io.github.triniwiz.fancycamera.WhiteBalance;
          public static Incandescent: io.github.triniwiz.fancycamera.WhiteBalance;
          public static WarmFluorescent: io.github.triniwiz.fancycamera.WhiteBalance;
          public getValue$fancycamera_release(): string;
          public static valueOf(value: string): io.github.triniwiz.fancycamera.WhiteBalance;
          public static values(): androidNative.Array<io.github.triniwiz.fancycamera.WhiteBalance>;
        }
      }
    }
  }
}

declare namespace io {
  export namespace github {
    export namespace triniwiz {
      export namespace fancycamera {
        export namespace barcodescanning {
          export class BarcodeScanner extends io.github.triniwiz.fancycamera.ImageProcessor<string> {
            public static class: java.lang.Class<io.github.triniwiz.fancycamera.barcodescanning.BarcodeScanner>;
            public process(it: com.google.mlkit.vision.common.InputImage): java.util.concurrent.FutureTask<string>;
            public process(param0: androidNative.Array<number>, param1: number, param2: number, param3: number, param4: number): java.util.concurrent.FutureTask<any>;
            public process(param0: globalAndroid.graphics.Bitmap, param1: number): java.util.concurrent.FutureTask<any>;
            public constructor();
            public getOptions(): io.github.triniwiz.fancycamera.barcodescanning.BarcodeScanner.Options;
            public process(image: globalAndroid.media.Image, rotation: number): java.util.concurrent.FutureTask<string>;
            public process(param0: com.google.mlkit.vision.common.InputImage): java.util.concurrent.FutureTask<any>;
            public getType(): number;
            public setOptions(value: io.github.triniwiz.fancycamera.barcodescanning.BarcodeScanner.Options): void;
          }
          export namespace BarcodeScanner {
            export class BarcodeFormat {
              public static class: java.lang.Class<io.github.triniwiz.fancycamera.barcodescanning.BarcodeScanner.BarcodeFormat>;
              public static ALL: io.github.triniwiz.fancycamera.barcodescanning.BarcodeScanner.BarcodeFormat;
              public static CODE_128: io.github.triniwiz.fancycamera.barcodescanning.BarcodeScanner.BarcodeFormat;
              public static CODE_39: io.github.triniwiz.fancycamera.barcodescanning.BarcodeScanner.BarcodeFormat;
              public static CODE_93: io.github.triniwiz.fancycamera.barcodescanning.BarcodeScanner.BarcodeFormat;
              public static CODABAR: io.github.triniwiz.fancycamera.barcodescanning.BarcodeScanner.BarcodeFormat;
              public static DATA_MATRIX: io.github.triniwiz.fancycamera.barcodescanning.BarcodeScanner.BarcodeFormat;
              public static EAN_13: io.github.triniwiz.fancycamera.barcodescanning.BarcodeScanner.BarcodeFormat;
              public static EAN_8: io.github.triniwiz.fancycamera.barcodescanning.BarcodeScanner.BarcodeFormat;
              public static ITF: io.github.triniwiz.fancycamera.barcodescanning.BarcodeScanner.BarcodeFormat;
              public static QR_CODE: io.github.triniwiz.fancycamera.barcodescanning.BarcodeScanner.BarcodeFormat;
              public static UPC_A: io.github.triniwiz.fancycamera.barcodescanning.BarcodeScanner.BarcodeFormat;
              public static UPC_E: io.github.triniwiz.fancycamera.barcodescanning.BarcodeScanner.BarcodeFormat;
              public static PDF417: io.github.triniwiz.fancycamera.barcodescanning.BarcodeScanner.BarcodeFormat;
              public static AZTEC: io.github.triniwiz.fancycamera.barcodescanning.BarcodeScanner.BarcodeFormat;
              public getFormat$barcodeScanning_release(): number;
              public static valueOf(value: string): io.github.triniwiz.fancycamera.barcodescanning.BarcodeScanner.BarcodeFormat;
              public getValue(): string;
              public static values(): androidNative.Array<io.github.triniwiz.fancycamera.barcodescanning.BarcodeScanner.BarcodeFormat>;
            }
            export namespace BarcodeFormat {
              export class Companion {
                public static class: java.lang.Class<io.github.triniwiz.fancycamera.barcodescanning.BarcodeScanner.BarcodeFormat.Companion>;
                public fromBarcode$barcodeScanning_release(bf: number): io.github.triniwiz.fancycamera.barcodescanning.BarcodeScanner.BarcodeFormat;
              }
              export class WhenMappings {
                public static class: java.lang.Class<io.github.triniwiz.fancycamera.barcodescanning.BarcodeScanner.BarcodeFormat.WhenMappings>;
              }
            }
            export class Options {
              public static class: java.lang.Class<io.github.triniwiz.fancycamera.barcodescanning.BarcodeScanner.Options>;
              public constructor();
              public getBarcodeFormat(): androidNative.Array<io.github.triniwiz.fancycamera.barcodescanning.BarcodeScanner.BarcodeFormat>;
              public static fromJson(value: string, returnDefault: boolean): io.github.triniwiz.fancycamera.barcodescanning.BarcodeScanner.Options;
              public setBarcodeFormat(value: androidNative.Array<io.github.triniwiz.fancycamera.barcodescanning.BarcodeScanner.BarcodeFormat>): void;
              public static fromJson(value: string): io.github.triniwiz.fancycamera.barcodescanning.BarcodeScanner.Options;
              public static fromJson(value: org.json.JSONObject, returnDefault: boolean): io.github.triniwiz.fancycamera.barcodescanning.BarcodeScanner.Options;
            }
            export namespace Options {
              export class Companion {
                public static class: java.lang.Class<io.github.triniwiz.fancycamera.barcodescanning.BarcodeScanner.Options.Companion>;
                public fromJson(value: string): io.github.triniwiz.fancycamera.barcodescanning.BarcodeScanner.Options;
              }
            }
          }
        }
      }
    }
  }
}

declare namespace io {
  export namespace github {
    export namespace triniwiz {
      export namespace fancycamera {
        export namespace barcodescanning {
          export class Result {
            public static class: java.lang.Class<io.github.triniwiz.fancycamera.barcodescanning.Result>;
            public getFormat(): io.github.triniwiz.fancycamera.barcodescanning.BarcodeScanner.BarcodeFormat;
            public getRawBytes(): androidNative.Array<number>;
            public getWifi(): io.github.triniwiz.fancycamera.barcodescanning.Result.WiFi;
            public getDriverLicense(): io.github.triniwiz.fancycamera.barcodescanning.Result.DriverLicense;
            public getPoints(): androidNative.Array<io.github.triniwiz.fancycamera.barcodescanning.Result.Point>;
            public getUrl(): io.github.triniwiz.fancycamera.barcodescanning.Result.UrlBookmark;
            public getCalendarEvent(): io.github.triniwiz.fancycamera.barcodescanning.Result.CalenderEvent;
            public getBounds(): io.github.triniwiz.fancycamera.barcodescanning.Result.Bounds;
            public getSms(): io.github.triniwiz.fancycamera.barcodescanning.Result.Sms;
            public getValueType(): io.github.triniwiz.fancycamera.barcodescanning.Result.ValueType;
            public getDisplayValue(): string;
            public getPhone(): io.github.triniwiz.fancycamera.barcodescanning.Result.Phone;
            public getRawValue(): string;
            public getEmail(): io.github.triniwiz.fancycamera.barcodescanning.Result.Email;
            public getContactInfo(): io.github.triniwiz.fancycamera.barcodescanning.Result.ContactInfo;
            public getGeoPoint(): io.github.triniwiz.fancycamera.barcodescanning.Result.GeoPoint;
            public constructor(it: com.google.mlkit.vision.barcode.common.Barcode);
          }
          export namespace Result {
            export class Bounds {
              public static class: java.lang.Class<io.github.triniwiz.fancycamera.barcodescanning.Result.Bounds>;
              public getWidth(): number;
              public getHeight(): number;
              public getY(): number;
              public getX(): number;
              public constructor(rect: globalAndroid.graphics.Rect);
            }
            export class CalenderEvent {
              public static class: java.lang.Class<io.github.triniwiz.fancycamera.barcodescanning.Result.CalenderEvent>;
              public getSummary(): string;
              public getOrganizer(): string;
              public constructor(it: com.google.mlkit.vision.barcode.common.Barcode.CalendarEvent);
              public getStart(): io.github.triniwiz.fancycamera.barcodescanning.Result.CalenderEvent.Date;
              public getEnd(): io.github.triniwiz.fancycamera.barcodescanning.Result.CalenderEvent.Date;
              public getLocation(): string;
              public getDescription(): string;
              public getStatus(): string;
            }
            export namespace CalenderEvent {
              export class Date {
                public static class: java.lang.Class<io.github.triniwiz.fancycamera.barcodescanning.Result.CalenderEvent.Date>;
                public getDay(): number;
                public isUtc(): boolean;
                public getRawValue(): string;
                public getHours(): number;
                public getMinutes(): number;
                public getYear(): number;
                public getSeconds(): number;
                public getDate(): java.util.Date;
                public getMonth(): number;
              }
            }
            export class ContactInfo {
              public static class: java.lang.Class<io.github.triniwiz.fancycamera.barcodescanning.Result.ContactInfo>;
              public constructor($i$f$toTypedArray: com.google.mlkit.vision.barcode.common.Barcode.ContactInfo);
              public getAddresses(): androidNative.Array<io.github.triniwiz.fancycamera.barcodescanning.Result.ContactInfo.Address>;
            }
            export namespace ContactInfo {
              export class Address {
                public static class: java.lang.Class<io.github.triniwiz.fancycamera.barcodescanning.Result.ContactInfo.Address>;
                public getAddressLines(): androidNative.Array<string>;
                public constructor(address: com.google.mlkit.vision.barcode.common.Barcode.Address);
                public getType(): io.github.triniwiz.fancycamera.barcodescanning.Result.ContactInfo.Address.Type;
              }
              export namespace Address {
                export class Type {
                  public static class: java.lang.Class<io.github.triniwiz.fancycamera.barcodescanning.Result.ContactInfo.Address.Type>;
                  public static Unknown: io.github.triniwiz.fancycamera.barcodescanning.Result.ContactInfo.Address.Type;
                  public static Home: io.github.triniwiz.fancycamera.barcodescanning.Result.ContactInfo.Address.Type;
                  public static Work: io.github.triniwiz.fancycamera.barcodescanning.Result.ContactInfo.Address.Type;
                  public static values(): androidNative.Array<io.github.triniwiz.fancycamera.barcodescanning.Result.ContactInfo.Address.Type>;
                  public getTypeName(): string;
                  public static valueOf(value: string): io.github.triniwiz.fancycamera.barcodescanning.Result.ContactInfo.Address.Type;
                }
              }
            }
            export class DriverLicense {
              public static class: java.lang.Class<io.github.triniwiz.fancycamera.barcodescanning.Result.DriverLicense>;
              public getGender(): string;
              public setBirthDate(value: string): void;
              public getBirthDate(): string;
              public getAddressStreet(): string;
              public setLicenseNumber(value: string): void;
              public setIssueDate(value: string): void;
              public getMiddleName(): string;
              public setMiddleName(value: string): void;
              public getIssuingCountry(): string;
              public getFirstName(): string;
              public setAddressState(value: string): void;
              public getAddressCity(): string;
              public setExpiryDate(value: string): void;
              public getDocumentType(): string;
              public setAddressStreet(value: string): void;
              public setIssuingCountry(value: string): void;
              public getAddressZip(): string;
              public constructor(driverLicense: com.google.mlkit.vision.barcode.common.Barcode.DriverLicense);
              public setAddressZip(value: string): void;
              public getAddressState(): string;
              public getLicenseNumber(): string;
              public getIssueDate(): string;
              public setLastName(value: string): void;
              public setGender(value: string): void;
              public setAddressCity(value: string): void;
              public getLastName(): string;
              public getExpiryDate(): string;
              public setFirstName(value: string): void;
            }
            export class Email {
              public static class: java.lang.Class<io.github.triniwiz.fancycamera.barcodescanning.Result.Email>;
              public getSubject(): string;
              public getAddress(): string;
              public getType(): io.github.triniwiz.fancycamera.barcodescanning.Result.Email.Type;
              public constructor(email: com.google.mlkit.vision.barcode.common.Barcode.Email);
              public getBody(): string;
            }
            export namespace Email {
              export class Type {
                public static class: java.lang.Class<io.github.triniwiz.fancycamera.barcodescanning.Result.Email.Type>;
                public static Unknown: io.github.triniwiz.fancycamera.barcodescanning.Result.Email.Type;
                public static Home: io.github.triniwiz.fancycamera.barcodescanning.Result.Email.Type;
                public static Work: io.github.triniwiz.fancycamera.barcodescanning.Result.Email.Type;
                public getTypeName(): string;
                public static values(): androidNative.Array<io.github.triniwiz.fancycamera.barcodescanning.Result.Email.Type>;
                public static valueOf(value: string): io.github.triniwiz.fancycamera.barcodescanning.Result.Email.Type;
              }
            }
            export class GeoPoint {
              public static class: java.lang.Class<io.github.triniwiz.fancycamera.barcodescanning.Result.GeoPoint>;
              public constructor(point: com.google.mlkit.vision.barcode.common.Barcode.GeoPoint);
              public getLat(): number;
              public getLng(): number;
            }
            export class Phone {
              public static class: java.lang.Class<io.github.triniwiz.fancycamera.barcodescanning.Result.Phone>;
              public getNumber(): string;
              public getType(): io.github.triniwiz.fancycamera.barcodescanning.Result.Phone.Type;
              public constructor(phone: com.google.mlkit.vision.barcode.common.Barcode.Phone);
            }
            export namespace Phone {
              export class Type {
                public static class: java.lang.Class<io.github.triniwiz.fancycamera.barcodescanning.Result.Phone.Type>;
                public static Unknown: io.github.triniwiz.fancycamera.barcodescanning.Result.Phone.Type;
                public static Home: io.github.triniwiz.fancycamera.barcodescanning.Result.Phone.Type;
                public static Work: io.github.triniwiz.fancycamera.barcodescanning.Result.Phone.Type;
                public static Fax: io.github.triniwiz.fancycamera.barcodescanning.Result.Phone.Type;
                public static Mobile: io.github.triniwiz.fancycamera.barcodescanning.Result.Phone.Type;
                public getTypeName(): string;
                public static values(): androidNative.Array<io.github.triniwiz.fancycamera.barcodescanning.Result.Phone.Type>;
                public static valueOf(value: string): io.github.triniwiz.fancycamera.barcodescanning.Result.Phone.Type;
              }
            }
            export class Point {
              public static class: java.lang.Class<io.github.triniwiz.fancycamera.barcodescanning.Result.Point>;
              public getY(): number;
              public constructor(point: globalAndroid.graphics.Point);
              public getX(): number;
            }
            export class Sms {
              public static class: java.lang.Class<io.github.triniwiz.fancycamera.barcodescanning.Result.Sms>;
              public constructor(sms: com.google.mlkit.vision.barcode.common.Barcode.Sms);
              public getPhoneNumber(): string;
              public getMessage(): string;
            }
            export class UrlBookmark {
              public static class: java.lang.Class<io.github.triniwiz.fancycamera.barcodescanning.Result.UrlBookmark>;
              public getUrl(): string;
              public getTitle(): string;
              public constructor(bookMark: com.google.mlkit.vision.barcode.common.Barcode.UrlBookmark);
            }
            export class ValueType {
              public static class: java.lang.Class<io.github.triniwiz.fancycamera.barcodescanning.Result.ValueType>;
              public static ContactInfo: io.github.triniwiz.fancycamera.barcodescanning.Result.ValueType;
              public static Email: io.github.triniwiz.fancycamera.barcodescanning.Result.ValueType;
              public static ISBN: io.github.triniwiz.fancycamera.barcodescanning.Result.ValueType;
              public static Phone: io.github.triniwiz.fancycamera.barcodescanning.Result.ValueType;
              public static Product: io.github.triniwiz.fancycamera.barcodescanning.Result.ValueType;
              public static Text: io.github.triniwiz.fancycamera.barcodescanning.Result.ValueType;
              public static Sms: io.github.triniwiz.fancycamera.barcodescanning.Result.ValueType;
              public static URL: io.github.triniwiz.fancycamera.barcodescanning.Result.ValueType;
              public static WiFi: io.github.triniwiz.fancycamera.barcodescanning.Result.ValueType;
              public static Geo: io.github.triniwiz.fancycamera.barcodescanning.Result.ValueType;
              public static CalenderEvent: io.github.triniwiz.fancycamera.barcodescanning.Result.ValueType;
              public static DriverLicense: io.github.triniwiz.fancycamera.barcodescanning.Result.ValueType;
              public static Unknown: io.github.triniwiz.fancycamera.barcodescanning.Result.ValueType;
              public static valueOf(value: string): io.github.triniwiz.fancycamera.barcodescanning.Result.ValueType;
              public static values(): androidNative.Array<io.github.triniwiz.fancycamera.barcodescanning.Result.ValueType>;
              public getType(): string;
            }
            export class WiFi {
              public static class: java.lang.Class<io.github.triniwiz.fancycamera.barcodescanning.Result.WiFi>;
              public constructor(wifi: com.google.mlkit.vision.barcode.common.Barcode.WiFi);
              public getPassword(): string;
              public getEncryptionType(): io.github.triniwiz.fancycamera.barcodescanning.Result.WiFi.EncryptionType;
              public getSsid(): string;
            }
            export namespace WiFi {
              export class EncryptionType {
                public static class: java.lang.Class<io.github.triniwiz.fancycamera.barcodescanning.Result.WiFi.EncryptionType>;
                public static Open: io.github.triniwiz.fancycamera.barcodescanning.Result.WiFi.EncryptionType;
                public static WPA: io.github.triniwiz.fancycamera.barcodescanning.Result.WiFi.EncryptionType;
                public static WEP: io.github.triniwiz.fancycamera.barcodescanning.Result.WiFi.EncryptionType;
                public static Unknown: io.github.triniwiz.fancycamera.barcodescanning.Result.WiFi.EncryptionType;
                public static values(): androidNative.Array<io.github.triniwiz.fancycamera.barcodescanning.Result.WiFi.EncryptionType>;
                public static valueOf(value: string): io.github.triniwiz.fancycamera.barcodescanning.Result.WiFi.EncryptionType;
                public getType(): string;
              }
            }
          }
        }
      }
    }
  }
}

declare namespace io {
  export namespace github {
    export namespace triniwiz {
      export namespace fancycamera {
        export namespace facedetection {
          export class FaceDetection extends io.github.triniwiz.fancycamera.ImageProcessor<string> {
            public static class: java.lang.Class<io.github.triniwiz.fancycamera.facedetection.FaceDetection>;
            public process(client: com.google.mlkit.vision.common.InputImage): java.util.concurrent.FutureTask<string>;
            public process(param0: androidNative.Array<number>, param1: number, param2: number, param3: number, param4: number): java.util.concurrent.FutureTask<any>;
            public process(param0: globalAndroid.graphics.Bitmap, param1: number): java.util.concurrent.FutureTask<any>;
            public constructor();
            public process(bitmap: globalAndroid.graphics.Bitmap, rotation: number): java.util.concurrent.FutureTask<string>;
            public process(param0: globalAndroid.media.Image, param1: number): java.util.concurrent.FutureTask<any>;
            public process(image: globalAndroid.media.Image, rotation: number): java.util.concurrent.FutureTask<string>;
            public setOptions(value: io.github.triniwiz.fancycamera.facedetection.FaceDetection.Options): void;
            public process(bytes: androidNative.Array<number>, width: number, height: number, rotation: number, format: number): java.util.concurrent.FutureTask<string>;
            public process(param0: com.google.mlkit.vision.common.InputImage): java.util.concurrent.FutureTask<any>;
            public getOptions(): io.github.triniwiz.fancycamera.facedetection.FaceDetection.Options;
            public getType(): number;
          }
          export namespace FaceDetection {
            export class ClassificationMode {
              public static class: java.lang.Class<io.github.triniwiz.fancycamera.facedetection.FaceDetection.ClassificationMode>;
              public static None: io.github.triniwiz.fancycamera.facedetection.FaceDetection.ClassificationMode;
              public static All: io.github.triniwiz.fancycamera.facedetection.FaceDetection.ClassificationMode;
              public static values(): androidNative.Array<io.github.triniwiz.fancycamera.facedetection.FaceDetection.ClassificationMode>;
              public static fromString(value: string): io.github.triniwiz.fancycamera.facedetection.FaceDetection.ClassificationMode;
              public toString(): string;
              public static valueOf(value: string): io.github.triniwiz.fancycamera.facedetection.FaceDetection.ClassificationMode;
              public toNative$faceDetection_release(): number;
            }
            export namespace ClassificationMode {
              export class Companion {
                public static class: java.lang.Class<io.github.triniwiz.fancycamera.facedetection.FaceDetection.ClassificationMode.Companion>;
                public fromString(value: string): io.github.triniwiz.fancycamera.facedetection.FaceDetection.ClassificationMode;
              }
              export class WhenMappings {
                public static class: java.lang.Class<io.github.triniwiz.fancycamera.facedetection.FaceDetection.ClassificationMode.WhenMappings>;
              }
            }
            export class ContourMode {
              public static class: java.lang.Class<io.github.triniwiz.fancycamera.facedetection.FaceDetection.ContourMode>;
              public static None: io.github.triniwiz.fancycamera.facedetection.FaceDetection.ContourMode;
              public static All: io.github.triniwiz.fancycamera.facedetection.FaceDetection.ContourMode;
              public toString(): string;
              public static values(): androidNative.Array<io.github.triniwiz.fancycamera.facedetection.FaceDetection.ContourMode>;
              public static valueOf(value: string): io.github.triniwiz.fancycamera.facedetection.FaceDetection.ContourMode;
              public toNative$faceDetection_release(): number;
              public static fromString(value: string): io.github.triniwiz.fancycamera.facedetection.FaceDetection.ContourMode;
            }
            export namespace ContourMode {
              export class Companion {
                public static class: java.lang.Class<io.github.triniwiz.fancycamera.facedetection.FaceDetection.ContourMode.Companion>;
                public fromString(value: string): io.github.triniwiz.fancycamera.facedetection.FaceDetection.ContourMode;
              }
              export class WhenMappings {
                public static class: java.lang.Class<io.github.triniwiz.fancycamera.facedetection.FaceDetection.ContourMode.WhenMappings>;
              }
            }
            export class DetectionMode {
              public static class: java.lang.Class<io.github.triniwiz.fancycamera.facedetection.FaceDetection.DetectionMode>;
              public static Accurate: io.github.triniwiz.fancycamera.facedetection.FaceDetection.DetectionMode;
              public static Fast: io.github.triniwiz.fancycamera.facedetection.FaceDetection.DetectionMode;
              public static values(): androidNative.Array<io.github.triniwiz.fancycamera.facedetection.FaceDetection.DetectionMode>;
              public static valueOf(value: string): io.github.triniwiz.fancycamera.facedetection.FaceDetection.DetectionMode;
              public toString(): string;
              public static fromString(value: string): io.github.triniwiz.fancycamera.facedetection.FaceDetection.DetectionMode;
              public toNative$faceDetection_release(): number;
            }
            export namespace DetectionMode {
              export class Companion {
                public static class: java.lang.Class<io.github.triniwiz.fancycamera.facedetection.FaceDetection.DetectionMode.Companion>;
                public fromString(value: string): io.github.triniwiz.fancycamera.facedetection.FaceDetection.DetectionMode;
              }
              export class WhenMappings {
                public static class: java.lang.Class<io.github.triniwiz.fancycamera.facedetection.FaceDetection.DetectionMode.WhenMappings>;
              }
            }
            export class LandMarkMode {
              public static class: java.lang.Class<io.github.triniwiz.fancycamera.facedetection.FaceDetection.LandMarkMode>;
              public static None: io.github.triniwiz.fancycamera.facedetection.FaceDetection.LandMarkMode;
              public static All: io.github.triniwiz.fancycamera.facedetection.FaceDetection.LandMarkMode;
              public static values(): androidNative.Array<io.github.triniwiz.fancycamera.facedetection.FaceDetection.LandMarkMode>;
              public static valueOf(value: string): io.github.triniwiz.fancycamera.facedetection.FaceDetection.LandMarkMode;
              public static fromString(value: string): io.github.triniwiz.fancycamera.facedetection.FaceDetection.LandMarkMode;
              public toString(): string;
              public toNative$faceDetection_release(): number;
            }
            export namespace LandMarkMode {
              export class Companion {
                public static class: java.lang.Class<io.github.triniwiz.fancycamera.facedetection.FaceDetection.LandMarkMode.Companion>;
                public fromString(value: string): io.github.triniwiz.fancycamera.facedetection.FaceDetection.LandMarkMode;
              }
              export class WhenMappings {
                public static class: java.lang.Class<io.github.triniwiz.fancycamera.facedetection.FaceDetection.LandMarkMode.WhenMappings>;
              }
            }
            export class Options {
              public static class: java.lang.Class<io.github.triniwiz.fancycamera.facedetection.FaceDetection.Options>;
              public constructor();
              public setLandmarkMode(value: io.github.triniwiz.fancycamera.facedetection.FaceDetection.LandMarkMode): void;
              public setContourMode(value: io.github.triniwiz.fancycamera.facedetection.FaceDetection.ContourMode): void;
              public getClassificationMode(): io.github.triniwiz.fancycamera.facedetection.FaceDetection.ClassificationMode;
              public getContourMode(): io.github.triniwiz.fancycamera.facedetection.FaceDetection.ContourMode;
              public toString(): string;
              public getFaceTracking(): boolean;
              public setClassificationMode(value: io.github.triniwiz.fancycamera.facedetection.FaceDetection.ClassificationMode): void;
              public setFaceTracking(value: boolean): void;
              public getDetectionMode(): io.github.triniwiz.fancycamera.facedetection.FaceDetection.DetectionMode;
              public setMinimumFaceSize(value: number): void;
              public static fromJson(value: string): io.github.triniwiz.fancycamera.facedetection.FaceDetection.Options;
              public setDetectionMode(value: io.github.triniwiz.fancycamera.facedetection.FaceDetection.DetectionMode): void;
              public getLandmarkMode(): io.github.triniwiz.fancycamera.facedetection.FaceDetection.LandMarkMode;
              public static fromJson(value: org.json.JSONObject, returnDefault: boolean): io.github.triniwiz.fancycamera.facedetection.FaceDetection.Options;
              public getMinimumFaceSize(): number;
              public static fromJson(value: string, returnDefault: boolean): io.github.triniwiz.fancycamera.facedetection.FaceDetection.Options;
            }
            export namespace Options {
              export class Companion {
                public static class: java.lang.Class<io.github.triniwiz.fancycamera.facedetection.FaceDetection.Options.Companion>;
                public fromJson(value: string): io.github.triniwiz.fancycamera.facedetection.FaceDetection.Options;
              }
            }
          }
        }
      }
    }
  }
}

declare namespace io {
  export namespace github {
    export namespace triniwiz {
      export namespace fancycamera {
        export namespace facedetection {
          export class Result {
            public static class: java.lang.Class<io.github.triniwiz.fancycamera.facedetection.Result>;
            public getHeadEulerAngleZ(): number;
            public getHeadEulerAngleY(): number;
            public constructor(instance: com.google.mlkit.vision.face.Face);
            public getTrackingId(): java.lang.Float;
            public getHeadEulerAngleX(): number;
            public getBounds(): io.github.triniwiz.fancycamera.facedetection.Result.Bounds;
            public getRightEyeOpenProbability(): java.lang.Float;
            public getSmilingProbability(): java.lang.Float;
            public getLeftEyeOpenProbability(): java.lang.Float;
          }
          export namespace Result {
            export class Bounds {
              public static class: java.lang.Class<io.github.triniwiz.fancycamera.facedetection.Result.Bounds>;
              public getWidth(): number;
              public getHeight(): number;
              public getY(): number;
              public getX(): number;
              public constructor(rect: globalAndroid.graphics.Rect);
            }
          }
        }
      }
    }
  }
}

declare namespace io {
  export namespace github {
    export namespace triniwiz {
      export namespace fancycamera {
        export namespace imagelabeling {
          export class ImageLabeling extends io.github.triniwiz.fancycamera.ImageProcessor<string> {
            public static class: java.lang.Class<io.github.triniwiz.fancycamera.imagelabeling.ImageLabeling>;
            public process(param0: androidNative.Array<number>, param1: number, param2: number, param3: number, param4: number): java.util.concurrent.FutureTask<any>;
            public process(param0: globalAndroid.graphics.Bitmap, param1: number): java.util.concurrent.FutureTask<any>;
            public constructor();
            public process(bitmap: globalAndroid.graphics.Bitmap, rotation: number): java.util.concurrent.FutureTask<string>;
            public process(param0: globalAndroid.media.Image, param1: number): java.util.concurrent.FutureTask<any>;
            public process(image: globalAndroid.media.Image, rotation: number): java.util.concurrent.FutureTask<string>;
            public setOptions(value: io.github.triniwiz.fancycamera.imagelabeling.ImageLabeling.Options): void;
            public process(bytes: androidNative.Array<number>, width: number, height: number, rotation: number, format: number): java.util.concurrent.FutureTask<string>;
            public process(param0: com.google.mlkit.vision.common.InputImage): java.util.concurrent.FutureTask<any>;
            public getType(): number;
            public getOptions(): io.github.triniwiz.fancycamera.imagelabeling.ImageLabeling.Options;
          }
          export namespace ImageLabeling {
            export class Options {
              public static class: java.lang.Class<io.github.triniwiz.fancycamera.imagelabeling.ImageLabeling.Options>;
              public constructor();
              public setConfidenceThreshold(value: number): void;
              public static fromJson(value: string, returnDefault: boolean): io.github.triniwiz.fancycamera.imagelabeling.ImageLabeling.Options;
              public getConfidenceThreshold(): number;
              public static fromJson(value: string): io.github.triniwiz.fancycamera.imagelabeling.ImageLabeling.Options;
              public static fromJson(value: org.json.JSONObject, returnDefault: boolean): io.github.triniwiz.fancycamera.imagelabeling.ImageLabeling.Options;
            }
            export namespace Options {
              export class Companion {
                public static class: java.lang.Class<io.github.triniwiz.fancycamera.imagelabeling.ImageLabeling.Options.Companion>;
                public fromJson(value: string): io.github.triniwiz.fancycamera.imagelabeling.ImageLabeling.Options;
              }
            }
          }
        }
      }
    }
  }
}

declare namespace io {
  export namespace github {
    export namespace triniwiz {
      export namespace fancycamera {
        export namespace imagelabeling {
          export class Result {
            public static class: java.lang.Class<io.github.triniwiz.fancycamera.imagelabeling.Result>;
            public getConfidence(): number;
            public constructor(label: com.google.mlkit.vision.label.ImageLabel);
            public getIndex(): number;
            public getText(): string;
          }
        }
      }
    }
  }
}

declare namespace io {
  export namespace github {
    export namespace triniwiz {
      export namespace fancycamera {
        export namespace objectdetection {
          export class ObjectDetection extends io.github.triniwiz.fancycamera.ImageProcessor<string> {
            public static class: java.lang.Class<io.github.triniwiz.fancycamera.objectdetection.ObjectDetection>;
            public process(client: com.google.mlkit.vision.common.InputImage): java.util.concurrent.FutureTask<string>;
            public process(param0: androidNative.Array<number>, param1: number, param2: number, param3: number, param4: number): java.util.concurrent.FutureTask<any>;
            public process(param0: globalAndroid.graphics.Bitmap, param1: number): java.util.concurrent.FutureTask<any>;
            public constructor();
            public process(bitmap: globalAndroid.graphics.Bitmap, rotation: number): java.util.concurrent.FutureTask<string>;
            public process(param0: globalAndroid.media.Image, param1: number): java.util.concurrent.FutureTask<any>;
            public setOptions(value: io.github.triniwiz.fancycamera.objectdetection.ObjectDetection.Options): void;
            public process(image: globalAndroid.media.Image, rotation: number): java.util.concurrent.FutureTask<string>;
            public getOptions(): io.github.triniwiz.fancycamera.objectdetection.ObjectDetection.Options;
            public process(bytes: androidNative.Array<number>, width: number, height: number, rotation: number, format: number): java.util.concurrent.FutureTask<string>;
            public process(param0: com.google.mlkit.vision.common.InputImage): java.util.concurrent.FutureTask<any>;
            public getType(): number;
          }
          export namespace ObjectDetection {
            export class Options {
              public static class: java.lang.Class<io.github.triniwiz.fancycamera.objectdetection.ObjectDetection.Options>;
              public constructor();
              public setMultiple(value: boolean): void;
              public getClassification(): boolean;
              public getSingleMode$objectDetection_release(): boolean;
              public static fromJson(value: string): io.github.triniwiz.fancycamera.objectdetection.ObjectDetection.Options;
              public static fromJson(value: org.json.JSONObject, returnDefault: boolean): io.github.triniwiz.fancycamera.objectdetection.ObjectDetection.Options;
              public setClassification(value: boolean): void;
              public static fromJson(value: string, returnDefault: boolean): io.github.triniwiz.fancycamera.objectdetection.ObjectDetection.Options;
              public setSingleMode$objectDetection_release(value: boolean): void;
              public getMultiple(): boolean;
            }
            export namespace Options {
              export class Companion {
                public static class: java.lang.Class<io.github.triniwiz.fancycamera.objectdetection.ObjectDetection.Options.Companion>;
                public fromJson(value: string): io.github.triniwiz.fancycamera.objectdetection.ObjectDetection.Options;
              }
            }
          }
        }
      }
    }
  }
}

declare namespace io {
  export namespace github {
    export namespace triniwiz {
      export namespace fancycamera {
        export namespace objectdetection {
          export class Result {
            public static class: java.lang.Class<io.github.triniwiz.fancycamera.objectdetection.Result>;
            public getLabels(): androidNative.Array<io.github.triniwiz.fancycamera.objectdetection.Result.Label>;
            public getTrackingId(): java.lang.Integer;
            public getBounds(): io.github.triniwiz.fancycamera.objectdetection.Result.Bounds;
            public constructor($i$f$toTypedArray: com.google.mlkit.vision.objects.DetectedObject);
          }
          export namespace Result {
            export class Bounds {
              public static class: java.lang.Class<io.github.triniwiz.fancycamera.objectdetection.Result.Bounds>;
              public getWidth(): number;
              public getHeight(): number;
              public getY(): number;
              public getX(): number;
              public constructor(rect: globalAndroid.graphics.Rect);
            }
            export class Label {
              public static class: java.lang.Class<io.github.triniwiz.fancycamera.objectdetection.Result.Label>;
              public getConfidence(): number;
              public constructor(label: com.google.mlkit.vision.objects.DetectedObject.Label);
              public getText(): io.github.triniwiz.fancycamera.objectdetection.Result.Label.Category;
              public getIndex(): io.github.triniwiz.fancycamera.objectdetection.Result.Label.Index;
            }
            export namespace Label {
              export class Category {
                public static class: java.lang.Class<io.github.triniwiz.fancycamera.objectdetection.Result.Label.Category>;
                public static Unknown: io.github.triniwiz.fancycamera.objectdetection.Result.Label.Category;
                public static HomeGood: io.github.triniwiz.fancycamera.objectdetection.Result.Label.Category;
                public static FashionGood: io.github.triniwiz.fancycamera.objectdetection.Result.Label.Category;
                public static Food: io.github.triniwiz.fancycamera.objectdetection.Result.Label.Category;
                public static Place: io.github.triniwiz.fancycamera.objectdetection.Result.Label.Category;
                public static Plant: io.github.triniwiz.fancycamera.objectdetection.Result.Label.Category;
                public static valueOf(value: string): io.github.triniwiz.fancycamera.objectdetection.Result.Label.Category;
                public getCategory(): string;
                public static values(): androidNative.Array<io.github.triniwiz.fancycamera.objectdetection.Result.Label.Category>;
              }
              export class Index {
                public static class: java.lang.Class<io.github.triniwiz.fancycamera.objectdetection.Result.Label.Index>;
                public static UnknownIndex: io.github.triniwiz.fancycamera.objectdetection.Result.Label.Index;
                public static HomeGoodIndex: io.github.triniwiz.fancycamera.objectdetection.Result.Label.Index;
                public static FashionGoodIndex: io.github.triniwiz.fancycamera.objectdetection.Result.Label.Index;
                public static FoodIndex: io.github.triniwiz.fancycamera.objectdetection.Result.Label.Index;
                public static PlaceIndex: io.github.triniwiz.fancycamera.objectdetection.Result.Label.Index;
                public static PlantIndex: io.github.triniwiz.fancycamera.objectdetection.Result.Label.Index;
                public static valueOf(value: string): io.github.triniwiz.fancycamera.objectdetection.Result.Label.Index;
                public getIndex(): string;
                public static values(): androidNative.Array<io.github.triniwiz.fancycamera.objectdetection.Result.Label.Index>;
              }
            }
          }
        }
      }
    }
  }
}

declare namespace io {
  export namespace github {
    export namespace triniwiz {
      export namespace fancycamera {
        export namespace posedetection {
          export class PoseDetection extends io.github.triniwiz.fancycamera.ImageProcessor<string> {
            public static class: java.lang.Class<io.github.triniwiz.fancycamera.posedetection.PoseDetection>;
            public setSingleMode(value: boolean): void;
            public process(client: com.google.mlkit.vision.common.InputImage): java.util.concurrent.FutureTask<string>;
            public process(param0: androidNative.Array<number>, param1: number, param2: number, param3: number, param4: number): java.util.concurrent.FutureTask<any>;
            public process(param0: globalAndroid.graphics.Bitmap, param1: number): java.util.concurrent.FutureTask<any>;
            public constructor();
            public process(param0: globalAndroid.media.Image, param1: number): java.util.concurrent.FutureTask<any>;
            public process(image: globalAndroid.media.Image, rotation: number): java.util.concurrent.FutureTask<string>;
            public process(param0: com.google.mlkit.vision.common.InputImage): java.util.concurrent.FutureTask<any>;
            public getType(): number;
            public getSingleMode(): boolean;
          }
        }
      }
    }
  }
}

declare namespace io {
  export namespace github {
    export namespace triniwiz {
      export namespace fancycamera {
        export namespace posedetection {
          export class Result {
            public static class: java.lang.Class<io.github.triniwiz.fancycamera.posedetection.Result>;
            public getLandMarks(): androidNative.Array<io.github.triniwiz.fancycamera.posedetection.Result.LandMark>;
            public constructor($i$f$toTypedArray: com.google.mlkit.vision.pose.Pose);
          }
          export namespace Result {
            export class LandMark {
              public static class: java.lang.Class<io.github.triniwiz.fancycamera.posedetection.Result.LandMark>;
              public constructor(landmark: com.google.mlkit.vision.pose.PoseLandmark);
              public getType(): io.github.triniwiz.fancycamera.posedetection.Result.LandMark.Type;
              public getPosition(): io.github.triniwiz.fancycamera.posedetection.Result.LandMark.PointF;
              public getInFrameLikelihood(): number;
            }
            export namespace LandMark {
              export class PointF {
                public static class: java.lang.Class<io.github.triniwiz.fancycamera.posedetection.Result.LandMark.PointF>;
                public constructor(point: globalAndroid.graphics.PointF);
                public getX(): number;
                public getY(): number;
              }
              export class Type {
                public static class: java.lang.Class<io.github.triniwiz.fancycamera.posedetection.Result.LandMark.Type>;
                public static Nose: io.github.triniwiz.fancycamera.posedetection.Result.LandMark.Type;
                public static LeftEyeInner: io.github.triniwiz.fancycamera.posedetection.Result.LandMark.Type;
                public static LeftEye: io.github.triniwiz.fancycamera.posedetection.Result.LandMark.Type;
                public static LeftEyeOuter: io.github.triniwiz.fancycamera.posedetection.Result.LandMark.Type;
                public static RightEyeInner: io.github.triniwiz.fancycamera.posedetection.Result.LandMark.Type;
                public static RightEye: io.github.triniwiz.fancycamera.posedetection.Result.LandMark.Type;
                public static RightEyeOuter: io.github.triniwiz.fancycamera.posedetection.Result.LandMark.Type;
                public static LeftEar: io.github.triniwiz.fancycamera.posedetection.Result.LandMark.Type;
                public static RightEar: io.github.triniwiz.fancycamera.posedetection.Result.LandMark.Type;
                public static LeftMouth: io.github.triniwiz.fancycamera.posedetection.Result.LandMark.Type;
                public static RightMouth: io.github.triniwiz.fancycamera.posedetection.Result.LandMark.Type;
                public static LeftShoulder: io.github.triniwiz.fancycamera.posedetection.Result.LandMark.Type;
                public static RightShoulder: io.github.triniwiz.fancycamera.posedetection.Result.LandMark.Type;
                public static LeftElbow: io.github.triniwiz.fancycamera.posedetection.Result.LandMark.Type;
                public static RightElbow: io.github.triniwiz.fancycamera.posedetection.Result.LandMark.Type;
                public static LeftWrist: io.github.triniwiz.fancycamera.posedetection.Result.LandMark.Type;
                public static RightWrist: io.github.triniwiz.fancycamera.posedetection.Result.LandMark.Type;
                public static LeftPinky: io.github.triniwiz.fancycamera.posedetection.Result.LandMark.Type;
                public static RightPinky: io.github.triniwiz.fancycamera.posedetection.Result.LandMark.Type;
                public static LeftIndex: io.github.triniwiz.fancycamera.posedetection.Result.LandMark.Type;
                public static RightIndex: io.github.triniwiz.fancycamera.posedetection.Result.LandMark.Type;
                public static LeftThumb: io.github.triniwiz.fancycamera.posedetection.Result.LandMark.Type;
                public static RightThumb: io.github.triniwiz.fancycamera.posedetection.Result.LandMark.Type;
                public static LeftHip: io.github.triniwiz.fancycamera.posedetection.Result.LandMark.Type;
                public static RightHip: io.github.triniwiz.fancycamera.posedetection.Result.LandMark.Type;
                public static LeftKnee: io.github.triniwiz.fancycamera.posedetection.Result.LandMark.Type;
                public static RightKnee: io.github.triniwiz.fancycamera.posedetection.Result.LandMark.Type;
                public static LeftAnkle: io.github.triniwiz.fancycamera.posedetection.Result.LandMark.Type;
                public static RightAnkle: io.github.triniwiz.fancycamera.posedetection.Result.LandMark.Type;
                public static LeftHeel: io.github.triniwiz.fancycamera.posedetection.Result.LandMark.Type;
                public static RightHeel: io.github.triniwiz.fancycamera.posedetection.Result.LandMark.Type;
                public static LeftFootIndex: io.github.triniwiz.fancycamera.posedetection.Result.LandMark.Type;
                public static RightFootIndex: io.github.triniwiz.fancycamera.posedetection.Result.LandMark.Type;
                public static Unknown: io.github.triniwiz.fancycamera.posedetection.Result.LandMark.Type;
                public static valueOf(value: string): io.github.triniwiz.fancycamera.posedetection.Result.LandMark.Type;
                public static values(): androidNative.Array<io.github.triniwiz.fancycamera.posedetection.Result.LandMark.Type>;
                public getType(): string;
              }
            }
          }
        }
      }
    }
  }
}

declare namespace io {
  export namespace github {
    export namespace triniwiz {
      export namespace fancycamera {
        export namespace selfiesegmentation {
          export class SelfieSegmentation extends io.github.triniwiz.fancycamera.ImageProcessor<com.google.mlkit.vision.segmentation.SegmentationMask> {
            public static class: java.lang.Class<io.github.triniwiz.fancycamera.selfiesegmentation.SelfieSegmentation>;
            public process(param0: androidNative.Array<number>, param1: number, param2: number, param3: number, param4: number): java.util.concurrent.FutureTask<any>;
            public process(param0: globalAndroid.graphics.Bitmap, param1: number): java.util.concurrent.FutureTask<any>;
            public constructor();
            public setOptions(value: io.github.triniwiz.fancycamera.selfiesegmentation.SelfieSegmentation.Options): void;
            public getOptions(): io.github.triniwiz.fancycamera.selfiesegmentation.SelfieSegmentation.Options;
            public process(param0: globalAndroid.media.Image, param1: number): java.util.concurrent.FutureTask<any>;
            public process(client: com.google.mlkit.vision.common.InputImage): java.util.concurrent.FutureTask<com.google.mlkit.vision.segmentation.SegmentationMask>;
            public process(param0: com.google.mlkit.vision.common.InputImage): java.util.concurrent.FutureTask<any>;
            public process(image: globalAndroid.media.Image, rotation: number): java.util.concurrent.FutureTask<com.google.mlkit.vision.segmentation.SegmentationMask>;
            public getType(): number;
          }
          export namespace SelfieSegmentation {
            export class Options {
              public static class: java.lang.Class<io.github.triniwiz.fancycamera.selfiesegmentation.SelfieSegmentation.Options>;
              public constructor();
              public setSingleMode$selfieSegmentation_release(value: boolean): void;
              public getSingleMode$selfieSegmentation_release(): boolean;
              public getEnableRawSizeMask(): boolean;
              public static fromJson(value: string): io.github.triniwiz.fancycamera.selfiesegmentation.SelfieSegmentation.Options;
              public static fromJson(value: string, returnDefault: boolean): io.github.triniwiz.fancycamera.selfiesegmentation.SelfieSegmentation.Options;
              public setSmoothingRatio(value: number): void;
              public setEnableRawSizeMask(value: boolean): void;
              public static fromJson(value: org.json.JSONObject, returnDefault: boolean): io.github.triniwiz.fancycamera.selfiesegmentation.SelfieSegmentation.Options;
              public getSmoothingRatio(): number;
            }
            export namespace Options {
              export class Companion {
                public static class: java.lang.Class<io.github.triniwiz.fancycamera.selfiesegmentation.SelfieSegmentation.Options.Companion>;
                public fromJson(value: string): io.github.triniwiz.fancycamera.selfiesegmentation.SelfieSegmentation.Options;
              }
            }
          }
        }
      }
    }
  }
}

declare namespace io {
  export namespace github {
    export namespace triniwiz {
      export namespace fancycamera {
        export namespace textrecognition {
          export class Result {
            public static class: java.lang.Class<io.github.triniwiz.fancycamera.textrecognition.Result>;
            public getBlocks(): androidNative.Array<io.github.triniwiz.fancycamera.textrecognition.Result.Block>;
            public constructor(point: com.google.mlkit.vision.text.Text);
            public getText(): string;
          }
          export namespace Result {
            export class Block {
              public static class: java.lang.Class<io.github.triniwiz.fancycamera.textrecognition.Result.Block>;
              public constructor(text: string, cornerPoints: androidNative.Array<io.github.triniwiz.fancycamera.textrecognition.Result.Point>, bounds: io.github.triniwiz.fancycamera.textrecognition.Result.Bounds, lines: androidNative.Array<io.github.triniwiz.fancycamera.textrecognition.Result.Line>);
              public getText(): string;
              public getCornerPoints(): androidNative.Array<io.github.triniwiz.fancycamera.textrecognition.Result.Point>;
            }
            export class Bounds {
              public static class: java.lang.Class<io.github.triniwiz.fancycamera.textrecognition.Result.Bounds>;
              public getWidth(): number;
              public getHeight(): number;
              public getY(): number;
              public getX(): number;
              public constructor(rect: globalAndroid.graphics.Rect);
            }
            export class Element {
              public static class: java.lang.Class<io.github.triniwiz.fancycamera.textrecognition.Result.Element>;
              public getText(): string;
              public constructor(text: string, bounds: io.github.triniwiz.fancycamera.textrecognition.Result.Bounds);
            }
            export class Line {
              public static class: java.lang.Class<io.github.triniwiz.fancycamera.textrecognition.Result.Line>;
              public getText(): string;
              public getCornerPoints(): androidNative.Array<io.github.triniwiz.fancycamera.textrecognition.Result.Point>;
              public constructor(text: string, cornerPoints: androidNative.Array<io.github.triniwiz.fancycamera.textrecognition.Result.Point>, bounds: io.github.triniwiz.fancycamera.textrecognition.Result.Bounds, elements: androidNative.Array<io.github.triniwiz.fancycamera.textrecognition.Result.Element>);
            }
            export class Point {
              public static class: java.lang.Class<io.github.triniwiz.fancycamera.textrecognition.Result.Point>;
              public getY(): number;
              public constructor(point: globalAndroid.graphics.Point);
              public getX(): number;
            }
          }
        }
      }
    }
  }
}

declare namespace io {
  export namespace github {
    export namespace triniwiz {
      export namespace fancycamera {
        export namespace textrecognition {
          export class TextRecognition extends io.github.triniwiz.fancycamera.ImageProcessor<string> {
            public static class: java.lang.Class<io.github.triniwiz.fancycamera.textrecognition.TextRecognition>;
            public process(param0: androidNative.Array<number>, param1: number, param2: number, param3: number, param4: number): java.util.concurrent.FutureTask<any>;
            public process(param0: globalAndroid.graphics.Bitmap, param1: number): java.util.concurrent.FutureTask<any>;
            public constructor();
            public process(bitmap: globalAndroid.graphics.Bitmap, rotation: number): java.util.concurrent.FutureTask<string>;
            public process(param0: globalAndroid.media.Image, param1: number): java.util.concurrent.FutureTask<any>;
            public process(image: globalAndroid.media.Image, rotation: number): java.util.concurrent.FutureTask<string>;
            public process(bytes: androidNative.Array<number>, width: number, height: number, rotation: number, format: number): java.util.concurrent.FutureTask<string>;
            public process(param0: com.google.mlkit.vision.common.InputImage): java.util.concurrent.FutureTask<any>;
            public getType(): number;
          }
        }
      }
    }
  }
}

//Generics information:
//io.github.triniwiz.fancycamera.ImageProcessor:1
