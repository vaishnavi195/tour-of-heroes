import { Component, OnInit } from '@angular/core';
import { Hero } from '../../hero';
//import { HEROES } from '../../mock-heroes';
import { HeroesService } from '../../heroes.service';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = []; // HEROES;
  SelectedHero: Hero;

  constructor(private heroservice: HeroesService) {}

  getHeroes(): void {
    this.heroservice.getHeroes().subscribe((heroes) => (this.heroes = heroes));
    // this.heroes = this.heroservice.getHeroes();
  }

  onselect(hero: Hero) {
    this.SelectedHero = hero;
  }
  ngOnInit() {
    this.getHeroes();
  }
}
