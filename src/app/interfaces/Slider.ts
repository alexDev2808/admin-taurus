export interface Slider {
    slides: SliderItem[],
    sheets: []
}

export interface SliderItem  {
    id: string;
    name: string;
    item: string;
    ext: string;
    duration: number;
    frame: boolean;
}