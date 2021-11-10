import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedMlkitDigitalInkRecognition } from '@demo/shared';
import { } from '@nativescript/mlkit-digital-ink-recognition';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedMlkitDigitalInkRecognition {
	
}
