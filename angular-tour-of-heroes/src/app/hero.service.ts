import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from "rxjs";
import { MessageService } from "./message.service";

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]>{
    //send a message after the heros have been fetched
    this.messageService.add('HeroService: Heroes Fetched');
    return of(HEROES);
  }

  getHero(id: number): Observable<Hero> {
    //TODO: send the message_after_fecthing the hero
    this.messageService.add(`HeroService: fetched hero id = ${id}`);
    return of(HEROES.find(hero => hero.id == id));
  } 

}
