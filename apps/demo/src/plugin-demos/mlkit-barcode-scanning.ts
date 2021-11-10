import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedMlkitBarcodeScanning } from '@demo/shared';
import { } from '@nativescript/mlkit-barcode-scanning';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedMlkitBarcodeScanning {
	
}
