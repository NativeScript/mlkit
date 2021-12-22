import { Component, NgZone } from '@angular/core';
import { DemoSharedMlkitObjectDetection } from '@demo/shared';

@Component({
	selector: 'demo-mlkit-object-detection',
	templateUrl: 'mlkit-object-detection.component.html',
})
export class MlkitObjectDetectionComponent {
  
  demoShared: DemoSharedMlkitObjectDetection;
  
	constructor(private _ngZone: NgZone) {}

  ngOnInit() {
    this.demoShared = new DemoSharedMlkitObjectDetection();
  }

}