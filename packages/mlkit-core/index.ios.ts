import { Utils } from "@nativescript/core";
import { BarcodeFormats, barcodeFormatsProperty, CameraPosition, cameraPositionProperty, DetectionType, faceDetectionMinFaceSizeProperty, faceDetectionPerformanceModeProperty, faceDetectionTrackingEnabledProperty, imageLablerConfidenceThresholdProperty, MLKitViewBase, objectDetectionClassifyProperty, objectDetectionMultipleProperty } from "./common";
import '@nativescript/core';
import lazy from "@nativescript/core/utils/lazy";


const BARCODE_SCANNER_SUPPORTED = lazy(() => typeof MLKBarcodeScanner);
const TEXT_RECOGNITION_SUPPORTED = lazy(() => typeof MLKTextRecognizer);
const FACE_DETECTION_SUPPORTED = lazy(() => typeof MLKFaceDetector);
const IMAGE_LABELING_SUPPORTED = lazy(() => typeof MLKImageLabeler);
const OBJECT_DETECTION_SUPPORTED = lazy(() => typeof MLKObjectDetector);
const POSE_DETECTION_SUPPORTED = lazy(() => typeof MLKPoseDetector);


function getOrientation(deviceOrientation: UIDeviceOrientation, cameraPosition: AVCaptureDevicePosition) {
    switch (deviceOrientation) {
        case UIDeviceOrientation.Portrait:
            return cameraPosition === AVCaptureDevicePosition.Front ? UIImageOrientation.LeftMirrored
                : UIImageOrientation.Right;

        case UIDeviceOrientation.LandscapeLeft:
            return cameraPosition === AVCaptureDevicePosition.Front ? UIImageOrientation.DownMirrored
                : UIImageOrientation.Up;
        case UIDeviceOrientation.PortraitUpsideDown:
            return cameraPosition === AVCaptureDevicePosition.Front ? UIImageOrientation.RightMirrored
                : UIImageOrientation.Left;
        case UIDeviceOrientation.LandscapeRight:
            return cameraPosition === AVCaptureDevicePosition.Front ? UIImageOrientation.UpMirrored
                : UIImageOrientation.Down;
        case UIDeviceOrientation.Unknown:
        case UIDeviceOrientation.FaceUp:
        case UIDeviceOrientation.FaceDown:
            return UIImageOrientation.Up;
    }
}

function getBounds(frame: CGRect) {
    return {
        origin: {
            left: frame.origin.x,
            top: frame.origin.y,
            right: frame.origin.x + frame.size.width,
            bottom: frame.origin.y + frame.size.height
        },
        size: {
            width: frame.size.width,
            height: frame.size.height
        }
    }
}

function getEncryptionType(type: number) {
    switch (type) {
        case MLKBarcodeWiFiEncryptionTypeOpen:
            return 'open';
        case MLKBarcodeWiFiEncryptionTypeWEP:
            return 'wep';
        case MLKBarcodeWiFiEncryptionTypeWPA:
            return 'wpa';
        case MLKBarcodeWiFiEncryptionTypeUnknown:
            return 'unknown';
    }
}

function getPhoneType(type: number) {
    switch (type) {
        case MLKBarcodePhoneTypeFax:
            return "fax";
        case MLKBarcodePhoneTypeHome:
            return "home";
        case MLKBarcodePhoneTypeMobile:
            return "mobile";
        case MLKBarcodePhoneTypeUnknown:
            return "unknown";
        case MLKBarcodePhoneTypeWork:
            return "work";
    }
}

function getEmailType(type: number) {
    switch (type) {
        case MLKBarcodeEmailTypeHome:
            return 'home';
        case MLKBarcodeEmailTypeUnknown:
            return 'unknown';
        case MLKBarcodeEmailTypeWork:
            return 'work';
    }
}

function getContactInfoType(type: number) {
    switch (type) {
        case MLKBarcodeAddressTypeHome:
            return 'home';
        case MLKBarcodeAddressTypeUnknown:
            return 'unknown';
        case MLKBarcodeAddressTypeWork:
            return 'work';
    }
}

function getContactInfoEmailType(type: number) {
    switch (type) {
        case MLKBarcodeEmailTypeHome:
            return 'home';
        case MLKBarcodeEmailTypeUnknown:
            return 'unknown';
        case MLKBarcodeEmailTypeWork:
            return 'work';
    }
}

