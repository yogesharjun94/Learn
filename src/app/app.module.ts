import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { CoursePlayerComponent } from './course-player/course-player.component';
import { MessagesComponent } from './messages/messages.component';
import { ProgressbarComponent } from './progressbar/progressbar.component';
import { CoursegridComponent } from './coursegrid/coursegrid.component';
import { MessageitemComponent } from './messageitem/messageitem.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserProfileComponent,
    CoursePlayerComponent,
    MessagesComponent,
    ProgressbarComponent,
    CoursegridComponent,
    MessageitemComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
