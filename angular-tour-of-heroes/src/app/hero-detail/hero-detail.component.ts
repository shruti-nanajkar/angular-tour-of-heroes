import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";

import { HeroService } from "../hero.service";

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  @Input() hero: Hero;

  constructor(
    private route: ActivatedRoute, //information about this instance
    private heroService: HeroService, //to get hero list 
    private location: Location //interacts with browser
  ) { }

  ngOnInit() {
    this.getHero();
  }

  getHero(): void{
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
      //route.snapshot is the route information of the component
      //paramMap keeps the route parameters and we are extracting id from it
      //route parameters are strings so '+' converts the strings to number
  }

  goBack(): void {
    this.location.back();
  }

}