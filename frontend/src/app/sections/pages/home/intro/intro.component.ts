import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data-bridge/data.service';
import { TextData } from 'src/app/data-bridge/text.model';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css'],
})
export class IntroComponent {
  constructor(public dataService: DataService) {}

  onClick(event) {
    console.log('button');
  }
}
