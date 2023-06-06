export interface CustomObjectLabeling {
    text?: string
    confidence?: number
    index?: number
}


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


export interface CustomObjectResult {
    trackingId?: number
    bounds: Bounds
    labels: CustomObjectLabeling[]
}
