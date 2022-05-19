import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
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
}
