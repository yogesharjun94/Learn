import { Injectable } from '@angular/core';
import { of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  courses: Array<object> = [
    { title: 'Photoshop: effects', imageurl: '../../assets/img/photoshop.jpg', author: 'Tony Hammor' },
    { title: 'Intro to Architecture', imageurl: '../../assets/img/architecture.jpg', author: 'Elisa Mittano' },
    { title: 'Classic Literature', imageurl: '../../assets/img/classicenglish.jpg', author: 'Hemmingway' },
    { title: 'Quantum Mechanics', imageurl: '../../assets/img/quantummech.jpg', author: 'Richard Feynman' }
  ];

  constructor() { }

  get() {
    return of(this.courses);
  }
}
