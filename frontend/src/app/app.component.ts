import { Component, OnInit, HostListener } from '@angular/core';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  title = 'tribal-and-flames';


  ngOnInit(): void {
    /*const customObservable = new Observable( observer => {

      let count = 0;
      setInterval(() => {
        observer.next(count);
        count++
      }, 1000);

    });*/

  /*  customObservable.subscribe(data => {
    })
*/
  }
}
