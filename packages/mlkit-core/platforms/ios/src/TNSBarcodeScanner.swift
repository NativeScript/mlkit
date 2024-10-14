import Foundation
#if canImport(MLKitBarcodeScanning)
import MLKitBarcodeScanning


enum BarcodeFormats: String, Codable {
    init?(rawValue: String) {
        switch(rawValue){
        case "all":
            self = .ALL
            break
        case "code_128":
            self = .CODE_128
        case "code_39":
            self = .CODE_39
            break
        case "code_93":
            self = .CODE_93
        case "codebar":
            self = .CODABAR
            break
        case "data_matrix":
            self = .DATA_MATRIX
        case "ean_13":
            self = .EAN_13
            break
        case "ean_8":
            self = .EAN_8
        case "itf":
            self = .ITF
            break
        case "qr_code":
            self = .QR_CODE
            break
        case "upc_a":
            self = .UPC_A
            break
        case "upc_e":
            self = .UPC_E
            break
        case "pdf417":
            self = .PDF417
            break
        case "aztec":
            self = .AZTEC
            break
        case "unknown":
            self = .UNKOWN
            break
        default:
            return nil
        }
    }
    
    var rawValue: String {
        switch(self){
        case .ALL:
            return "all"
        case .CODE_128:
            return "code_128"
        case .CODE_39:
            return "code_39"
        case .CODE_93:
            return "code_93"
        case .CODABAR:
            return "codabar"
        case .DATA_MATRIX:
            return "data_matrix"
        case .EAN_13:
            return "ean_13"
        case .EAN_8:
            return "ean_8"
        case .ITF:
            return "itf"
        case .QR_CODE:
            return "qr_code"
        case .UPC_A:
            return "upc_a"
        case .UPC_E:
            return "upc_e"
        case .PDF417:
            return "pdf417"
        case .AZTEC:
            return "aztec"
        case .UNKOWN:
            return "unknown"
        }
    }
    
    var format: BarcodeFormat {
        switch(self){
        case .ALL:
            return .all
        case .CODE_128:
            return .code128
        case .CODE_39:
            return .code39
        case .CODE_93:
            return .code93
        case .CODABAR:
            return .codaBar
        case .DATA_MATRIX:
            return .dataMatrix
        case .EAN_13:
            return .EAN13
        case .EAN_8:
            return .EAN8
        case .ITF:
            return .ITF
        case .QR_CODE:
            return .qrCode
        case .UPC_A:
            return .UPCA
        case .UPC_E:
            return .UPCE
        case .PDF417:
            return .PDF417
        case .AZTEC:
            return .aztec
        case .UNKOWN:
            return BarcodeFormat(rawValue: 0)
        }
    }
    
    typealias RawValue = String
    
    case ALL
    case CODE_128
    case CODE_39
    case CODE_93
    case CODABAR
    case DATA_MATRIX
    case EAN_13
    case EAN_8
    case ITF
    case QR_CODE
    case UPC_A
    case UPC_E
    case PDF417
    case AZTEC
    case UNKOWN
    
}

struct TNSGeo: Codable  {
    var lat: Double
    var lng: Double
}

struct TNSSms: Codable  {
    var message: String?
    var phoneNumber: String?
}

struct TNSUrl: Codable  {
    var title: String?
    var url: String?
}

struct TNSWifi: Codable  {
    var password: String?
    var ssid: String?
    var encryptionType: String?
}


struct TNSBarcodeScannerResult: Codable {
    var calenderEvent: TNSCalenderEvent?
    var contactInfo: TNSContactInfo?
    var bounds: TNSBounds
    var points: [TNSPoint]?
    var displayValue: String?
    var driverLicense: TNSDriverLicense?
    var email: TNSEmail?
    var format: BarcodeFormats
    var phone: TNSPhone?
    var rawBytes: [UInt8]?


    var rawValue: String?
    var geoPoint: TNSGeo?
    var sms: TNSSms?
    var url: TNSUrl?
    var valueType: String?
    var wifi: TNSWifi?
}



