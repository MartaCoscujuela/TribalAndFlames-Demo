import { Component, Input, HostListener } from '@angular/core';
import { faFacebookSquare, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faUserCircle } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  @Input() headerHeight: number;
  @Input() linearTransition: number;

  @Input() posOpenTitle: number;
  @Input() posClosedTitle: number;

  @Input() posOpenLogo: number;
  @Input() posClosedLogo: number;

  @Input() posOpenIcons: number;
  @Input() posClosedIcons: number;
  // icons
  fafacebook = faFacebookSquare;
  fainsta = faInstagram;
  famail = faEnvelope;
  fayoutube = faYoutube;
  fauser = faUserCircle;
  windowWidth = 0;

  constructor() {}

  @HostListener('window:resize')
  onWindowResize() {
    this.windowWidth = window.innerWidth;
  }
}
