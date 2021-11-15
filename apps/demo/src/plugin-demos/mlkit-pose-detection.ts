import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedMlkitPoseDetection } from '@demo/shared';
import { } from '@nativescript/mlkit-pose-detection';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedMlkitPoseDetection {
	
}
