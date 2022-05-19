import { Component, OnInit } from '@angular/core';
import { Hero } from '../../hero';
//import { HEROES } from '../../mock-heroes';
import { HeroesService } from '../../heroes.service';
import { MessageService } from '../../message.service';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = []; // HEROES;
  SelectedHero: Hero;

  constructor(
    private heroservice: HeroesService,
    private messageService: MessageService
  ) {}

  getHeroes(): void {
    this.heroservice.getHeroes().subscribe((heroes) => (this.heroes = heroes));

    // this.heroes = this.heroservice.getHeroes();
  }

  onselect(hero: Hero): void {
    this.SelectedHero = hero;
    this.messageService.add(
      `message added from compo selected hero id=${hero.id}`
    );
  }
  ngOnInit() {
    this.getHeroes();
  }
}
