import { Component } from '@angular/core';

@Component({
	selector: 'demo-home',
	templateUrl: 'home.component.html',
})
export class HomeComponent {
	demos = [
	{
		name: 'mlkit-barcode-scanning'
	},
	{
		name: 'mlkit-core'
	},
	{
		name: 'mlkit-digital-ink-recognition'
	},
	{
		name: 'mlkit-face-detection'
	},
	{
		name: 'mlkit-image-labeling'
	},
	{
		name: 'mlkit-object-detection'
	},
	{
		name: 'mlkit-pose-detection'
	},
	{
		name: 'mlkit-text-recognition'
	}
];
}