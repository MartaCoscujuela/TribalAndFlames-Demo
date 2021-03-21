import { Component, HostListener, OnInit, ViewChild } from '@angular/core'
import { DataService } from 'src/app/data-bridge/data.service'
import { Colors } from 'src/app/sections/enums/enumColors'
import { environment } from 'src/environments/environment'
import { SlickCarouselComponent } from 'ngx-slick-carousel'

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  @ViewChild('slickModal') slickModal: SlickCarouselComponent

  colorTitle = Colors.white
  colorText = Colors.white
  name = 'quotes-imgs'
  slides = []
  imgs = []
  imgUrl = environment.IMAGES_URL
  screen = 'big'

  otherSlides = []
  slideConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    dots: false,
    autoplay: false,
    autoplaySpeed: 5000,
    arrows: true
  }

  constructor(private dataService: DataService) {}

  @HostListener('window:resize')
  onWindowResize() {
    this.arrangeQuotes()
  }

  ngOnInit(): void {
    this.getQuotes()
  }

  getQuotes() {
    this.dataService.getSlider(this.name).subscribe(
      (response) => {
        this.imgs = response.esp
        this.arrangeQuotes()
      },
      (error) => {
        console.log(error)
      }
    )
  }

  arrangeQuotes() {
    this.slides.length = 0

    let quotes = []
    this.slickModal.unslick()

    let numberPerSlide
    if (window.innerWidth < 576) {
      console.log('menos de 4')
      numberPerSlide = 4
      this.screen = 'small'
    } else if (window.innerWidth < 900) {
      console.log('menos de 9')

      numberPerSlide = 9
      this.screen = 'medium'
    } else {
      console.log('mas')

      numberPerSlide = 12
      this.screen = 'big'
    }

    this.imgs.forEach((img) => {
      quotes.push(img.img)
      if (quotes.length === numberPerSlide) {
        this.slides.push(quotes)
        quotes = []
      }
    })
    if (quotes.length > 0) {
      this.slides.push(quotes)
    }
    quotes = []

    this.slickModal.unslick()
  }
}
