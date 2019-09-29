import { Component, OnInit } from '@angular/core';
import { GetusermessagesService } from '../services/user/getusermessages.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {

  viewMode = 'teacherMessages';
  userMessages: Array<object>;
  constructor(private userMessagesService : GetusermessagesService) { }

  ngOnInit() {
    this.userMessagesService.get().subscribe(res =>{
      this.userMessages = res;
      console.log(res);
    })
  }

}
