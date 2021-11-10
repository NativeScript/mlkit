import { Component, NgZone } from '@angular/core';
import { DemoSharedMlkitFaceDetection } from '@demo/shared';
import { } from '@nativescript/mlkit-face-detection';

@Component({
	selector: 'demo-mlkit-face-detection',
	templateUrl: 'mlkit-face-detection.component.html',
})
export class MlkitFaceDetectionComponent {
  
  demoShared: DemoSharedMlkitFaceDetection;
  
	constructor(private _ngZone: NgZone) {}

  ngOnInit() {
    this.demoShared = new DemoSharedMlkitFaceDetection();
  }

}