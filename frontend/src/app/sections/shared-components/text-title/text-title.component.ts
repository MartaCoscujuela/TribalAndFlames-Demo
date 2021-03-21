import { Component, Input, OnInit } from '@angular/core'
import { title } from 'process'
import { DataService } from 'src/app/data-bridge/data.service'
import { TextData } from 'src/app/data-bridge/text.model'
import { Colors } from '../../enums/enumColors'
import { Fonts } from '../../enums/enumFonts'

@Component({
  selector: 'app-text-title',
  templateUrl: './text-title.component.html',
  styleUrls: ['./text-title.component.css']
})
export class TextTitleComponent implements OnInit {
  @Input() ref: string
  @Input() alignStyle: string
  @Input() textColor = Colors.red
  @Input() font = Fonts.bebas

  title: TextData = { name: '', esp: '', eng: '' }

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.getText()
  }

  getText() {
    console.log(title)
    this.dataService.getText(this.ref).subscribe((text) => {
      this.title = text
    })
  }
}
