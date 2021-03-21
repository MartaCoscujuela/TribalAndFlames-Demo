import { Component, HostListener, OnInit } from '@angular/core'
import { Colors } from 'src/app/sections/enums/enumColors'

@Component({
  selector: 'app-showtime',
  templateUrl: './showtime.component.html',
  styleUrls: ['./showtime.component.css']
})
export class ShowtimeComponent implements OnInit {
  titleColor = Colors.white
  textColor = Colors.white
  backgroundColor = Colors.red
  titleAlign = 'right'
  constructor() {}

  @HostListener('window:resize')
  onWindowResize() {
    this.setTitleAlign()
  }

  ngOnInit(): void {
    this.setTitleAlign()
  }

  setTitleAlign() {
    if (window.innerWidth > 576) {
      this.titleAlign = 'right'
    } else {
      this.titleAlign = 'center'
    }
  }
}
