import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  // vars to control menu position
  @Input() menuPos: number;
  @Input() solidBackground: boolean;

  isMenuCollapsed = true;

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe((val) => {
      this.isMenuCollapsed = true;
    });
  }

  onToggleHamburger() {
    this.isMenuCollapsed = !this.isMenuCollapsed;
  }
}
