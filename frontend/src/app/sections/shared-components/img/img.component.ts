import { Component, Input, OnInit } from '@angular/core'
import { DataService } from 'src/app/data-bridge/data.service'
import { environment } from 'src/environments/environment'

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.css']
})
export class ImgComponent implements OnInit {
  @Input() name: string
  imgUrl = environment.IMAGES_URL

  image = ''

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getImg(this.name).subscribe(
      (response) => {
        console.log(this.imgUrl + '/' + response.esp)
        this.image = this.imgUrl + '/' + response.esp
      },
      (error) => {
        console.log(error)
      }
    )
  }
}
