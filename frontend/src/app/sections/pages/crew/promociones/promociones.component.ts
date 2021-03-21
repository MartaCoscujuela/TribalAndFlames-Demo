import { Component, OnInit } from '@angular/core'
import { Colors } from 'src/app/sections/enums/enumColors'

@Component({
  selector: 'app-promociones',
  templateUrl: './promociones.component.html',
  styleUrls: ['./promociones.component.css']
})
export class PromocionesComponent implements OnInit {
  colorTitle = Colors.white
  colorText = Colors.white

  constructor() {}

  ngOnInit(): void {}

  onClick(event) {}
}
