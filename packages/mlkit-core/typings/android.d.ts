declare module io {
	export module github {
		export module triniwiz {
			export module fancycamera {
				export class BuildConfig {
					public static class: java.lang.Class<io.github.triniwiz.fancycamera.BuildConfig>;
					public static DEBUG: boolean;
					public static LIBRARY_PACKAGE_NAME: string;
					public static BUILD_TYPE: string;
					public constructor();
				}
			}
		}
	}
}

declare module io {
	export module github {
		export module triniwiz {
			export module fancycamera {
				export class Camera extends io.github.triniwiz.fancycamera.CameraBase {
					public static class: java.lang.Class<io.github.triniwiz.fancycamera.Camera>;
					public getDisplayRatio(): string;
					public cameraRecording(): boolean;
					public setPause(param0: boolean): void;
					public getAllowExifRotation(): boolean;
					public setMaxVideoFrameRate(param0: number): void;
					public getDisableHEVC(): boolean;
					public getAutoFocus(): boolean;
					public setAllowExifRotation(param0: boolean): void;
					public getQuality(): io.github.triniwiz.fancycamera.Quality;
					public isStarted(): boolean;
					public startPreview(): void;
					public getMaxAudioBitRate(): number;
					public getWhiteBalance(): io.github.triniwiz.fancycamera.WhiteBalance;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
					public setAutoSquareCrop(param0: boolean): void;
					public setForceStopping(param0: boolean): void;
					public isForceStopping(): boolean;
					public setRotation(param0: io.github.triniwiz.fancycamera.CameraOrientation): void;
					public getAutoSquareCrop(): boolean;
					public setWhiteBalance(param0: io.github.triniwiz.fancycamera.WhiteBalance): void;
					public getPictureSize(): string;
					public getSaveToGallery(): boolean;
					public isRecording(): boolean;
					public startRecording(): void;
					public setDisableHEVC(param0: boolean): void;
					public setCamera(param0: globalAndroid.hardware.Camera): void;
					public setQuality(param0: io.github.triniwiz.fancycamera.Quality): void;
					public getNumberOfCameras(): number;
					public getSupportedRatios(): androidNative.Array<string>;
					public setZoom(param0: number): void;
					public release(): void;
					public getLock(): any;
					public setLock(param0: any): void;
					public setSaveToGallery(param0: boolean): void;
					public setAudioLevelsEnabled(param0: boolean): void;
					public orientationUpdated(): void;
					public getRotation(): io.github.triniwiz.fancycamera.CameraOrientation;
					public setPosition(param0: io.github.triniwiz.fancycamera.CameraPosition): void;
					public stop(): void;
					public isAudioLevelsEnabled(): boolean;
					public setMaxVideoBitrate(param0: number): void;
					public setRecording(param0: boolean): void;
					public getAmplitudeEMA(): number;
					public stopPreview(): void;
					public setStarted(param0: boolean): void;
					public setPictureSize(param0: string): void;
					public getPosition(): io.github.triniwiz.fancycamera.CameraPosition;
					public getFlashMode(): io.github.triniwiz.fancycamera.CameraFlashMode;
					public getMaxVideoBitrate(): number;
					public setFlashMode(param0: io.github.triniwiz.fancycamera.CameraFlashMode): void;
					public getCamera(): globalAndroid.hardware.Camera;
					public getDetectorType(): io.github.triniwiz.fancycamera.DetectorType;
					public takePhoto(): void;
					public getMaxVideoFrameRate(): number;
					public getPreviewSurface(): any;
					public getAmplitude(): number;
					public getZoom(): number;
					public getAvailablePictureSizes(param0: string): androidNative.Array<io.github.triniwiz.fancycamera.Size>;
					public setAutoFocus(param0: boolean): void;
					public setDisplayRatio(param0: string): void;
					public toggleCamera(): void;
					public stopRecording(): void;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
					public getPause(): boolean;
					public hasFlash(): boolean;
					public constructor(param0: globalAndroid.content.Context);
					public setDetectorType(param0: io.github.triniwiz.fancycamera.DetectorType): void;
					public setMaxAudioBitRate(param0: number): void;
					public getDb(): number;
				}
				export module Camera {
					export class WhenMappings {
						public static class: java.lang.Class<io.github.triniwiz.fancycamera.Camera.WhenMappings>;
					}
				}
			}
		}
	}
}

declare module io {
	export module github {
		export module triniwiz {
			export module fancycamera {
				export class Camera2 extends io.github.triniwiz.fancycamera.CameraBase {
					public static class: java.lang.Class<io.github.triniwiz.fancycamera.Camera2>;
					public getDisplayRatio(): string;
					public cameraRecording(): boolean;
					public setPause(param0: boolean): void;
					public getAllowExifRotation(): boolean;
					public setMaxVideoFrameRate(param0: number): void;
					public getDisableHEVC(): boolean;
					public getAutoFocus(): boolean;
					public setAllowExifRotation(param0: boolean): void;
					public getQuality(): io.github.triniwiz.fancycamera.Quality;
					public getMaxAudioBitRate(): number;
					public startPreview(): void;
					public getWhiteBalance(): io.github.triniwiz.fancycamera.WhiteBalance;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
					public setAutoSquareCrop(param0: boolean): void;
					public setRotation(param0: io.github.triniwiz.fancycamera.CameraOrientation): void;
					public getAutoSquareCrop(): boolean;
					public setWhiteBalance(param0: io.github.triniwiz.fancycamera.WhiteBalance): void;
					public getPictureSize(): string;
					public getSaveToGallery(): boolean;
					public startRecording(): void;
					public setDisableHEVC(param0: boolean): void;
					public getNumberOfCameras(): number;
					public setQuality(param0: io.github.triniwiz.fancycamera.Quality): void;
					public getSupportedRatios(): androidNative.Array<string>;
					public setZoom(param0: number): void;
					public release(): void;
					public setSaveToGallery(param0: boolean): void;
					public setAudioLevelsEnabled(param0: boolean): void;
					public orientationUpdated(): void;
					public getRotation(): io.github.triniwiz.fancycamera.CameraOrientation;
					public setPosition(param0: io.github.triniwiz.fancycamera.CameraPosition): void;
					public setAmplitude(param0: number): void;
					public isAudioLevelsEnabled(): boolean;
					public stop(): void;
					public setMaxVideoBitrate(param0: number): void;
					public setAmplitudeEMA(param0: number): void;
					public getAmplitudeEMA(): number;
					public stopPreview(): void;
					public setPictureSize(param0: string): void;
					public getPosition(): io.github.triniwiz.fancycamera.CameraPosition;
					public setDb(param0: number): void;
					public getFlashMode(): io.github.triniwiz.fancycamera.CameraFlashMode;
					public getMaxVideoBitrate(): number;
					public setFlashMode(param0: io.github.triniwiz.fancycamera.CameraFlashMode): void;
					public getDetectorType(): io.github.triniwiz.fancycamera.DetectorType;
					public getMaxVideoFrameRate(): number;
					public takePhoto(): void;
					public getPreviewSurface(): any;
					public getAmplitude(): number;
					public getZoom(): number;
					public getAvailablePictureSizes(param0: string): androidNative.Array<io.github.triniwiz.fancycamera.Size>;
					public setAutoFocus(param0: boolean): void;
					public setDisplayRatio(param0: string): void;
					public toggleCamera(): void;
					public stopRecording(): void;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
					public getPause(): boolean;
					public hasFlash(): boolean;
					public constructor(param0: globalAndroid.content.Context);
					public setDetectorType(param0: io.github.triniwiz.fancycamera.DetectorType): void;
					public setMaxAudioBitRate(param0: number): void;
					public getDb(): number;
				}
				export module Camera2 {
					export class WhenMappings {
						public static class: java.lang.Class<io.github.triniwiz.fancycamera.Camera2.WhenMappings>;
					}
				}
			}
		}
	}
}

