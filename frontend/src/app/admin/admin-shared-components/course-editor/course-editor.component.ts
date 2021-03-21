import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { title } from 'process'
import { DataService } from 'src/app/data-bridge/data.service'
import { LessonData } from 'src/app/data-bridge/lesson.model'
import { environment } from 'src/environments/environment'
import { mimeType } from '../mime-type.validator'

@Component({
  selector: 'app-course-editor',
  templateUrl: './course-editor.component.html',
  styleUrls: ['./course-editor.component.css']
})
export class CourseEditorComponent implements OnInit {
  form: FormGroup
  preview: string
  videoId = '603ed295b8c38f8e6c2bdb45'
  status: string
  imgUrl = environment.IMAGES_URL
  imageError = false
  lesson: LessonData

  constructor(private dataService: DataService) {}
  ngOnInit(): void {
    this.imageError = false
    const reg = '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?'

    this.form = new FormGroup({
      title: new FormControl(null, {
        validators: [Validators.required]
      }),
      description: new FormControl(null, {
        validators: [Validators.required]
      }),
      url: new FormControl(null, {
        validators: [Validators.pattern(reg)]
      }),
      price: new FormControl(null),
      image: new FormControl(null, {
        validators: [Validators.required],
        asyncValidators: [mimeType]
      })
    })
    this.getLesson()
  }

  getLesson() {
    this.dataService.getLesson(this.videoId).subscribe((lesson) => {
      this.lesson = lesson
      this.form.patchValue({ title: this.lesson.nameEsp })
      this.form.patchValue({ description: this.lesson.descriptionEsp })
      this.form.patchValue({ url: this.lesson.url })
      this.form.patchValue({ price: this.lesson.price })
      this.form.patchValue({ image: this.lesson.imageEsp })
      this.preview = this.imgUrl + '/' + this.lesson.imageEsp
      console.log(this.preview)
    })
  }

  onImagePicked(event: Event) {
    const formImg = this.form.get('image')
    this.imageError = false
    const oldValue = formImg.value
    const file = (event.target as HTMLInputElement).files[0]
    const reader = new FileReader()
    this.form.patchValue({ image: file })
    this.imageError = false
    reader.onload = () => {
      formImg.updateValueAndValidity()
      const subscription = formImg.statusChanges.subscribe((response) => {
        if (response === 'VALID') {
          this.status = ''
          //       const file = (event.target as HTMLInputElement).files[0];
          this.preview = reader.result as string
          subscription.unsubscribe()
        } else if (response === 'INVALID') {
          this.imageError = true
          this.form.patchValue({ image: oldValue })
          subscription.unsubscribe()
        }
      })
    }
    reader.readAsDataURL(file)
  }

  onSubmit() {
    const form = this.form

    if (form.invalid) {
      this.status = 'postingErr'
      if (form.controls.image.errors) {
        this.imageError = true
      }
      return
    }

    this.lesson = {
      _id: '',
      nameEsp: form.controls.title.value,
      nameEng: form.controls.title.value,

      descriptionEsp: form.controls.description.value,
      descriptionEng: form.controls.description.value,

      price: form.controls.price.value,

      imageEng: form.controls.image.value,
      imageEsp: form.controls.image.value,
      imageUpdated: true,

      url: form.controls.url.value
    }

    this.dataService.postLesson(this.lesson).subscribe(
      (response) => {
        console.log(response)
        this.status = 'success'
      },
      (error) => {
        console.log(error)
        this.status = 'postingErr'
      }
    )
  }
}
