# @nativescript/mlkit-core

```javascript
npm install @nativescript/mlkit-core
```

## Usage


## Core

> **Important:** Ensure you've included xmlns:ui="@nativescript/mlkit-core" on the Page element

```xml
<ui:MLKitView
  cameraPosition="back"
   detectionType="all" 
   detection="onDetection"
/>
```


#### Angular

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


```html
<MLKitView
cameraPosition="back"
detectionType="all" 
(detection)="onDetection($event)"
></MLKitView>
```

#### Vue

```ts
import Vue from 'nativescript-vue'
import MLKit from '@nativescript/mlkit-core/vue'

Vue.use(MLKit)
```

```html
<MLKitView
cameraPosition="back"
detectionType="all" 
@detection="onDetection"
/>
```

### Optional modules

> **Important:** Detection works only for optional modules installed

# Barcode Scanning

```javascript
npm install @nativescript/mlkit-barcode-scanning
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

# Face Detection

```javascript
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


# Image Labeling

```javascript
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


# Object Detection

```javascript
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

# Pose Detection

```javascript
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


# Text Recognition

```javascript
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


## License

Apache License Version 2.0
