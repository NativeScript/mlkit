# @nativescript/mlkit-barcode-scanning

This plugin is used with [@nativescript/mlkit-core](../mlkit-core/). It provides [BarcodeResult]() the interface for barcode scanning event object.

## Installation

```shell
npm install @nativescript/mlkit-barcode-scanning
```

## Use @nativescript/mlkit-barcode-scanning

Follow these steps to scan a barcode:

1. Add [MLKitView](../mlkit-core/) to your page and set the `detectionType` property to `"barcode"`.

```xml
<MLKitView
   detectionType="barcode" 
   detection="{{ onDetection }}"
/>
```
2. To receive the scanned barcode data, handle the `detection` event and get the data if the event's type is `"barcode"`.

```ts
import { Observable } from "@nativescript/core"
import { DetectionEvent, DetectionType } from "@nativescript/mlkit-core";
import { BarcodeResult } from "@nativescript/mlkit-barcode-scanning";

export class BarcodeScannerViewModel extends Observable {

    onDetection(event: DetectionEvent){

        if(event.type == DetectionType.Barcode){
            const barcodeData: BarcodeResult = event.data[0] as BarcodeResult;

        }
}
}

```

## API

### BarcodeResult 

The scanned barcode data object has the following properties:

| Property | Type | Always available
|:---------|:-----|:------------------
| `format` | [BarcodeFormats] | _Yes_
| `calendarEvent` | [CalenderEvent]() | _No_
| `contactInfo` | [ContactInfo]() | _No_
| `bounds` | [Bounds]() | _No_
| `points` | [Point]()[] | _No_
| `displayValue` | `string` | _No_
| `driverLicense`| [DriverLicense]() | _No_
| `email` | [Email]() | _No_
| `geoPoint` | [GeoPoint] | _No_
| `phone`| [Phone]() | _No_
| `rawBytes`| `any[]` | _No_
| `rawValue` | `string` | _No_
| `sms`| [Sms]() | _No_
| `url`| [UrlBookmark]() | _No_
| `valueType`| [ValueType]() | _No_
| `wifi`| [WiFi]() | _No_


## License

Apache License Version 2.0
