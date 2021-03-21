import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-admin-course',
  templateUrl: './admin-course.component.html',
  styleUrls: ['./admin-course.component.css'],
})
export class AdminCourseComponent implements OnInit {
  courseId: number;

  courses = ['inicial', 'intermedio', 'workshops', 'fussion'];

  ref: string;
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      console.log(params.id);
      this.courseId = params.id;
      this.ref = this.courses[this.courseId];
    });
  }
}
