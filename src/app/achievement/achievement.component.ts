import { Component, OnInit, Input } from '@angular/core';
import { Achieve } from '../achieve';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HeroesService } from '../heroes.service';
@Component({
  selector: 'app-achievement',
  templateUrl: './achievement.component.html',
  styleUrls: ['./achievement.component.css'],
})
export class AchievementComponent implements OnInit {
  @Input() achieve?: Achieve;
  constructor(
    private route: ActivatedRoute,
    private heroService: HeroesService,
    private location: Location
  ) {}

  getHero(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.heroService
      .getHeroAchievement(id)
      .subscribe((achieve) => (this.achieve = achieve));
  }
  ngOnInit() {
    this.getHero();
  }
  goBack() {
    this.location.back();
  }
}
