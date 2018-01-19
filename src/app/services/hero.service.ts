import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Hero } from '../models/hero';
import { HEROES } from '../mockedData/mock-heroes';
import { MessageService } from './message.service';


@Injectable()
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHero(id: number): Observable<Hero> {
    this.messageService.add(`HeroService: hero with id ${id} was fetched.`)
    var hero = HEROES.find(hero => hero.id == id);
    return of(hero);
  }

  getHeroes(): Observable<Hero[]> {
    this.messageService.add('HeroService: Heroes fetched.');
    return of(HEROES);
  }

}
