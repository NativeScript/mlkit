import { Component, NgZone } from '@angular/core';
import { DemoSharedMlkitPoseDetection } from '@demo/shared';

@Component({
	selector: 'demo-mlkit-pose-detection',
	templateUrl: 'mlkit-pose-detection.component.html',
})
export class MlkitPoseDetectionComponent {
  
  demoShared: DemoSharedMlkitPoseDetection;
  
	constructor(private _ngZone: NgZone) {}

  ngOnInit() {
    this.demoShared = new DemoSharedMlkitPoseDetection();
  }

}