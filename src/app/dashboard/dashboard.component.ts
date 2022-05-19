import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
//import { HEROES } from '../../mock-heroes';
import { HeroesService } from '../heroes.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = []; // HEROES;
  filteredString;
  constructor(private heroservice: HeroesService) {}

  getHeroes(): void {
    this.heroservice
      .getHeroes()
      .subscribe((heroes) => (this.heroes = heroes.slice(1, 5)));

    // this.heroes = this.heroservice.getHeroes();
  }

  ngOnInit() {
    this.getHeroes();
  }
}
