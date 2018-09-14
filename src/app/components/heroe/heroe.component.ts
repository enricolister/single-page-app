import { Component, /*OnInit*/ } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: []
})
export class HeroeComponent /*implements OnInit*/ {

  heroe: any = {};
  router: Router;

  constructor( private activatedRoute: ActivatedRoute,
               private _heroesService: HeroesService,
               private _router: Router ) {

    this.activatedRoute.params.subscribe( params => {
      // console.log(params['id']);
      this.heroe = this._heroesService.getHeroe(params['id']);
      this.router = _router;
      console.log(this.router.url); // questo solo per avere il log dell'url corrente nella console
    });
  }

 displayHouseImage() {
    if (this.heroe['casa'] === 'DC') {
      return 'assets/img/dc_comics.jpg';
    } else {
      return 'assets/img/marvel.jpg';
  }
 }

 displayHouseAlt() {
    if (this.heroe['casa'] === 'DC') {
      return 'DC Comics';
    } else {
      return 'Marvel';
  }
 }

}
