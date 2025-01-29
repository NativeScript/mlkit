import { booleanConverter, ContainerView, CSSType, ImageSource, Property } from '@nativescript/core';

export interface BoundingBoxSettings {
  drawBBoxes?: boolean;
  drawEdgeMarks?: boolean;
  drawLabels?: boolean;
  bBoxLineWidth?: number;
  bBoxLineColor?: string;
  bBoxCornerness?: number;
  edgeMarkLengthFactor?: number;
  edgeMarkLineWidth?: number;
  showConfidence?: boolean;
  labelTextColor?: string;
  labelBackgroundColor?: string;
  labelCornerness?: number;
  labelAlignment?: 'natural' | 'left' | 'center' | 'right';
  labelMappings?: { [key: string]: string };
}
export const DEFAULT_BOUNDING_BOX_SETTINGS: Required<BoundingBoxSettings> = {
  drawBBoxes: false,
  drawEdgeMarks: false,
  drawLabels: false,
  bBoxLineWidth: 2,
  bBoxLineColor: '#FF0000FF',
  bBoxCornerness: 5,
  edgeMarkLengthFactor: 0.2,
  edgeMarkLineWidth: 4,
  showConfidence: false,
  labelTextColor: '#FFFFFFFF',
  labelBackgroundColor: '#00000090',
  labelCornerness: 5,
  labelAlignment: 'center',
  labelMappings: {},
};

export interface TNSObjectDetectionResult {
  bounds: {
    x: number;
    y: number;
    width: number;
    height: number;
  };
  trackingId?: number;
  labels?: {
    text: string;
    confidence: number;
    index?: number;
  }[];
}

export enum DetectionType {
  Barcode = 'barcode',
  DigitalInk = 'digitalInk',
  Face = 'face',
  Image = 'image',
  Object = 'object',
  CustomObject = 'customObject',
  Pose = 'pose',
  Text = 'text',
  All = 'all',
  Selfie = 'selfie',
  None = 'none',
}

export enum CameraPosition {
  FRONT = 'front',
  BACK = 'back',
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
  UNKOWN = 'unknown',
}

export enum FaceDetectionPerformanceMode {
  Fast = 'fast',
  Accurate = 'accurate',
}

@CSSType('MLKitView')
export class MLKitViewBase extends ContainerView {
  static detectionEvent = 'detection';
  cameraPosition: CameraPosition;
  detectionType: DetectionType;
  barcodeFormats: BarcodeFormats[];
  faceDetectionPerformanceMode: FaceDetectionPerformanceMode;
  faceDetectionTrackingEnabled: boolean;
  faceDetectionMinFaceSize: number;
  imageLabelerConfidenceThreshold: number;
  objectDetectionMultiple: boolean;
  objectDetectionClassify: boolean;
  customObjectDetectionMultiple: boolean;
  customObjectDetectionClassify: boolean;
  customObjectDetectionModelName: string;
  customObjectDetectionLoadedModel: string;
  customObjectDetectionConfidenceThreshold: number | null;
  customObjectDetectionMaximumNumLabels: number;
  boundingBoxSettings: BoundingBoxSettings;
  torchOn: boolean;
  pause: boolean;
  processEveryNthFrame: number;
  readonly latestImage?: ImageSource;
  retrieveLatestImage: boolean;
  aspectRatio: 'aspect' | 'aspectFill' | 'fill';
}

export const cameraPositionProperty = new Property<MLKitViewBase, CameraPosition>({
  name: 'cameraPosition',
  defaultValue: CameraPosition.BACK,
});

cameraPositionProperty.register(MLKitViewBase);

export const aspectRatioProperty = new Property<MLKitViewBase, 'aspect' | 'aspectFill' | 'fill'>({
  name: 'aspectRatio',
  defaultValue: 'aspect',
});

aspectRatioProperty.register(MLKitViewBase);

export const detectionTypeProperty = new Property<MLKitViewBase, DetectionType>({
  name: 'detectionType',
  defaultValue: DetectionType.None,
});

detectionTypeProperty.register(MLKitViewBase);

export const barcodeFormatsProperty = new Property<MLKitViewBase, BarcodeFormats[]>({
  name: 'barcodeFormats',
  defaultValue: [BarcodeFormats.ALL],
});

barcodeFormatsProperty.register(MLKitViewBase);

export const faceDetectionPerformanceModeProperty = new Property<MLKitViewBase, FaceDetectionPerformanceMode>({
  name: 'faceDetectionPerformanceMode',
  defaultValue: FaceDetectionPerformanceMode.Fast,
});

