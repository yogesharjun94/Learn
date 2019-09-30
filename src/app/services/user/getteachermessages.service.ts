import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetteachermessagesService {
  messages:Array<object> = [
    {name:"Jordan",dpurl:"../../assets/img/batman.jpg",isonline:true,lastmessage:"Hello Jordan.I haven't find the new course on my profile.Could you help m with this issue.",lasttimestamp:"17:16"},
    {name:"Jordan",dpurl:"../../assets/img/batman.jpg",isonline:false,lastmessage:"Hello Jordan.I haven't find the new course on my profile.Could you help m with this issue.",lasttimestamp:"17:16"},
    {name:"Jordan",dpurl:"../../assets/img/batman.jpg",isonline:true,lastmessage:"Hello Jordan.I haven't find the new course on my profile.Could you help m with this issue.",lasttimestamp:"17:16"},
    {name:"Jordan",dpurl:"../../assets/img/batman.jpg",isonline:false,lastmessage:"Hello Jordan.I haven't find the new course on my profile.Could you help m with this issue.",lasttimestamp:"17:16"},
    {name:"Jordan",dpurl:"../../assets/img/batman.jpg",isonline:true,lastmessage:"Hello Jordan.I haven't find the new course on my profile.Could you help m with this issue.",lasttimestamp:"17:16"}
  ];
  constructor() { }

  get() {
    return of(this.messages);
  }
}
