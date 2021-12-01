import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { MlkitSelfieSegmentationComponent } from './mlkit-selfie-segmentation.component';

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: MlkitSelfieSegmentationComponent }])],
  declarations: [MlkitSelfieSegmentationComponent],
  schemas: [ NO_ERRORS_SCHEMA]
})
export class MlkitSelfieSegmentationModule {}
