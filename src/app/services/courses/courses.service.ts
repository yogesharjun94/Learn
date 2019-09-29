import { Injectable } from '@angular/core';
import { of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  courses: Array<object> = [
    { title: 'Photoshop: effects', imageurl: '../../assets/img/photoshop.jpg', author: 'Tony Hammor',progress:'50%' },
    { title: 'Intro to Architecture', imageurl: '../../assets/img/architecture.jpg', author: 'Elisa Mittano',progress:'70%' },
    { title: 'Classic Literature', imageurl: '../../assets/img/classicenglish.jpg', author: 'Hemmingway' ,progress:'10%'},
    { title: 'Quantum Mechanics', imageurl: '../../assets/img/quantummech.jpg', author: 'Richard Feynman' ,progress:'40%'}
  ];

  constructor() { }

  get() {
    return of(this.courses);
  }
}
