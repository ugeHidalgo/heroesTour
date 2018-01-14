import { Injectable } from '@angular/core';
import { Hero } from '../models/hero';
import { HEROES } from '../mockedData/mock-heroes'; 

@Injectable()
export class HeroService {

  constructor() { }

  getHeroes(): Hero[] {
    return HEROES;
  }
}
