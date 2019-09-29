import { Component, OnInit , Input  } from '@angular/core';

@Component({
  selector: 'app-progressbar',
  template: `
  <div class="progress-bar">
    <span class="bar">
      <span class="progress" [style.width]=progressLevel></span>
    </span>
    <span>{{progressLevel}}</span>
  </div>
  `,
  styleUrls: ['./progressbar.component.scss']
})
export class ProgressbarComponent implements OnInit {

  @Input() progressLevel: number;

  constructor() { }

  ngOnInit() {
  }

}
