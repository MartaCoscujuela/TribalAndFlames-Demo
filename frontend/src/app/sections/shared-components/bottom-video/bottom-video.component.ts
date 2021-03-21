import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-bottom-video',
  templateUrl: './bottom-video.component.html',
  styleUrls: ['./bottom-video.component.css'],
})
export class BottomVideoComponent implements OnInit {
  @Input() title: string;
  @Input() subtitle: string;
  @Input() videoId: number;
  @Input() background: string;

  backgroundImage;
  constructor() {}

  ngOnInit(): void {
    this.backgroundImage = 'url("' + this.background + '")';
  }
}
