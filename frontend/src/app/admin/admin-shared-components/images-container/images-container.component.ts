import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-images-container',
  templateUrl: './images-container.component.html',
  styleUrls: ['./images-container.component.css']
})
export class ImagesContainerComponent implements OnInit {


  @Input() images: string[];

  constructor() { }

  ngOnInit(): void {

  }

}
