import { Component, Input, OnInit } from '@angular/core'

@Component({
  selector: 'app-ventaja',
  templateUrl: './ventaja.component.html',
  styleUrls: ['./ventaja.component.css']
})
export class VentajaComponent implements OnInit {
  @Input() ventaja
  constructor() {}

  ngOnInit(): void {}

  onClick(event) {}
}
