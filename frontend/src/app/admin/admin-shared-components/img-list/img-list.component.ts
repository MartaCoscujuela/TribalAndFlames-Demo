import { Component, Input, OnInit } from '@angular/core'
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { DataService } from 'src/app/data-bridge/data.service'
import { SliderData } from 'src/app/data-bridge/slider.model'
import { mimeType } from '../mime-type.validator'
import { StatusTypes } from '../statusTypes'
@Component({
  selector: 'app-img-list',
  templateUrl: './img-list.component.html',
  styleUrls: ['./img-list.component.css']
})
export class ImgListComponent implements OnInit {
  @Input() name
  currentLang = 'esp'

  loadingStatus = StatusTypes.loading
  status = StatusTypes.loading
  form: FormGroup

  images: SliderData
  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    console.log(this.name)
    this.status = StatusTypes.loading;
    this.dataService.getSlider(this.name).subscribe(
      (response) => {
        this.images = response
        console.log(response)
        this.reorder()
        this.form = new FormGroup({
          img: new FormControl(null, {
            validators: [Validators.required],
            asyncValidators: [mimeType]
          })
        })
        this.status = StatusTypes.none
      },
      (error) => {
        console.log(error)
        this.status = StatusTypes.loadingError

      }
    )
  }

  reorder() {
    this.images.esp.sort((a, b) =>
      a.order > b.order ? 1 : b.order > a.order ? -1 : 0
    )
  }

  oppositeLang() {
    return this.currentLang === 'esp' ? 'eng' : 'esp'
  }

  changeLang() {
    this.currentLang = this.oppositeLang()
    // this.getLangPreview();
  }

  changeOrderItems(event) {
    this.status = StatusTypes.none
    const img = event.img.img
    const step = event.step
    const order = event.img.order
    const newImages = this.images.esp.map((image) => {
      if (image.img === img) {
        image.order = image.order + step
      } else if (image.order === order + step) {
        image.order = image.order - step
      }
      return image
    })
    this.images.esp = newImages
    this.reorder()
  }

  deleteItem(event) {
    this.status = StatusTypes.none
    const img = event.img

    const imagesItemRemoved = this.images.esp.filter(
      (image) => image.img !== img
    )

    const imagesReordered = imagesItemRemoved.map((image) => {
      if (image.order > event.order) {
        image.order--
      }
      return image
    })

    this.images.esp = imagesReordered
  }

  onImagePicked(event: Event) {
    this.status = StatusTypes.loading

    const newImg = { img: '', order: 0, updated: true, file: null }
    const file = (event.target as HTMLInputElement).files[0]

    newImg.order = 0
    newImg.updated = true

    const reader = new FileReader()
    this.form.patchValue({ img: file })

    const formImg = this.form.get('img')
    reader.onload = () => {
      formImg.updateValueAndValidity()
      const subscription = formImg.statusChanges.subscribe((response) => {
        console.log(response)
        if (response === 'VALID') {
          this.status = StatusTypes.none
          newImg.file = (event.target as HTMLInputElement).files[0]
          newImg.img = reader.result as string
          this.images.esp = this.images.esp.map((img) => {
            img.order++
            return img
          })
          this.images.esp.unshift(newImg)
          subscription.unsubscribe()
        } else if (response === 'INVALID') {
          this.status = StatusTypes.postingError
          subscription.unsubscribe()
        }
        const target = event.target as HTMLInputElement
        target.value = ''
      })
    }
    reader.readAsDataURL(file)
  }

  onSubmit() {
    this.dataService.postSlider(this.images).subscribe(
      (response) => {
        this.images = response
        this.reorder()
        this.status = StatusTypes.success
      },
      (err) => {
        console.log(err)
        this.status = StatusTypes.postingError
      }
    )
  }
}
