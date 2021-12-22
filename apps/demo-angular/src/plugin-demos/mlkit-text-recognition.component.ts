import { Component, NgZone } from '@angular/core';
import { DemoSharedMlkitTextRecognition } from '@demo/shared';

@Component({
	selector: 'demo-mlkit-text-recognition',
	templateUrl: 'mlkit-text-recognition.component.html',
})
export class MlkitTextRecognitionComponent {
  
  demoShared: DemoSharedMlkitTextRecognition;
  
	constructor(private _ngZone: NgZone) {}

  ngOnInit() {
    this.demoShared = new DemoSharedMlkitTextRecognition();
  }

}