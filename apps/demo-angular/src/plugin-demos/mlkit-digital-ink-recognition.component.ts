import { Component, NgZone } from '@angular/core';
import { DemoSharedMlkitDigitalInkRecognition } from '@demo/shared';

@Component({
	selector: 'demo-mlkit-digital-ink-recognition',
	templateUrl: 'mlkit-digital-ink-recognition.component.html',
})
export class MlkitDigitalInkRecognitionComponent {
  
  demoShared: DemoSharedMlkitDigitalInkRecognition;
  
	constructor(private _ngZone: NgZone) {}

  ngOnInit() {
    this.demoShared = new DemoSharedMlkitDigitalInkRecognition();
  }

}