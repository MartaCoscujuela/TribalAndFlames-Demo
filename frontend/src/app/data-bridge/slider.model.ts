import { AppRoutingModule } from '../app-routing.module';

export interface SliderData {
  ref: string;
  esp: SliderImgData[];
  eng: SliderImgData[];
}

export interface SliderImgData {
  img: string | Blob;
  order: number;
  updated: boolean;
  file: Blob;
}
