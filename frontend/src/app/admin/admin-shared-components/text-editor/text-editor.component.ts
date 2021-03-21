import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DataService } from 'src/app/data-bridge/data.service';
import { TextData } from '../../../data-bridge/text.model';
import { StatusTypes } from '../statusTypes'
@Component({
  selector: 'app-text-editor',
  templateUrl: './text-editor.component.html',
  styleUrls: ['./text-editor.component.css'],
})
export class TextEditorComponent implements OnInit, OnChanges {
  @Input() section;
  @Input() name;
  @Input() height = '350';

  textForm: FormGroup;
  langs: string[] = ['esp', 'eng'];
  currentLang = 'esp';
  textData: TextData;
  text: string;
  loadingStatus = StatusTypes.loading;
  status = StatusTypes.none;

  constructor(public dataService: DataService) {}

  ngOnInit(): void {
    this.getText();
    this.textForm = new FormGroup({
      esp: new FormControl(),
      eng: new FormControl(),
    });
  }

  ngOnChanges() {
    this.getText();
  }

  changeLang() {
    this.currentLang = this.oppositeLang();
  }

  oppositeLang() {
    if (this.currentLang === 'esp') {
      return 'eng';
    } else {
      return 'esp';
    }
  }

  getText() {
    this.status = StatusTypes.loading;
    /*   this.textData.esp = '';
    this.textData.eng = '';
    this.textForm.setValue(this.textData); */
    this.dataService.getText(this.name).subscribe(
      (text) => {
        this.textForm.patchValue({ esp: text.esp, eng: text.eng });
        this.textData = text;
        this.status = StatusTypes.none;
      },
      (error) => {
        this.status = StatusTypes.loadingError;
        this.textData.esp = '';
        this.textData.eng = '';
        this.textForm.patchValue(this.textData);
      }
    );
  }

  onSubmit() {
    if (this.textForm.invalid) {
      this.status = StatusTypes.postingError;
      return;
    }
    this.status = StatusTypes.loading;
    this.dataService.postText(this.name, this.textForm.value.esp, this.textForm.value.eng).subscribe(
      (text) => {
        this.textData = text.text;
        this.status = StatusTypes.success;
      },
      (error) => {
        console.log(error);
        this.status = StatusTypes.postingError;
      }
    );
  }
}
