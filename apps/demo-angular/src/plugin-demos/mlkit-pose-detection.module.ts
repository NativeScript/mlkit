import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { MlkitPoseDetectionComponent } from './mlkit-pose-detection.component';

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: MlkitPoseDetectionComponent }])],
  declarations: [MlkitPoseDetectionComponent],
  schemas: [ NO_ERRORS_SCHEMA]
})
export class MlkitPoseDetectionModule {}
