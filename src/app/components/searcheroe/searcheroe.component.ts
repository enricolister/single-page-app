import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../services/heroes.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-searcheroe',
  templateUrl: './searcheroe.component.html',
})
export class SearcheroeComponent implements OnInit {

  heroes: Heroe[];
  value: string;

  constructor(private activatedRoute: ActivatedRoute, private _heroesService: HeroesService,
              private router: Router) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe( params => {
    this.heroes = this._heroesService.buscarHeroes(params['value']);
      this.value = params['value'];
    });
  }

  verHeroe( idx: number ) {
    this.router.navigate( ['/heroe', idx] );
  }

}
