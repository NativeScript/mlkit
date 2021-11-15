export interface Point {
    x: number;
    y: number;
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


export interface TextElement {
    text?: string
    bounds: Bounds
}

export interface TextLine {
    text?: string
    bounds: Bounds
    elements: TextElement[]
    points?: Point[]
}


export interface TextResult {
    text?: string
    bounds: Bounds
    lines: TextLine[]
    points: Point[]
}
