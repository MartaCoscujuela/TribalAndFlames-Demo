import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-statements',
  templateUrl: './statements.component.html',
  styleUrls: ['./statements.component.css'],
})
export class StatementsComponent implements OnInit {
  statements = [];

  slideConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    dots: false,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
  };

  constructor() {}

  ngOnInit(): void {
    this.statements.push(`<span class="accent">TORCHES UP! </span> AND LET'S BURN!`);
    this.statements.push(`<span class="accent">TORCHES UP! </span> AND LET\'S BURN!`);
  }
}
