import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../../services/heroes.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  buscarHeroe(value: string) {
    const myService = new HeroesService();
    myService.buscarHeroes(value);
  }
}
