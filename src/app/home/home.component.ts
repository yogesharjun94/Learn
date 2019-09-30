import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../services/courses/courses.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  courses : Array<object>;
  constructor(private coursesService : CoursesService) { }

  ngOnInit() {
    this.coursesService.get().subscribe(res => {
      this.courses = res;
    });
  }

}