class TNSBarcodeScanner: NSObject {
    
    
    static func createBarcodeScannerResult(_ barcode: Barcode) -> TNSBarcodeScannerResult {


 var rawBytes: [UInt8]?
        
        if(barcode.rawData != nil){
            var rawData = barcode.rawData! as NSData
            rawBytes = [UInt8](rawData)
        }

        return TNSBarcodeScannerResult(calenderEvent: TNSBarcodeScanner.createCalenderEvent(barcode.calendarEvent), contactInfo: TNSBarcodeScanner.createContactInfo(barcode.contactInfo), bounds: createBounds(barcode.frame), points: createPoints(barcode.cornerPoints), displayValue: barcode.displayValue, driverLicense: createDriverLicense(barcode.driverLicense), email: createEmail(barcode.email), format: parseFormat(barcode.format), phone: createPhone(barcode.phone), rawBytes: rawBytes, rawValue: barcode.rawValue, geoPoint: createGeo(barcode.geoPoint), sms: createSMS(barcode.sms), url: createURL(barcode.url), valueType: createValueType(barcode.valueType), wifi: createWIFI(barcode.wifi))
    }
    
    static func createValueType(_ value: BarcodeValueType) -> String {
        var valueType: String
        switch (value) {
        case BarcodeValueType.calendarEvent:
            valueType = "calender"
            break
        case BarcodeValueType.contactInfo:
            valueType = "contactInfo"
            break
        case BarcodeValueType.driversLicense:
            valueType = "driverLicense"
            break
        case BarcodeValueType.email:
            valueType = "email"
            break
        case BarcodeValueType.geographicCoordinates:
            valueType = "geo"
            break
        case BarcodeValueType.ISBN:
            valueType = "isbn"
            break
        case BarcodeValueType.phone:
            valueType = "phone"
            break
        case BarcodeValueType.product:
            valueType = "product"
            break
        case BarcodeValueType.SMS:
            valueType = "sms"
            break
        case BarcodeValueType.text:
            valueType = "text"
            break
        case BarcodeValueType.URL:
            valueType = "url"
            break
        case BarcodeValueType.wiFi:
            valueType = "wifi"
            break
        case BarcodeValueType.unknown:
            valueType = "unknown"
            break
        default:
            valueType = "unknown"
            break
        }
        return valueType
    }
    
    
    static func createWIFI(_ wifi: BarcodeWifi?) -> TNSWifi? {
        guard wifi != nil else {return nil}
        
        var encryptionType: String?
        
        switch (wifi!.type) {
        case BarcodeWiFiEncryptionType.open:
            encryptionType = "open"
            break
        case BarcodeWiFiEncryptionType.WEP:
            encryptionType = "wep"
            break
        case BarcodeWiFiEncryptionType.WPA:
            encryptionType = "wpa"
            break
        default:
            encryptionType  = "unknown"
            break
        }
        
        return TNSWifi(password: wifi?.password, ssid: wifi?.ssid, encryptionType: encryptionType)
    }
    
    static func createSMS(_ sms: BarcodeSMS?) -> TNSSms? {
        guard sms != nil else {return nil}
        return TNSSms(message: sms?.message, phoneNumber: sms?.phoneNumber)
    }
    
    static func createURL(_ url: BarcodeURLBookmark?) -> TNSUrl?{
        guard url != nil else {return nil}
        return TNSUrl(title: url?.title, url: url?.url)
    }
    
    static func createGeo(_ geo: BarcodeGeoPoint?) -> TNSGeo?{
        guard geo != nil else {return nil}
        return TNSGeo(lat: Double(geo!.latitude), lng: Double(geo!.longitude))
    }
    