declare module io {
	export module github {
		export module triniwiz {
			export module fancycamera {
				export abstract class CameraBase {
					public static class: java.lang.Class<io.github.triniwiz.fancycamera.CameraBase>;
					public static Companion: io.github.triniwiz.fancycamera.CameraBase.Companion;
					public setProcessEveryNthFrame(param0: number): void;
					public getProcessEveryNthFrame(): number;
					public setFaceDetectionOptions(param0: any): void;
					public setMTimerTask$fancycamera_release(param0: java.util.TimerTask): void;
					public setPause(param0: boolean): void;
					public getAllowExifRotation(): boolean;
					public setOnBarcodeScanningListener$fancycamera_release(param0: io.github.triniwiz.fancycamera.ImageAnalysisCallback): void;
					public setCurrentOrientation(param0: number): void;
					public finalize(): void;
					public setMaxVideoFrameRate(param0: number): void;
					public getAutoFocus(): boolean;
					public setAllowExifRotation(param0: boolean): void;
					public startPreview(): void;
					public getDATETIME_FORMAT$fancycamera_release(): java.lang.ThreadLocal<java.text.SimpleDateFormat>;
					public setOverridePhotoWidth(param0: number): void;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
					public setAutoSquareCrop(param0: boolean): void;
					public setRotation(param0: io.github.triniwiz.fancycamera.CameraOrientation): void;
					public setOverridePhotoHeight(param0: number): void;
					public setOnTextRecognitionListener(param0: io.github.triniwiz.fancycamera.ImageAnalysisCallback): void;
					public getOnPoseDetectedListener$fancycamera_release(): io.github.triniwiz.fancycamera.ImageAnalysisCallback;
					public getSaveToGallery(): boolean;
					public setGettingAudioLevels$fancycamera_release(param0: boolean): void;
					public getImageLabelingOptions$fancycamera_release(): any;
					public setQuality(param0: io.github.triniwiz.fancycamera.Quality): void;
					public setListener$fancycamera_release(param0: io.github.triniwiz.fancycamera.CameraEventListener): void;
					public getSupportedRatios(): androidNative.Array<string>;
					public hasCameraPermission(): boolean;
					public setSaveToGallery(param0: boolean): void;
					public setAudioLevelsEnabled(param0: boolean): void;
					public orientationUpdated(): void;
					public getOnSelfieSegmentationListener$fancycamera_release(): io.github.triniwiz.fancycamera.ImageAnalysisCallback;
					public setOnTextRecognitionListener$fancycamera_release(param0: io.github.triniwiz.fancycamera.ImageAnalysisCallback): void;
					public getDATE_FORMAT$fancycamera_release(): java.lang.ThreadLocal<java.text.SimpleDateFormat>;
					public getAnalysisExecutor$fancycamera_release(): java.util.concurrent.ExecutorService;
					public getObjectDetectionOptions$fancycamera_release(): any;
					public setOnImageLabelingListener(param0: io.github.triniwiz.fancycamera.ImageAnalysisCallback): void;
					public getOnSurfaceUpdateListener$fancycamera_release(): io.github.triniwiz.fancycamera.SurfaceUpdateListener;
					public getMDuration$fancycamera_release(): number;
					public getPosition(): io.github.triniwiz.fancycamera.CameraPosition;
					public setBarcodeScannerOptions$fancycamera_release(param0: any): void;
					public setSelfieSegmentationOptions(param0: any): void;
					public getMainHandler$fancycamera_release(): globalAndroid.os.Handler;
					public setAnalysisExecutor$fancycamera_release(param0: java.util.concurrent.ExecutorService): void;
					public startDurationTimer$fancycamera_release(): void;
					public stopDurationTimer$fancycamera_release(): void;
					public getDuration(): number;
					public requestAudioPermission(): void;
					public hasAudioPermission(): boolean;
					public getOnBarcodeScanningListener$fancycamera_release(): io.github.triniwiz.fancycamera.ImageAnalysisCallback;
					public getMaxVideoBitrate(): number;
					public setonSurfaceUpdateListener(param0: io.github.triniwiz.fancycamera.SurfaceUpdateListener): void;
					public getFaceDetectionOptions$fancycamera_release(): any;
					public setFlashMode(param0: io.github.triniwiz.fancycamera.CameraFlashMode): void;
					public getMTimerTask$fancycamera_release(): java.util.TimerTask;
					public setRecorder$fancycamera_release(param0: globalAndroid.media.MediaRecorder): void;
					public getDetectorType(): io.github.triniwiz.fancycamera.DetectorType;
					public getMaxVideoFrameRate(): number;
					public takePhoto(): void;
					public stringSizeToSize$fancycamera_release(param0: string): io.github.triniwiz.fancycamera.Size;
					public getAvailablePictureSizes(param0: string): androidNative.Array<io.github.triniwiz.fancycamera.Size>;
					public getRecorder$fancycamera_release(): globalAndroid.media.MediaRecorder;
					public setAutoFocus(param0: boolean): void;
					public convertToExifDateTime$fancycamera_release(param0: number): string;
					public setOnFacesDetectedListener$fancycamera_release(param0: io.github.triniwiz.fancycamera.ImageAnalysisCallback): void;
					public setImageLabelingOptions(param0: any): void;
					public setOnPoseDetectedListener$fancycamera_release(param0: io.github.triniwiz.fancycamera.ImageAnalysisCallback): void;
					public initListener$fancycamera_release(param0: globalAndroid.media.MediaRecorder): void;
					public getVIDEO_RECORDER_PERMISSIONS_REQUEST$fancycamera_release(): number;
					public stopRecording(): void;
					public hasFlash(): boolean;
					public constructor(param0: globalAndroid.content.Context);
					public setDetectorType(param0: io.github.triniwiz.fancycamera.DetectorType): void;
					public setMaxAudioBitRate(param0: number): void;
					public getDb(): number;
					public setBarcodeScannerOptions(param0: any): void;
					public getBarcodeScannerOptions$fancycamera_release(): any;
					public cameraRecording(): boolean;
					public getDisplayRatio(): string;
					public deInitListener$fancycamera_release(): void;
					public toggleFlash(): void;
					public getDisableHEVC(): boolean;
					public setOnSelfieSegmentationListener$fancycamera_release(param0: io.github.triniwiz.fancycamera.ImageAnalysisCallback): void;
					public getQuality(): io.github.triniwiz.fancycamera.Quality;
					public requestCameraPermission(): void;
					public getMaxAudioBitRate(): number;
					public setOnObjectDetectedListener$fancycamera_release(param0: io.github.triniwiz.fancycamera.ImageAnalysisCallback): void;
					public getWhiteBalance(): io.github.triniwiz.fancycamera.WhiteBalance;
					public setObjectDetectionOptions$fancycamera_release(param0: any): void;
					public getTIME_FORMAT$fancycamera_release(): java.lang.ThreadLocal<java.text.SimpleDateFormat>;
					public hasStoragePermission(): boolean;
					public setMTimer$fancycamera_release(param0: java.util.Timer): void;
					public getListener$fancycamera_release(): io.github.triniwiz.fancycamera.CameraEventListener;
					public getAutoSquareCrop(): boolean;
					public getOverridePhotoWidth(): number;
					public setWhiteBalance(param0: io.github.triniwiz.fancycamera.WhiteBalance): void;
					public getPictureSize(): string;
					public startRecording(): void;
					public setDisableHEVC(param0: boolean): void;
					public setOnSurfaceUpdateListener$fancycamera_release(param0: io.github.triniwiz.fancycamera.SurfaceUpdateListener): void;
					public getNumberOfCameras(): number;
					public setZoom(param0: number): void;
					public requestPermission(): void;
					public release(): void;
					public getOnTextRecognitionListener$fancycamera_release(): io.github.triniwiz.fancycamera.ImageAnalysisCallback;
					public setSelfieSegmentationOptions$fancycamera_release(param0: any): void;
					public getRotation(): io.github.triniwiz.fancycamera.CameraOrientation;
					public isGettingAudioLevels$fancycamera_release(): boolean;
					public setPosition(param0: io.github.triniwiz.fancycamera.CameraPosition): void;
					public getOnFacesDetectedListener$fancycamera_release(): io.github.triniwiz.fancycamera.ImageAnalysisCallback;
					public getCamcorderProfile$fancycamera_release(param0: io.github.triniwiz.fancycamera.Quality): globalAndroid.media.CamcorderProfile;
					public setOnObjectDetectedListener(param0: io.github.triniwiz.fancycamera.ImageAnalysisCallback): void;
					public isAudioLevelsEnabled(): boolean;
					public stop(): void;
					public setMaxVideoBitrate(param0: number): void;
					public getOnImageLabelingListener$fancycamera_release(): io.github.triniwiz.fancycamera.ImageAnalysisCallback;
					public getAmplitudeEMA(): number;
					public setOnBarcodeScanningListener(param0: io.github.triniwiz.fancycamera.ImageAnalysisCallback): void;
					public stopPreview(): void;
					public getMTimer$fancycamera_release(): java.util.Timer;
					public getOnObjectDetectedListener$fancycamera_release(): io.github.triniwiz.fancycamera.ImageAnalysisCallback;
					public getOverridePhotoHeight(): number;
					public setObjectDetectionOptions(param0: any): void;
					public setPictureSize(param0: string): void;
					public setImageLabelingOptions$fancycamera_release(param0: any): void;
					public getFlashMode(): io.github.triniwiz.fancycamera.CameraFlashMode;
					public convertFromExifDateTime$fancycamera_release(param0: string): java.util.Date;
					public hasPermission(): boolean;
					public setOnSelfieSegmentationListener(param0: io.github.triniwiz.fancycamera.ImageAnalysisCallback): void;
					public getPreviewSurface(): any;
					public getAmplitude(): number;
					public getZoom(): number;
					public getVIDEO_RECORDER_PERMISSIONS$fancycamera_release(): androidNative.Array<string>;
					public setDisplayRatio(param0: string): void;
					public requestStoragePermission(): void;
					public toggleCamera(): void;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
					public getPause(): boolean;
					public setOnPoseDetectedListener(param0: io.github.triniwiz.fancycamera.ImageAnalysisCallback): void;
					public setMDuration$fancycamera_release(param0: number): void;
					public setOnImageLabelingListener$fancycamera_release(param0: io.github.triniwiz.fancycamera.ImageAnalysisCallback): void;
					public initOptions$fancycamera_release(): void;
					public setFaceDetectionOptions$fancycamera_release(param0: any): void;
					public getCurrentOrientation(): number;
					public setOnFacesDetectedListener(param0: io.github.triniwiz.fancycamera.ImageAnalysisCallback): void;
					public getSelfieSegmentationOptions$fancycamera_release(): any;
				}
				export module CameraBase {
					export class Companion {
						public static class: java.lang.Class<io.github.triniwiz.fancycamera.CameraBase.Companion>;
						public setFaceDetectionSupported$fancycamera_release(param0: boolean): void;
						public getEMA_FILTER$fancycamera_release(): number;
						public setObjectDetectionSupported$fancycamera_release(param0: boolean): void;
						public isBarcodeScanningSupported$fancycamera_release(): boolean;
						public isFaceDetectionSupported$fancycamera_release(): boolean;
						public isPoseDetectionSupported$fancycamera_release(): boolean;
						public isTextRecognitionSupported$fancycamera_release(): boolean;
						public setTextRecognitionSupported$fancycamera_release(param0: boolean): void;
						public setImageLabelingSupported$fancycamera_release(param0: boolean): void;
						public setPoseDetectionSupported$fancycamera_release(param0: boolean): void;
						public detectSupport$fancycamera_release(): void;
						public setBarcodeScanningSupported$fancycamera_release(param0: boolean): void;
						public setSelfieSegmentationSupported$fancycamera_release(param0: boolean): void;
						public isImageLabelingSupported$fancycamera_release(): boolean;
						public isSelfieSegmentationSupported$fancycamera_release(): boolean;
						public isObjectDetectionSupported$fancycamera_release(): boolean;
						public isMLSupported$fancycamera_release(): boolean;
					}
					export class WhenMappings {
						public static class: java.lang.Class<io.github.triniwiz.fancycamera.CameraBase.WhenMappings>;
					}
				}
			}
		}
	}
}

