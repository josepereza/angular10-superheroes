import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AboutComponent } from './components/about/about.component'
import { HomeComponent } from './components/home/home.component';
import {HeroesComponent} from './components/heroes/heroes.component'
import { HeroeComponent } from './components/heroe/heroe.component'
import { BuscarheroesComponent} from './components/buscarheroes/buscarheroes.component'
const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'about', component:AboutComponent},
  {path:'heroes', component:HeroesComponent},
  {path:'buscarheroes/:termino', component:BuscarheroesComponent},
  {path:'heroe/:id', component:HeroeComponent},

  {path:'**',pathMatch: 'full', redirectTo: 'home'},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
