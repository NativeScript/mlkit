import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedMlkitObjectDetection } from '@demo/shared';
import { } from '@nativescript/mlkit-object-detection';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedMlkitObjectDetection {
	
}
