import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-menu',
  templateUrl: './admin-menu.component.html',
  styleUrls: ['./admin-menu.component.css'],
})
export class AdminMenuComponent {
  areSubsectionsOpen: boolean;
  areSubusersOpen: boolean;
  areSubcoursesOpen: boolean;

  openSubsections(): void {
    this.areSubusersOpen = false;
    this.areSubcoursesOpen = false;
    this.areSubsectionsOpen = !this.areSubsectionsOpen;
  }

  openSubusers(): void {
    this.areSubsectionsOpen = false;
    this.areSubcoursesOpen = false;
    this.areSubusersOpen = !this.areSubusersOpen;
  }

  openSubcourses(): void {
    this.areSubusersOpen = false;
    this.areSubcoursesOpen = !this.areSubcoursesOpen;
  }
}