function getContactInfoAddresses(addresses: NSArray<MLKBarcodeAddress>) {
    const result = [];
    const addressLines = [];

    addresses.enumerateObjectsUsingBlock(address => {
        address.addressLines.enumerateObjectsUsingBlock(line => {
            addressLines.push(line);
        })
        result.push({
            addressLines: addressLines,
            type: getContactInfoType(address.type)
        })
    });
    return result;
}

function getContactInfoEmails(emails: NSArray<MLKBarcodeEmail>) {
    const result = [];

    emails.enumerateObjectsUsingBlock(email => {
        result.push({
            address: email.address,
            body: email.body,
            subject: email.subject,
            type: getContactInfoEmailType(email.type)
        })
    });
    return result;
}

function getContactInfoPhones(phones: NSArray<MLKBarcodePhone>) {
    const result = [];
    phones.enumerateObjectsUsingBlock(phone => {
        result.push({
            number: phone.number,
            type: getPhoneType(phone.type)
        })
    })
    return result;
}

function toPrimitiveArray<T>(array: NSArray<any>) {
    const result: T[] = [];
    array.enumerateObjectsUsingBlock(value => {
        result.push(value);
    })
    return result;
}

function getPoints(points: NSArray<NSValue>) {
    const result = [];
    points.enumerateObjectsUsingBlock(point => {
        result.push({
            x: point.CGPointValue.x,
            y: point.CGPointValue.y
        })
    })
    return result;
}

function fromBarCodeFormat(format: MLKBarcodeFormat) {
    const result = [];
    if (format === MLKBarcodeFormat.All) {
        result.push(BarcodeFormats.ALL);
        return result;
    }

    if ((format & MLKBarcodeFormat.Aztec) === MLKBarcodeFormat.Aztec) {
        result.push(BarcodeFormats.AZTEC);
    } else if ((format & MLKBarcodeFormat.CodaBar) === MLKBarcodeFormat.CodaBar) {
        result.push(BarcodeFormats.CODABAR);
    } else if ((format & MLKBarcodeFormat.Code128) === MLKBarcodeFormat.Code128) {
        result.push(BarcodeFormats.CODE_128);
    } else if ((format & MLKBarcodeFormat.Code39) === MLKBarcodeFormat.Code39) {
        result.push(BarcodeFormats.CODE_39);
    } else if ((format & MLKBarcodeFormat.Code93) === MLKBarcodeFormat.Code93) {
        result.push(BarcodeFormats.CODE_93);
    } else if ((format & MLKBarcodeFormat.DataMatrix) === MLKBarcodeFormat.DataMatrix) {
        result.push(BarcodeFormats.DATA_MATRIX);
    } else if ((format & MLKBarcodeFormat.EAN13) === MLKBarcodeFormat.EAN13) {
        result.push(BarcodeFormats.EAN_13);
    } else if ((format & MLKBarcodeFormat.EAN8) === MLKBarcodeFormat.EAN8) {
        result.push(BarcodeFormats.EAN_8);
    } else if ((format & MLKBarcodeFormat.ITF) === MLKBarcodeFormat.ITF) {
        result.push(BarcodeFormats.ITF);
    } else if ((format & MLKBarcodeFormat.PDF417) === MLKBarcodeFormat.PDF417) {
        result.push(BarcodeFormats.PDF417);
    } else if ((format & MLKBarcodeFormat.QRCode) === MLKBarcodeFormat.QRCode) {
        result.push(BarcodeFormats.QR_CODE);
    } else if ((format & MLKBarcodeFormat.UPCA) === MLKBarcodeFormat.UPCA) {
        result.push(BarcodeFormats.UPC_A);
    } else if ((format & MLKBarcodeFormat.UPCE) === MLKBarcodeFormat.UPCE) {
        result.push(BarcodeFormats.UPC_E);
    }
    if (format === 0) {
        result.push(BarcodeFormats.UNKOWN)
    }
    return result;
}


function getValueType(type: number) {
    switch (type) {
        case MLKBarcodeValueTypeCalendarEvent:
            return "calender";
        case MLKBarcodeValueTypeContactInfo:
            return "contactInfo";
        case MLKBarcodeValueTypeDriversLicense:
            return "driverLicense";
        case MLKBarcodeValueTypeEmail:
            return "email";
        case MLKBarcodeValueTypeGeographicCoordinates:
            return "geo";
        case MLKBarcodeValueTypeISBN:
            return "isbn";
        case MLKBarcodeValueTypePhone:
            return "phone";
        case MLKBarcodeValueTypeProduct:
            return "product";
        case MLKBarcodeValueTypeSMS:
            return "sms";
        case MLKBarcodeValueTypeText:
            return "text";
        case MLKBarcodeValueTypeURL:
            return "url";
        case MLKBarcodeValueTypeWiFi:
            return "wifi";
        case MLKBarcodeValueTypeUnknown:
            return "unknown";

    }
}

