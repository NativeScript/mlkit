import { Component, NgZone } from '@angular/core';
import { DemoSharedMlkitFaceDetection } from '@demo/shared';

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