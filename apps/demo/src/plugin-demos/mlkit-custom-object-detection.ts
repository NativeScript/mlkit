import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedMlkitCustomObjectDetection } from '@demo/shared';
import {} from '@nativescript/mlkit-custom-object-detection';

export function navigatingTo(args: EventData) {
  const page = <Page>args.object;
  page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedMlkitCustomObjectDetection {}
