import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'

@Component({
  selector: 'app-action-btn',
  templateUrl: './action-btn.component.html',
  styleUrls: ['./action-btn.component.css']
})
export class ActionBtnComponent implements OnInit {
  @Input() text: string
  @Input() justifyStyle: string
  @Input() disable = false
  @Output() clicked: EventEmitter<null> = new EventEmitter()

  constructor() {}

  ngOnInit(): void {}

  onClick() {
    this.clicked.emit()
  }
}
