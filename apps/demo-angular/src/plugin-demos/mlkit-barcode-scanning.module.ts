import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { MlkitBarcodeScanningComponent } from './mlkit-barcode-scanning.component';

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: MlkitBarcodeScanningComponent }])],
  declarations: [MlkitBarcodeScanningComponent],
  schemas: [ NO_ERRORS_SCHEMA]
})
export class MlkitBarcodeScanningModule {}
