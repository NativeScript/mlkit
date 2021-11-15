import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { MlkitImageLabelingComponent } from './mlkit-image-labeling.component';

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: MlkitImageLabelingComponent }])],
  declarations: [MlkitImageLabelingComponent],
  schemas: [ NO_ERRORS_SCHEMA]
})
export class MlkitImageLabelingModule {}
