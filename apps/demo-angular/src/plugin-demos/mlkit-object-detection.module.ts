import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { MlkitObjectDetectionComponent } from './mlkit-object-detection.component';

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: MlkitObjectDetectionComponent }])],
  declarations: [MlkitObjectDetectionComponent],
  schemas: [ NO_ERRORS_SCHEMA]
})
export class MlkitObjectDetectionModule {}
