import { Component, OnInit } from '@angular/core'
import { Colors } from 'src/app/sections/enums/enumColors'

@Component({
  selector: 'app-haztelos',
  templateUrl: './haztelos.component.html',
  styleUrls: ['./haztelos.component.css']
})
export class HaztelosComponent implements OnInit {
  backgroundColor = Colors.purple
  textColor = Colors.white
  titleColor = Colors.white
  titleAlign = 'left'
  constructor() {}

  ngOnInit(): void {}
}