function getObjectLabel(value) {
    switch (value) {
        case MLKDetectedObjectLabelFashionGood:
            return "fashionGood";
        case MLKDetectedObjectLabelFood:
            return "food";
        case MLKDetectedObjectLabelHomeGood:
            return "homeGood";
        case MLKDetectedObjectLabelPlant:
            return "plant";
        case MLKDetectedObjectLabelPlace:
            return "place";
        default:
            return "unknown";
    }
}


function getObjectIndex(value) {
    switch (value) {
        case MLKDetectedObjectLabelIndexFashionGood:
            return "fashionGoodIndex";
        case MLKDetectedObjectLabelIndexFood:
            return "foodIndex";
        case MLKDetectedObjectLabelIndexHomeGood:
            return "homeGoodIndex";
        case MLKDetectedObjectLabelIndexPlace:
            return "placeIndex";
        case MLKDetectedObjectLabelIndexPlant:
            return "plantIndex";
        default:
            return "unknownIndex";
    }
}


function getPoseType(type) {
    switch (type) {
        case MLKPoseLandmarkTypeLeftAnkle:
            return "leftAnkle"
        case MLKPoseLandmarkTypeLeftEar:
            return "leftEar"
        case MLKPoseLandmarkTypeLeftElbow:
            return "leftElbow"
        case MLKPoseLandmarkTypeLeftEye:
            return "leftEye"
        case MLKPoseLandmarkTypeLeftEyeInner:
            return "leftEyeInner"
        case MLKPoseLandmarkTypeLeftEyeOuter:
            return "leftEyeOuter"
        case MLKPoseLandmarkTypeLeftHeel:
            return "leftHeel"
        case MLKPoseLandmarkTypeLeftHip:
            return "leftHip"
        case MLKPoseLandmarkTypeLeftIndexFinger:
            return "leftIndex"
        case MLKPoseLandmarkTypeLeftKnee:
            return "leftKnee"
        case MLKPoseLandmarkTypeLeftPinkyFinger:
            return "leftPinky"
        case MLKPoseLandmarkTypeLeftShoulder:
            return "leftShoulder"
        case MLKPoseLandmarkTypeLeftThumb:
            return "leftThumb"
        case MLKPoseLandmarkTypeLeftToe:
            return "leftToe"
        case MLKPoseLandmarkTypeLeftWrist:
            return "leftWrist"
        case MLKPoseLandmarkTypeMouthLeft:
            return "mouthLeft"
        case MLKPoseLandmarkTypeMouthRight:
            return "mouthRight"
        case MLKPoseLandmarkTypeNose:
            return "nose"
        case MLKPoseLandmarkTypeRightAnkle:
            return "rightAnkle"
        case MLKPoseLandmarkTypeRightEar:
            return "rightEar"
        case MLKPoseLandmarkTypeRightElbow:
            return "rightElbow"
        case MLKPoseLandmarkTypeRightEye:
            return "rightEye"
        case MLKPoseLandmarkTypeRightEyeInner:
            return "rightEyeInner"
        case MLKPoseLandmarkTypeRightEyeOuter:
            return "rightEyeOuter"
        case MLKPoseLandmarkTypeRightHeel:
            return "rightHeel"
        case MLKPoseLandmarkTypeRightHip:
            return "rightHip"
        case MLKPoseLandmarkTypeRightIndexFinger:
            return "rightIndex"
        case MLKPoseLandmarkTypeRightKnee:
            return "rightKnee"
        case MLKPoseLandmarkTypeRightPinkyFinger:
            return "rightPinky"
        case MLKPoseLandmarkTypeRightShoulder:
            return "rightShoulder"
        case MLKPoseLandmarkTypeRightThumb:
            return "rightThumb"
        case MLKPoseLandmarkTypeRightToe:
            return "rightToe"
        case MLKPoseLandmarkTypeRightWrist:
            return "rightWrist"
        default:
            return "unknown"
    }
}

