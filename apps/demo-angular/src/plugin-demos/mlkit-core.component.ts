import { Component, NgZone } from '@angular/core';
import { DemoSharedMlkitCore } from '@demo/shared';
import { } from '@nativescript/mlkit-core';

@Component({
	selector: 'demo-mlkit-core',
	templateUrl: 'mlkit-core.component.html',
})
export class MlkitCoreComponent {
  
  demoShared: DemoSharedMlkitCore;
  
	constructor(private _ngZone: NgZone) {}

  ngOnInit() {
    this.demoShared = new DemoSharedMlkitCore();
  }

}