    static func createCalenderEvent(_ event: BarcodeCalendarEvent?) -> TNSCalenderEvent? {
        guard event != nil else {return nil}
        let dateFormatter = DateFormatter()
        dateFormatter.dateFormat = "yyyy-MM-dd'T'HH:mm:ss"
        
        var start: String?
        var end: String?
        if event?.start != nil {
            start = dateFormatter.string(from: event!.start!)
        }
        
        if event?.end != nil {
            end = dateFormatter.string(from: event!.end!)
        }
        
        
        return TNSCalenderEvent(location: event?.location, organizer: event?.organizer, status: event?.status, summary: event?.summary, start: start, end: end)
    }
    
    static func createAddress(_ address: BarcodeAddress?) -> TNSContactInfo.TNSAddress? {
        guard address != nil else {return nil}
        var type: String?
        switch (address!.type) {
        case .home:
            type = "home"
            break
        case .unknown:
            type = "unknown"
            break
        case .work:
            type = "work"
            break
        default: break
        }
        return TNSContactInfo.TNSAddress(addressLines: address!.addressLines, type: type)
    }
    
    static func createPerson(_ person: BarcodePersonName?) -> TNSContactInfo.TNSPerson? {
        guard person != nil else {return nil}
        
        return TNSContactInfo.TNSPerson(first: person?.first, formattedName: person?.formattedName, last: person?.last, middle: person?.middle, prefix: person?.prefix, pronunciation: person?.pronunciation, suffix: person?.suffix)
    }
    
    
    static func createContactInfo(_ info: BarcodeContactInfo?) -> TNSContactInfo? {
        guard info != nil else {return nil}
        var addresses: [TNSContactInfo.TNSAddress]?
        if(info?.addresses != nil){
            addresses = []
            for address in info!.addresses! {
                addresses!.append(
                    createAddress(address)!
                )
            }
        }
        
        return TNSContactInfo(addresses: addresses, emails: createEmails(info?.emails), jobTitle: info?.jobTitle, name: createPerson(info?.name), organization: info?.organization, phones: createPhones(info?.phones), urls: info?.urls)
        
    }
    
    
    
    
    static func createPhone(_ phone: BarcodePhone?) -> TNSPhone? {
        guard phone != nil else {return nil}
        var type: String?
        switch(phone!.type){
        case .work:
            type = "work"
            break
        case .home:
            type =  "home"
            break
        case .fax:
            type = "fax"
            break
        case .mobile:
            type =  "mobile"
            break
        case .unknown:
            type = "unknown"
            break
        default:break
        }
        return TNSPhone(type: type, number: phone!.number)
    }
    
    static func createPhones(_ phones: [BarcodePhone]?) -> [TNSPhone]?{
        guard phones != nil else {return nil}
        var result: [TNSPhone] = []
        for phone in phones! {
            result.append(createPhone(phone)!)
        }
        return result
    }
    
    
    static func createEmail(_ email: BarcodeEmail?) -> TNSEmail? {
        guard email != nil else {return nil}
        var type: String?
        switch(email!.type){
        case .home:
            type = "home"
            break
        case .work:
            type = "work"
            break
        case .unknown:
            type = "unknown"
            break
        default: break
        }
        
        return TNSEmail(address: email?.address, type: type, body: email?.body, subject: email?.subject)
    }
    
    static func createEmails(_ emails: [BarcodeEmail]?) -> [TNSEmail]? {
        guard emails != nil else {return nil}
        var result: [TNSEmail] = []
        for email in emails! {
            result.append(createEmail(email)!)
        }
        return result
    }
    
    
    static func createDriverLicense(_ driverLicense: BarcodeDriverLicense?) -> TNSDriverLicense? {
        guard driverLicense != nil else {return nil}
        
        return TNSDriverLicense(documentType: driverLicense?.documentType, firstName: driverLicense?.firstName, middleName: driverLicense?.middleName, lastName: driverLicense?.lastName, gender: driverLicense?.gender, addressStreet: driverLicense?.addressStreet, addressCity: driverLicense?.addressCity, addressState: driverLicense?.addressState, addressZip: driverLicense?.addressZip, licenseNumber: driverLicense?.licenseNumber, issueDate: driverLicense?.issuingDate, expiryDate: driverLicense?.expiryDate, birthDate: driverLicense?.birthDate, issuingCountry: driverLicense?.issuingCountry)
    }
    
}


