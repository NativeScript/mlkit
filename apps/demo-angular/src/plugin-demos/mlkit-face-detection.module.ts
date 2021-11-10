import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { MlkitFaceDetectionComponent } from './mlkit-face-detection.component';

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: MlkitFaceDetectionComponent }])],
  declarations: [MlkitFaceDetectionComponent],
  schemas: [ NO_ERRORS_SCHEMA]
})
export class MlkitFaceDetectionModule {}
