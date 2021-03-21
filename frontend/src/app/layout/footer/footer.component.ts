import { Component, OnInit } from '@angular/core'
import {
  faFacebookSquare,
  faInstagram,
  faYoutube
} from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  fafacebook = faFacebookSquare
  fainsta = faInstagram
  famail = faEnvelope
  fayoutube = faYoutube
  constructor() {}
  ngOnInit(): void {}
}
