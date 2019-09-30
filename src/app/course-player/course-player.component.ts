import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { GetCourseDetailService } from '../services/user/get-course-detail.service';
import { GetCourseService } from '../services/courses/get-course.service';

@Component({
  selector: 'app-course-player',
  templateUrl: './course-player.component.html',
  styleUrls: ['./course-player.component.scss']
})
export class CoursePlayerComponent implements OnInit {

  courseReq : any;
  courseCurr : any;
  public courseBody ;
  constructor(private router: Router,private courseSelected : GetCourseDetailService,private courseExpanded : GetCourseService) {}

  ngOnInit() {
    this.courseBody = {
      description : false,
      content : false
    } ;
    this.courseSelected.currentCourse.subscribe(course => this.courseReq = course);
    this.courseExpanded.get().subscribe(res => {
      this.courseCurr = res.filter(obj => {
        return obj['title'] === this.courseReq.title
      })[0];
    });
    if(!this.courseCurr || Object.keys(this.courseCurr).length == 0){
      this.router.navigate(['userprofile']);
    }
    console.log(this.courseCurr);
    
  }

  onCourseBodyClick(type){
    if(type === 'description'){
      if(this.courseBody.description === true){
        this.courseBody.description = false;
      }
      else{
        this.courseBody.description = true;
      }
      if(this.courseBody.content === true){
        this.courseBody.content = false;
      }
    }
    else if(type === 'content'){
      if(this.courseBody.content === true){
        this.courseBody.content = false;
      }
      else{
        this.courseBody.content = true;
      }
      if(this.courseBody.description === true){
        this.courseBody.description = false;
      }
    }
  }

}