@ObjCClass(AVCaptureVideoDataOutputSampleBufferDelegate)
@NativeClass()
class AVCaptureVideoDataOutputSampleBufferDelegateImpl extends NSObject implements AVCaptureVideoDataOutputSampleBufferDelegate {
    _owner: WeakRef<MLKitView>;
    static initWithOwner(owner: WeakRef<MLKitView>): AVCaptureVideoDataOutputSampleBufferDelegateImpl {
        const delegate = <AVCaptureVideoDataOutputSampleBufferDelegateImpl>AVCaptureVideoDataOutputSampleBufferDelegateImpl.new();
        delegate._owner = owner;
        return delegate;
    }

    captureOutputDidOutputSampleBufferFromConnection(output: AVCaptureOutput, sampleBuffer: any, connection: AVCaptureConnection) {
        let detector = DetectionType.None;
        const owner = this._owner?.get?.();
        if (owner) {
            detector = owner.dectectionType;
            if (detector === DetectionType.None || !owner.onDetection) {
                return;
            }

            const image = MLKVisionImage.alloc().initWithBuffer(sampleBuffer);
            if (!image) {
                return;
            }
            image.orientation = getOrientation(
                UIDevice.currentDevice.orientation,
                owner._device.position
            );

            if (detector === DetectionType.Barcode && BARCODE_SCANNER_SUPPORTED()) {
                const barcode = owner._barcodeScanner.resultsInImageError(image);
                if (barcode) {
                    const barcodes = [];
                    barcode.enumerateObjectsUsingBlock(code => {
                        barcodes.push({
                            calendarEvent: {
                                description: code.calendarEvent.eventDescription,
                                location: code.calendarEvent.location,
                                organizer: code.calendarEvent.organizer,
                                status: code.calendarEvent.status,
                                summary: code.calendarEvent.summary,
                                start: code.calendarEvent.start,
                                end: code.calendarEvent.end
                            },
                            contactInfo: {
                                addresses: getContactInfoAddresses(code.contactInfo.addresses),
                                emails: getContactInfoEmails(code.contactInfo.emails),
                                jobTitle: code.contactInfo.jobTitle,
                                name: {
                                    first: code.contactInfo.name.first,
                                    formattedName: code.contactInfo.name.formattedName,
                                    last: code.contactInfo.name.last,
                                    middle: code.contactInfo.name.middle,
                                    prefix: code.contactInfo.name.prefix,
                                    pronunciation: code.contactInfo.name.pronunciation,
                                    suffix: code.contactInfo.name.suffix,
                                },
                                organization: code.contactInfo.organization,
                                phones: getContactInfoPhones(code.contactInfo.phones),
                                urls: toPrimitiveArray<string>(code.contactInfo.urls)
                            },
                            bounds: getBounds(code.frame),
                            points: getPoints(code.cornerPoints),
                            displayValue: code.displayValue,
                            driverLicense: {
                                documentType: code.driverLicense.documentType,
                                firstName: code.driverLicense.firstName,
                                middleName: code.driverLicense.middleName,
                                lastName: code.driverLicense.lastName,
                                gender: code.driverLicense.gender,
                                addressStreet: code.driverLicense.addressStreet,
                                addressCity: code.driverLicense.addressCity,
                                addressState: code.driverLicense.addressState,
                                addressZip: code.driverLicense.addressZip,
                                licenseNumber: code.driverLicense.licenseNumber,
                                issueDate: code.driverLicense.issuingDate,
                                expiryDate: code.driverLicense.expiryDate,
                                birthDate: code.driverLicense.birthDate,
                                issuingCountry: code.driverLicense.issuingCountry
                            },
                            email: {
                                address: code.email.address,
                                subject: code.email.subject,
                                body: code.email.body,
                                type: getEmailType(code.email.type)
                            },
                            format: fromBarCodeFormat(code.format),
                            geoPoint: {
                                lat: code.geoPoint.latitude,
                                lon: code.geoPoint.longitude
                            },
                            phone: {
                                number: code.phone.number,
                                type: getPhoneType(code.phone.type)
                            },
                            rawBytes: code.rawData,
                            rawValue: code.rawValue,
                            sms: {
                                message: code.sms.message,
                                phoneNumber: code.sms.phoneNumber
                            },
                            url: {
                                title: code.URL.title,
                                url: code.URL.url
                            },
                            valueType: getValueType(code.valueType),
                            wifi: {
                                encryptionType: getEncryptionType(code.wifi.type),
                                password: code.wifi.password,
                                ssid: code.wifi.ssid
                            }
                        })
                    });
                    if (barcodes.length) {
                        owner?.onDetection(barcodes);
                    }
                }
            }

            if (detector === DetectionType.Face && FACE_DETECTION_SUPPORTED()) {
                const face = owner._faceDetector.resultsInImageError(image);
                if (face) {
                    const faces = [];
                    face.enumerateObjectsUsingBlock(face => {
                        faces.push({
                            leftEyeOpenProbability: face.hasLeftEyeOpenProbability,
                            rightEyeOpenProbability: face.hasRightEyeOpenProbability,
                            smilingProbability: face.hasSmilingProbability,
                            bounds: getBounds(face.frame),
                            headEulerAngleX: face.hasHeadEulerAngleX,
                            headEulerAngleY: face.hasHeadEulerAngleY,
                            headEulerAngleZ: face.hasHeadEulerAngleZ,
                        });
                    });
                    if (faces.length) {
                        owner?.onDetection(faces);
                    }
                }
            }

            if (detector === DetectionType.Pose && POSE_DETECTION_SUPPORTED()) {
                const pose = owner._poseDetector.resultsInImageError(image);
                if (pose) {
                    const poses = [];
                    pose.enumerateObjectsUsingBlock(val => {
                        const landMarks = [];
                        val.landmarks.enumerateObjectsUsingBlock(landMark => {
                            landMarks.push({
                                inFrameLikelihood: landMark.inFrameLikelihood,
                                position: {
                                    x: landMark.position.x,
                                    y: landMark.position.y,
                                    z: landMark.position.z
                                },
                                type: getPoseType(landMark.type)
                            })
                        })
                        poses.push({
                            landMarks
                        });
                    });
                    if (poses.length) {
                        owner?.onDetection(poses);
                    }
                }
            }

            if (detector === DetectionType.Image && IMAGE_LABELING_SUPPORTED()) {
                const imagelabeling = owner._imageLabeler.resultsInImageError(image);
                if (imagelabeling) {
                    const labels = [];
                    imagelabeling.enumerateObjectsUsingBlock(label => {
                        labels.push({
                            text: label.text,
                            confidence: label.confidence,
                            index: label.index
                        })
                    })
                    if (labels.length) {
                        owner?.onDetection(labels);
                    }
                }
            }

            if (detector === DetectionType.Object && OBJECT_DETECTION_SUPPORTED()) {
                const object = owner._objectDetector.resultsInImageError(image);
                if (object) {
                    const objects = [];
                    object.enumerateObjectsUsingBlock(obj => {
                        const labels = [];
                        obj.labels.enumerateObjectsUsingBlock(label => {
                            labels.push({
                                text: getObjectLabel(label.text),
                                confidence: label.confidence,
                                index: getObjectIndex(label.index)
                            })
                        })
                        objects.push({
                            trackingId: obj.trackingID,
                            bounds: getBounds(obj.frame),
                        })
                    });
                    if (objects.length) {
                        owner?.onDetection(objects);
                    }
                }
            }


            if (detector === DetectionType.Text && TEXT_RECOGNITION_SUPPORTED()) {
                const text = owner._textRecognizer.resultsInImageError(image);
                if (text) {
                    const blocks = [];
                    text.blocks.enumerateObjectsUsingBlock(block => {
                        const lines = [];
                        block.lines.enumerateObjectsUsingBlock(line => {
                            const elements = [];
                            line.elements.enumerateObjectsUsingBlock(element => {
                                elements.push({
                                    text: element.text,
                                    bounds: getBounds(element.frame)
                                });
                            });
                            const points = [];
                            line.cornerPoints.enumerateObjectsUsingBlock(point => {
                                points.push({
                                    x: point.CGPointValue.x,
                                    y: point.CGPointValue.y,
                                })
                            });
                            lines.push({
                                text: line.text,
                                points,
                                bounds: getBounds(line.frame),
                                elements
                            })
                        });
                        const points = [];
                        block.cornerPoints.enumerateObjectsUsingBlock(point => {
                            points.push({
                                x: point.CGPointValue.x,
                                y: point.CGPointValue.y,
                            })
                        });
                        blocks.push({
                            text: block.text,
                            points,
                            bounds: getBounds(block.frame),
                            lines
                        });
                    });
                    if (blocks.length) {
                        owner?.onDetection(blocks);
                    }
                }
            }

        }
    }
}


