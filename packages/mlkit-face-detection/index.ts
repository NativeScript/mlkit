export interface Origin {
    x: number;
    y: number;
}

export interface Size {
    width: number;
    height: number;
}

export interface Bounds {
    origin: Origin;
    size: Size;
}

export interface FaceResult {
    smilingProbability: number;
    leftEyeOpenProbability: number;
    rightEyeOpenProbability: number;
    trackingId: number;
    bounds: Bounds;
    headEulerAngleZ: number;
    headEulerAngleY: number;
    headEulerAngleX: number;
}