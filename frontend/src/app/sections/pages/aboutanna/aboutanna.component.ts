import { Component, OnInit } from '@angular/core'
import { Colors } from '../../enums/enumColors'

@Component({
  selector: 'app-aboutanna',
  templateUrl: './aboutanna.component.html',
  styleUrls: ['./aboutanna.component.css']
})
export class AboutannaComponent implements OnInit {
  videoId = 482704655
  videosTop = [
    '../../../../assets/videos/anna0.mp4',
    '../../../../assets/videos/anna1.mp4',
    '../../../../assets/videos/anna2.mp4'
  ]
  titleColor = Colors.red
  constructor() {}
  ngOnInit(): void {}
}
