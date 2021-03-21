import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Router } from '@angular/router'

import { Observable, Subject } from 'rxjs'
import { environment } from 'src/environments/environment'
import { TextData } from './text.model'
import { ImgData } from './img.model'
import { ListData } from './list.model'
import { SliderData } from './slider.model'
import { LessonData } from './lesson.model'

const BACKEND_URL = environment.BACKEND_URL

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private lang = 'esp'
  private langListener = new Subject<string>()

  constructor(private http: HttpClient, private router: Router) {}

  changeLang(): void {
    if (this.lang === 'esp') {
      this.lang = 'eng'
    } else {
      this.lang = 'esp'
    }
    return this.langListener.next(this.lang)
  }

  getLangListener(): Subject<string> {
    return this.langListener
  }
  postText(
    name: string,
    esp: string,
    eng: string
  ): Observable<{ message: string; text: TextData }> {
    const textData: TextData = { name, esp, eng }
    return this.http.post<{ message: string; text: TextData }>(
      BACKEND_URL + '/site/text',
      textData
    )
  }

  getText(name: string): Observable<TextData> {
    return this.http.get<{
      _id: string
      name: string
      esp: string
      eng: string
    }>(BACKEND_URL + '/site/text/' + name)
  }

  postImg(
    name: string,
    esp: File | string,
    eng: File | string
  ): Observable<ImgData> {
    let imgData: ImgData | FormData
    if (typeof esp === 'object' || typeof eng === 'object') {
      imgData = new FormData()
      imgData.append('ref', name)
      console.log(esp)

      if (typeof esp === 'object') {
        console.log(esp)
        imgData.append('esp', esp, name + '_esp')
      } else {
        imgData.append('esp', esp)
      }
      if (typeof eng === 'object') {
        imgData.append('eng', eng, name + '_eng')
      } else {
        imgData.append('eng', eng)
      }
    } else {
      imgData = {
        ref: name,
        esp: esp as string,
        eng: eng as string
      }
    }
    return this.http.post<ImgData>(BACKEND_URL + '/site/img', imgData)
  }

  getImg(name: string): Observable<ImgData> {
    return this.http.get<ImgData>(BACKEND_URL + '/site/img/' + name)
  }

  postSlider(slider: SliderData): Observable<SliderData> {
    const formData = new FormData()
    formData.append('ref', slider.ref)
    slider.esp.forEach((img) => {
      console.log(typeof img)
      if (img.updated) {
        console.log(img.file)
        formData.append('image', img.file as Blob, img.order.toString())
      } else {
        formData.append(
          'image',
          JSON.stringify({ img: img.img, order: img.order })
        )
      }
    })
    return this.http.post<SliderData>(BACKEND_URL + '/site/slider', formData)
  }

  getSlider(name: string): Observable<SliderData> {
    return this.http.get<SliderData>(BACKEND_URL + '/site/slider/' + name)
  }

  postSentences(
    listData: ListData
  ): Observable<{ message: string; text: TextData }> {
    return this.http.post<{ message: string; text: TextData }>(
      BACKEND_URL + '/site/list',
      listData
    )
  }

  getSentences() {
    // COMPLETE
  }

  postLesson(lessonData: LessonData) {
    const formData = new FormData()
    // eslint-disable-next-line no-underscore-dangle
    if (lessonData._id) {
      // eslint-disable-next-line no-underscore-dangle
      formData.append('id', lessonData._id)
    }

    if (lessonData.imageUpdated) {
      formData.append(
        'esp',
        lessonData.imageEsp as Blob,
        lessonData.imageEsp as string
      )
      formData.append(
        'eng',
        lessonData.imageEsp as Blob,
        lessonData.imageEng as string
      )
    }

    formData.append('name_esp', lessonData.nameEsp)
    formData.append('name_eng', lessonData.nameEng)
    formData.append('description_esp', lessonData.descriptionEsp)
    formData.append('description_eng', lessonData.descriptionEng)
    formData.append('price', lessonData.price)

    return this.http.post<SliderData>(BACKEND_URL + '/courses/lesson', formData)
  }

  getLesson(id: string) {
    console.log(id)
    return this.http.get<LessonData>(BACKEND_URL + '/courses/lesson/' + id)
  }
}
