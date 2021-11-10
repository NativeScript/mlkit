
declare class MLKCustomRemoteModel extends MLKRemoteModel {

	static alloc(): MLKCustomRemoteModel; // inherited from NSObject

	static new(): MLKCustomRemoteModel; // inherited from NSObject

	constructor(o: { remoteModelSource: MLKRemoteModelSource; });

	initWithRemoteModelSource(remoteModelSource: MLKRemoteModelSource): this;
}

declare class MLKLocalModel extends NSObject {

	static alloc(): MLKLocalModel; // inherited from NSObject

	static new(): MLKLocalModel; // inherited from NSObject

	readonly manifestPath: string;

	readonly path: string;

	constructor(o: { manifestPath: string; });

	constructor(o: { path: string; });

	initWithManifestPath(manifestPath: string): this;

	initWithPath(path: string): this;
}

declare class MLKModelDownloadConditions extends NSObject implements NSCopying {

	static alloc(): MLKModelDownloadConditions; // inherited from NSObject

	static new(): MLKModelDownloadConditions; // inherited from NSObject

	readonly allowsBackgroundDownloading: boolean;

	readonly allowsCellularAccess: boolean;

	constructor(o: { allowsCellularAccess: boolean; allowsBackgroundDownloading: boolean; });

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	initWithAllowsCellularAccessAllowsBackgroundDownloading(allowsCellularAccess: boolean, allowsBackgroundDownloading: boolean): this;
}

declare var MLKModelDownloadDidFailNotification: string;

declare var MLKModelDownloadDidSucceedNotification: string;

declare var MLKModelDownloadUserInfoKeyError: string;

declare var MLKModelDownloadUserInfoKeyRemoteModel: string;

declare class MLKModelManager extends NSObject {

	static alloc(): MLKModelManager; // inherited from NSObject

	static modelManager(): MLKModelManager;

	static new(): MLKModelManager; // inherited from NSObject

	deleteDownloadedModelCompletion(remoteModel: MLKRemoteModel, completion: (p1: NSError) => void): void;

	downloadModelConditions(remoteModel: MLKRemoteModel, conditions: MLKModelDownloadConditions): NSProgress;

	isModelDownloaded(remoteModel: MLKRemoteModel): boolean;
}

declare class MLKRemoteModel extends NSObject {

	static alloc(): MLKRemoteModel; // inherited from NSObject

	static new(): MLKRemoteModel; // inherited from NSObject

	readonly name: string;
}

declare class MLKRemoteModelSource extends NSObject {

	static alloc(): MLKRemoteModelSource; // inherited from NSObject

	static new(): MLKRemoteModelSource; // inherited from NSObject
}
