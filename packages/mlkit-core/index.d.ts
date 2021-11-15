import { MLKitViewBase } from "./common";
export { BarcodeFormats, barcodeFormatsProperty, CameraPosition, cameraPositionProperty, DetectionType, faceDetectionMinFaceSizeProperty, faceDetectionPerformanceModeProperty, faceDetectionTrackingEnabledProperty, imageLabelerConfidenceThresholdProperty as imageLablerConfidenceThresholdProperty, objectDetectionClassifyProperty, objectDetectionMultipleProperty } from './common';
export declare class MLKitView extends MLKitViewBase {
    static isAvailable(): boolean;
    onDetection: (data: {
        [key: string]: any;
    }) => void;
    stopPreview(): void;
    toggleCamera(): void;
    startPreview(): void;
    requestCameraPermission(): Promise<void>;
    hasCameraPermission(): boolean;
}
