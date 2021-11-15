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


export interface BarcodeResult {
    calendarEvent?: CalenderEvent
    contactInfo?: ContactInfo
    bounds?: Bounds
    points?: Point[]
    displayValue?: string
    driverLicense?: DriverLicense
    email?: Email
    format: BarcodeScanner.BarcodeFormat
    geoPoint?: GeoPoint
    phone?: Phone
    rawBytes?: any[]
    rawValue?: string;
    sms?: Sms
    url?: UrlBookmark
    valueType?: ValueType
    wifi?: WiFi
}