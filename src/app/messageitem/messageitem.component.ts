import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-messageitem',
  templateUrl: './messageitem.component.html',
  styleUrls: ['./messageitem.component.scss']
})
export class MessageitemComponent implements OnInit {

  @Input() messages:any;
  constructor() { }

  ngOnInit() {
  }

}