faceDetectionPerformanceModeProperty.register(MLKitViewBase);

export const faceDetectionTrackingEnabledProperty = new Property<MLKitViewBase, boolean>({
  name: 'faceDetectionTrackingEnabled',
  defaultValue: false,
  valueConverter: booleanConverter,
});

faceDetectionTrackingEnabledProperty.register(MLKitViewBase);

export const faceDetectionMinFaceSizeProperty = new Property<MLKitViewBase, number>({
  name: 'faceDetectionMinFaceSize',
  defaultValue: 0.1,
});

faceDetectionMinFaceSizeProperty.register(MLKitViewBase);

export const imageLabelerConfidenceThresholdProperty = new Property<MLKitViewBase, number>({
  name: 'imageLabelerConfidenceThreshold',
  defaultValue: 0.5,
});

imageLabelerConfidenceThresholdProperty.register(MLKitViewBase);

export const objectDetectionMultipleProperty = new Property<MLKitViewBase, boolean>({
  name: 'objectDetectionMultiple',
  defaultValue: false,
  valueConverter: booleanConverter,
});

objectDetectionMultipleProperty.register(MLKitViewBase);

export const objectDetectionClassifyProperty = new Property<MLKitViewBase, boolean>({
  name: 'objectDetectionClassify',
  defaultValue: false,
  valueConverter: booleanConverter,
});

objectDetectionClassifyProperty.register(MLKitViewBase);

export const customObjectDetectionMultipleProperty = new Property<MLKitViewBase, boolean>({
  name: 'customObjectDetectionMultiple',
  defaultValue: false,
  valueConverter: booleanConverter,
});

customObjectDetectionMultipleProperty.register(MLKitViewBase);

export const customObjectDetectionClassifyProperty = new Property<MLKitViewBase, boolean>({
  name: 'customObjectDetectionClassify',
  defaultValue: false,
  valueConverter: booleanConverter,
});

customObjectDetectionClassifyProperty.register(MLKitViewBase);

export const customObjectDetectionModelNameProperty = new Property<MLKitViewBase, string>({
  name: 'customObjectDetectionModelName',
  defaultValue: 'customModel',
});

customObjectDetectionModelNameProperty.register(MLKitViewBase);

export const customObjectDetectionConfidenceThresholdProperty = new Property<MLKitViewBase, number | null>({
  name: 'customObjectDetectionConfidenceThreshold',
  defaultValue: null,
  valueConverter: (value: string) => {
    return value === null ? null : +value;
  },
});

customObjectDetectionConfidenceThresholdProperty.register(MLKitViewBase);

export const customObjectDetectionMaximumNumLabelsProperty = new Property<MLKitViewBase, number>({
  name: 'customObjectDetectionMaximumNumLabels',
  defaultValue: 10,
  valueConverter: (value: string) => {
    return +value;
  },
});

customObjectDetectionMaximumNumLabelsProperty.register(MLKitViewBase);

export const boundingBoxSettingsProperty = new Property<MLKitViewBase, BoundingBoxSettings>({
  name: 'boundingBoxSettings',
  defaultValue: DEFAULT_BOUNDING_BOX_SETTINGS,
  valueConverter: (value: string): BoundingBoxSettings => {
    if (typeof value === 'string') {
      try {
        const parsed = JSON.parse(value);
        return { ...DEFAULT_BOUNDING_BOX_SETTINGS, ...parsed };
      } catch (e) {
        throw new Error(`Invalid boundingBoxSettings property value: ${value}`);
      }
    }
  },
});

boundingBoxSettingsProperty.register(MLKitViewBase);

export const torchOnProperty = new Property<MLKitViewBase, boolean>({
  name: 'torchOn',
  defaultValue: false,
  valueConverter: booleanConverter,
});

torchOnProperty.register(MLKitViewBase);

export const pauseProperty = new Property<MLKitViewBase, boolean>({
  name: 'pause',
  defaultValue: false,
  valueConverter: booleanConverter,
});

pauseProperty.register(MLKitViewBase);

export const processEveryNthFrameProperty = new Property<MLKitViewBase, number>({
  name: 'processEveryNthFrame',
  defaultValue: 0,
});

processEveryNthFrameProperty.register(MLKitViewBase);

export const retrieveLatestImageProperty = new Property<MLKitViewBase, boolean>({
  name: 'retrieveLatestImage',
  defaultValue: false,
  valueConverter: booleanConverter,
});

retrieveLatestImageProperty.register(MLKitViewBase);
