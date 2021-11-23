import { MLKitViewBase, DetectionType } from "./common";
import { EventData } from '@nativescript/core';
export interface DetectionEvent extends EventData {
    data: { [key: string]: any };
    type: DetectionType
}
export { BarcodeFormats, barcodeFormatsProperty, CameraPosition, cameraPositionProperty, DetectionType, faceDetectionMinFaceSizeProperty, faceDetectionPerformanceModeProperty, faceDetectionTrackingEnabledProperty, imageLabelerConfidenceThresholdProperty as imageLablerConfidenceThresholdProperty, objectDetectionClassifyProperty, objectDetectionMultipleProperty } from './common';
export declare class MLKitView extends MLKitViewBase {
    static isAvailable(): boolean;
    static detectionEvent: string;
    stopPreview(): void;
    toggleCamera(): void;
    startPreview(): void;
    requestCameraPermission(): Promise<void>;
    hasCameraPermission(): boolean;
    on(event: 'detection', callback: (args: DetectionEvent) => void, thisArg?: any);
}
