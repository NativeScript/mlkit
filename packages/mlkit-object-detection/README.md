# @nativescript/mlkit-object-detection

A plugin that is used with [@nativescript/mlkit-core](../mlkit-core/) to enable object detection and provide the [bjectResult](#objectresult) type for the object detection event data.

## Installation

```cli
npm install @nativescript/mlkit-object-detection
```

## Use @nativescript/mlkit-object-detection

For an example, read [Use @nativescript/mlkit-core](../mlkit-core#use-nativescriptmlkit-core) and [object-detection](../mlkit-core#bject-detection).

## API 

### ObjectResult
```ts
interface ObjectResult {
    trackingId?: number
    bounds: Bounds
    labels: ObjectLabeling[]
}
```
#### ObjectLabeling

```ts
interface ObjectLabeling {
    text?: string
    confidence?: number
    index?: number
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
export interface Origin {
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
