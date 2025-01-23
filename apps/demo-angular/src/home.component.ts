import { Component } from '@angular/core';
import { RouterExtensions } from '@nativescript/angular';

@Component({
  selector: 'demo-home',
  templateUrl: 'home.component.html',
})
export class HomeComponent {
  demos = [
    {
      name: 'mlkit-barcode-scanning',
    },
    {
      name: 'mlkit-core',
    },
    {
      name: 'mlkit-custom-object-detection',
    },
    {
      name: 'mlkit-digital-ink-recognition',
    },
    {
      name: 'mlkit-face-detection',
    },
    {
      name: 'mlkit-image-labeling',
    },
    {
      name: 'mlkit-object-detection',
    },
    {
      name: 'mlkit-pose-detection',
    },
    {
      name: 'mlkit-selfie-segmentation',
    },
    {
      name: 'mlkit-text-recognition',
    },
  ];
}
