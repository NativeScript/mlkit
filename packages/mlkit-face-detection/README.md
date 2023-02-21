# @nativescript/mlkit-face-detection

A plugin that is used with [@nativescript/mlkit-core](../mlkit-core/) to enable face detection and provide the [FaceResult](#faceresult) type for the data of the face detection event.

## Installation

```cli
npm install @nativescript/mlkit-face-detection
```

## Use @nativescript/mlkit-face-detection

For an example, see [@nativescript/mlkit-core](../mlkit-core#face-detection)

## API

### FaceResult

The Face Detection event data type.

```ts
interface FaceResult {
    smilingProbability: number;
    leftEyeOpenProbability: number;
    rightEyeOpenProbability: number;
    trackingId: number;
    bounds: Bounds;
    headEulerAngleZ: number;
    headEulerAngleY: number;
    headEulerAngleX: number;
}
```

#### Bounds
```ts
interface Bounds {
    origin: Origin;
    size: Size;
}
```
#### Origin
```ts
interface Origin {
    x: number;
    y: number;
}
```
#### Size
```ts
interface Size {
    width: number;
    height: number;
}
```
## License

Apache License Version 2.0
