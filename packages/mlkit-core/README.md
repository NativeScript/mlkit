# @nativescript/mlkit-core

A plugin that provides a UI component to access the different functionalities of [Google's ML Kit](https://developers.google.com/ml-kit) SDK.

```cli
npm install @nativescript/mlkit-core
```

## Use @nativescript/mlkit-core

## Core

1. Register [MLKitView]() by adding `xmlns:ui="@nativescript/mlkit-core"` to the Page element.

2. Use the `ui` prefix to access `MLKitView` from the plugin.

```xml
<ui:MLKitView
  cameraPosition="back"
   detectionType="all" 
   detection="onDetection"
/>
```

### Angular

1. In Angular, register []() by adding `MLKitModule` to the `NgModule` of the component where you want to use `MLKitView`.

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

2. Use in markup.

```html
<MLKitView
cameraPosition="back"
detectionType="all" 
(detection)="onDetection($event)"
></MLKitView>
```

### Vue

1. To [MLKitView](#mlkitview-class), register it in the `app.ts` by passing it to the `use` method of the app instance.

```ts
import { createApp } from 'nativescript-vue'

import MLKit from '@nativescript/mlkit-core/vue'
import Home from './components/Home.vue';

const app = createApp(Home)

app.use(MLKit)
```
2. Use it in markup.

```html
<MLKitView
cameraPosition="back"
detectionType="all" 
@detection="onDetection"
/>
```

### Optional modules

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

### MLKItView class

The MLKItView class provides the camera view for detection.
 
It has the following members.

#### Properties

| Property | Type
|:---------|:-----
| `detectionEvent`| `string`
| `cameraPosition` | [CameraPosition]()
| `detectionType` | [DetectionType]()
| `barcodeFormats` | [BarcodeFormats]()
| `faceDetectionPerformanceMode` | [FaceDetectionPerformanceMode]()
| `faceDetectionTrackingEnabled` | `boolean`
| `faceDetectionMinFaceSize` | `number`
| `imageLabelerConfidenceThreshold` | `number`
| `objectDetectionMultiple` | `boolean`
| `objectDetectionClassify` | `boolean`
| `torchOn` | `boolean`
| `pause` | `boolean`
| `processEveryNthFrame` | `number`
| `readonly latestImage?` | [ImageSource]()
| `retrieveLatestImage` | `boolean`

## License

Apache License Version 2.0
