import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-about',
  templateUrl: './admin-about.component.html',
  styleUrls: ['./admin-about.component.css']
})
export class AdminAboutComponent {

  section = 'about';
  images  = ['img1', 'img2', 'img-home-mosaic-1'];

}
