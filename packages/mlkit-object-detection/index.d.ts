export interface ObjectLabeling {
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


export interface ObjectResult {
    trackingId?: number
    bounds: Bounds
    labels: ObjectLabeling[]
}