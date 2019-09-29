import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progressbar',
  template: `
  <div class="progress-bar">
    <span class="bar">
      <span class="progress"></span>
    </span>
  </div>
  `,
  styleUrls: ['./progressbar.component.scss']
})
export class ProgressbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
