import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedMlkitFaceDetection } from '@demo/shared';
import { } from '@nativescript/mlkit-face-detection';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedMlkitFaceDetection {
	
}
