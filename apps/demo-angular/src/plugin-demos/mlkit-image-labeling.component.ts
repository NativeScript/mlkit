import { Component, NgZone } from '@angular/core';
import { DemoSharedMlkitImageLabeling } from '@demo/shared';
import { } from '@nativescript/mlkit-image-labeling';

@Component({
	selector: 'demo-mlkit-image-labeling',
	templateUrl: 'mlkit-image-labeling.component.html',
})
export class MlkitImageLabelingComponent {
  
  demoShared: DemoSharedMlkitImageLabeling;
  
	constructor(private _ngZone: NgZone) {}

  ngOnInit() {
    this.demoShared = new DemoSharedMlkitImageLabeling();
  }

}