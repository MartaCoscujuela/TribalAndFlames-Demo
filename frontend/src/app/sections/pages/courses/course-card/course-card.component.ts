import { Component, Input, OnInit } from '@angular/core'
import { Router } from '@angular/router'

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit {
  @Input() courseId: string
  @Input() course
  constructor(private router: Router) {}

  ngOnInit(): void {}

  onClick(event) {
    this.router.navigate(['/cursos', this.courseId])
  }
}
