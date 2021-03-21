import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-ventajas',
  templateUrl: './ventajas.component.html',
  styleUrls: ['./ventajas.component.css']
})
export class VentajasComponent implements OnInit {
  ventajas = [
    {
      img: '/assets/img/discounts/0.jpg',
      title: `LU SOL SHOP
      Abanicos de fuego «Lotus»`,
      text:
        '<p>Craftmaker local especializado en malabares. Estos abanicos de agarre ruso son perfectos para empezar a estudiar con nosotras! Escríbeles y aprovecha el <strong>15% de descuento</strong>.</p>'
    },
    {
      img: '/assets/img/discounts/1.jpg',
      title: `NEOPOI.COM
      Promo code: «TRIBAL&FLAMES»`,
      text: `Flow arts technologies. Echa un vistazo a sus Polyfans. Abanicos de led de calidad, programables y con multitud de efectos. Usa el <strong>código TRIBAL&FLAMES</strong> o TRIBALANDFLAMES cuando vayas a comprarlos y tendrás un descuento!`
    },
    {
      img: '/assets/img/discounts/2.jpg',
      title: `MARYAURA TRIBAL PUNK
      Fundas personalizadas  `,
      text: `Artesana local que nos ayuda a personalizar nuestras fundas de abanico, super útiles a la hora de entrenar, entender el movimiento y el funcionamiento de los planos y agarres. Al ser alumna de T&F nos da un <strong>20% de descuento</strong>.`
    }
  ]
  constructor() {}

  ngOnInit(): void {}
}
