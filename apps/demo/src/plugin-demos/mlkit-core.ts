import { Observable, EventData, Page, Dialogs } from '@nativescript/core';
import { DemoSharedMlkitCore } from '@demo/shared';
import { DetectionType, MLKitView } from '@nativescript/mlkit-core';
import { BarcodeResult } from '@nativescript/mlkit-barcode-scanning';
import { FaceResult } from '@nativescript/mlkit-face-detection';
import { ImageLabelingResult } from '@nativescript/mlkit-image-labeling';
import { ObjectResult } from '@nativescript/mlkit-object-detection';
import { PoseResult } from '@nativescript/mlkit-pose-detection';
import { TextResult } from '@nativescript/mlkit-text-recognition';
export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedMlkitCore {
	camera: MLKitView;
	detectorType = "all";

	onLoaded(args) {
		this.camera = args.object;
	}

	onDetection(data, type: DetectionType) {
		console.log('onDetection', data, type);
	}

	toggleCamera() {
		this.camera.toggleCamera();
	}

	requestPermission() {
		this.camera.requestCameraPermission();
	}

	changeType(args) {
		Dialogs.action('Change Detector Type', 'Cancel', [
			'all',
			'barcode',
			'digitalInk (unsupport atm)',
			'face',
			'image',
			'object',
			'pose',
			'text',
			'none'
		]).then(value => {
			if (value === 'Cancel') { return }
			if (value.indexOf('digitalInk') > -1) {
				Dialogs.alert('digitalInk is currently unsupported')
				this.set('detectorType', 'none');
			} else {
				this.set('detectorType', value);
			}
		})
	}
}

