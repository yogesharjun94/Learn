import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetCourseService {

  allCoursesExpanded: Array<object> = [
    { title: 'Photoshop: effects', imageurl: '../../assets/img/photoshop.jpg', author: 'Tony Hammor',progress:'50%',hours:'18',reviewcount:'47',stars:'4',description:'Everything about adding effects in photoshop.',content:['qwe','qwe','qwe','qwe']},
    { title: 'Intro to Architecture', imageurl: '../../assets/img/architecture.jpg', author: 'Elisa Mittano',progress:'70%' ,hours:'10',reviewcount:'33',stars:'5',description:'Everything about adding effects in photoshop.',content:['qwe','qwe','qwe','qwe']},
    { title: 'Classic Literature', imageurl: '../../assets/img/classicenglish.jpg', author: 'Hemmingway' ,progress:'10%',hours:'8',reviewcount:'65',stars:'2',description:'Everything about adding effects in photoshop.',content:['qwe','qwe','qwe','qwe']},
    { title: 'Quantum Mechanics', imageurl: '../../assets/img/quantummech.jpg', author: 'Richard Feynman' ,progress:'40%',hours:'27',reviewcount:'100',stars:'3',description:'Everything about adding effects in photoshop.',content:['qwe','qwe','qwe','qwe']}
  ];
  constructor() { }

  get() {
    return of(this.allCoursesExpanded);
  }
}
