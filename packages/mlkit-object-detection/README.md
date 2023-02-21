# @nativescript/mlkit-object-detection

## Installation

```cli
npm install @nativescript/mlkit-object-detection
```

## Usage

See [@nativescript/mlkit-core](/packages/mlkit-core/README.md) Usage

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
