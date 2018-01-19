import { Component, OnInit } from '@angular/core';
import { Hero } from '../../models/hero';
import { HeroService } from '../../services/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[];
  selectedHero: Hero;

  onSelect(hero: Hero): void {
    var me = this;

    if (me.selectedHero && me.selectedHero.id === hero.id){
      me.selectedHero = undefined;
    } else {
      me.selectedHero = hero;
    }
  }

  getHeroes(): void {
    var me = this;

    me.heroService.getHeroes()
      .subscribe(heroes => me.heroes = heroes);
  }

  constructor(private heroService: HeroService) { 
    
  }

  ngOnInit() {
    var me = this;

    me.getHeroes();
  }

}
