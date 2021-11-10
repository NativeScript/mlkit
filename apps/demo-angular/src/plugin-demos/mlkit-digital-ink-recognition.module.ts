import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { MlkitDigitalInkRecognitionComponent } from './mlkit-digital-ink-recognition.component';

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: MlkitDigitalInkRecognitionComponent }])],
  declarations: [MlkitDigitalInkRecognitionComponent],
  schemas: [ NO_ERRORS_SCHEMA]
})
export class MlkitDigitalInkRecognitionModule {}
