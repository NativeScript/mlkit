
declare class MLKBarcode extends NSObject {

	static alloc(): MLKBarcode; // inherited from NSObject

	static new(): MLKBarcode; // inherited from NSObject

	readonly URL: MLKBarcodeURLBookmark;

	readonly calendarEvent: MLKBarcodeCalendarEvent;

	readonly contactInfo: MLKBarcodeContactInfo;

	readonly cornerPoints: NSArray<NSValue>;

	readonly displayValue: string;

	readonly driverLicense: MLKBarcodeDriverLicense;

	readonly email: MLKBarcodeEmail;

	readonly format: MLKBarcodeFormat;

	readonly frame: CGRect;

	readonly geoPoint: MLKBarcodeGeoPoint;

	readonly phone: MLKBarcodePhone;

	readonly rawData: NSData;

	readonly rawValue: string;

	readonly sms: MLKBarcodeSMS;

	readonly valueType: number;

	readonly wifi: MLKBarcodeWiFi;
}

declare class MLKBarcodeAddress extends NSObject {

	static alloc(): MLKBarcodeAddress; // inherited from NSObject

	static new(): MLKBarcodeAddress; // inherited from NSObject

	readonly addressLines: NSArray<string>;

	readonly type: number;
}

declare var MLKBarcodeAddressTypeHome: number;

declare var MLKBarcodeAddressTypeUnknown: number;

declare var MLKBarcodeAddressTypeWork: number;

declare class MLKBarcodeCalendarEvent extends NSObject {

	static alloc(): MLKBarcodeCalendarEvent; // inherited from NSObject

	static new(): MLKBarcodeCalendarEvent; // inherited from NSObject

	readonly end: Date;

	readonly eventDescription: string;

	readonly location: string;

	readonly organizer: string;

	readonly start: Date;

	readonly status: string;

	readonly summary: string;
}

declare class MLKBarcodeContactInfo extends NSObject {

	static alloc(): MLKBarcodeContactInfo; // inherited from NSObject

	static new(): MLKBarcodeContactInfo; // inherited from NSObject

	readonly addresses: NSArray<MLKBarcodeAddress>;

	readonly emails: NSArray<MLKBarcodeEmail>;

	readonly jobTitle: string;

	readonly name: MLKBarcodePersonName;

	readonly organization: string;

	readonly phones: NSArray<MLKBarcodePhone>;

	readonly urls: NSArray<string>;
}

declare class MLKBarcodeDriverLicense extends NSObject {

	static alloc(): MLKBarcodeDriverLicense; // inherited from NSObject

	static new(): MLKBarcodeDriverLicense; // inherited from NSObject

	readonly addressCity: string;

	readonly addressState: string;

	readonly addressStreet: string;

	readonly addressZip: string;

	readonly birthDate: string;

	readonly documentType: string;

	readonly expiryDate: string;

	readonly firstName: string;

	readonly gender: string;

	readonly issuingCountry: string;

	readonly issuingDate: string;

	readonly lastName: string;

	readonly licenseNumber: string;

	readonly middleName: string;
}

declare class MLKBarcodeEmail extends NSObject {

	static alloc(): MLKBarcodeEmail; // inherited from NSObject

	static new(): MLKBarcodeEmail; // inherited from NSObject

	readonly address: string;

	readonly body: string;

	readonly subject: string;

	readonly type: number;
}

declare var MLKBarcodeEmailTypeHome: number;

declare var MLKBarcodeEmailTypeUnknown: number;

declare var MLKBarcodeEmailTypeWork: number;

declare const enum MLKBarcodeFormat {

	Unknown = 0,

	All = 65535,

	Code128 = 1,

	Code39 = 2,

	Code93 = 4,

	CodaBar = 8,

	DataMatrix = 16,

	EAN13 = 32,

	EAN8 = 64,

	ITF = 128,

	QRCode = 256,

	UPCA = 512,

	UPCE = 1024,

	PDF417 = 2048,

	Aztec = 4096
}

declare class MLKBarcodeGeoPoint extends NSObject {

