import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';

import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class HeroesService {
  constructor() {}

  // getHeroes(): Observable<Hero[]> {
  //   const heroes = of(HEROES);
  //   return heroes;
  // }

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    return heroes;
  }
}