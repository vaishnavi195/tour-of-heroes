import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { Achieve } from './achieve';
import { HEROES } from './mock-heroes';
import { Achievement } from './mock-achieve';
import { MessageService } from './message.service';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class HeroesService {
  constructor(private messageService: MessageService) {}

  // getHeroes(): Observable<Hero[]> {
  //   const heroes = of(HEROES);
  //   return heroes;
  // }

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.messageService.add('HEro Service: fetched HEroes');
    return heroes;
  }

  getHero(id: number): Observable<Hero> {
    const hero = HEROES.find((h) => h.id === id)!;
    this.messageService.add('HEro Service: fetched HEroes');
    return of(hero);
  }

  getHeroAchievement(id: number): Observable<Achieve> {
    const achieve = Achievement.find((h) => h.id === id)!;
    this.messageService.add('Achievment service');
    return of(achieve);
  }
}
