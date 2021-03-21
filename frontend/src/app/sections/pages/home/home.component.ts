import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { CanComponentDeactivate } from 'src/app/admin/candeactivate.guard';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements CanComponentDeactivate {
  // vars to control menu position
  contentBottomPos = 450;
  contentPos = this.contentBottomPos;
  breakpointMoveMenu = 300;

  constructor() { }

  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
    console.log('can')
    return confirm('Do you want to discard the changes');
  }
}
