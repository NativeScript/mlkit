import { MLKitViewBase, DetectionType, BarcodeFormats } from "./common";
import { EventData } from '@nativescript/core';


export interface StillImageDetectionOptions {
    detectorType: DetectionType
    barcodeScanning?: {
        barcodeFormat?: [BarcodeFormats]
    }
    faceDetection?: {
        faceTracking?: boolean
        minimumFaceSize: ?number
        detectionMode?: "fast" | "accurate"
        landmarkMode?: "all" | "none"
        contourMode?: "all" | "none"
        classificationMode?: "all" | "none"
    }
    imageLabeling?: {
        confidenceThreshold?: number
    }
    objectDetection?: {
        multiple: boolean;
        classification: boolean;
    }
    selfieSegmentation?: {
        enableRawSizeMask?: boolean;
        smoothingRatio?: number;
    }
}

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

export function detectWithStillImage(image: any, options?: StillImageDetectionOptions): Promise<{ [key: string]: any }>