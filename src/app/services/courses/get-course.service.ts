import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetCourseService {

  allCoursesExpanded: Array<object> = [
    {
      title: 'Photoshop: effects', imageurl: '../../assets/img/photoshop.png', author: 'Tony Hammor', progress: '50%', hours: '18', reviewcount: '47', stars: '4', description: 'Everything about adding effects in photoshop.', 
      content: ['Approaches to designing abstract patterns', 'Using a range of tools to create pattern elements', 'Using stroke to customize pattern elements', 'Coloring and recoloring techniques'],
      teachers: ["Rosalia Mallery",
        'Shona Devenport',
        'Luna Bonnet',
        'Judson Slaten',
        'Odette Cool',
        'Alta Golson',
        'Jenny Behan',
        'Laverna Kelliher',
        'Johnathon Cawthon',
        'Ashley Sica',
        'Gaye Nault'],
      users: [
        'Ayesha Fralick',
        'Angelique Koepp',
        'Maximo Westrich',
        'Britney Pearson',
        'Mikel Ruby',
        'Marsha Redner',
        'Coy Beazley',
        'Roger Winget',
        'Cheryle Babst'
      ]
    },
    {
      title: 'Intro to Architecture', imageurl: '../../assets/img/architecture.jpg', author: 'Elisa Mittano', progress: '70%', hours: '10', reviewcount: '33', stars: '5', description: 'Everything about adding effects in photoshop.',
      content: ['Approaches to designing abstract patterns', 'Using a range of tools to create pattern elements', 'Using stroke to customize pattern elements', 'Coloring and recoloring techniques'],
      teachers: ["Rosalia Mallery",
        'Shona Devenport',
        'Luna Bonnet',
        'Judson Slaten',
        'Odette Cool',
        'Alta Golson',
        'Jenny Behan',
        'Laverna Kelliher',
        'Johnathon Cawthon',
        'Ashley Sica',
        'Gaye Nault'],
      users: [
        'Ayesha Fralick',
        'Angelique Koepp',
        'Maximo Westrich',
        'Britney Pearson',
        'Mikel Ruby',
        'Marsha Redner',
        'Coy Beazley',
        'Roger Winget',
        'Cheryle Babst'
      ]
    },
    {
      title: 'Classic Literature', imageurl: '../../assets/img/classicenglish.png', author: 'Hemmingway', progress: '10%', hours: '8', reviewcount: '65', stars: '2', description: 'Everything about adding effects in photoshop.',
      content: ['Approaches to designing abstract patterns', 'Using a range of tools to create pattern elements', 'Using stroke to customize pattern elements', 'Coloring and recoloring techniques'],
      teachers: ["Rosalia Mallery",
        'Shona Devenport',
        'Luna Bonnet',
        'Judson Slaten',
        'Odette Cool',
        'Alta Golson',
        'Jenny Behan',
        'Laverna Kelliher',
        'Johnathon Cawthon',
        'Ashley Sica',
        'Gaye Nault'],
      users: [
        'Ayesha Fralick',
        'Angelique Koepp',
        'Maximo Westrich',
        'Britney Pearson',
        'Mikel Ruby',
        'Marsha Redner',
        'Coy Beazley',
        'Roger Winget',
        'Cheryle Babst'
      ]
    },
    {
      title: 'Quantum Mechanics', imageurl: '../../assets/img/quantummech.jpg', author: 'Richard Feynman', progress: '40%', hours: '27', reviewcount: '100', stars: '3', description: 'Everything about adding effects in photoshop.',
      content: ['Approaches to designing abstract patterns', 'Using a range of tools to create pattern elements', 'Using stroke to customize pattern elements', 'Coloring and recoloring techniques'],
      teachers: ["Rosalia Mallery",
        'Shona Devenport',
        'Luna Bonnet',
        'Judson Slaten',
        'Odette Cool',
        'Alta Golson',
        'Jenny Behan',
        'Laverna Kelliher',
        'Johnathon Cawthon',
        'Ashley Sica',
        'Gaye Nault'],
      users: [
        'Ayesha Fralick',
        'Angelique Koepp',
        'Maximo Westrich',
        'Britney Pearson',
        'Mikel Ruby',
        'Marsha Redner',
        'Coy Beazley',
        'Roger Winget',
        'Cheryle Babst'
      ]
    }
  ];
  constructor() { }

  get() {
    return of(this.allCoursesExpanded);
  }
}
