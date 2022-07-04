import { NgModule } from '@angular/core';
import { registerElement } from '@nativescript/angular';

import { MLKitViewDirective } from './mlkit-view-directive';
export * from './mlkit-view-directive';

@NgModule({
    declarations: [MLKitViewDirective],
    exports: [MLKitViewDirective],
})

// @ts-ignore
export class MLKitModule { }

registerElement('MLKitView', () => require('@nativescript/mlkit-core').MLKitView);