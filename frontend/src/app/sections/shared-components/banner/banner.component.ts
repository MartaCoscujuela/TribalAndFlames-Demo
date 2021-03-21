import { Component, Input, OnInit } from '@angular/core'
import { DataService } from 'src/app/data-bridge/data.service'
import { environment } from 'src/environments/environment'

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  @Input() name: string
  image = 'url("/assets/img/01_about/banner.png")'
  imgUrl = environment.IMAGES_URL

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getImg(this.name).subscribe(
      (response) => {
        console.log(this.imgUrl + '/' + response.esp)
        this.image = 'url(' + this.imgUrl + '/' + response.esp + ')'
        //  this.ref = this.imgUrl + '/' + response.esp;
      },
      (error) => {
        console.log(error)
      }
    )
  }
}
