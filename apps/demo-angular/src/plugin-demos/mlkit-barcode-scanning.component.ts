import { Component, NgZone } from '@angular/core';
import { DemoSharedMlkitBarcodeScanning } from '@demo/shared';
import { } from '@nativescript/mlkit-barcode-scanning';

@Component({
	selector: 'demo-mlkit-barcode-scanning',
	templateUrl: 'mlkit-barcode-scanning.component.html',
})
export class MlkitBarcodeScanningComponent {
  
  demoShared: DemoSharedMlkitBarcodeScanning;
  
	constructor(private _ngZone: NgZone) {}

  ngOnInit() {
    this.demoShared = new DemoSharedMlkitBarcodeScanning();
  }

}