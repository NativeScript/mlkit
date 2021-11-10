import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedMlkitTextRecognition } from '@demo/shared';
import { } from '@nativescript/mlkit-text-recognition';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedMlkitTextRecognition {
	
}