export { BarcodeFormats, barcodeFormatsProperty, CameraPosition, cameraPositionProperty, DetectionType, faceDetectionMinFaceSizeProperty, faceDetectionPerformanceModeProperty, faceDetectionTrackingEnabledProperty, imageLablerConfidenceThresholdProperty, objectDetectionClassifyProperty, objectDetectionMultipleProperty } from './common';

export class MLKitView extends MLKitViewBase {
    #session: AVCaptureSession;
    #device: AVCaptureDevice;
    #preview: AVCaptureVideoPreviewLayer;
    #delegate: AVCaptureVideoDataOutputSampleBufferDelegateImpl;
    #output: AVCaptureVideoDataOutput;
    #outputQueue;
    #onDetection: (data: { [key: string]: any }) => void;
    #textRecognizer: MLKTextRecognizer;
    #barcodeScanner: MLKBarcodeScanner;
    #digitalInkRecognizer: MLKDigitalInkRecognizer;
    #faceDetector: MLKFaceDetector;
    #imageLabeler: MLKImageLabeler;
    #objectDetector: MLKObjectDetector;
    #poseDetector: MLKPoseDetector;
    #barcodeScannerOptions: MLKBarcodeScannerOptions;
    #faceDetectorOptions: MLKFaceDetectorOptions;
    #imageLabelerOptions: MLKImageLabelerOptions;
    #objectDetectionOptions: MLKObjectDetectorOptions;
    #poseDetectionOptions: MLKPoseDetectorOptions;

