import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { MlkitCustomObjectDetectionComponent } from './mlkit-custom-object-detection.component';

@NgModule({
  imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: MlkitCustomObjectDetectionComponent }])],
  declarations: [MlkitCustomObjectDetectionComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class MlkitCustomObjectDetectionModule {}
