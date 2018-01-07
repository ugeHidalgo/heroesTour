import { Component, OnInit } from '@angular/core';
import { Hero } from '../../models/hero';
import { HEROES } from '../../mockedData/mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes = HEROES;

  selectedHero: Hero;

  onSelect(hero : Hero): void {


    if (this.selectedHero && this.selectedHero.id === hero.id){
      this.selectedHero = undefined;
    } else {
      this.selectedHero = hero;
    }
  }

  constructor() { }

  ngOnInit() {
    
  }

}
