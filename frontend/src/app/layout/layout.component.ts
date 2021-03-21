import { Component, OnInit, HostListener } from '@angular/core'
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router'

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  // vars to control header anim
  maxHeaderHeight = 450
  headerHeight = this.maxHeaderHeight
  breakpointHeaderShrink = 300
  linearTransition = 1
  solidMenuBackground = false

  posOpenTitle = 318
  posClosedTitle = 280

  posOpenLogo = 50
  posClosedLogo = 300

  posOpenIcons = 70
  posClosedIcons = 30

  alwaysClosed = true

  mainPos = this.headerHeight

  constructor(private router: Router) {}

  @HostListener('window:scroll')
  onWindowScroll() {
    this.shrinkHeader()
  }

  @HostListener('window:resize')
  onWindowResize() {
    this.resizeHeader()
    this.shrinkHeader()
  }

  ngOnInit(): void {
    this.getUrl()
    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        this.getUrl()
      }
    })
  }

  getUrl() {
    if (!this.router.url || this.router.url === '/') {
      this.alwaysClosed = false
    } else {
      this.alwaysClosed = true
    }

    this.resizeHeader()
    this.shrinkHeader()
  }

  resizeHeader() {
    const width = window.innerWidth

    if (width >= 1200) {
      this.maxHeaderHeight = 450
      this.breakpointHeaderShrink = 300
      this.posOpenTitle = 318
      this.posClosedTitle = 280
      this.posOpenLogo = 50
      this.posClosedLogo = 300
      this.posOpenIcons = 70
      this.posClosedIcons = 30
    } else if (width >= 992) {
      this.maxHeaderHeight = 300
      this.breakpointHeaderShrink = 200
      this.posOpenTitle = 200
      this.posClosedTitle = 180
      this.posOpenLogo = 20
      this.posClosedLogo = 300
      this.posOpenIcons = 30
      this.posClosedIcons = 7
    } else {
      this.maxHeaderHeight = 250
      this.breakpointHeaderShrink = 170
      this.posOpenTitle = 175
      this.posClosedTitle = 162
      this.posOpenLogo = 20
      this.posClosedLogo = 300

      this.posOpenIcons = 35
      this.posClosedIcons = 26
    }
  }

  shrinkHeader() {
    const offset = window.pageYOffset

    if (this.alwaysClosed || offset > this.breakpointHeaderShrink) {
      this.headerHeight = this.maxHeaderHeight - this.breakpointHeaderShrink
      this.linearTransition = 0
      this.solidMenuBackground = true
      if (this.alwaysClosed) {
        this.mainPos = this.headerHeight + 50
      } else {
        this.mainPos = this.headerHeight
      }
    } else {
      this.headerHeight = this.maxHeaderHeight - offset
      this.mainPos = this.headerHeight

      this.linearTransition = 1 - offset / this.breakpointHeaderShrink
      this.solidMenuBackground = false
    }
  }
}
