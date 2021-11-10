import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { MlkitCoreComponent } from './mlkit-core.component';

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: MlkitCoreComponent }])],
  declarations: [MlkitCoreComponent],
  schemas: [ NO_ERRORS_SCHEMA]
})
export class MlkitCoreModule {}
