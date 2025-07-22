# @nativescript/mlkit-text-recognition

A plugin used with [@nativescript/mlkit-core](../plugins/mlkit-core) to enable Text Recognition in your app and provide [TextResult](#textresult) type for the text recognition event data.

## Contents
* [Installation](#installation)
* [Use @nativescript/mlkit-text-recognition](#use-nativescriptmlkit-text-recognition)
* [API](#api)
    * [TextResult](#textresult)
* [License](#license)

## Installation

```cli
npm install @nativescript/mlkit-text-recognition
```

## Use @nativescript/mlkit-text-recognition

For an example, read [Use @nativescript/mlkit-core](../mlkit-core#use-nativescriptmlkit-core) and [Text Recognition](../mlkit-core#text-recognition).

## API

### TextResult

The Text Recognition event data type.

```ts
interface TextResult {
    text?: string
    bounds: Bounds
    lines: TextLine[]
    points: Point[]
}
```
---
#### Point

```ts
interface Point {
    x: number;
    y: number;
}
```
---
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
---
#### TextLine
```ts
interface TextLine {
    text?: string
    bounds: Bounds
    elements: TextElement[]
    points?: Point[]
}
```
#### TextElement
```ts
interface TextElement {
    text?: string
    bounds: Bounds
}
```
---
## License

Apache License Version 2.0
