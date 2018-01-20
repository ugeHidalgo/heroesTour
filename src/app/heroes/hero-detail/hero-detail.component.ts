import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from '../../services/hero.service';
import { Location } from '@angular/common';

import { Hero } from '../../models/hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  @Input() hero: Hero;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getHero()
  }

  //Buttons methods
  onClickSaveHero(): void {
    let me = this;

    me.heroService.updateHero(me.hero)
        .subscribe( () => {
            me.onClickGoBack();
          }
        );
  }

  onClickDeleteHero(): void {
    let me = this;

    me.heroService.deleteHero(me.hero)
        .subscribe( () => {
            me.onClickGoBack();
          }
        );
  }

  onClickGoBack(): void {
    this.location.back();
  }

  //Private methods
  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id)
        .subscribe(hero => this.hero = hero);
  }

}
