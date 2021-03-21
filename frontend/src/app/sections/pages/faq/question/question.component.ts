import { Component, Input, OnInit } from '@angular/core'

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  @Input() question

  open = false
  constructor() {}

  ngOnInit(): void {}

  onClick(e) {
    console.log('click')
    this.open = !this.open
  }
}
