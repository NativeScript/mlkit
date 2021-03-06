export enum EncryptionType {
    Open = 'open',
    WPA = 'wpa',
    WEP = 'wep',
    Unknown = 'unknown'
}

export interface WiFi {
    encryptionType: EncryptionType
    password: string
    ssid: string
}

export interface UrlBookmark {
    title?: string
    url?: string
}

export interface Sms {
    message: string
    phoneNumber: string
}

export enum PhoneType {
    Unknown = "unknown",
    Home = "home",
    Work = "work",
    Fax = "fax",
    Mobile = "mobile"
}

export interface Phone {
    number: string
    type: PhoneType
}


export enum EmailType {
    Unknown = "unknown",
    Home = "home",
    Work = "work"
}


export interface Email {
    address: string
    subject: string
    body: string
    type: EmailType
}

export interface DriverLicense {
    documentType: string;
    firstName: string;
    middleName: string;
    lastName: string;
    gender: string;
    addressStreet: string;
    addressCity: string;
    addressState: string;
    addressZip: string;
    licenseNumber: string;
    issueDate: string;
    expiryDate: string;
    birthDate: string;
    issuingCountry: string;
}


export interface CalenderEvent {
    description?: string
    location?: string
    organizer?: string
    status?: string
    summary?: string;
    start?: string
    end?: string
}

export enum AddressType {
    Unknown = "unknown",
    Home = "home",
    Work = "work"
}

export interface Address {
    addressLines: string[]
    type: AddressType;
}

export interface ContactInfo {
    addresses: Address[]
}

export interface Origin {
    x: number;
    y: number;
}

export interface Size {
    width: number;
    height: number;
}

export interface Bounds {
    origin: Origin;
    size: Size;
}

export interface Point {
    x: number;
    y: number;
}

export interface GeoPoint {
    lat: number;
    lng: number;
}


export enum ValueType {
    ContactInfo = "contactInfo",
    Email = "email",
    ISBN = "isbn",
    Phone = "phone",
    Product = "product",
    Text = "text",
    Sms = "sms",
    URL = "url",
    WiFi = "wifi",
    Geo = "geo",
    CalenderEvent = "calender",
    DriverLicense = "driverLicense",
    Unknown = "unknown"
}

export enum BarcodeFormats {
    ALL = 'all',
    CODE_128 = 'code_128',
    CODE_39 = 'code_39',
    CODE_93 = 'code_93',
    CODABAR = 'codabar',
    DATA_MATRIX = 'data_matrix',
    EAN_13 = 'ean_13',
    EAN_8 = 'ean_8',
    ITF = 'itf',
    QR_CODE = 'qr_code',
    UPC_A = 'upc_a',
    UPC_E = 'upc_e',
    PDF417 = 'pdf417',
    AZTEC = 'aztec',
    UNKOWN = 'unknown'
}



export interface BarcodeResult {
    calendarEvent?: CalenderEvent
    contactInfo?: ContactInfo
    bounds?: Bounds
    points?: Point[]
    displayValue?: string
    driverLicense?: DriverLicense
    email?: Email
    format: BarcodeFormats
    geoPoint?: GeoPoint
    phone?: Phone
    rawBytes?: any[]
    rawValue?: string;
    sms?: Sms
    url?: UrlBookmark
    valueType?: ValueType
    wifi?: WiFi
}