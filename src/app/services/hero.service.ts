import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Hero } from '../models/hero';
import { MessageService } from './message.service';


@Injectable()
export class HeroService {

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) { }

  //URL to heroes web API (Actually it´s not a real web api, it´s a in-memory web API)
  private heroesServiceUrl = 'api/heroes';

  getHero(id: number): Observable<Hero> {
    this.log(`Hero with id ${id} was fetched.`)
    let hero = this.http.get<Hero>(`${this.heroesServiceUrl}/${id}`);
    return hero;
  }

  getHeroes(): Observable<Hero[]> {
    var me = this;

    me.log('Heroes fetched.');
    let heroesFromApi = me.http.get<Hero[]>(me.heroesServiceUrl);
    return heroesFromApi;
  }


  //Private methods
  private log(message: string): void {
    this.messageService.add('HeroService: ' + message );
  }

}
