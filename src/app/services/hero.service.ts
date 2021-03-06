import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import { Hero } from '../models/hero';
import { MessageService } from './message.service';


const httpOtions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};

@Injectable()
export class HeroService {

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) { }

  //URL to heroes web API (Actually it´s not a real web api, it´s a in-memory web API)
  private heroesServiceUrl = 'api/heroes';

  /**.*/
  getHero(id: number): Observable<Hero> {
    let me = this,
        getHeroByIdUrl = `${me.heroesServiceUrl}/${id}`,
        hero = me.http.get<Hero>(getHeroByIdUrl)
                      .pipe(
                        tap(_ => me.log(`Hero with id ${id} was fetched.`)),
                        catchError(me.handleError<Hero>(`getHero (id:${id}`))
                      );
    return hero;
  }

  /**.*/
  getHeroes(): Observable<Hero[]> {
    let me = this,
        heroes = me.http.get<Hero[]>(me.heroesServiceUrl)
                  .pipe(
                    tap(heroes => me.log('Heroes fetched.')),
                    catchError(me.handleError('getHeroes', []))
                  );
    return heroes;
  }

  /**.*/
  searchHeroes(term: string): Observable<Hero[]> {
    let me = this,
        searchResult,
        searchUrl,
        termToSearch = term.trim();

    if (!termToSearch) return of([]);
    searchUrl = `${me.heroesServiceUrl}/?name=${termToSearch}`;
    searchResult = me.http.get<Hero[]>(searchUrl)
                    .pipe(
                      tap(_ => me.log(`found heroes matching "${termToSearch}"`)),
                      catchError(me.handleError<Hero[]>('searchHeroes', []))
                    );
    return searchResult
  }

  /**.*/
  addHero(hero: Hero): Observable<Hero> {
    let me = this,
        addHeroUrl = `${me.heroesServiceUrl}`,

        savedHero = me.http.post<Hero>(addHeroUrl, hero, httpOtions)
                      .pipe(
                        tap( (hero: Hero) => me.log(`A new hero with id ${hero.id} was created.`)),
                        catchError(me.handleError<any>('assHero (name:${hero.name}'))
                      );
        return savedHero;
  }

  /**.*/
  updateHero(hero: Hero): Observable<any> {
    const httpOtions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json'})
    };

    let me = this,
        updateHeroUrl = `${me.heroesServiceUrl}/${hero.id}`,

        savedHero = me.http.put<Hero>(updateHeroUrl, hero, httpOtions)
                      .pipe(
                        tap(_ => me.log(`Hero with id ${hero.id} was updated.`)),
                        catchError(me.handleError<any>('updateHero (id:${hero.id}'))
                      );
        return savedHero;
  }

  /**.*/
  deleteHero(hero: Hero): Observable<Hero> {
    let me = this,
        deleteHeroUrl = `${me.heroesServiceUrl}/${hero.id}`;

    return me.http.delete<Hero>(deleteHeroUrl, httpOtions)
            .pipe(
              tap(_ => me.log(`Hero with id ${hero.id} was deleted.`)),
              catchError(me.handleError<any>('deleteHero (id:${hero.id}'))
            );
  }


  //Private methods
  private log(message: string): void {
    this.messageService.add('HeroService: ' + message );
  }

  /**
   * 
   * @param operation - name of the operation that failed.
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T){
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

}
