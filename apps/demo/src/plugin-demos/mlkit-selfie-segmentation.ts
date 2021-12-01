import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedMlkitSelfieSegmentation } from '@demo/shared';
import { } from '@nativescript/mlkit-selfie-segmentation';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedMlkitSelfieSegmentation {
	
}
