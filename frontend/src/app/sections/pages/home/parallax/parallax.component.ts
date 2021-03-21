import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-parallax',
  templateUrl: './parallax.component.html',
  styleUrls: ['./parallax.component.css'],
})
export class ParallaxComponent implements OnInit {
  @ViewChild('parallax', { static: true }) parallax: ElementRef;

  offsetY1;
  offsetY2;
  offsetY3;
  top;
  monitorPos;
  height;

  constructor() {}
  @HostListener('window:scroll')
  onWindowScroll() {
    this.getOffsetY();
  }

  @HostListener('window:resize')
  onWindowResize() {
    this.getOffsetY();
  }

  ngOnInit(): void {
    this.getOffsetY();
  }

  getOffsetY() {
    this.height = window.innerHeight;
    const width = window.innerWidth;
    const rect = this.parallax.nativeElement.getBoundingClientRect();
    this.top = rect.top;

    let maxEdge = 220;
    let minEdge = 220;

    if (width >= 1920) {
      maxEdge = 300;
      minEdge = 500;
    } else if (width >= 600) {
      maxEdge = 220;
      minEdge = 400;
    } else {
      maxEdge = 70;
      minEdge = 150;
    }
    this.offsetY1 = this.mapValues(-maxEdge, minEdge, 0);
    this.offsetY2 = this.mapValues(-maxEdge, minEdge, this.height / 5);
    this.offsetY3 = this.mapValues(-maxEdge, minEdge, this.height / 2.5);

    // new_value = (old_value - old_bottom) / (old_top - old_bottom) * (new_top - new_bottom) + new_bottom
  }

  mapValues(max, min, offset) {
    return ((this.top - offset - this.height) / -this.height) * (max - min) + min;
  }
  /*
     if (width >= 900){
      this.offsetY = window.innerHeight/2 - (this.parallax.nativeElement.getBoundingClientRect().y);
     } else {
      this.offsetY = window.pageYOffset;
     }

    if(this.offsetY > 900){
      this.onView = true
    }
    else{
      this.onView = false
    }*/
}
