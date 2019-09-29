import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../services/courses/courses.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  courses: Array<object>;

  constructor(private coursesService : CoursesService) { }

  ngOnInit() {
    this.coursesService.get().subscribe(res => {
      this.courses = res;
    });
  }

}
