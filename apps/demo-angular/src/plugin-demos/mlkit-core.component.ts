import { Component, NgZone } from '@angular/core';
import { DemoSharedMlkitCore } from '@demo/shared';
import { Dialogs, ImageSource } from '@nativescript/core';
import { DetectionEvent, DetectionType, detectWithStillImage, MLKitView } from '@nativescript/mlkit-core';

@Component({
  selector: 'demo-mlkit-core',
  templateUrl: 'mlkit-core.component.html',
})
export class MlkitCoreComponent {

  camera: MLKitView;
  detectorType = DetectionType.All;
  isPaused = true;
  torchOn = true;
  demoShared: DemoSharedMlkitCore;

  constructor(private _ngZone: NgZone) { }

  ngOnInit() {
    this.demoShared = new DemoSharedMlkitCore();
  }
  onLoaded(args) {
    this.camera = args.object;
  }

  onDetection(event: DetectionEvent) {
    console.log('onDetection', event.data, event.type);
  }

  toggleCamera(args) {
    this.camera.toggleCamera();
  }

  requestPermission(args) {
    this.camera.requestCameraPermission();
  }

  changeType(args) {
    Dialogs.action('Change Detector Type', 'Cancel', [
      'all',
      'barcode',
      'digitalInk (unsupport atm)',
      'face',
      'image',
      'object',
      'pose',
      'text',
      'none'
    ]).then(value => {
      if (value === 'Cancel') { return }
      if (value.indexOf('digitalInk') > -1) {
        Dialogs.alert('digitalInk is currently unsupported');
        this.detectorType = DetectionType.None;
      } else {
        this.detectorType = value as any;
      }
    })
  }

  togglePause(args) {
    this.camera.pause = !this.camera.pause;
    this.isPaused = this.camera.pause;
  }

  toggleTorch(args) {
    this.camera.torchOn = !this.camera.torchOn;
    this.torchOn = this.camera.torchOn;
  }

  async processStill(args) {
    try {
      const src = await ImageSource.fromUrl('https://www.jqueryscript.net/images/jQuery-Plugin-To-Generate-International-Article-Number-Barcode-EAN13.jpg');
      const result = await detectWithStillImage(src, {
        detectorType: DetectionType.Barcode
      });
      console.log('processStill', result.barcode[0]);
    } catch (e) {
      console.log(e);
    }
  }

}