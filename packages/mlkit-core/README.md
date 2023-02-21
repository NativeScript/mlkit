# @nativescript/mlkit-core

A plugin that provides a UI component to access the different functionalities of [Google's ML Kit](https://developers.google.com/ml-kit) SDK.

## Contents

* [Installation](#installation)
* [Use @nativescript/mlkit-core](#use-nativescriptmlkit-core)
  * [Core](#core)
  * [Angular](#angular)
  * [Vue](#vue)
  * [Vision APIs optional modules](#vision-apis-optional-modules)
    * [Barcode Scanning](#barcode-scanning)
    * [Face Detection](#face-detection)
    * [Image Labeling](#image-labeling)
    * [Object Detection](#object-detection)
    * [Pose Detection](#pose-detection)
    * [Text Recognition](#text-recognition)

* [API](#api)
  * [detectWithStillImage()](#detectwithstillimage)
    * [StillImageDetectionOptions interface](#stillimagedetectionoptions-interface)
  * [MLKitView class](#mlkitview-class)
    * [Properties](#properties)
    * [Methods](#methods)
  * [Enums](#enums)
    * [DetectionType](#detectiontype)
    * [CameraPosition](#cameraposition)
    * [BarcodeFormats](#barcodeformats)
    * [FaceDetectionPerformanceMode](#facedetectionperformancemode)
* [License](#license) 

## Installation

```cli
npm install @nativescript/mlkit-core
```

## Use @nativescript/mlkit-core
The usage of `@nativescript/mlkit-core` has the following flow:

1. Registering and adding [MLKitView](#mlkitview-class) to your markup. 

2. Set the `detectionType` and listen to the `detection` event

To use all the vision APIs at once, set the `detectionType` property to `'all'` and identify them in the `detection` event's handler.
To access a specific API, Barcode scanning for example, set the `detectionType` property to the API name (`'barcode'` for Barcode scanning), AND import that API's NativeScript plugin.

3. Check if ML Kit is supported
4. Request for permission to access the device camera

### Core

1. Register [MLKitView](#mlkitview-class) by adding `xmlns:ui="@nativescript/mlkit-core"` to the Page element.

2. Use the `ui` prefix to access `MLKitView` from the plugin.

```xml
<ui:MLKitView
  cameraPosition="back"
   detectionType="all" 
   detection="onDetection"
/>
```

### Angular

1. In Angular, register the `MLKitView` by adding `MLKitModule` to the `NgModule` of the component where you want to use `MLKitView`.

```ts
import { MLKitModule } from '@nativescript/mlkit-core/angular';

@NgModule({
    imports: [
    MLKitModule
    ],
    declarations: [
        AppComponent
    ],
    bootstrap: [AppComponent]
})
```

2. Use `MLKitView` in markup.

```html
<MLKitView
cameraPosition="back"
detectionType="all" 
(detection)="onDetection($event)"
></MLKitView>
```

### Vue

1. To use [MLKitView](#mlkitview-class), register it in the `app.ts` by passing it to the `use` method of the app instance.

```ts
import { createApp } from 'nativescript-vue'

import MLKit from '@nativescript/mlkit-core/vue'
import Home from './components/Home.vue';

const app = createApp(Home)

app.use(MLKit)
```
2. Use `MLKitView` in markup.

```html
<MLKitView
cameraPosition="back"
detectionType="all" 
@detection="onDetection"
/>
```

### Vision APIs optional modules

> **Important:** Detection works only for optional modules installed

#### Barcode Scanning

```cli
npm i @nativescript/mlkit-barcode-scanning
```

```ts
import { DetectionType, DetectionEvent } from '@nativescript/mlkit-core';
import { BarcodeResult } from '@nativescript/mlkit-barcode-scanning';
onDetection(event: DetectionEvent){
    if(event.type === DetectionType.Barcode){
        const barcode: BarcodeResult[] = event.data;
    }
}
```

For more details, see [@nativescript/mlkit-barcode-scanning](../mlkit-barcode-scanning/)

#### Face Detection

```cli
npm install @nativescript/mlkit-face-detection
```

```ts
import { DetectionType, DetectionEvent } from '@nativescript/mlkit-core';
import { FaceResult } from '@nativescript/mlkit-face-detection';

onDetection(event: DetectionEvent){
    if(event.type === DetectionType.Face){
        const faces: FaceResult[] = event.data;
    }
}
```

For more details, see [@nativescript/mlkit-face-detection](../mlkit-face-detection/)

#### Image Labeling

```cli
npm install @nativescript/mlkit-image-labeling
```

```ts
import { DetectionType, DetectionEvent } from '@nativescript/mlkit-core';
import { ImageLabelingResult } from '@nativescript/mlkit-image-labeling';
onDetection(event: DetectionEvent){
    if(event.type === DetectionType.Image){
        const labels: ImageLabelingResult[] = event.data;
    }
}
```

For more details, see [nativescript/mlkit-image-labeling](../mlkit-image-labeling/)

#### Object Detection

```cli
npm install @nativescript/mlkit-object-detection
```

```ts
import { DetectionType, DetectionEvent } from '@nativescript/mlkit-core';
import { ObjectResult } from '@nativescript/mlkit-object-detection'
onDetection(event: DetectionEvent){
    if(event.type === DetectionType.Object){
        const objects: ObjectResult[] = event.data;
    }
}
```
For more details, see [@nativescript/mlkit-object-detection](../mlkit-object-detection/)

#### Pose Detection

```cli
npm install @nativescript/mlkit-pose-detection
```

```ts
import { DetectionType, DetectionEvent } from '@nativescript/mlkit-core';
import { PoseResult } from '@nativescript/mlkit-pose-detection';
onDetection(event: DetectionEvent){
    if(event.type === DetectionType.Pose){
        const poses: PoseResult = event.data;
    }
}
```

For more details, see [@nativescript/mlkit-pose-detection](../mlkit-pose-detection/)

#### Text Recognition

```cli
npm install @nativescript/mlkit-text-recognition
```

```ts
import { DetectionType, DetectionEvent } from '@nativescript/mlkit-core';
import { TextResult } from '@nativescript/mlkit-text-recognition';
onDetection(event: DetectionEvent){
    if(event.type === DetectionType.Text){
        const text: TextResult = event.data;
    }
}
```
For more details, see [@nativescript/mlkit-text-recognition](../mlkit-text-recognition/)

## API
### detectWithStillImage()

```ts
import { DetectionType, detectWithStillImage } from "@nativescript/mlkit-core";

async processStill(args) {
        try {
           
            result: { [key: string]: any } = await detectWithStillImage(image: ImageSource, options)
        } catch (e) {
            console.log(e);
        }
    }
```
Detects barcode, pose, etc from a still image instead of using the camera.
- `image`: The image to detect the object from
- `options`: An _optional_ [StillImageDetectionOptions](#stillimagedetectionoptions) object parameter specifying the detection characteristics.

### MLKitView class

The MLKitView class provides the camera view for detection.
 
It has the following members.

#### Properties

| Property | Type
|:---------|:-----
| `detectionEvent`| `string`
| `cameraPosition` | [CameraPosition](#cameraposition)
| `detectionType` | [DetectionType](#detectiontype)
| `barcodeFormats` | [BarcodeFormats](#barcodeformats)
| `faceDetectionPerformanceMode` | [FaceDetectionPerformanceMode](#facedetectionperformancemode)
| `faceDetectionTrackingEnabled` | `boolean`
| `faceDetectionMinFaceSize` | `number`
| `imageLabelerConfidenceThreshold` | `number`
| `objectDetectionMultiple` | `boolean`
| `objectDetectionClassify` | `boolean`
| `torchOn` | `boolean`
| `pause` | `boolean`
| `processEveryNthFrame` | `number`
| `readonly latestImage?` | [ImageSource](https://docs.nativescript.org/api-reference/classes/imagesource)
| `retrieveLatestImage` | `boolean`

#### Methods

| Method | Returns | Description
|:-------|:--------|:-----------
| `isAvailable()` | `boolean`| A static method to check if the device supports ML Kit.
| `stopPreview()` | `void`
| `startPreview()` | `void`
| `toggleCamera()` | `void`
| `requestCameraPermission()` | `Promise<void>`
| `hasCameraPermission()` | `boolean` | 
| `on()` | `void` | 


#### StillImageDetectionOptions interface


```ts
interface StillImageDetectionOptions {
  detectorType: DetectionType;

  barcodeScanning?: {
    barcodeFormat?: [BarcodeFormats];
  };
  faceDetection?: {
    faceTracking?: boolean;
    minimumFaceSize: ?number;
    detectionMode?: 'fast' | 'accurate';
    landmarkMode?: 'all' | 'none';
    contourMode?: 'all' | 'none';
    classificationMode?: 'all' | 'none';
  };
  imageLabeling?: {
    confidenceThreshold?: number;
  };
  objectDetection?: {
    multiple: boolean;
    classification: boolean;
  };
  selfieSegmentation?: {
    enableRawSizeMask?: boolean;
    smoothingRatio?: number;
  };
}
```
### Enums

#### DetectionType

```ts
export enum DetectionType {
  Barcode = 'barcode',
  DigitalInk = 'digitalInk',
  Face = 'face',
  Image = 'image',
  Object = 'object',
  Pose = 'pose',
  Text = 'text',
  All = 'all',
  Selfie = 'selfie',
  None = 'none',
}
```

#### CameraPosition
```ts
export enum CameraPosition {
  FRONT = 'front',
  BACK = 'back',
}
```

#### BarcodeFormats
```ts
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
```
#### FaceDetectionPerformanceMode

```ts
export enum FaceDetectionPerformanceMode {
  Fast = 'fast',
  Accurate = 'accurate',
}
```
## License

Apache License Version 2.0
