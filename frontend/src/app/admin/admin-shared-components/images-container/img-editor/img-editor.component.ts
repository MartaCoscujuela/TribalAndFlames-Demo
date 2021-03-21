import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { FormControl, FormGroup, Validator, Validators } from '@angular/forms';
import { DataService } from 'src/app/data-bridge/data.service';
import { ImgData } from 'src/app/data-bridge/img.model';
import { environment } from 'src/environments/environment';
import { mimeType } from '../../mime-type.validator';
import { StatusTypes } from '../../statusTypes'
@Component({
  selector: 'app-img-editor',
  templateUrl: './img-editor.component.html',
  styleUrls: ['./img-editor.component.css'],
})
export class ImgEditorComponent implements OnInit {
  @Input() name;

  @HostBinding('class') class = 'col-lg-4 col-md-6 p-2 mt-3';
  langs: string[] = ['esp', 'eng'];
  currentLang = 'esp';
  imgData: ImgData;
  statusLoading = StatusTypes.loading;
  status = StatusTypes.none;
  imgUrl = environment.IMAGES_URL;

  form: FormGroup;
  imagePreviews = [
    {
      lang: 'esp',
      preview: '',
    },
    {
      lang: 'eng',
      preview: '',
    },
  ];

  currentPreview: string;
  constructor(public dataService: DataService) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      esp: new FormControl(null, {
        validators: [Validators.required],
        asyncValidators: [mimeType],
      }),
      eng: new FormControl(null, {
        validators: [Validators.required],
        asyncValidators: [mimeType],
      }),
    });
    this.getImg();
  }

  getImg() {
    this.dataService.getImg(this.name).subscribe(
      (result) => {
        this.imgData = result;
        this.setImg();
      },
      (error) => {
        console.log(error);
        status = StatusTypes.loadingError
      }
    );
  }

  setImg() {
    this.form.patchValue({ esp: this.imgData.esp });
    this.form.patchValue({ eng: this.imgData.eng });

    this.imagePreviews = [
      {
        lang: 'esp',
        preview: this.imgUrl + '/' + this.imgData.esp,
      },
      {
        lang: 'eng',
        preview: this.imgUrl + '/' + this.imgData.eng,
      },
    ];
    this.getLangPreview();
  }
  oppositeLang() {
    return this.currentLang === 'esp' ? 'eng' : 'esp';
  }

  changeLang() {
    this.currentLang = this.oppositeLang();
    this.getLangPreview();
  }

  getLangPreview() {
    const currentLangPreview = this.imagePreviews.find((imgpv) => imgpv.lang === this.currentLang);
    this.currentPreview = currentLangPreview.preview;
  }

  onImagePicked(event: Event) {
    this.status = StatusTypes.loading;
    const file = (event.target as HTMLInputElement).files[0];
    const field = this.currentLang;
    this.form.patchValue({ [field]: file });
    const reader = new FileReader();
    const formImg = this.form.get(field)

    reader.onload = () => {
      formImg.updateValueAndValidity();
      const subscription = formImg.statusChanges.subscribe((response) => {
        if (response === 'VALID') {
          const preview = this.imagePreviews.find((imgpv) => imgpv.lang === this.currentLang);
          preview.preview = reader.result as string;
          this.currentPreview = preview.preview;
        } else if (response === 'INVALID') {
          this.status = StatusTypes.postingError
          subscription.unsubscribe()
        }
        const target = event.target as HTMLInputElement
        target.value = ''
      })
    }
    reader.readAsDataURL(file);
  }

  onSubmit() {
    const espValue = this.form.value.esp;
    //   if (!this.form.controls['eng'].value){
    this.form.patchValue({ eng: espValue });
    // }

    if (this.form.invalid) {
      this.status = StatusTypes.postingError;

      return;
    }

    this.dataService.postImg(this.name, this.form.value.esp, this.form.value.eng).subscribe(
      (response) => {
        console.log(response);
        this.imgData = response;
        this.setImg();
        this.status = StatusTypes.success;
      },
      (error) => {
        console.log(error);
        this.status = StatusTypes.postingError;
      }
    );
  }
}
