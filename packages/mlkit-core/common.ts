import { booleanConverter, ContainerView, CSSType, Property } from '@nativescript/core';

export enum DetectionType {
    Barcode = "barcode",
    DigitalInk = "digitalInk",
    Face = "face",
    Image = "image",
    Object = "object",
    Pose = "pose",
    Text = "text",
    All = "all",
    None = "none"
}

export enum CameraPosition {
    FRONT = 'front',
    BACK = 'back'
}


export enum BarcodeFormats {
    ALL = 'all',
    CODE_128 = 'code_128',
    CODE_39 = 'code_39',
    CODE_93 = 'code_93',
    CODABAR = 'codabar',
    DATA_MATRIX = 'data_matrix',
    EAN_13 = 'ean_13',
    EAN_8 = 'ean_8',
    ITF = 'itf',
    QR_CODE = 'qr_code',
    UPC_A = 'upc_a',
    UPC_E = 'upc_e',
    PDF417 = 'pdf417',
    AZTEC = 'aztec',
    UNKOWN = 'unknown'
}


export enum FaceDetectionPerformanceMode {
    Fast = 'fast',
    Accurate = 'accurate'
}

@CSSType('MLKitView')
export class MLKitViewBase extends ContainerView {
    cameraPosition: CameraPosition;
    detectionType: DetectionType;
    barcodeFormats: BarcodeFormats[];
    faceDetectionPerformanceMode: FaceDetectionPerformanceMode;
    faceDetectionTrackingEnabled: boolean;
    faceDetectionMinFaceSize: number;
    imageLabelerConfidenceThreshold: number;
    objectDetectionMultiple: boolean;
    objectDetectionClassify: boolean;
    onDetection: (data: {
        [key: string]: any;
    }, type: DetectionType) => void;
}

export const onDetectionProperty = new Property<MLKitViewBase, (data: { [key: string]: any }) => void>({
    name: 'onDetection'
});
onDetectionProperty.register(MLKitViewBase);

export const cameraPositionProperty = new Property<MLKitViewBase, CameraPosition>({
    name: 'cameraPosition',
    defaultValue: CameraPosition.BACK
});

cameraPositionProperty.register(MLKitViewBase);

export const detectionTypeProperty = new Property<MLKitViewBase, DetectionType>({
    name: 'detectionType',
    defaultValue: DetectionType.None
});

detectionTypeProperty.register(MLKitViewBase);

export const barcodeFormatsProperty = new Property<MLKitViewBase, BarcodeFormats[]>({
    name: 'barcodeFormats',
    defaultValue: [BarcodeFormats.ALL]
})

barcodeFormatsProperty.register(MLKitViewBase);


export const faceDetectionPerformanceModeProperty = new Property<MLKitViewBase, FaceDetectionPerformanceMode>({
    name: 'faceDetectionPerformanceMode',
    defaultValue: FaceDetectionPerformanceMode.Fast
})

faceDetectionPerformanceModeProperty.register(MLKitViewBase);


export const faceDetectionTrackingEnabledProperty = new Property<MLKitViewBase, boolean>({
    name: 'faceDetectionTrackingEnabled',
    defaultValue: false,
    valueConverter: booleanConverter
});

faceDetectionTrackingEnabledProperty.register(MLKitViewBase);


export const faceDetectionMinFaceSizeProperty = new Property<MLKitViewBase, number>({
    name: 'faceDetectionMinFaceSize',
    defaultValue: 0.1
})

faceDetectionMinFaceSizeProperty.register(MLKitViewBase);


export const imageLabelerConfidenceThresholdProperty = new Property<MLKitViewBase, number>({
    name: 'imageLabelerConfidenceThreshold',
    defaultValue: 0.5
});

imageLabelerConfidenceThresholdProperty.register(MLKitViewBase);

export const objectDetectionMultipleProperty = new Property<MLKitViewBase, boolean>({
    name: 'objectDetectionMultiple',
    defaultValue: false,
    valueConverter: booleanConverter
});

objectDetectionMultipleProperty.register(MLKitViewBase);


export const objectDetectionClassifyProperty = new Property<MLKitViewBase, boolean>({
    name: 'objectDetectionClassify',
    defaultValue: false,
    valueConverter: booleanConverter
});

objectDetectionClassifyProperty.register(MLKitViewBase);



