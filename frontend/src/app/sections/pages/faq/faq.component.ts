import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {
  questions = [
    {
      title: `Suspendisse mollis non tortor et finibus. Nullam iaculis purus vitae interdum rutrum. Orci varius natoque penatibus et magnis dis parturient montes,`,
      text: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam quis turpis tristique, dictum diam tincidunt, condimentum libero. Aliquam rutrum, orci vel rhoncus mattis, ante ligula imperdiet metus, non cursus erat turpis vitae neque. Aliquam a augue eu turpis interdum suscipit. Donec eu mollis turpis. Mauris eros ante, efficitur sed tellus vitae, finibus feugiat odio. Integer hendrerit dignissim magna, ac faucibus felis cursus quis. Nullam eget metus non leo ornare volutpat. Ut pharetra erat vitae magna varius dictum. Nunc nec nisi ut odio feugiat varius. Vivamus tempus, est eu finibus scelerisque, velit neque porta massa, et sagittis urna lacus at felis.</p>

      <p>Cras eget diam rutrum, convallis urna in, pretium eros. Mauris vulputate nibh eget suscipit tristique. In magna nisl, iaculis id sollicitudin eu, commodo luctus nisi. Aliquam viverra, odio eget semper porta, libero ex posuere tortor, sed mollis augue mi vel neque. Vivamus pretium nunc nulla, lacinia tempor nunc finibus at. Donec at fermentum ex, sed laoreet libero. Nam bibendum urna vitae lectus suscipit, id gravida enim malesuada.</p>`
    },
    {
      title: `Nulla facilisi. Maecenas rutrum scelerisque neque, sit amet volutpat erat lacinia a. Nulla magna massa, sagittis sagittis neque a, placerat sodales nulla. Sed gravida feugiat enim id luctus.`,
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam quis turpis tristique, dictum diam tincidunt, condimentum libero. Aliquam rutrum, orci vel rhoncus mattis, ante ligula imperdiet metus, non cursus erat turpis vitae neque. Aliquam a augue eu turpis interdum suscipit. Donec eu mollis turpis. Mauris eros ante, efficitur sed tellus vitae, finibus feugiat odio. Integer hendrerit dignissim magna, ac faucibus felis cursus quis. Nullam eget metus non leo ornare volutpat. Ut pharetra erat vitae magna varius dictum. Nunc nec nisi ut odio feugiat varius. Vivamus tempus, est eu finibus scelerisque, velit neque porta massa, et sagittis urna lacus at felis.`
    },
    {
      title: `Proin accumsan in leo ut placerat. Sed eu magna ut arcu hendrerit pulvinar eu et lacus. Donec eget cursus metus. Quisque varius, nisl vitae facilisis blandit, ligula ligula varius neque, vel eleifend nunc magna eget nibh`,
      text: `Cras eget diam rutrum, convallis urna in, pretium eros. Mauris vulputate nibh eget suscipit tristique. In magna nisl, iaculis id sollicitudin eu, commodo luctus nisi. Aliquam viverra, odio eget semper porta, libero ex posuere tortor, sed mollis augue mi vel neque. Vivamus pretium nunc nulla, lacinia tempor nunc finibus at. Donec at fermentum ex, sed laoreet libero. Nam bibendum urna vitae lectus suscipit, id gravida enim malesuada.`
    }
  ]
  constructor() {}

  ngOnInit(): void {}
}
