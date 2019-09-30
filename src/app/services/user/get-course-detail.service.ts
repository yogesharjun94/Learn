import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetCourseDetailService {

  private courseSelected = new BehaviorSubject([]);
  currentCourse= this.courseSelected.asObservable();

  constructor() { }

  changeCourse(course: any) {
    this.courseSelected.next(course);
  }
}