struct TNSCalenderEvent: Codable {
    var location: String?
    var organizer: String?
    var status: String?
    var summary: String?
    var start: String?
    var end: String?
}


struct TNSContactInfo: Codable {
    struct TNSAddress: Codable {
        var addressLines: [String]?
        var type: String?
    }
    
    
    struct TNSPerson: Codable {
        var first: String?
        var formattedName: String?
        var last: String?
        var middle: String?
        var prefix: String?
        var pronunciation: String?
        var suffix: String?
    }
    
    var addresses: [TNSAddress]?
    var emails: [TNSEmail]?
    var jobTitle: String?
    var name : TNSPerson?
    var organization: String?
    var phones: [TNSPhone]?
    var urls: [String]?
}


struct TNSPhone: Codable {
    var type: String?
    var number: String?
}


struct TNSEmail: Codable {
    var address: String?
    var type: String?
    var body: String?
    var subject: String?
}


struct TNSDriverLicense: Codable {
    var documentType: String?
    var firstName: String?
    var middleName: String?
    var lastName: String?
    var gender: String?
    var addressStreet: String?
    var addressCity: String?
    var addressState: String?
    var addressZip: String?
    var licenseNumber: String?
    var issueDate: String?
    var expiryDate: String?
    var birthDate: String?
    var issuingCountry: String?
}


func parseFormat(_ format: BarcodeFormat) -> BarcodeFormats {

    if (format == .all) {
        return BarcodeFormats.ALL
    }
    
    if ((format.rawValue & BarcodeFormat.aztec.rawValue) == BarcodeFormat.aztec.rawValue) {
        return .AZTEC
    } else if ((format.rawValue & BarcodeFormat.codaBar.rawValue) == BarcodeFormat.codaBar.rawValue) {
        return .CODABAR
    } else if ((format.rawValue & BarcodeFormat.code128.rawValue) == BarcodeFormat.code128.rawValue) {
        return .CODE_128
    } else if ((format.rawValue & BarcodeFormat.code39.rawValue) == BarcodeFormat.code39.rawValue) {
        return .CODE_39
    } else if ((format.rawValue & BarcodeFormat.code93.rawValue) == BarcodeFormat.code93.rawValue) {
        return .CODE_93
    } else if ((format.rawValue & BarcodeFormat.dataMatrix.rawValue) == BarcodeFormat.dataMatrix.rawValue) {
        return .DATA_MATRIX
    } else if ((format.rawValue & BarcodeFormat.EAN13.rawValue) == BarcodeFormat.EAN13.rawValue) {
        return .EAN_13
    } else if ((format.rawValue & BarcodeFormat.EAN8.rawValue) == BarcodeFormat.EAN8.rawValue) {
        return BarcodeFormats.EAN_8
    } else if ((format.rawValue & BarcodeFormat.ITF.rawValue) == BarcodeFormat.ITF.rawValue) {
        return BarcodeFormats.ITF
    } else if ((format.rawValue & BarcodeFormat.PDF417.rawValue) == BarcodeFormat.PDF417.rawValue) {
        return BarcodeFormats.PDF417
    } else if ((format.rawValue & BarcodeFormat.qrCode.rawValue) == BarcodeFormat.qrCode.rawValue) {
        return BarcodeFormats.QR_CODE
    } else if ((format.rawValue & BarcodeFormat.UPCA.rawValue) == BarcodeFormat.UPCA.rawValue) {
        return BarcodeFormats.UPC_A
    } else if ((format.rawValue & BarcodeFormat.UPCE.rawValue) == BarcodeFormat.UPCE.rawValue) {
        return BarcodeFormats.UPC_E
    }
    
    return .UNKOWN
    
}


#endif
