# @nativescript/mlkit-face-detection
## Installation

```cli
npm install @nativescript/mlkit-face-detection
```

## Use @nativescript/mlkit-face-detection

See [@nativescript/mlkit-core](../mlkit-core#face-detection) Usage

## API

### FaceResult
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
