import { Component, Input, OnInit } from '@angular/core'

@Component({
  selector: 'app-cta',
  templateUrl: './cta.component.html',
  styleUrls: ['./cta.component.css']
})
export class CtaComponent implements OnInit {
  @Input() home = true
  constructor() {}

  ngOnInit(): void {}
}
