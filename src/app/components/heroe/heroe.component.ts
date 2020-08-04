import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { HeroesService, Heroe} from '../../servicios/heroes.service'

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {
  hero:any;
  constructor(private router:Router, private activatedRoute:ActivatedRoute, private service:HeroesService) { }
 
  ngOnInit() {
    const heroId = this.activatedRoute.snapshot.paramMap.get('id');
    this.hero = this.service.getHeroe(heroId);
    console.log(' es este heroe ultimo ', this.hero[0].nombre)
  }

  

}