declare module io {
	export module github {
		export module triniwiz {
			export module fancycamera {
				export class CameraEventListener {
					public static class: java.lang.Class<io.github.triniwiz.fancycamera.CameraEventListener>;
					/**
					 * Constructs a new instance of the io.github.triniwiz.fancycamera.CameraEventListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onReady(): void;
						onCameraOpen(): void;
						onCameraClose(): void;
						onCameraPhoto(param0: java.io.File): void;
						onCameraVideo(param0: java.io.File): void;
						onCameraAnalysis(param0: io.github.triniwiz.fancycamera.ImageAnalysis): void;
						onCameraError(param0: string, param1: java.lang.Exception): void;
						onCameraVideoStart(): void;
					});
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

declare module io {
	export module github {
		export module triniwiz {
			export module fancycamera {
				export abstract class CameraEventListenerUI extends io.github.triniwiz.fancycamera.CameraEventListener {
					public static class: java.lang.Class<io.github.triniwiz.fancycamera.CameraEventListenerUI>;
					public static Companion: io.github.triniwiz.fancycamera.CameraEventListenerUI.Companion;
					public onCameraOpenUI(): void;
					public onCameraClose(): void;
					public onCameraVideoUI(param0: java.io.File): void;
					public onCameraError(param0: string, param1: java.lang.Exception): void;
					public onCameraAnalysisUI(param0: io.github.triniwiz.fancycamera.ImageAnalysis): void;
					public onCameraErrorUI(param0: string, param1: java.lang.Exception): void;
					public onCameraPhoto(param0: java.io.File): void;
					public onCameraVideoStartUI(): void;
					public onReadyUI(): void;
					public onCameraOpen(): void;
					public onCameraAnalysis(param0: io.github.triniwiz.fancycamera.ImageAnalysis): void;
					public onCameraVideo(param0: java.io.File): void;
					public onCameraVideoStart(): void;
					public onCameraCloseUI(): void;
					public constructor();
					public onReady(): void;
					public onCameraPhotoUI(param0: java.io.File): void;
				}
				export module CameraEventListenerUI {
					export class Companion {
						public static class: java.lang.Class<io.github.triniwiz.fancycamera.CameraEventListenerUI.Companion>;
					}
				}
			}
		}
	}
}

declare module io {
	export module github {
		export module triniwiz {
			export module fancycamera {
				export class CameraFlashMode {
					public static class: java.lang.Class<io.github.triniwiz.fancycamera.CameraFlashMode>;
					public static OFF: io.github.triniwiz.fancycamera.CameraFlashMode;
					public static ON: io.github.triniwiz.fancycamera.CameraFlashMode;
					public static AUTO: io.github.triniwiz.fancycamera.CameraFlashMode;
					public static RED_EYE: io.github.triniwiz.fancycamera.CameraFlashMode;
					public static TORCH: io.github.triniwiz.fancycamera.CameraFlashMode;
					public static Companion: io.github.triniwiz.fancycamera.CameraFlashMode.Companion;
					public static valueOf(param0: string): io.github.triniwiz.fancycamera.CameraFlashMode;
					public static values(): androidNative.Array<io.github.triniwiz.fancycamera.CameraFlashMode>;
					public getValue(): number;
				}
				export module CameraFlashMode {
					export class Companion {
						public static class: java.lang.Class<io.github.triniwiz.fancycamera.CameraFlashMode.Companion>;
						public from(param0: number): io.github.triniwiz.fancycamera.CameraFlashMode;
					}
				}
			}
		}
	}
}

declare module io {
	export module github {
		export module triniwiz {
			export module fancycamera {
				export class CameraOrientation {
					public static class: java.lang.Class<io.github.triniwiz.fancycamera.CameraOrientation>;
					public static UNKNOWN: io.github.triniwiz.fancycamera.CameraOrientation;
					public static PORTRAIT: io.github.triniwiz.fancycamera.CameraOrientation;
					public static PORTRAIT_UPSIDE_DOWN: io.github.triniwiz.fancycamera.CameraOrientation;
					public static LANDSCAPE_LEFT: io.github.triniwiz.fancycamera.CameraOrientation;
					public static LANDSCAPE_RIGHT: io.github.triniwiz.fancycamera.CameraOrientation;
					public static Companion: io.github.triniwiz.fancycamera.CameraOrientation.Companion;
					public static values(): androidNative.Array<io.github.triniwiz.fancycamera.CameraOrientation>;
					public static valueOf(param0: string): io.github.triniwiz.fancycamera.CameraOrientation;
					public getValue(): number;
				}
				export module CameraOrientation {
					export class Companion {
						public static class: java.lang.Class<io.github.triniwiz.fancycamera.CameraOrientation.Companion>;
						public from(param0: number): io.github.triniwiz.fancycamera.CameraOrientation;
					}
				}
			}
		}
	}
}

declare module io {
	export module github {
		export module triniwiz {
			export module fancycamera {
				export class CameraPosition {
					public static class: java.lang.Class<io.github.triniwiz.fancycamera.CameraPosition>;
					public static BACK: io.github.triniwiz.fancycamera.CameraPosition;
					public static FRONT: io.github.triniwiz.fancycamera.CameraPosition;
					public static Companion: io.github.triniwiz.fancycamera.CameraPosition.Companion;
					public static values(): androidNative.Array<io.github.triniwiz.fancycamera.CameraPosition>;
					public getValue(): number;
					public static valueOf(param0: string): io.github.triniwiz.fancycamera.CameraPosition;
				}
				export module CameraPosition {
					export class Companion {
						public static class: java.lang.Class<io.github.triniwiz.fancycamera.CameraPosition.Companion>;
						public from(param0: number): io.github.triniwiz.fancycamera.CameraPosition;
					}
				}
			}
		}
	}
}

declare module io {
	export module github {
		export module triniwiz {
			export module fancycamera {
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
					public static Companion: io.github.triniwiz.fancycamera.DetectorType.Companion;
					public toString(): string;
					public static valueOf(param0: string): io.github.triniwiz.fancycamera.DetectorType;
					public static values(): androidNative.Array<io.github.triniwiz.fancycamera.DetectorType>;
				}
				export module DetectorType {
					export class Companion {
						public static class: java.lang.Class<io.github.triniwiz.fancycamera.DetectorType.Companion>;
						public fromInt(param0: number): io.github.triniwiz.fancycamera.DetectorType;
					}
				}
			}
		}
	}
}

declare module io {
	export module github {
		export module triniwiz {
			export module fancycamera {
				export class Event {
					public static class: java.lang.Class<io.github.triniwiz.fancycamera.Event>;
					public constructor(param0: io.github.triniwiz.fancycamera.EventType, param1: java.io.File, param2: string);
					public getMessage(): string;
					public getFile(): java.io.File;
					public getType(): io.github.triniwiz.fancycamera.EventType;
				}
			}
		}
	}
}

declare module io {
	export module github {
		export module triniwiz {
			export module fancycamera {
				export class EventType {
					public static class: java.lang.Class<io.github.triniwiz.fancycamera.EventType>;
					public static Photo: io.github.triniwiz.fancycamera.EventType;
					public static Video: io.github.triniwiz.fancycamera.EventType;
					public static values(): androidNative.Array<io.github.triniwiz.fancycamera.EventType>;
					public static valueOf(param0: string): io.github.triniwiz.fancycamera.EventType;
				}
			}
		}
	}
}

declare module io {
	export module github {
		export module triniwiz {
			export module fancycamera {
				export class ExtensionsKt {
					public static class: java.lang.Class<io.github.triniwiz.fancycamera.ExtensionsKt>;
					public static afterMeasured(param0: globalAndroid.view.View, param1: kotlin.jvm.functions.Function1): void;
				}
			}
		}
	}
}

declare module io {
	export module github {
		export module triniwiz {
			export module fancycamera {
				export class FancyCamera {
					public static class: java.lang.Class<io.github.triniwiz.fancycamera.FancyCamera>;
					public static Companion: io.github.triniwiz.fancycamera.FancyCamera.Companion;
					public setRetrieveLatestImage(param0: boolean);
					public getRetrieveLatestImage(): boolean;
					public getLatestImage(): boolean;
					public setProcessEveryNthFrame(param0: number): void;
					public getProcessEveryNthFrame(): number;
					public setFaceDetectionOptions(param0: any): void;
					public setPause(param0: boolean): void;
					public getAllowExifRotation(): boolean;
					public getCameraOrientation(): io.github.triniwiz.fancycamera.CameraOrientation;
					public setMaxVideoFrameRate(param0: number): void;
					public toggleFlash(): void;
					public getDisableHEVC(): boolean;
					public getAutoFocus(): boolean;
					public setAllowExifRotation(param0: boolean): void;
					public getQuality(): io.github.triniwiz.fancycamera.Quality;
					public requestCameraPermission(): void;
					public getMaxAudioBitRate(): number;
					public getBarcodeScannerOptions(): any;
					public startPreview(): void;
					public onPermissionHandler(param0: number, param1: androidNative.Array<string>, param2: androidNative.Array<number>): void;
					public getWhiteBalance(): io.github.triniwiz.fancycamera.WhiteBalance;
					public setOverridePhotoWidth(param0: number): void;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
					public hasStoragePermission(): boolean;
					public setAutoSquareCrop(param0: boolean): void;
					public setOverridePhotoHeight(param0: number): void;
					public getAutoSquareCrop(): boolean;
					public setOnTextRecognitionListener(param0: io.github.triniwiz.fancycamera.ImageAnalysisCallback): void;
					public getOverridePhotoWidth(): number;
					public setWhiteBalance(param0: io.github.triniwiz.fancycamera.WhiteBalance): void;
					public getPictureSize(): string;
					public getSaveToGallery(): boolean;
					public getFaceDetectionOptions(): any;
					public startRecording(): void;
					public setDisableHEVC(param0: boolean): void;
					public getObjectDetectionOptions(): any;
					public getNumberOfCameras(): number;
					public setQuality(param0: io.github.triniwiz.fancycamera.Quality): void;
					public static getForceV1(): boolean;
					public setZoom(param0: number): void;
					public requestPermission(): void;
					public release(): void;
					public hasCameraPermission(): boolean;
					public setSaveToGallery(param0: boolean): void;
					public setAudioLevelsEnabled(param0: boolean): void;
					public setPosition(param0: io.github.triniwiz.fancycamera.CameraPosition): void;
					public setOnObjectDetectedListener(param0: io.github.triniwiz.fancycamera.ImageAnalysisCallback): void;
					public isAudioLevelsEnabled(): boolean;
					public stop(): void;
					public setMaxVideoBitrate(param0: number): void;
					public setOnImageLabelingListener(param0: io.github.triniwiz.fancycamera.ImageAnalysisCallback): void;
					public getRatio(): string;
					public setOnBarcodeScanningListener(param0: io.github.triniwiz.fancycamera.ImageAnalysisCallback): void;
					public stopPreview(): void;
					public setObjectDetectionOptions(param0: any): void;
					public getOverridePhotoHeight(): number;
					public setPictureSize(param0: string): void;
					public getPosition(): io.github.triniwiz.fancycamera.CameraPosition;
					public setSelfieSegmentationOptions(param0: any): void;
					public getFlashMode(): io.github.triniwiz.fancycamera.CameraFlashMode;
					public hasPermission(): boolean;
					public getGetSupportedRatios(): androidNative.Array<string>;
					public getDuration(): number;
					public requestAudioPermission(): void;
					public hasAudioPermission(): boolean;
					public getMaxVideoBitrate(): number;
					public getImageLabelingOptions(): any;
					public setonSurfaceUpdateListener(param0: io.github.triniwiz.fancycamera.SurfaceUpdateListener): void;
					public setFlashMode(param0: io.github.triniwiz.fancycamera.CameraFlashMode): void;
					public getSelfieSegmentationOptions(): any;
					public getDetectorType(): io.github.triniwiz.fancycamera.DetectorType;
					public getMaxVideoFrameRate(): number;
					public setOnSelfieSegmentationListener(param0: io.github.triniwiz.fancycamera.ImageAnalysisCallback): void;
					public takePhoto(): void;
					public getZoom(): number;
					public getAvailablePictureSizes(param0: string): androidNative.Array<io.github.triniwiz.fancycamera.Size>;
					public setAutoFocus(param0: boolean): void;
					public requestStoragePermission(): void;
					public setImageLabelingOptions(param0: any): void;
					public setRatio(param0: string): void;
					public toggleCamera(): void;
					public stopRecording(): void;
					public getPause(): boolean;
					public setCameraOrientation(param0: io.github.triniwiz.fancycamera.CameraOrientation): void;
					public setOnPoseDetectedListener(param0: io.github.triniwiz.fancycamera.ImageAnalysisCallback): void;
					public constructor(param0: globalAndroid.content.Context);
					public setDetectorType(param0: io.github.triniwiz.fancycamera.DetectorType): void;
					public setMaxAudioBitRate(param0: number): void;
					public getPreviewView(): any;
					public getHasFlash(): boolean;
					public getDb(): number;
					public setListener(param0: io.github.triniwiz.fancycamera.CameraEventListener): void;
					public setEnableAudioLevels(param0: boolean): void;
					public setOnFacesDetectedListener(param0: io.github.triniwiz.fancycamera.ImageAnalysisCallback): void;
					public setBarcodeScannerOptions(param0: any): void;
					public static setForceV1(param0: boolean): void;
				}
				export module FancyCamera {
					export class Companion {
						public static class: java.lang.Class<io.github.triniwiz.fancycamera.FancyCamera.Companion>;
						public setForceV1(param0: boolean): void;
						public getForceV1(): boolean;
					}
				}
			}
		}
	}
}

declare module io {
	export module github {
		export module triniwiz {
			export module fancycamera {
				export class FancyCameraFileProvider {
					public static class: java.lang.Class<io.github.triniwiz.fancycamera.FancyCameraFileProvider>;
					public constructor();
				}
			}
		}
	}
}

declare module io {
	export module github {
		export module triniwiz {
			export module fancycamera {
				export class ImageAnalysis {
					public static class: java.lang.Class<io.github.triniwiz.fancycamera.ImageAnalysis>;
					public constructor();
				}
			}
		}
	}
}

declare module io {
	export module github {
		export module triniwiz {
			export module fancycamera {
				export class ImageAnalysisCallback {
					public static class: java.lang.Class<io.github.triniwiz.fancycamera.ImageAnalysisCallback>;
					/**
					 * Constructs a new instance of the io.github.triniwiz.fancycamera.ImageAnalysisCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onSuccess(param0: any): void;
						onError(param0: string, param1: java.lang.Exception): void;
					});
					public constructor();
					public onSuccess(param0: any): void;
					public onError(param0: string, param1: java.lang.Exception): void;
				}
			}
		}
	}
}

declare module io {
	export module github {
		export module triniwiz {
			export module fancycamera {
				export class ML {
					public static class: java.lang.Class<io.github.triniwiz.fancycamera.ML>;
					public static Companion: io.github.triniwiz.fancycamera.ML.Companion;
					public constructor();
					public static processBytes(param0: androidNative.Array<number>, param1: number, param2: number, param3: number, param4: number, param5: string, param6: io.github.triniwiz.fancycamera.ImageAnalysisCallback): void;
					public static processImage(param0: globalAndroid.graphics.Bitmap, param1: number, param2: string, param3: io.github.triniwiz.fancycamera.ImageAnalysisCallback): void;
				}
				export module ML {
					export class Companion {
						public static class: java.lang.Class<io.github.triniwiz.fancycamera.ML.Companion>;
						public processBytes(param0: androidNative.Array<number>, param1: number, param2: number, param3: number, param4: number, param5: string, param6: io.github.triniwiz.fancycamera.ImageAnalysisCallback): void;
						public processImage(param0: globalAndroid.graphics.Bitmap, param1: number, param2: string, param3: io.github.triniwiz.fancycamera.ImageAnalysisCallback): void;
					}
				}
			}
		}
	}
}

declare module io {
	export module github {
		export module triniwiz {
			export module fancycamera {
				export class Quality {
					public static class: java.lang.Class<io.github.triniwiz.fancycamera.Quality>;
					public static MAX_480P: io.github.triniwiz.fancycamera.Quality;
					public static MAX_720P: io.github.triniwiz.fancycamera.Quality;
					public static MAX_1080P: io.github.triniwiz.fancycamera.Quality;
					public static MAX_2160P: io.github.triniwiz.fancycamera.Quality;
					public static HIGHEST: io.github.triniwiz.fancycamera.Quality;
					public static LOWEST: io.github.triniwiz.fancycamera.Quality;
					public static QVGA: io.github.triniwiz.fancycamera.Quality;
					public static Companion: io.github.triniwiz.fancycamera.Quality.Companion;
					public static values(): androidNative.Array<io.github.triniwiz.fancycamera.Quality>;
					public getValue(): number;
					public static valueOf(param0: string): io.github.triniwiz.fancycamera.Quality;
				}
				export module Quality {
					export class Companion {
						public static class: java.lang.Class<io.github.triniwiz.fancycamera.Quality.Companion>;
						public from(param0: number): io.github.triniwiz.fancycamera.Quality;
					}
				}
			}
		}
	}
}

declare module io {
	export module github {
		export module triniwiz {
			export module fancycamera {
				export class Size {
					public static class: java.lang.Class<io.github.triniwiz.fancycamera.Size>;
					public toString(): string;
					public getHeight(): number;
					public getWidth(): number;
					public constructor(param0: number, param1: number);
				}
			}
		}
	}
}

declare module io {
	export module github {
		export module triniwiz {
			export module fancycamera {
				export class SurfaceUpdateListener {
					public static class: java.lang.Class<io.github.triniwiz.fancycamera.SurfaceUpdateListener>;
					/**
					 * Constructs a new instance of the io.github.triniwiz.fancycamera.SurfaceUpdateListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onUpdate(): void;
					});
					public constructor();
					public onUpdate(): void;
				}
			}
		}
	}
}

declare module io {
	export module github {
		export module triniwiz {
			export module fancycamera {
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
					public static values(): androidNative.Array<io.github.triniwiz.fancycamera.WhiteBalance>;
					public static valueOf(param0: string): io.github.triniwiz.fancycamera.WhiteBalance;
				}
			}
		}
	}
}

//Generics information:



declare module io {
	export module github {
		export module triniwiz {
			export module fancycamera {
				export module barcodescanning {
					export class BarcodeScanner {
						public static class: java.lang.Class<io.github.triniwiz.fancycamera.barcodescanning.BarcodeScanner>;
						public constructor();
						public processBytes(param0: androidNative.Array<number>, param1: number, param2: number, param3: number, param4: number, param5: io.github.triniwiz.fancycamera.barcodescanning.BarcodeScanner.Options): com.google.android.gms.tasks.Task<string>;
						public processImage(param0: com.google.mlkit.vision.common.InputImage, param1: io.github.triniwiz.fancycamera.barcodescanning.BarcodeScanner.Options): com.google.android.gms.tasks.Task<string>;
						public processBitmap(param0: globalAndroid.graphics.Bitmap, param1: number, param2: io.github.triniwiz.fancycamera.barcodescanning.BarcodeScanner.Options): com.google.android.gms.tasks.Task<string>;
					}
					export module BarcodeScanner {
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
							public static Companion: io.github.triniwiz.fancycamera.barcodescanning.BarcodeScanner.BarcodeFormat.Companion;
							public getFormat$barcodeScanning_release(): number;
							public static valueOf(param0: string): io.github.triniwiz.fancycamera.barcodescanning.BarcodeScanner.BarcodeFormat;
							public static values(): androidNative.Array<io.github.triniwiz.fancycamera.barcodescanning.BarcodeScanner.BarcodeFormat>;
						}
						export module BarcodeFormat {
							export class Companion {
								public static class: java.lang.Class<io.github.triniwiz.fancycamera.barcodescanning.BarcodeScanner.BarcodeFormat.Companion>;
								public fromBarcode$barcodeScanning_release(param0: number): io.github.triniwiz.fancycamera.barcodescanning.BarcodeScanner.BarcodeFormat;
							}
						}
						export class Options {
							public static class: java.lang.Class<io.github.triniwiz.fancycamera.barcodescanning.BarcodeScanner.Options>;
							public getBarcodeFormat(): androidNative.Array<io.github.triniwiz.fancycamera.barcodescanning.BarcodeScanner.BarcodeFormat>;
							public constructor();
							public setBarcodeFormat(param0: androidNative.Array<io.github.triniwiz.fancycamera.barcodescanning.BarcodeScanner.BarcodeFormat>): void;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module github {
		export module triniwiz {
			export module fancycamera {
				export module barcodescanning {
					export class BuildConfig {
						public static class: java.lang.Class<io.github.triniwiz.fancycamera.barcodescanning.BuildConfig>;
						public static DEBUG: boolean;
						public static LIBRARY_PACKAGE_NAME: string;
						public static BUILD_TYPE: string;
						public constructor();
					}
				}
			}
		}
	}
}

declare module io {
	export module github {
		export module triniwiz {
			export module fancycamera {
				export module barcodescanning {
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
						public constructor(param0: com.google.mlkit.vision.barcode.Barcode);
						public getRawValue(): string;
						public getEmail(): io.github.triniwiz.fancycamera.barcodescanning.Result.Email;
						public getContactInfo(): io.github.triniwiz.fancycamera.barcodescanning.Result.ContactInfo;
						public getGeoPoint(): io.github.triniwiz.fancycamera.barcodescanning.Result.GeoPoint;
					}
					export module Result {
						export class Bounds {
							public static class: java.lang.Class<io.github.triniwiz.fancycamera.barcodescanning.Result.Bounds>;
							public getSize(): io.github.triniwiz.fancycamera.barcodescanning.Result.Bounds.Size;
							public constructor(param0: globalAndroid.graphics.Rect);
							public getOrigin(): io.github.triniwiz.fancycamera.barcodescanning.Result.Bounds.Origin;
						}
						export module Bounds {
							export class Origin {
								public static class: java.lang.Class<io.github.triniwiz.fancycamera.barcodescanning.Result.Bounds.Origin>;
								public constructor(param0: number, param1: number);
								public getX(): number;
								public getY(): number;
							}
							export class Size {
								public static class: java.lang.Class<io.github.triniwiz.fancycamera.barcodescanning.Result.Bounds.Size>;
								public constructor(param0: number, param1: number);
								public getHeight(): number;
								public getWidth(): number;
							}
						}
						export class CalenderEvent {
							public static class: java.lang.Class<io.github.triniwiz.fancycamera.barcodescanning.Result.CalenderEvent>;
							public getSummary(): string;
							public getOrganizer(): string;
							public constructor(param0: com.google.mlkit.vision.barcode.Barcode.CalendarEvent);
							public getStart(): io.github.triniwiz.fancycamera.barcodescanning.Result.CalenderEvent.Date;
							public getEnd(): io.github.triniwiz.fancycamera.barcodescanning.Result.CalenderEvent.Date;
							public getLocation(): string;
							public getDescription(): string;
							public getStatus(): string;
						}
						export module CalenderEvent {
							export class Date {
								public static class: java.lang.Class<io.github.triniwiz.fancycamera.barcodescanning.Result.CalenderEvent.Date>;
								public getDay(): number;
								public isUtc(): boolean;
								public getRawValue(): string;
								public getHours(): number;
								public getMinutes(): number;
								public getYear(): number;
								public getSeconds(): number;
								public constructor(param0: com.google.mlkit.vision.barcode.Barcode.CalendarDateTime);
								public getDate(): java.util.Date;
								public getMonth(): number;
							}
						}
						export class ContactInfo {
							public static class: java.lang.Class<io.github.triniwiz.fancycamera.barcodescanning.Result.ContactInfo>;
							public constructor(param0: com.google.mlkit.vision.barcode.Barcode.ContactInfo);
							public getAddresses(): androidNative.Array<io.github.triniwiz.fancycamera.barcodescanning.Result.ContactInfo.Address>;
						}
						export module ContactInfo {
							export class Address {
								public static class: java.lang.Class<io.github.triniwiz.fancycamera.barcodescanning.Result.ContactInfo.Address>;
								public constructor(param0: com.google.mlkit.vision.barcode.Barcode.Address);
								public getAddressLines(): androidNative.Array<string>;
								public getType(): io.github.triniwiz.fancycamera.barcodescanning.Result.ContactInfo.Address.Type;
							}
							export module Address {
								export class Type {
									public static class: java.lang.Class<io.github.triniwiz.fancycamera.barcodescanning.Result.ContactInfo.Address.Type>;
									public static Unknown: io.github.triniwiz.fancycamera.barcodescanning.Result.ContactInfo.Address.Type;
									public static Home: io.github.triniwiz.fancycamera.barcodescanning.Result.ContactInfo.Address.Type;
									public static Work: io.github.triniwiz.fancycamera.barcodescanning.Result.ContactInfo.Address.Type;
									public static values(): androidNative.Array<io.github.triniwiz.fancycamera.barcodescanning.Result.ContactInfo.Address.Type>;
									public static valueOf(param0: string): io.github.triniwiz.fancycamera.barcodescanning.Result.ContactInfo.Address.Type;
									public getTypeName(): string;
								}
							}
						}
						export class DriverLicense {
							public static class: java.lang.Class<io.github.triniwiz.fancycamera.barcodescanning.Result.DriverLicense>;
							public getGender(): string;
							public setAddressStreet(param0: string): void;
							public constructor(param0: com.google.mlkit.vision.barcode.Barcode.DriverLicense);
							public getBirthDate(): string;
							public setFirstName(param0: string): void;
							public getAddressStreet(): string;
							public getMiddleName(): string;
							public getIssuingCountry(): string;
							public setIssuingCountry(param0: string): void;
							public getFirstName(): string;
							public setExpiryDate(param0: string): void;
							public getAddressCity(): string;
							public setAddressState(param0: string): void;
							public getDocumentType(): string;
							public setAddressCity(param0: string): void;
							public setGender(param0: string): void;
							public getAddressZip(): string;
							public getAddressState(): string;
							public getLicenseNumber(): string;
							public getIssueDate(): string;
							public setBirthDate(param0: string): void;
							public setAddressZip(param0: string): void;
							public setLicenseNumber(param0: string): void;
							public getLastName(): string;
							public getExpiryDate(): string;
							public setMiddleName(param0: string): void;
							public setIssueDate(param0: string): void;
							public setLastName(param0: string): void;
						}
						export class Email {
							public static class: java.lang.Class<io.github.triniwiz.fancycamera.barcodescanning.Result.Email>;
							public getSubject(): string;
							public getAddress(): string;
							public getType(): io.github.triniwiz.fancycamera.barcodescanning.Result.Email.Type;
							public constructor(param0: com.google.mlkit.vision.barcode.Barcode.Email);
							public getBody(): string;
						}
						export module Email {
							export class Type {
								public static class: java.lang.Class<io.github.triniwiz.fancycamera.barcodescanning.Result.Email.Type>;
								public static Unknown: io.github.triniwiz.fancycamera.barcodescanning.Result.Email.Type;
								public static Home: io.github.triniwiz.fancycamera.barcodescanning.Result.Email.Type;
								public static Work: io.github.triniwiz.fancycamera.barcodescanning.Result.Email.Type;
								public getTypeName(): string;
								public static values(): androidNative.Array<io.github.triniwiz.fancycamera.barcodescanning.Result.Email.Type>;
								public static valueOf(param0: string): io.github.triniwiz.fancycamera.barcodescanning.Result.Email.Type;
							}
						}
						export class GeoPoint {
							public static class: java.lang.Class<io.github.triniwiz.fancycamera.barcodescanning.Result.GeoPoint>;
							public getLat(): number;
							public getLng(): number;
							public constructor(param0: com.google.mlkit.vision.barcode.Barcode.GeoPoint);
						}
						export class Phone {
							public static class: java.lang.Class<io.github.triniwiz.fancycamera.barcodescanning.Result.Phone>;
							public getNumber(): string;
							public getType(): io.github.triniwiz.fancycamera.barcodescanning.Result.Phone.Type;
							public constructor(param0: com.google.mlkit.vision.barcode.Barcode.Phone);
						}
						export module Phone {
							export class Type {
								public static class: java.lang.Class<io.github.triniwiz.fancycamera.barcodescanning.Result.Phone.Type>;
								public static Unknown: io.github.triniwiz.fancycamera.barcodescanning.Result.Phone.Type;
								public static Home: io.github.triniwiz.fancycamera.barcodescanning.Result.Phone.Type;
								public static Work: io.github.triniwiz.fancycamera.barcodescanning.Result.Phone.Type;
								public static Fax: io.github.triniwiz.fancycamera.barcodescanning.Result.Phone.Type;
								public static Mobile: io.github.triniwiz.fancycamera.barcodescanning.Result.Phone.Type;
								public getTypeName(): string;
								public static values(): androidNative.Array<io.github.triniwiz.fancycamera.barcodescanning.Result.Phone.Type>;
								public static valueOf(param0: string): io.github.triniwiz.fancycamera.barcodescanning.Result.Phone.Type;
							}
						}
						export class Point {
							public static class: java.lang.Class<io.github.triniwiz.fancycamera.barcodescanning.Result.Point>;
							public getY(): number;
							public getX(): number;
							public constructor(param0: globalAndroid.graphics.Point);
						}
						export class Sms {
							public static class: java.lang.Class<io.github.triniwiz.fancycamera.barcodescanning.Result.Sms>;
							public constructor(param0: com.google.mlkit.vision.barcode.Barcode.Sms);
							public getPhoneNumber(): string;
							public getMessage(): string;
						}
						export class UrlBookmark {
							public static class: java.lang.Class<io.github.triniwiz.fancycamera.barcodescanning.Result.UrlBookmark>;
							public getUrl(): string;
							public getTitle(): string;
							public constructor(param0: com.google.mlkit.vision.barcode.Barcode.UrlBookmark);
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
							public static valueOf(param0: string): io.github.triniwiz.fancycamera.barcodescanning.Result.ValueType;
							public static values(): androidNative.Array<io.github.triniwiz.fancycamera.barcodescanning.Result.ValueType>;
							public getType(): string;
						}
						export class WiFi {
							public static class: java.lang.Class<io.github.triniwiz.fancycamera.barcodescanning.Result.WiFi>;
							public constructor(param0: com.google.mlkit.vision.barcode.Barcode.WiFi);
							public getPassword(): string;
							public getEncryptionType(): io.github.triniwiz.fancycamera.barcodescanning.Result.WiFi.EncryptionType;
							public getSsid(): string;
						}
						export module WiFi {
							export class EncryptionType {
								public static class: java.lang.Class<io.github.triniwiz.fancycamera.barcodescanning.Result.WiFi.EncryptionType>;
								public static Open: io.github.triniwiz.fancycamera.barcodescanning.Result.WiFi.EncryptionType;
								public static WPA: io.github.triniwiz.fancycamera.barcodescanning.Result.WiFi.EncryptionType;
								public static WEP: io.github.triniwiz.fancycamera.barcodescanning.Result.WiFi.EncryptionType;
								public static Unknown: io.github.triniwiz.fancycamera.barcodescanning.Result.WiFi.EncryptionType;
								public static values(): androidNative.Array<io.github.triniwiz.fancycamera.barcodescanning.Result.WiFi.EncryptionType>;
								public static valueOf(param0: string): io.github.triniwiz.fancycamera.barcodescanning.Result.WiFi.EncryptionType;
								public getType(): string;
							}
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module github {
		export module triniwiz {
			export module fancycamera {
				export module facedetection {
					export class BuildConfig {
						public static class: java.lang.Class<io.github.triniwiz.fancycamera.facedetection.BuildConfig>;
						public static DEBUG: boolean;
						public static LIBRARY_PACKAGE_NAME: string;
						public static BUILD_TYPE: string;
						public constructor();
					}
				}
			}
		}
	}
}

declare module io {
	export module github {
		export module triniwiz {
			export module fancycamera {
				export module facedetection {
					export class FaceDetection {
						public static class: java.lang.Class<io.github.triniwiz.fancycamera.facedetection.FaceDetection>;
						public processBitmap(param0: globalAndroid.graphics.Bitmap, param1: number, param2: io.github.triniwiz.fancycamera.facedetection.FaceDetection.Options): com.google.android.gms.tasks.Task<string>;
						public constructor();
						public processImage(param0: com.google.mlkit.vision.common.InputImage, param1: io.github.triniwiz.fancycamera.facedetection.FaceDetection.Options): com.google.android.gms.tasks.Task<string>;
						public processBytes(param0: androidNative.Array<number>, param1: number, param2: number, param3: number, param4: number, param5: io.github.triniwiz.fancycamera.facedetection.FaceDetection.Options): com.google.android.gms.tasks.Task<string>;
					}
					export module FaceDetection {
						export class ClassificationMode {
							public static class: java.lang.Class<io.github.triniwiz.fancycamera.facedetection.FaceDetection.ClassificationMode>;
							public static None: io.github.triniwiz.fancycamera.facedetection.FaceDetection.ClassificationMode;
							public static All: io.github.triniwiz.fancycamera.facedetection.FaceDetection.ClassificationMode;
							public static Companion: io.github.triniwiz.fancycamera.facedetection.FaceDetection.ClassificationMode.Companion;
							public static values(): androidNative.Array<io.github.triniwiz.fancycamera.facedetection.FaceDetection.ClassificationMode>;
							public static fromString(param0: string): io.github.triniwiz.fancycamera.facedetection.FaceDetection.ClassificationMode;
							public static valueOf(param0: string): io.github.triniwiz.fancycamera.facedetection.FaceDetection.ClassificationMode;
							public toString(): string;
							public toNative$faceDetection_release(): number;
						}
						export module ClassificationMode {
							export class Companion {
								public static class: java.lang.Class<io.github.triniwiz.fancycamera.facedetection.FaceDetection.ClassificationMode.Companion>;
								public fromString(param0: string): io.github.triniwiz.fancycamera.facedetection.FaceDetection.ClassificationMode;
							}
							export class WhenMappings {
								public static class: java.lang.Class<io.github.triniwiz.fancycamera.facedetection.FaceDetection.ClassificationMode.WhenMappings>;
							}
						}
						export class ContourMode {
							public static class: java.lang.Class<io.github.triniwiz.fancycamera.facedetection.FaceDetection.ContourMode>;
							public static None: io.github.triniwiz.fancycamera.facedetection.FaceDetection.ContourMode;
							public static All: io.github.triniwiz.fancycamera.facedetection.FaceDetection.ContourMode;
							public static Companion: io.github.triniwiz.fancycamera.facedetection.FaceDetection.ContourMode.Companion;
							public toString(): string;
							public static values(): androidNative.Array<io.github.triniwiz.fancycamera.facedetection.FaceDetection.ContourMode>;
							public static fromString(param0: string): io.github.triniwiz.fancycamera.facedetection.FaceDetection.ContourMode;
							public toNative$faceDetection_release(): number;
							public static valueOf(param0: string): io.github.triniwiz.fancycamera.facedetection.FaceDetection.ContourMode;
						}
						export module ContourMode {
							export class Companion {
								public static class: java.lang.Class<io.github.triniwiz.fancycamera.facedetection.FaceDetection.ContourMode.Companion>;
								public fromString(param0: string): io.github.triniwiz.fancycamera.facedetection.FaceDetection.ContourMode;
							}
							export class WhenMappings {
								public static class: java.lang.Class<io.github.triniwiz.fancycamera.facedetection.FaceDetection.ContourMode.WhenMappings>;
							}
						}
						export class DetectionMode {
							public static class: java.lang.Class<io.github.triniwiz.fancycamera.facedetection.FaceDetection.DetectionMode>;
							public static Accurate: io.github.triniwiz.fancycamera.facedetection.FaceDetection.DetectionMode;
							public static Fast: io.github.triniwiz.fancycamera.facedetection.FaceDetection.DetectionMode;
							public static Companion: io.github.triniwiz.fancycamera.facedetection.FaceDetection.DetectionMode.Companion;
							public static fromString(param0: string): io.github.triniwiz.fancycamera.facedetection.FaceDetection.DetectionMode;
							public static values(): androidNative.Array<io.github.triniwiz.fancycamera.facedetection.FaceDetection.DetectionMode>;
							public toString(): string;
							public toNative$faceDetection_release(): number;
							public static valueOf(param0: string): io.github.triniwiz.fancycamera.facedetection.FaceDetection.DetectionMode;
						}
						export module DetectionMode {
							export class Companion {
								public static class: java.lang.Class<io.github.triniwiz.fancycamera.facedetection.FaceDetection.DetectionMode.Companion>;
								public fromString(param0: string): io.github.triniwiz.fancycamera.facedetection.FaceDetection.DetectionMode;
							}
							export class WhenMappings {
								public static class: java.lang.Class<io.github.triniwiz.fancycamera.facedetection.FaceDetection.DetectionMode.WhenMappings>;
							}
						}
						export class LandMarkMode {
							public static class: java.lang.Class<io.github.triniwiz.fancycamera.facedetection.FaceDetection.LandMarkMode>;
							public static None: io.github.triniwiz.fancycamera.facedetection.FaceDetection.LandMarkMode;
							public static All: io.github.triniwiz.fancycamera.facedetection.FaceDetection.LandMarkMode;
							public static Companion: io.github.triniwiz.fancycamera.facedetection.FaceDetection.LandMarkMode.Companion;
							public static values(): androidNative.Array<io.github.triniwiz.fancycamera.facedetection.FaceDetection.LandMarkMode>;
							public static fromString(param0: string): io.github.triniwiz.fancycamera.facedetection.FaceDetection.LandMarkMode;
							public static valueOf(param0: string): io.github.triniwiz.fancycamera.facedetection.FaceDetection.LandMarkMode;
							public toString(): string;
							public toNative$faceDetection_release(): number;
						}
						export module LandMarkMode {
							export class Companion {
								public static class: java.lang.Class<io.github.triniwiz.fancycamera.facedetection.FaceDetection.LandMarkMode.Companion>;
								public fromString(param0: string): io.github.triniwiz.fancycamera.facedetection.FaceDetection.LandMarkMode;
							}
							export class WhenMappings {
								public static class: java.lang.Class<io.github.triniwiz.fancycamera.facedetection.FaceDetection.LandMarkMode.WhenMappings>;
							}
						}
						export class Options {
							public static class: java.lang.Class<io.github.triniwiz.fancycamera.facedetection.FaceDetection.Options>;
							public constructor();
							public setContourMode(param0: string): void;
							public setFaceTracking(param0: boolean): void;
							public getClassificationMode(): io.github.triniwiz.fancycamera.facedetection.FaceDetection.ClassificationMode;
							public getContourMode(): io.github.triniwiz.fancycamera.facedetection.FaceDetection.ContourMode;
							public toString(): string;
							public getFaceTracking(): boolean;
							public setLandMarkMode(param0: string): void;
							public setDetectionMode(param0: string): void;
							public setClassificationMode(param0: string): void;
							public getDetectionMode(): io.github.triniwiz.fancycamera.facedetection.FaceDetection.DetectionMode;
							public setContourMode(param0: io.github.triniwiz.fancycamera.facedetection.FaceDetection.ContourMode): void;
							public setDetectionMode(param0: io.github.triniwiz.fancycamera.facedetection.FaceDetection.DetectionMode): void;
							public getLandmarkMode(): io.github.triniwiz.fancycamera.facedetection.FaceDetection.LandMarkMode;
							public setClassificationMode(param0: io.github.triniwiz.fancycamera.facedetection.FaceDetection.ClassificationMode): void;
							public getMinimumFaceSize(): number;
							public setMinimumFaceSize(param0: number): void;
							public setLandmarkMode(param0: io.github.triniwiz.fancycamera.facedetection.FaceDetection.LandMarkMode): void;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module github {
		export module triniwiz {
			export module fancycamera {
				export module facedetection {
					export class Result {
						public static class: java.lang.Class<io.github.triniwiz.fancycamera.facedetection.Result>;
						public getHeadEulerAngleZ(): number;
						public getHeadEulerAngleY(): number;
						public constructor(param0: com.google.mlkit.vision.face.Face);
						public getTrackingId(): java.lang.Float;
						public getHeadEulerAngleX(): number;
						public getBounds(): io.github.triniwiz.fancycamera.facedetection.Result.Bounds;
						public getRightEyeOpenProbability(): java.lang.Float;
						public getSmilingProbability(): java.lang.Float;
						public getLeftEyeOpenProbability(): java.lang.Float;
					}
					export module Result {
						export class Bounds {
							public static class: java.lang.Class<io.github.triniwiz.fancycamera.facedetection.Result.Bounds>;
							public constructor(param0: globalAndroid.graphics.Rect);
							public getSize(): io.github.triniwiz.fancycamera.facedetection.Result.Bounds.Size;
							public getOrigin(): io.github.triniwiz.fancycamera.facedetection.Result.Bounds.Origin;
						}
						export module Bounds {
							export class Origin {
								public static class: java.lang.Class<io.github.triniwiz.fancycamera.facedetection.Result.Bounds.Origin>;
								public constructor(param0: number, param1: number);
								public getX(): number;
								public getY(): number;
							}
							export class Size {
								public static class: java.lang.Class<io.github.triniwiz.fancycamera.facedetection.Result.Bounds.Size>;
								public constructor(param0: number, param1: number);
								public getHeight(): number;
								public getWidth(): number;
							}
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module github {
		export module triniwiz {
			export module fancycamera {
				export module imagelabeling {
					export class BuildConfig {
						public static class: java.lang.Class<io.github.triniwiz.fancycamera.imagelabeling.BuildConfig>;
						public static DEBUG: boolean;
						public static LIBRARY_PACKAGE_NAME: string;
						public static BUILD_TYPE: string;
						public constructor();
					}
				}
			}
		}
	}
}

declare module io {
	export module github {
		export module triniwiz {
			export module fancycamera {
				export module imagelabeling {
					export class ImageLabeling {
						public static class: java.lang.Class<io.github.triniwiz.fancycamera.imagelabeling.ImageLabeling>;
						public constructor();
						public processBytes(param0: androidNative.Array<number>, param1: number, param2: number, param3: number, param4: number, param5: io.github.triniwiz.fancycamera.imagelabeling.ImageLabeling.Options): com.google.android.gms.tasks.Task<string>;
						public processImage(param0: com.google.mlkit.vision.common.InputImage, param1: io.github.triniwiz.fancycamera.imagelabeling.ImageLabeling.Options): com.google.android.gms.tasks.Task<string>;
						public processBitmap(param0: globalAndroid.graphics.Bitmap, param1: number, param2: io.github.triniwiz.fancycamera.imagelabeling.ImageLabeling.Options): com.google.android.gms.tasks.Task<string>;
					}
					export module ImageLabeling {
						export class Options {
							public static class: java.lang.Class<io.github.triniwiz.fancycamera.imagelabeling.ImageLabeling.Options>;
							public constructor();
							public setConfidenceThreshold(param0: number): void;
							public getConfidenceThreshold(): number;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module github {
		export module triniwiz {
			export module fancycamera {
				export module imagelabeling {
					export class Result {
						public static class: java.lang.Class<io.github.triniwiz.fancycamera.imagelabeling.Result>;
						public getConfidence(): number;
						public constructor(param0: com.google.mlkit.vision.label.ImageLabel);
						public getIndex(): number;
						public getText(): string;
					}
				}
			}
		}
	}
}

declare module io {
	export module github {
		export module triniwiz {
			export module fancycamera {
				export module objectdetection {
					export class BuildConfig {
						public static class: java.lang.Class<io.github.triniwiz.fancycamera.objectdetection.BuildConfig>;
						public static DEBUG: boolean;
						public static LIBRARY_PACKAGE_NAME: string;
						public static BUILD_TYPE: string;
						public constructor();
					}
				}
			}
		}
	}
}

declare module io {
	export module github {
		export module triniwiz {
			export module fancycamera {
				export module objectdetection {
					export class ObjectDetection {
						public static class: java.lang.Class<io.github.triniwiz.fancycamera.objectdetection.ObjectDetection>;
						public processImage(param0: com.google.mlkit.vision.common.InputImage, param1: io.github.triniwiz.fancycamera.objectdetection.ObjectDetection.Options): com.google.android.gms.tasks.Task<string>;
						public constructor();
						public processBitmap(param0: globalAndroid.graphics.Bitmap, param1: number, param2: io.github.triniwiz.fancycamera.objectdetection.ObjectDetection.Options): com.google.android.gms.tasks.Task<string>;
						public processBytes(param0: androidNative.Array<number>, param1: number, param2: number, param3: number, param4: number, param5: io.github.triniwiz.fancycamera.objectdetection.ObjectDetection.Options): com.google.android.gms.tasks.Task<string>;
					}
					export module ObjectDetection {
						export class Options {
							public static class: java.lang.Class<io.github.triniwiz.fancycamera.objectdetection.ObjectDetection.Options>;
							public constructor();
							public setMultiple(param0: boolean): void;
							public getClassification(): boolean;
							public getSingleMode$objectDetection_release(): boolean;
							public setClassification(param0: boolean): void;
							public setSingleMode$objectDetection_release(param0: boolean): void;
							public getMultiple(): boolean;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module github {
		export module triniwiz {
			export module fancycamera {
				export module objectdetection {
					export class Result {
						public static class: java.lang.Class<io.github.triniwiz.fancycamera.objectdetection.Result>;
						public getLabels(): androidNative.Array<io.github.triniwiz.fancycamera.objectdetection.Result.Label>;
						public getTrackingId(): java.lang.Integer;
						public getBounds(): io.github.triniwiz.fancycamera.objectdetection.Result.Bounds;
						public constructor(param0: com.google.mlkit.vision.objects.DetectedObject);
					}
					export module Result {
						export class Bounds {
							public static class: java.lang.Class<io.github.triniwiz.fancycamera.objectdetection.Result.Bounds>;
							public constructor(param0: globalAndroid.graphics.Rect);
							public getSize(): io.github.triniwiz.fancycamera.objectdetection.Result.Bounds.Size;
							public getOrigin(): io.github.triniwiz.fancycamera.objectdetection.Result.Bounds.Origin;
						}
						export module Bounds {
							export class Origin {
								public static class: java.lang.Class<io.github.triniwiz.fancycamera.objectdetection.Result.Bounds.Origin>;
								public constructor(param0: number, param1: number);
								public getX(): number;
								public getY(): number;
							}
							export class Size {
								public static class: java.lang.Class<io.github.triniwiz.fancycamera.objectdetection.Result.Bounds.Size>;
								public constructor(param0: number, param1: number);
								public getHeight(): number;
								public getWidth(): number;
							}
						}
						export class Label {
							public static class: java.lang.Class<io.github.triniwiz.fancycamera.objectdetection.Result.Label>;
							public getConfidence(): number;
							public constructor(param0: com.google.mlkit.vision.objects.DetectedObject.Label);
							public getText(): io.github.triniwiz.fancycamera.objectdetection.Result.Label.Category;
							public getIndex(): io.github.triniwiz.fancycamera.objectdetection.Result.Label.Index;
						}
						export module Label {
							export class Category {
								public static class: java.lang.Class<io.github.triniwiz.fancycamera.objectdetection.Result.Label.Category>;
								public static Unknown: io.github.triniwiz.fancycamera.objectdetection.Result.Label.Category;
								public static HomeGood: io.github.triniwiz.fancycamera.objectdetection.Result.Label.Category;
								public static FashionGood: io.github.triniwiz.fancycamera.objectdetection.Result.Label.Category;
								public static Food: io.github.triniwiz.fancycamera.objectdetection.Result.Label.Category;
								public static Place: io.github.triniwiz.fancycamera.objectdetection.Result.Label.Category;
								public static Plant: io.github.triniwiz.fancycamera.objectdetection.Result.Label.Category;
								public getCategory(): string;
								public static values(): androidNative.Array<io.github.triniwiz.fancycamera.objectdetection.Result.Label.Category>;
								public static valueOf(param0: string): io.github.triniwiz.fancycamera.objectdetection.Result.Label.Category;
							}
							export class Index {
								public static class: java.lang.Class<io.github.triniwiz.fancycamera.objectdetection.Result.Label.Index>;
								public static UnknownIndex: io.github.triniwiz.fancycamera.objectdetection.Result.Label.Index;
								public static HomeGoodIndex: io.github.triniwiz.fancycamera.objectdetection.Result.Label.Index;
								public static FashionGoodIndex: io.github.triniwiz.fancycamera.objectdetection.Result.Label.Index;
								public static FoodIndex: io.github.triniwiz.fancycamera.objectdetection.Result.Label.Index;
								public static PlaceIndex: io.github.triniwiz.fancycamera.objectdetection.Result.Label.Index;
								public static PlantIndex: io.github.triniwiz.fancycamera.objectdetection.Result.Label.Index;
								public static valueOf(param0: string): io.github.triniwiz.fancycamera.objectdetection.Result.Label.Index;
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

declare module io {
	export module github {
		export module triniwiz {
			export module fancycamera {
				export module posedetection {
					export class BuildConfig {
						public static class: java.lang.Class<io.github.triniwiz.fancycamera.posedetection.BuildConfig>;
						public static DEBUG: boolean;
						public static LIBRARY_PACKAGE_NAME: string;
						public static BUILD_TYPE: string;
						public constructor();
					}
				}
			}
		}
	}
}

declare module io {
	export module github {
		export module triniwiz {
			export module fancycamera {
				export module posedetection {
					export class PoseDetection {
						public static class: java.lang.Class<io.github.triniwiz.fancycamera.posedetection.PoseDetection>;
						public processBytes(param0: androidNative.Array<number>, param1: number, param2: number, param3: number, param4: number): com.google.android.gms.tasks.Task<string>;
						public constructor();
						public processBitmap(param0: globalAndroid.graphics.Bitmap, param1: number): com.google.android.gms.tasks.Task<string>;
						public processImage(param0: com.google.mlkit.vision.common.InputImage): com.google.android.gms.tasks.Task<string>;
					}
				}
			}
		}
	}
}

declare module io {
	export module github {
		export module triniwiz {
			export module fancycamera {
				export module posedetection {
					export class Result {
						public static class: java.lang.Class<io.github.triniwiz.fancycamera.posedetection.Result>;
						public constructor(param0: com.google.mlkit.vision.pose.Pose);
						public getLandMarks(): androidNative.Array<io.github.triniwiz.fancycamera.posedetection.Result.LandMark>;
					}
					export module Result {
						export class LandMark {
							public static class: java.lang.Class<io.github.triniwiz.fancycamera.posedetection.Result.LandMark>;
							public getType(): io.github.triniwiz.fancycamera.posedetection.Result.LandMark.Type;
							public getPosition(): io.github.triniwiz.fancycamera.posedetection.Result.LandMark.PointF;
							public getInFrameLikelihood(): number;
							public constructor(param0: com.google.mlkit.vision.pose.PoseLandmark);
						}
						export module LandMark {
							export class PointF {
								public static class: java.lang.Class<io.github.triniwiz.fancycamera.posedetection.Result.LandMark.PointF>;
								public constructor(param0: globalAndroid.graphics.PointF);
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
								public static valueOf(param0: string): io.github.triniwiz.fancycamera.posedetection.Result.LandMark.Type;
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

declare module io {
	export module github {
		export module triniwiz {
			export module fancycamera {
				export module textrecognition {
					export class BuildConfig {
						public static class: java.lang.Class<io.github.triniwiz.fancycamera.textrecognition.BuildConfig>;
						public static DEBUG: boolean;
						public static LIBRARY_PACKAGE_NAME: string;
						public static BUILD_TYPE: string;
						public constructor();
					}
				}
			}
		}
	}
}

declare module io {
	export module github {
		export module triniwiz {
			export module fancycamera {
				export module textrecognition {
					export class Result {
						public static class: java.lang.Class<io.github.triniwiz.fancycamera.textrecognition.Result>;
						public getBlocks(): androidNative.Array<io.github.triniwiz.fancycamera.textrecognition.Result.Block>;
						public constructor(param0: com.google.mlkit.vision.text.Text);
						public getText(): string;
					}
					export module Result {
						export class Block {
							public static class: java.lang.Class<io.github.triniwiz.fancycamera.textrecognition.Result.Block>;
							public constructor(param0: string, param1: androidNative.Array<io.github.triniwiz.fancycamera.textrecognition.Result.Point>, param2: io.github.triniwiz.fancycamera.textrecognition.Result.Bounds, param3: androidNative.Array<io.github.triniwiz.fancycamera.textrecognition.Result.Line>);
							public getText(): string;
							public getCornerPoints(): androidNative.Array<io.github.triniwiz.fancycamera.textrecognition.Result.Point>;
						}
						export class Bounds {
							public static class: java.lang.Class<io.github.triniwiz.fancycamera.textrecognition.Result.Bounds>;
							public constructor(param0: globalAndroid.graphics.Rect);
							public getOrigin(): io.github.triniwiz.fancycamera.textrecognition.Result.Bounds.Origin;
							public getSize(): io.github.triniwiz.fancycamera.textrecognition.Result.Bounds.Size;
						}
						export module Bounds {
							export class Origin {
								public static class: java.lang.Class<io.github.triniwiz.fancycamera.textrecognition.Result.Bounds.Origin>;
								public constructor(param0: number, param1: number);
								public getX(): number;
								public getY(): number;
							}
							export class Size {
								public static class: java.lang.Class<io.github.triniwiz.fancycamera.textrecognition.Result.Bounds.Size>;
								public constructor(param0: number, param1: number);
								public getHeight(): number;
								public getWidth(): number;
							}
						}
						export class Element {
							public static class: java.lang.Class<io.github.triniwiz.fancycamera.textrecognition.Result.Element>;
							public getText(): string;
							public constructor(param0: string, param1: io.github.triniwiz.fancycamera.textrecognition.Result.Bounds);
						}
						export class Line {
							public static class: java.lang.Class<io.github.triniwiz.fancycamera.textrecognition.Result.Line>;
							public getText(): string;
							public getCornerPoints(): androidNative.Array<io.github.triniwiz.fancycamera.textrecognition.Result.Point>;
							public constructor(param0: string, param1: androidNative.Array<io.github.triniwiz.fancycamera.textrecognition.Result.Point>, param2: io.github.triniwiz.fancycamera.textrecognition.Result.Bounds, param3: androidNative.Array<io.github.triniwiz.fancycamera.textrecognition.Result.Element>);
						}
						export class Point {
							public static class: java.lang.Class<io.github.triniwiz.fancycamera.textrecognition.Result.Point>;
							public getY(): number;
							public getX(): number;
							public constructor(param0: globalAndroid.graphics.Point);
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module github {
		export module triniwiz {
			export module fancycamera {
				export module textrecognition {
					export class TextRecognition {
						public static class: java.lang.Class<io.github.triniwiz.fancycamera.textrecognition.TextRecognition>;
						public processBytes(param0: androidNative.Array<number>, param1: number, param2: number, param3: number, param4: number): com.google.android.gms.tasks.Task<string>;
						public constructor();
						public processBitmap(param0: globalAndroid.graphics.Bitmap, param1: number): com.google.android.gms.tasks.Task<string>;
						public processImage(param0: com.google.mlkit.vision.common.InputImage): com.google.android.gms.tasks.Task<string>;
					}
				}
			}
		}
	}
}

//Generics information:

