import { NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/hero-list/heroes.component';
import { HeroDetailComponent } from './heroes/hero-detail/hero-detail.component';

import { HeroService } from './services/hero.service';


@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent
  ],

  imports: [
    BrowserModule,
    FormsModule
  ],

  providers: [ 
    HeroService 
  ],

  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
