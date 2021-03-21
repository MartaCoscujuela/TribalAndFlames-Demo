import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-admin-annademas',
  templateUrl: './admin-annademas.component.html',
  styleUrls: ['./admin-annademas.component.css']
})
export class AdminAnnademasComponent implements OnInit {
  images = ['img-anna-intro-1', 'img-anna-intro-2', 'img-anna-intro-3']
  constructor() {}

  ngOnInit(): void {}
}