	static alloc(): MLKBarcodeGeoPoint; // inherited from NSObject

	static new(): MLKBarcodeGeoPoint; // inherited from NSObject

	readonly latitude: number;

	readonly longitude: number;
}

declare class MLKBarcodePersonName extends NSObject {

	static alloc(): MLKBarcodePersonName; // inherited from NSObject

	static new(): MLKBarcodePersonName; // inherited from NSObject

	readonly first: string;

	readonly formattedName: string;

	readonly last: string;

	readonly middle: string;

	readonly prefix: string;

	readonly pronunciation: string;

	readonly suffix: string;
}

declare class MLKBarcodePhone extends NSObject {

	static alloc(): MLKBarcodePhone; // inherited from NSObject

	static new(): MLKBarcodePhone; // inherited from NSObject

	readonly number: string;

	readonly type: number;
}

declare var MLKBarcodePhoneTypeFax: number;

declare var MLKBarcodePhoneTypeHome: number;

declare var MLKBarcodePhoneTypeMobile: number;

declare var MLKBarcodePhoneTypeUnknown: number;

declare var MLKBarcodePhoneTypeWork: number;

declare class MLKBarcodeSMS extends NSObject {

	static alloc(): MLKBarcodeSMS; // inherited from NSObject

	static new(): MLKBarcodeSMS; // inherited from NSObject

	readonly message: string;

	readonly phoneNumber: string;
}

declare class MLKBarcodeScanner extends NSObject {

	static alloc(): MLKBarcodeScanner; // inherited from NSObject

	static barcodeScanner(): MLKBarcodeScanner;

	static barcodeScannerWithOptions(options: MLKBarcodeScannerOptions): MLKBarcodeScanner;

	static new(): MLKBarcodeScanner; // inherited from NSObject

	processImageCompletion(image: MLKCompatibleImage, completion: (p1: NSArray<MLKBarcode>, p2: NSError) => void): void;

	resultsInImageError(image: MLKCompatibleImage): NSArray<MLKBarcode>;
}

declare class MLKBarcodeScannerOptions extends NSObject {

	static alloc(): MLKBarcodeScannerOptions; // inherited from NSObject

	static new(): MLKBarcodeScannerOptions; // inherited from NSObject

	readonly formats: MLKBarcodeFormat;

	constructor(o: { formats: MLKBarcodeFormat; });

	initWithFormats(formats: MLKBarcodeFormat): this;
}

declare class MLKBarcodeURLBookmark extends NSObject {

	static alloc(): MLKBarcodeURLBookmark; // inherited from NSObject

	static new(): MLKBarcodeURLBookmark; // inherited from NSObject

	readonly title: string;

	readonly url: string;
}

declare var MLKBarcodeValueTypeCalendarEvent: number;

declare var MLKBarcodeValueTypeContactInfo: number;

declare var MLKBarcodeValueTypeDriversLicense: number;

declare var MLKBarcodeValueTypeEmail: number;

declare var MLKBarcodeValueTypeGeographicCoordinates: number;

declare var MLKBarcodeValueTypeISBN: number;

declare var MLKBarcodeValueTypePhone: number;

declare var MLKBarcodeValueTypeProduct: number;

declare var MLKBarcodeValueTypeSMS: number;

declare var MLKBarcodeValueTypeText: number;

declare var MLKBarcodeValueTypeURL: number;

declare var MLKBarcodeValueTypeUnknown: number;

declare var MLKBarcodeValueTypeWiFi: number;

declare class MLKBarcodeWiFi extends NSObject {

	static alloc(): MLKBarcodeWiFi; // inherited from NSObject

	static new(): MLKBarcodeWiFi; // inherited from NSObject

	readonly password: string;

	readonly ssid: string;

	readonly type: number;
}

declare var MLKBarcodeWiFiEncryptionTypeOpen: number;

declare var MLKBarcodeWiFiEncryptionTypeUnknown: number;

declare var MLKBarcodeWiFiEncryptionTypeWEP: number;

declare var MLKBarcodeWiFiEncryptionTypeWPA: number;
