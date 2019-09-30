import { Component, OnInit } from '@angular/core';
import { GetusermessagesService } from '../services/user/getusermessages.service';
import { GetteachermessagesService } from '../services/user/getteachermessages.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {

  viewMode = 'teacherMessages';
  userMessages: Array<object>;
  teacherMessages : Array<object>;
  constructor(private userMessagesService : GetusermessagesService,private teacherMessageService : GetteachermessagesService) { }

  ngOnInit() {
    this.userMessagesService.get().subscribe(res =>{
      this.userMessages = res;
    })
    this.teacherMessageService.get().subscribe(res =>{
      this.teacherMessages = res;
    })
  }

}