    createNativeView() {
        return UIView.new();
    }

    initNativeView() {
        super.initNativeView();
        this.#delegate = AVCaptureVideoDataOutputSampleBufferDelegateImpl.initWithOwner(new WeakRef(this));
        this.#outputQueue = dispatch_get_global_queue(qos_class_t.QOS_CLASS_DEFAULT, 0);
    }

    get _device() {
        return this.#device;
    }

    get _textRecognizer(): MLKTextRecognizer {
        return this.#textRecognizer;
    }

    get _barcodeScanner(): MLKBarcodeScanner {
        return this.#barcodeScanner;
    }

    get _digitalInkRecognizer(): MLKDigitalInkRecognizer {
        return this.#digitalInkRecognizer;
    }

    get _faceDetector(): MLKFaceDetector {
        return this.#faceDetector;
    }

    get _imageLabeler(): MLKImageLabeler {
        return this.#imageLabeler;
    }

    get _objectDetector(): MLKObjectDetector {
        return this.#objectDetector;
    }
    get _poseDetector(): MLKPoseDetector {
        return this.#poseDetector;
    }


    [cameraPositionProperty.setNative](value: CameraPosition) {
        this.#openCamera(true);
    }

    public static isAvailable() {
        return UIImagePickerController.isSourceTypeAvailable(
            UIImagePickerControllerSourceType.Camera
        );
    }


    //@ts-ignore
    set onDetection(value) {
        this.#onDetection = value;
        const ref = new WeakRef(this);
        if (typeof MLKTextRecognizer && !this.#textRecognizer && (this.dectectionType === DetectionType.Text || this.dectectionType === DetectionType.All)) {
            this.#textRecognizer = MLKTextRecognizer.textRecognizer();
        }

        if (typeof MLKBarcodeScanner && !this.#barcodeScanner && (this.dectectionType === DetectionType.Barcode || this.dectectionType === DetectionType.All)) {
            this.#setupBarcodeScanner(this.barcodeFormats);
        }

        // TODO
        if (typeof MLKDigitalInkRecognizer && !this.#digitalInkRecognizer && (this.dectectionType === DetectionType.DigitalInk || this.dectectionType === DetectionType.All)) {
            // MLKDigitalInkRecognizer.digitalInkRecognizerWithOptions()
        }


        if (typeof MLKFaceDetector && !this.#faceDetector && (this.dectectionType === DetectionType.Face || this.dectectionType === DetectionType.All)) {
            this.#setupFaceDetector();
        }

        if (typeof MLKImageLabeler && !this.#imageLabeler && (this.dectectionType === DetectionType.Image || this.dectectionType === DetectionType.All)) {
            this.#setImageLabeler()
        }

        if (typeof MLKObjectDetector && !this.#objectDetector && (this.dectectionType === DetectionType.Object || this.dectectionType === DetectionType.All)) {
            this.#setupObjectDetection();
        }

        if (typeof MLKPoseDetector && !this.#poseDetector && (this.dectectionType === DetectionType.Pose || this.dectectionType === DetectionType.All)) {
            this.#setPoseDetection();
        }

    }

    get onDetection() {
        return this.#onDetection;
    }

    [barcodeFormatsProperty.setNative](value: BarcodeFormats[]) {
        this.#setupBarcodeScanner(value);
    }

