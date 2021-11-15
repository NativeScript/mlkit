import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { MlkitTextRecognitionComponent } from './mlkit-text-recognition.component';

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: MlkitTextRecognitionComponent }])],
  declarations: [MlkitTextRecognitionComponent],
  schemas: [ NO_ERRORS_SCHEMA]
})
export class MlkitTextRecognitionModule {}
