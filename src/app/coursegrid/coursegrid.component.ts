import { Component, OnInit ,Input} from '@angular/core';
import {Router} from '@angular/router';
import { GetCourseDetailService } from '../services/user/get-course-detail.service';

@Component({
  selector: 'app-coursegrid',
  templateUrl: './coursegrid.component.html',
  styleUrls: ['./coursegrid.component.scss']
})
export class CoursegridComponent implements OnInit {

  @Input() courses:any;
  constructor(private router: Router,private courseSelected : GetCourseDetailService) { }

  ngOnInit() {
  }

  courseRedirect(course){
    this.courseSelected.changeCourse(course);
    this.router.navigate(['courseplayer']);
  }
}
