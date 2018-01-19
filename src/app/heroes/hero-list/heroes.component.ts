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
    var me = this;

    me.getHeroes();
  }

  getHeroes(): void {
    var me = this;

    me.heroService.getHeroes()
      .subscribe(heroes => me.heroes = heroes);
  }

}
