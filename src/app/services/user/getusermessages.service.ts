import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetusermessagesService {
  messages:Array<object> = [
    {name:"Chris",dpurl:"../../assets/img/Chris.jpg",isonline:true,lastmessage:"Hello Jordan.I haven't find the new course on my profile.Could you help m with this issue.",lasttimestamp:"17:16"},
    {name:"Cillian",dpurl:"../../assets/img/Cillian.jpg",isonline:false,lastmessage:"Hello Jordan.I haven't find the new course on my profile.Could you help m with this issue.",lasttimestamp:"17:16"},
    {name:"Hugh",dpurl:"../../assets/img/Hugh.jpg",isonline:true,lastmessage:"Hello Jordan.I haven't find the new course on my profile.Could you help m with this issue.",lasttimestamp:"17:16"},
    {name:"Keanu",dpurl:"../../assets/img/Keanu.jpg",isonline:false,lastmessage:"Hello Jordan.I haven't find the new course on my profile.Could you help m with this issue.",lasttimestamp:"17:16"},
    {name:"Cera",dpurl:"../../assets/img/batman.jpg",isonline:true,lastmessage:"Hello Jordan.I haven't find the new course on my profile.Could you help m with this issue.",lasttimestamp:"17:16"}
  ];
  constructor() { }

  get() {
    return of(this.messages);
  }
}
