import { Component, OnInit } from '@angular/core'
import { Colors } from '../../enums/enumColors'

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  videoId = 482704655

  courses = [
    {
      imgFlag: '/assets/img/00_home/courses/0.png',
      imgCard: '/assets/img/02_courses/card0.jpg',
      color: Colors.red,
      title: 'CURSO REGULAR INICIAL T&F®',
      description:
        '<p>¡Bienvenidx a la Tribu! 1r Curso completo (Nivel Inicial). La versión más académica para aprender en profundidad la teoría, la técnica y la creatividad del abanico ruso y del método T&F®.</p>',
      price: '45€/mes',
      extra: '(Packs de 4 clases de 1h)',
      bullets: `<li><span>Estudio en profundidad (40h): Teoría, práctica, lenguaje de combos y coreo.</span></li>
      <li><span>Protocolos de seguridad y gestión de performance.</span></li>
      <li><span>Seguimiento opcional (¡escríbeme!)</span></li>
      <li><span>Formar parte de la T&F Crew (accedes a Descuentos y todo lo que surja).</span></li>
      <li><span>Diploma final certificando el estudio completo del curso inicial.</span></li>`,
      cta: 'INSCRIBIRME',
      ready: true
    },
    {
      imgFlag: '/assets/img/00_home/courses/1.png',
      imgCard: '/assets/img/02_courses/card1.jpg',
      color: Colors.green,
      title: 'CURSO REGULAR INICIAL T&F®',
      description:
        '<p>2º Curso completo (Nivel Intermedio) con técnica más avanzada, nuevas reglas del Flow arts Ruso que nos hacen explotar la cabeza, nuevos combos de Tribal&Flames® y entrenamiento.</p>',
      price: 'PRECIO VARIABLE',
      extra: '',
      bullets: `<li><span>Workshops entre 30min-2 horas.</span></li>
      <li><span>Diferentes niveles.</span></li>
      <li><span>Temáticas concretas.</span></li>
      <li><span>Sesiones de CrazyCombos (1:30h). </span></li>
      <li><span>Clases nuevas a lo largo del año. 
      (Anunciadas por Instagram)</span></li>`,
      cta: 'VER CLASES',
      ready: true
    },
    {
      imgFlag: '/assets/img/00_home/courses/2.png',
      imgCard: '/assets/img/02_courses/card2.jpg',
      color: Colors.purple,
      title: 'CURSO REGULAR INICIAL T&F®',
      description:
        '<p>2º Curso completo (Nivel Intermedio) con técnica más avanzada, nuevas reglas del Flow arts Ruso que nos hacen explotar la cabeza, nuevos combos de Tribal&Flames® y entrenamiento</p>',
      price: '45€/Pack4 - 15€/Suelta',
      extra: '',
      bullets: `<li><span>Clases sueltas de entre 30min-1 hora.</span></li>
      <li><span>Nivel abierto.</span></li>
      <li><span>Seguimiento opcional (¡escríbeme!)</span></li>
      <li><span>Clases nuevas a lo largo del año. (Anunciadas por Instagram)</span></li>
      <li><strong>Curso inicial completo 40h (Nivel Inicial) en proceso.</strong> Mientras tanto puedes disfrutar de nuestras clases presenciales (¡Escríbeme!)</li>`,
      cta: 'VER CLASES',
      ready: true
    },
    {
      imgFlag: '/assets/img/00_home/courses/0.png',
      imgCard: '/assets/img/02_courses/card3.jpg',
      color: Colors.orange,
      title: 'CURSO REGULAR INICIAL T&F®',
      description:
        '<p>¡Bienvenidx a la Tribu! 1r Curso completo (Nivel Inicial). La versión más académica para aprender en profundidad la teoría, la técnica y la creatividad del abanico ruso y del método T&F®.</p>',
      price: '45€/mes',
      extra: '(Packs de 4 clases de 1h)',
      bullets: `<li><span>Mismos puntos que el «Curso inicial».</span></li>
      <li><span>Subimos de nivel y complejidad en TODO.</span></li>
      <li><span>Indispensable haber cursado el curso inicial o tener suficiente conocimiento teórico/práctico del abanico.</span></li>
      <li><span>Buenísimo entrenamiento para fire dancers que buscan fluidez.</span></li>
      <li><span>Diploma final certificando el estudio completo del curso intermedio.</span></li>`,
      cta: 'DISPONIBLE SETIEMBRE 2021',
      ready: false
    }
  ]
  constructor() {}

  ngOnInit(): void {
    console.log(this.courses)
  }

  onClick(e) {}
}
