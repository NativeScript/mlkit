import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from '@nativescript/angular';

import { HomeComponent } from './home.component';

const routes: Routes = [
   { path: '', redirectTo: '/home', pathMatch: 'full' },
   { path: 'home', component: HomeComponent },
	{ path: 'mlkit-barcode-scanning', loadChildren: () => import('./plugin-demos/mlkit-barcode-scanning.module').then(m => m.MlkitBarcodeScanningModule) },
	{ path: 'mlkit-core', loadChildren: () => import('./plugin-demos/mlkit-core.module').then(m => m.MlkitCoreModule) },
	{ path: 'mlkit-digital-ink-recognition', loadChildren: () => import('./plugin-demos/mlkit-digital-ink-recognition.module').then(m => m.MlkitDigitalInkRecognitionModule) },
	{ path: 'mlkit-face-detection', loadChildren: () => import('./plugin-demos/mlkit-face-detection.module').then(m => m.MlkitFaceDetectionModule) },
	{ path: 'mlkit-image-labeling', loadChildren: () => import('./plugin-demos/mlkit-image-labeling.module').then(m => m.MlkitImageLabelingModule) },
	{ path: 'mlkit-object-detection', loadChildren: () => import('./plugin-demos/mlkit-object-detection.module').then(m => m.MlkitObjectDetectionModule) },
	{ path: 'mlkit-pose-detection', loadChildren: () => import('./plugin-demos/mlkit-pose-detection.module').then(m => m.MlkitPoseDetectionModule) },
	{ path: 'mlkit-selfie-segmentation', loadChildren: () => import('./plugin-demos/mlkit-selfie-segmentation.module').then(m => m.MlkitSelfieSegmentationModule) },
	{ path: 'mlkit-text-recognition', loadChildren: () => import('./plugin-demos/mlkit-text-recognition.module').then(m => m.MlkitTextRecognitionModule) }
];

@NgModule({
	imports: [NativeScriptRouterModule.forRoot(routes)],
	exports: [NativeScriptRouterModule],
})
export class AppRoutingModule {}
