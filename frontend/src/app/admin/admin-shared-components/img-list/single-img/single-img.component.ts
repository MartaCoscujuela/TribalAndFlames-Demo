import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { faChevronUp, faChevronDown, faTimes } from '@fortawesome/free-solid-svg-icons';
import { SliderData, SliderImgData } from 'src/app/data-bridge/slider.model';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-single-img',
  templateUrl: './single-img.component.html',
  styleUrls: ['./single-img.component.css'],
})
export class SingleImgComponent {
  @Input() image: SliderImgData;
  @Input() maxOrder;

  @Output() deleteMe: EventEmitter<SliderImgData> = new EventEmitter<SliderImgData>();
  @Output() changeMe: EventEmitter<{ img: SliderImgData; step: number }> = new EventEmitter<{ img; step }>();

  iconUp = faChevronUp;
  iconDown = faChevronDown;
  iconTimes = faTimes;
  imgUrl = environment.IMAGES_URL;

  topItem: boolean;
  bottomItem: boolean;

  constructor() {}

  deleteItem() {
    this.deleteMe.emit(this.image);
  }

  isBottomItem() {
    return this.image.order === 0;
  }

  isTopItem() {
    return this.image.order === this.maxOrder;
  }

  get getBackground() {
    return this.image.updated ? this.image.img : this.imgUrl + '/' + this.image.img;
  }
  changeOrder(step) {
    const event = { img: this.image, step };
    this.changeMe.emit(event);
  }
}