    #setupBarcodeScanner(value) {
        if (!BARCODE_SCANNER_SUPPORTED()) {
            return;
        }
        let formats: MLKBarcodeFormat = 0;
        if (Array.isArray(value)) {
            if (value.indexOf(BarcodeFormats.ALL)) {
                formats = MLKBarcodeFormat.All;
            } else {
                value.forEach(format => {
                    switch (format) {
                        case BarcodeFormats.AZTEC:
                            formats |= MLKBarcodeFormat.Aztec;
                            break;
                        case BarcodeFormats.CODABAR:
                            formats |= MLKBarcodeFormat.CodaBar;
                            break;
                        case BarcodeFormats.CODE_128:
                            formats |= MLKBarcodeFormat.Code128;
                            break;
                        case BarcodeFormats.CODE_39:
                            formats |= MLKBarcodeFormat.Code39;
                            break;
                        case BarcodeFormats.CODE_93:
                            formats |= MLKBarcodeFormat.Code93;
                            break;
                        case BarcodeFormats.DATA_MATRIX:
                            formats |= MLKBarcodeFormat.DataMatrix;
                            break;
                        case BarcodeFormats.EAN_13:
                            formats |= MLKBarcodeFormat.EAN13;
                            break;
                        case BarcodeFormats.EAN_8:
                            formats |= MLKBarcodeFormat.EAN8;
                            break;
                        case BarcodeFormats.ITF:
                            formats |= MLKBarcodeFormat.ITF;
                            break;
                        case BarcodeFormats.PDF417:
                            formats |= MLKBarcodeFormat.PDF417;
                            break;
                        case BarcodeFormats.QR_CODE:
                            formats |= MLKBarcodeFormat.QRCode;
                            break;
                        case BarcodeFormats.UPC_A:
                            formats |= MLKBarcodeFormat.UPCA;
                            break;
                        case BarcodeFormats.UPC_E:
                            formats |= MLKBarcodeFormat.UPCE;
                            break;
                        default:
                            formats |= MLKBarcodeFormat.All;
                            break;
                            break;
                    }
                });
            }
        }
        if (!formats) {
            formats = MLKBarcodeFormat.All;
        }

