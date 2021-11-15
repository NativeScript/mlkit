# @nativescript/mlkit-core

```javascript
ns plugin add @nativescript/mlkit-core
```

## Usage


## Core

> **Important:** Ensure you've included xmlns:ui="@nativescript/mlkit-core" on the Page element

```xml
<ui:MLKitView
  cameraPosition="back"
   detectionType="all" 
   onDetection="onDetection"
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


```xml
<MLKitView
cameraPosition="back"
detectionType="all" 
onDetection="onDetection"
></MLKitView>
```

#### Vue

```ts
import Vue from 'nativescript-vue'
import MLKit from '@nativescript/mlkit-core/vue'

Vue.use(MLKit)
```

```xml
<MLKitView
cameraPosition="back"
detectionType="all" 
onDetection="onDetection"
></MLKitView>
```

### Optional modules

> **Important:** Detection works only for optional modules installed

# Barcode Scanning

```javascript
ns plugin add @nativescript/mlkit-barcode-scanning
```

```ts
import { DetectionType } from '@nativescript/mlkit-core';
import { BarcodeResult } from '@nativescript/mlkit-barcode-scanning';
onDetection(data, type){
    if(type === DetectionType.Barcode){
        const barcode: BarcodeResult = data;
    }
}
```

# Face Detection

```javascript
ns plugin add @nativescript/mlkit-face-detection
```

```ts
import { DetectionType } from '@nativescript/mlkit-core';
import { FaceResult } from '@nativescript/mlkit-face-detection';
onDetection(data, type){
    if(type === DetectionType.Face){
        const faces: FaceResult[] = data;
    }
}
```


# Image Labeling

```javascript
ns plugin add @nativescript/mlkit-image-labeling
```

```ts
import { DetectionType } from '@nativescript/mlkit-core';
import { ImageLabelingResult } from '@nativescript/mlkit-image-labeling';
onDetection(data, type){
    if(type === DetectionType.Image){
        const labels: ImageLabelingResult[] = data;
    }
}
```


# Object Detection

```javascript
ns plugin add @nativescript/mlkit-object-detection
```

```ts
import { DetectionType } from '@nativescript/mlkit-core';
import { ObjectResult } from '@nativescript/mlkit-object-detection'
onDetection(data, type){
    if(type === DetectionType.Object){
        const objects: ObjectResult[] = data;
    }
}
```

# Pose Detection

```javascript
ns plugin add @nativescript/mlkit-pose-detection
```

```ts
import { DetectionType } from '@nativescript/mlkit-core';
import { PoseResult } from '@nativescript/mlkit-pose-detection';
onDetection(data, type){
    if(type === DetectionType.Pose){
        const poses: PoseResult[] = data;
    }
}
```


# Text Recognition

```javascript
ns plugin add @nativescript/mlkit-text-recognition
```

```ts
import { DetectionType } from '@nativescript/mlkit-core';
import { TextResult } from '@nativescript/mlkit-text-recognition';
onDetection(data, type){
    if(type === DetectionType.Text){
        const text: TextResult[] = data;
    }
}
```


## License

Apache License Version 2.0
