# @nativescript/mlkit-custom-object-detection

A plugin that is used with [@nativescript/mlkit-core](../mlkit-core/) to enable Custom Object Detection and provide the [ObjectResult](#objectresult) type for the object detection event data.

## Contents
* [Installation](#installation)
* [Use @nativescript/mlkit-custom-object-detection](#use-nativescriptmlkit-custom-object-detection)
* [CustomObjectResult](#customobjectresult)
* [API](#api)
    * [CustomObjectResult]

## Installation

Install `@nativescript/mlkit-custom-object-detection` by running the following command:

```cli
npm install @nativescript/mlkit-custom-object-detection
```

## Use @nativescript/mlkit-custom-object-detection

For an example, read [Use @nativescript/mlkit-core](../mlkit-core#use-nativescriptmlkit-core) and [Custom Object Detection](../mlkit-core#custom-object-detection).

## API

### ObjectResult

The type of object detection event data.

```ts
interface CustomObjectResult {
    trackingId?: number
    bounds: Bounds
    labels: CustomObjectLabeling[]
}
```
#### CustomObjectLabeling

```ts
interface CustomObjectLabeling {
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
