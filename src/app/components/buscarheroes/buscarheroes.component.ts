import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable,of } from 'rxjs';
import { switchMap  } from 'rxjs/operators';

import { HeroesService} from '../../servicios/heroes.service'

@Component({
  selector: 'app-buscarheroes',
  templateUrl: './buscarheroes.component.html',
  styleUrls: ['./buscarheroes.component.css']
})
export class BuscarheroesComponent implements OnInit {
  
  hero:any[]=[]
  constructor(private router:Router, private activatedRoute:ActivatedRoute, private service:HeroesService) { }
 
  ngOnInit() {

    this.activatedRoute.paramMap.subscribe(
      (params) =>{
        console.log(params.get('termino'));
         this.hero=this.service.buscarHeroes(params.get('termino'))
      }
       
      )
    
  }
  verHeroe(idx:number){
    this.router.navigate(['/heroe', idx])
  }
}
