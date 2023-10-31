import { NgModule } from '@angular/core';
import { registerElement } from '@nativescript/angular';

import { MLKitViewDirective } from './mlkit-view-directive';
import { MLKitView } from '@nativescript/mlkit-core';
export * from './mlkit-view-directive';

@NgModule({
    declarations: [MLKitViewDirective],
    exports: [MLKitViewDirective],
})

// @ts-ignore
export class MLKitModule { }

registerElement('MLKitView', () => MLKitView);
