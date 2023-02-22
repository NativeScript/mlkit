# @nativescript/mlkit-image-labeling

## Contents
* [Installation](#installation)
* [Use @nativescript/mlkit-image-labeling](#use-nativescriptmlkit-image-labeling)
* [API](#api)
    * [ImageLabelingResult](#imagelabelingresult)
* [License](#license)

## Installation

```cli
npm install @nativescript/mlkit-image-labeling
```

## Use @nativescript/mlkit-image-labeling

For an example, read [Use @nativescript/mlkit-core](../mlkit-core#use-nativescriptmlkit-core) and [Image Labeling](../mlkit-core#image-labeling)

## API

### ImageLabelingResult

The Image Labeling event data type.

```ts
interface ImageLabelingResult {
    text?: string
    confidence?: number;
    index?: number;
}
```
## License

Apache License Version 2.0
