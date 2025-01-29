import { Component, NgZone } from '@angular/core';
import { DemoSharedMlkitCustomObjectDetection } from '@demo/shared';
import {} from '@nativescript/mlkit-custom-object-detection';

@Component({
  selector: 'demo-mlkit-custom-object-detection',
  templateUrl: 'mlkit-custom-object-detection.component.html',
})
export class MlkitCustomObjectDetectionComponent {
  demoShared: DemoSharedMlkitCustomObjectDetection;

  constructor(private _ngZone: NgZone) {}

  ngOnInit() {
    this.demoShared = new DemoSharedMlkitCustomObjectDetection();
  }
}
