declare class MLKCustomObjectDetectorOptions extends MLKCommonObjectDetectorOptions {
  static alloc(): MLKCustomObjectDetectorOptions; // inherited from NSObject

  static new(): MLKCustomObjectDetectorOptions; // inherited from NSObject

  classificationConfidenceThreshold: number;

  maxPerObjectLabelCount: number;

  constructor(o: { localModel: MLKLocalModel });

  constructor(o: { remoteModel: MLKCustomRemoteModel });

  initWithLocalModel(localModel: MLKLocalModel): this;

  initWithRemoteModel(remoteModel: MLKCustomRemoteModel): this;
}
