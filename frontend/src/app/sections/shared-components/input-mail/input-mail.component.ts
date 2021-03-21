import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-mail',
  templateUrl: './input-mail.component.html',
  styleUrls: ['./input-mail.component.css'],
})
export class InputMailComponent implements OnInit {
  mail: string;
  constructor() {}

  ngOnInit(): void {}
}
