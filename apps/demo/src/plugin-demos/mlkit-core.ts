import { Observable, EventData, Page, Dialogs, ImageSource, Frame, Image } from '@nativescript/core';
import { DemoSharedMlkitCore } from '@demo/shared';
import { DetectionType, MLKitView, DetectionEvent, detectWithStillImage } from '@nativescript/mlkit-core';
import { BarcodeResult } from '@nativescript/mlkit-barcode-scanning';
import { FaceResult } from '@nativescript/mlkit-face-detection';
import { ImageLabelingResult } from '@nativescript/mlkit-image-labeling';
import { ObjectResult } from '@nativescript/mlkit-object-detection';
import { PoseResult } from '@nativescript/mlkit-pose-detection';
import { TextResult } from '@nativescript/mlkit-text-recognition';
import { BoundingBoxSettings, TNSObjectDetectionResult } from '@nativescript/mlkit-core/common';

export function navigatingTo(args: EventData) {
  const page = <Page>args.object;
  page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedMlkitCore {
  camera: MLKitView;
  detectorType = DetectionType.Barcode;
  isPaused = false;
  torchOn = false;
  _bbox: { x: number; y: number; width: number; height: number };
  bboxSettings: BoundingBoxSettings = {
    drawBBoxes: true,
    drawEdgeMarks: true,
    drawLabels: true,
    bBoxLineColor: '#FF0000FF',
    bBoxLineWidth: 1,
    bBoxCornerness: 7,
    edgeMarkLengthFactor: 0.2,
    edgeMarkLineWidth: 5,
    showConfidence: true,
    labelTextColor: '#FFFFFFFF',
    labelBackgroundColor: '#00000090',
    labelCornerness: 5,
    labelAlignment: 'center',
    labelMappings: { laptop: 'Laptop' },
  };

  onLoaded(args) {
    this.camera = args.object;
    this.set('isPaused', this.camera.pause);
    this.set('torchOn', this.camera.torchOn);
  }

  onDetection(event: DetectionEvent) {
    console.log('onDetection', event.data, event.type);
    if (event.type === DetectionType.Barcode) {
      const first = event.data[0] as BarcodeResult;
      console.log('bounds', first.bounds);
    }
    if (event.type === DetectionType.CustomObject) {
      const first = event.data[0] as TNSObjectDetectionResult;
      if (first?.bounds) {
        this._bbox = first.bounds;
      }
    }
  }

  public drawBBox(args: EventData) {
    const page = Frame.topmost()?.currentPage;
    const imgView = page.getViewById('imageView') as Image;
    const mlkitview = page.getViewById('mlKitView') as MLKitView;
    imgView.visibility = 'visible';
    if (this._bbox && mlkitview.latestImage) {
      imgView.src = this.extractRectFromImageBuffer(mlkitview.latestImage, this._bbox);
    }
  }

  private extractRectFromImageBuffer(imageSource: ImageSource, rect: { x: number; y: number; width: number; height: number }): ImageSource | null {
    if (global.isIOS) {
      const uiImage = imageSource.ios; // Get the UIImage
      const buffer = uiImage.CIImage?.extent || uiImage.CGImage;
      if (!buffer) {
        console.error("UIImage doesn't have a valid buffer representation");
        return null;
      }
      const context = CIContext.context();
      const scale = uiImage.scale || 1;
      // CGImage origin is not at top right but bottom left, we therefore have to adopt y axis and bbox ref. point
      const y_inCGImageCoords = buffer.size.height - rect.y - rect.height;
      const scaledRect = CGRectMake(rect.x * scale, y_inCGImageCoords * scale, rect.width * scale, rect.height * scale);
      const croppedCGImage = context.createCGImageFromRect(uiImage.CIImage, scaledRect);

      if (!croppedCGImage) {
        console.error('Failed to crop CGImage from buffer');
        return null;
      }
      const croppedUIImage = UIImage.alloc().initWithCGImageScaleOrientation(croppedCGImage, scale, uiImage.imageOrientation);
      const croppedImageSource = new ImageSource();
      croppedImageSource.setNativeSource(croppedUIImage);
      return croppedImageSource;
    }
  }

  toggleCamera() {
    this.camera.toggleCamera();
  }

  toggleTorch() {
    this.camera.torchOn = !this.camera.torchOn;
    this.set('torchOn', this.camera.torchOn);
  }

  requestPermission() {
    this.camera.requestCameraPermission();
  }

  changeType(args) {
    (Frame.topmost()?.currentPage.getViewById('imageView') as Image).visibility = 'hidden';
    Dialogs.action('Change Detector Type', 'Cancel', ['all', 'barcode', 'digitalInk (unsupport atm)', 'face', 'image', 'object', 'customObject', 'pose', 'text', 'none']).then((value) => {
      if (value === 'Cancel') {
        return;
      }
      if (value.indexOf('digitalInk') > -1) {
        Dialogs.alert('digitalInk is currently unsupported');
        this.set('detectorType', 'none');
      } else {
        this.set('detectorType', value);
      }
    });
  }

  togglePause(args) {
    (Frame.topmost()?.currentPage.getViewById('imageView') as Image).visibility = 'hidden';
    this.camera.pause = !this.camera.pause;
    this.set('isPaused', this.camera.pause);
  }

  async processStill(args) {
    try {
      const src = await ImageSource.fromUrl('https://www.jqueryscript.net/images/jQuery-Plugin-To-Generate-International-Article-Number-Barcode-EAN13.jpg');

      const result = await detectWithStillImage(src, {
        detectorType: DetectionType.Barcode,
      });
      console.log('processStill', result.barcode[0]);
    } catch (e) {
      console.log(e);
    }
  }
}
