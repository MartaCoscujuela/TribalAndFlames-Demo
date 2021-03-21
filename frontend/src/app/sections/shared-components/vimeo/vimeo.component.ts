import { Component, Input, AfterViewInit, OnInit } from '@angular/core'
import Player from '@vimeo/player'

@Component({
  selector: 'app-vimeo',
  templateUrl: './vimeo.component.html',
  styleUrls: ['./vimeo.component.css']
})
export class VimeoComponent implements OnInit, AfterViewInit {
  @Input() videoId: number
  @Input() key = 0
  @Input() width = 400
  player: Player
  videoPlaying = false

  clickedPlay = false

  options = {
    id: 0,
    width: this.width,
    loop: false,
    controls: false,
    responsive: true,
    autoplay: false,
    preload: true
  }

  videoDivId = 'videoId'

  ngOnInit(): void {
    this.options.id = this.videoId
    this.videoDivId = 'video' + this.key
    console.log(this.videoDivId)
  }

  ngAfterViewInit() {
    this.player = new Player(this.videoDivId, this.options)
    this.player.on('ended', () => {
      this.videoPlaying = false
    })
    this.player.on('play', () => {
      if (!this.clickedPlay) {
        this.player.pause()
      } else {
        this.videoPlaying = true
      }
    })

    this.player.on('pause', () => {
      this.videoPlaying = false
    })
  }

  getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min
  }

  onClick(): void {
    this.player
      .getPaused()
      .then((paused) => {
        if (paused) {
          this.clickedPlay = true
          this.player.play()
        } else {
          this.player.pause()
        }
      })
      .catch((error) => {
        console.log(error)
      })
  }
}
