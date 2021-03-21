import { Component, Input, OnInit } from '@angular/core';
import { StatusTypes } from '../statusTypes'

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css'],
})
export class ErrorComponent implements OnInit {
  @Input() status;

  statusLoadingError = StatusTypes.loadingError
  statusPostingError = StatusTypes.postingError
  statusSuccess = StatusTypes.success
  constructor() {}

  ngOnInit(): void {}
}
