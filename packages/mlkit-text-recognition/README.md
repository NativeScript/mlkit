# @nativescript/mlkit-text-recognition

## Installation

```cli
npm install @nativescript/mlkit-text-recognition
```

## Use @nativescript/mlkit-text-recognition

For an example, see [@nativescript/mlkit-core](../mlkit-core#text-recognition).

## API

### TextResult

The type of the Text Recognition event data.

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
