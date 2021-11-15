import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedMlkitCore } from '@demo/shared';
import { MLKitView } from '@nativescript/mlkit-core';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedMlkitCore {
	camera: MLKitView;

	onLoaded(args){
		this.camera = args.object;
	}

	onDetection(data) {
		console.log('onDetection', data);
	}

	toggleCamera(){
		this.camera.toggleCamera();
	}
}
