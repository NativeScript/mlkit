import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedMlkitImageLabeling } from '@demo/shared';
import { } from '@nativescript/mlkit-image-labeling';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedMlkitImageLabeling {
	
}
