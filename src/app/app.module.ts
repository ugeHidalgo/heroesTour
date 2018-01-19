import { NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './/app-routing.module';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/hero-list/heroes.component';
import { HeroDetailComponent } from './heroes/hero-detail/hero-detail.component';

import { HeroService } from './services/hero.service';
import { MessageService } from './services/message.service';
import { MessagesComponent } from './messages/messages.component';


@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent
  ],

  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],

  providers: [ 
    HeroService, 
    MessageService 
  ],

  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