        this.#barcodeScannerOptions = MLKBarcodeScannerOptions.alloc().initWithFormats(formats);
        this.#barcodeScanner = MLKBarcodeScanner.barcodeScannerWithOptions(this.#barcodeScannerOptions);
    }

    [faceDetectionTrackingEnabledProperty.setNative](value) {
        this.#setupFaceDetector();
    }

    [faceDetectionMinFaceSizeProperty.setNative](value) {
        this.#setupFaceDetector();
    }

    [faceDetectionPerformanceModeProperty.setNative](value) {
        this.#setupFaceDetector();
    }

    #setupFaceDetector() {
        if (!FACE_DETECTION_SUPPORTED) {
            return;
        }

        if (!this.#faceDetectorOptions) {
            this.#faceDetectorOptions = MLKFaceDetectorOptions.new();
        }

        this.#faceDetectorOptions.performanceMode = this.faceDetectionPerformanceMode === 'accurate' ? this.#faceDetectorOptions.performanceMode = MLKFaceDetectorPerformanceModeAccurate : this.#faceDetectorOptions.performanceMode = MLKFaceDetectorPerformanceModeFast;
        this.#faceDetectorOptions.trackingEnabled = this.faceDetectionTrackingEnabled;
        this.#faceDetectorOptions.minFaceSize = this.faceDetectionMinFaceSize;
        this.#faceDetector = MLKFaceDetector.faceDetectorWithOptions(this.#faceDetectorOptions);
    }

    [imageLablerConfidenceThresholdProperty.setNative](value) {
        this.#setImageLabeler();
    }

    #setImageLabeler() {
        if (!IMAGE_LABELING_SUPPORTED) {
            return;
        }
        if (!this.#imageLabelerOptions) {
            this.#imageLabelerOptions = MLKImageLabelerOptions.new();
        }
        this.#imageLabelerOptions.confidenceThreshold = this.imageLablerConfidenceThreshold;
        this.#imageLabeler = MLKImageLabeler.imageLabelerWithOptions(this.#imageLabelerOptions);
    }


    [objectDetectionClassifyProperty.setNative](value) {
        this.#setupObjectDetection();
    }

    [objectDetectionMultipleProperty.setNative](value) {
        this.#setupObjectDetection();
    }

    #setupObjectDetection() {
        if (!OBJECT_DETECTION_SUPPORTED) {
            return;
        }
        if (!this.#objectDetectionOptions) {
            this.#objectDetectionOptions = MLKObjectDetectorOptions.new();
        }

        this.#objectDetectionOptions.detectorMode = MLKObjectDetectorModeStream;

        this.#objectDetectionOptions.shouldEnableMultipleObjects = this.objectDetectionMultiple;
        this.#objectDetectionOptions.shouldEnableClassification = this.objectDetectionClassify;

        this.#objectDetector = MLKObjectDetector.objectDetectorWithOptions(this.#objectDetectionOptions);
    }


    #setPoseDetection() {
        if (!POSE_DETECTION_SUPPORTED) {
            return;
        }
        if (!this.#poseDetectionOptions) {
            this.#poseDetectionOptions = MLKPoseDetectorOptions.new();
        }

        this.#poseDetectionOptions.detectorMode = MLKPoseDetectorModeStream;

        this.#poseDetector = MLKPoseDetector.poseDetectorWithOptions(this.#poseDetectionOptions);
    }


    onLoaded() {
        super.onLoaded();
        this.startPreview();
    }

    onUnloaded() {
        this.stopPreview();
        super.onUnloaded();
    }


    #openCamera(restart = false) {
        try {
            if (this.#session && this.#session.running) {
                if (!restart) {
                    return;
                }
                this.#session.stopRunning();
            }
            this.#session = AVCaptureSession.new();
            const devices = AVCaptureDevice.devicesWithMediaType(AVMediaTypeVideo);
            const pos = this.cameraPosition === CameraPosition.BACK ? AVCaptureDevicePosition.Back : AVCaptureDevicePosition.Front;
            devices.enumerateObjectsUsingBlock((device) => {
                if (device.position === pos) {
                    this.#device = device;
                }
            });

            const input = AVCaptureDeviceInput.deviceInputWithDeviceError(this.#device);

            this.#output = AVCaptureVideoDataOutput.new();
            this.#output.alwaysDiscardsLateVideoFrames = true;

            this.#output.setSampleBufferDelegateQueue(this.#delegate, this.#outputQueue);

            if (!input) {
                this.notify({
                    eventName: 'error',
                    object: this,
                    message: 'Error trying to open camera.'
                })
                return;
            }
            this.#session.beginConfiguration();
            this.#session.sessionPreset = AVCaptureSessionPreset1280x720;
            this.#session.addInput(input);

            this.#session.addOutput(this.#output);

            this.#preview = AVCaptureVideoPreviewLayer.layerWithSession(this.#session);

            this.#session.startRunning();

            dispatch_async(dispatch_get_current_queue(), () => {
                this.#preview.videoGravity = AVLayerVideoGravityResizeAspect;
                this.#preview.frame = this.nativeView.bounds;
                this.nativeView.layer.addSublayer(this.#preview);
            });

            this.#session.commitConfiguration();

        } catch (e) {
            this.notify({
                eventName: 'error',
                object: this,
                message: e.message
            });
        }
    }


    public stopPreview(): void {
        if (this.#session.running) {
            this.#session.stopRunning();
        }
    }

    public toggleCamera(): void {
        if (this.cameraPosition === CameraPosition.BACK) {
            this.cameraPosition = CameraPosition.FRONT
        } else {
            this.cameraPosition = CameraPosition.BACK
        }
        this.#openCamera(true);
    }

    public startPreview(): void {
        this.#openCamera();
    }


    public onLayout(left: number, top: number, right: number, bottom: number) {
        if (!this.#preview) {
            dispatch_async(dispatch_get_current_queue(), () => {
                this.#preview.frame = this.nativeView.bounds;
            });
        }
    }

    public onMeasure(widthMeasureSpec: number, heightMeasureSpec: number) {
        const width = Utils.layout.getMeasureSpecSize(widthMeasureSpec);
        const height = Utils.layout.getMeasureSpecSize(heightMeasureSpec);
        this.setMeasuredDimension(width, height);
    }


    requestCameraPermission() {
        return new Promise<void>((resolve, reject) => {
            AVCaptureDevice.requestAccessForMediaTypeCompletionHandler(AVMediaTypeVideo, cameraPermissionStatus => {
                if (cameraPermissionStatus) {
                    resolve()
                } else {
                    reject();
                }
            });
        });
    }


    hasCameraPermission(): boolean {
        return AVCaptureDevice.authorizationStatusForMediaType(AVMediaTypeVideo) === AVAuthorizationStatus.Authorized
    }
}
