# @nativescript/mlkit-barcode-scanning

This plugin is used with [@nativescript/mlkit-core](../mlkit-core/) and it provides the [BarcodeResult](#barcoderesult) types for the barcode scanned data.

## Contents
* [Installation](#installation)
* [Use @nativescript/mlkit-barcode-scanning](#use-nativescriptmlkit-barcode-scanning)
* [API](#api)
     * [BarcodeResult](#barcoderesult)
        

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

### Interfaces

#### BarcodeResult 

The scanned barcode data object has the following properties:

| Property | Type | Optional
|:---------|:-----|:------------------
| `format` | [BarcodeFormats](#barcodeformats) | _No_
| `calendarEvent` | [CalenderEvent](#calenderevent) | _Yes_
| `contactInfo` | [ContactInfo](#contactinfo) | _Yes_
| `bounds` | [Bounds](#bounds) | _Yes_
| `points` | [Point](#point)[] | _Yes_
| `displayValue` | `string` | _Yes_
| `driverLicense`| [DriverLicense](#driverlicense) | _Yes_
| `email` | [Email](#email) | _Yes_
| `geoPoint` | [GeoPoint](#geopoint) | _Yes_
| `phone`| [Phone](#phone) | _Yes_
| `rawBytes`| `any[]` | _Yes_
| `rawValue` | `string` | _Yes_
| `sms`| [Sms](#sms) | _Yes_
| `url`| [UrlBookmark](#urlbookmark) | _Yes_
| `valueType`| [ValueType]() | _Yes_
| `wifi`| [WiFi](#wifi) | _Yes_

#### WiFi 

| Property | Type | Optional
|:---------|:-----|:-------
| `encryptionType` | `string` | _No_
| `password`| `string` | _No_
| `ssid`| `string` | _No_

#### UrlBookmark
| Property | Type | Optional
|:---------|:-----|:-------
| `title` | `string` | _Yes_
| `url`| `string` | _Yes_

#### Sms
| Property | Type | Optional
|:---------|:-----|:-------
| `message` | `string` | _No_
| `honeNumber`| `string` | _No_

#### Phone 
| Property | Type | Optional
|:---------|:-----|:-------
| `number` | `string` | _No_
| `type`| [PhoneType](#phonetype) | _No_

#### Email 
| Property | Type | Optional
|:---------|:-----|:-------
| `address` | `string` | _No_
| `subject` | `string` | _No_
| `body` | `string` | _No_
| `type` | [EmailType](#emailtype)

#### DriverLicense
| Property | Type | Optional
|:---------|:-----|:-------
| `documentType`| `string` | _No_
| `firstName`| `string` | _No_
| `middleName`| `string` | _No_
| `lastName`| `string` | _No_
| `gender`| `string` | _No_
| `addressStreet`| `string` | _No_
| `addressCity`| `string` | _No_
| `addressState`| `string` | _No_
| `addressZip`| `string` | _No_
| `licenseNumber`| `string` | _No_
| `issueDate`| `string` | _No_
| `expiryDate`| `string` | _No_
| `birthDate`| `string` | _No_
| `issuingCountry`| `string` | _No_

#### CalenderEvent

| Property | Type | Optional
|:---------|:-----|:-------
| `description`| `string` | _Yes_
| `location`| `string` | _Yes_
| `organizer`| `string` | _Yes_
| `status`| `string` | _Yes_
| `summary`| `string` | _Yes_
| `start`| `string` | _Yes_
| `end`| `string` | _Yes_
#### Address

| Property | Type | Optional
|:---------|:-----|:-------
| `addressLines`|   `string[]`| _No_ 
| `type` | [AddressType](#addresstype) | _No_ 

#### ContactInfo 

| Property | Type | Optional
|:---------|:-----|:-------
| `addresses`| [Address](#address)[] | _No_

#### Origin 

| Property | Type | Optional
|:---------|:-----|:-------
| `x`| `number` | _No_
| `y`| `number` | _No_

#### Size
| Property | Type | Optional
|:---------|:-----|:-------
| `width`| `number` | _No_
| `height`| `number` | _No_

#### Bounds
| Property | Type | Optional
|:---------|:-----|:-------
| `origin` | [Origin](#origin) | _No_
| `size` | [Size](#size) | _No_

#### Point 

| Property | Type | Optional
|:---------|:-----|:-------
| `x`| `number` | _No_
| `y`| `number` | _No_

#### GeoPoint
| Property | Type | Optional
|:---------|:-----|:-------
| `lat`| `number` | _No_
| `lng`| `number` | _No_

### Enums

#### EncryptionType

- `Open` = `'open'`
- `WPA` = `'wpa'`
- `WEP` = `'wep'`
- `Unknown` = `'unknown'`

#### PhoneType

- `Unknown` = `"unknown"`
- `Home` = `"home"`
- `Work` = `"work"`
- `Fax` = `"fax"`
- `Mobile` = `"mobile"`

#### EmailType 

- `Unknown` = `"unknown"`
- `Home` = `"home"`
- `Work` = `"work"`

#### AddressType

- `Unknown` = `"unknown"`
- `Home` = `"home"`
- `Work` = `"work"`

#### ValueType

- `ContactInfo`= `"contactInfo"`
- `Email`= `"email"`
- `ISBN`= `"isbn"`
- `Phone`= `"phone"`
- `Product`= `"product"`
- `Text`= `"text"`
- `Sms`= `"sms"`
- `URL`= `"url"`
- `WiFi`= `"wifi"`
- `Geo`= `"geo"`
- `CalenderEvent`= `"calender"`
- `DriverLicense`= `"driverLicense"`
- `Unknown`= `"unknown"`

#### BarcodeFormats

- `ALL` = `'all'`
- `CODE_128` = `'code_128'`
- `CODE_39` = `'code_39'`
- `CODE_93` = `'code_93'`
- `CODABAR` = `'codabar'`
- `DATA_MATRIX` = `'data_matrix'`
- `EAN_13` = '`ean_13'`
- `EAN_8` = `'ean_8'`
- `ITF` = `'itf'`
- `QR_CODE` = `'qr_code'`
- `UPC_A` = `'upc_a'`
- `UPC_E` = `'upc_e'`
- `PDF417` = `'pdf417'`
- `AZTEC` = `'aztec'`
- `UNKOWN` = `'unknown'`


## License

Apache License Version 2.0
