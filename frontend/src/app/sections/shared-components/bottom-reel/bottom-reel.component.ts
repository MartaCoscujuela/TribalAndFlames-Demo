import {
  ChangeDetectorRef,
  ChangeDetectionStrategy,
  Component,
  HostListener,
  Input,
  OnInit
} from '@angular/core'

@Component({
  selector: 'app-bottom-reel',
  templateUrl: './bottom-reel.component.html',
  styleUrls: ['./bottom-reel.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BottomReelComponent implements OnInit {
  @Input() title: string
  @Input() subtitle: string
  @Input() videoId: number
  @Input() background: string

  backgroundImage
  slides = [
    { img: '/assets/img/00_home/galeria/00.jpg' },
    { img: '/assets/img/00_home/galeria/01.jpg' },
    { img: '/assets/img/00_home/galeria/02.jpg' },
    { img: '/assets/img/00_home/galeria/03.jpg' }
  ]

  slideConfigBig = {
    slidesToShow: 2,
    slidesToScroll: 2,
    adaptiveHeight: true,
    dots: false,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true
  }

  slideConfigSmall = {
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    dots: false,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true
  }

  bigCarousel = true

  constructor(private ref: ChangeDetectorRef) {}

  @HostListener('window:resize')
  onWindowResize() {
    this.setCarouselSize()
  }

  setCarouselSize() {
    if (window.innerWidth > 1200) {
      this.bigCarousel = true
    } else {
      this.bigCarousel = false
    }
  }

  ngOnInit(): void {
    console.log('init')
    this.setCarouselSize()
  }
}
