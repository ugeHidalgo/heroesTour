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

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    let me = this;

    me.getHeroes();
  }

  onAddHero(name: string): void {
    let me = this
        name = name.trim();

    if (!name) return;

    me.heroService.addHero( {name} as Hero)
      .subscribe( addedHero => {
        me.heroes.push(addedHero);
      });
  }

  getHeroes(): void {
    let me = this;

    me.heroService.getHeroes()
      .subscribe(heroes => me.heroes = heroes);
  }

}
