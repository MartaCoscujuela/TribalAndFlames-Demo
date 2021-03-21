import { Component, Input, OnInit } from '@angular/core'
import { DataService } from 'src/app/data-bridge/data.service'
import { TextData } from 'src/app/data-bridge/text.model'
import { Colors } from '../../enums/enumColors'

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css']
})
export class TextComponent implements OnInit {
  @Input() ref: string
  @Input() alignStyle: string
  @Input() twoColumns = false
  @Input() textColor = Colors.black
  textData: TextData = { name: '', esp: '', eng: '' }
  lang = 'esp'

  constructor(public dataService: DataService) {}

  ngOnInit(): void {
    this.getText()
  }

  getText() {
    this.dataService.getText(this.ref).subscribe((text) => {
      this.textData = text
    })
  }
}
