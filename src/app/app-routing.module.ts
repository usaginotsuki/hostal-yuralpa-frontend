import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsuarioFormComponent } from './components/usuario-main/usuario-form/usuario-form.component';
import { UsuarioMainComponent } from './components/usuario-main/usuario-main.component';
import { UsuarioListComponent } from './components/usuario-main/usuario-list/usuario-list.component';
import {UsuarioCardComponent} from './components/usuario-main/usuario-card/usuario-card.component'
import { CuartoMainComponent } from './components/cuarto-main/cuarto-main.component';
import { CuartoListComponent } from './components/cuarto-main/cuarto-list/cuarto-list.component';
import { CuartoFormComponent } from './components/cuarto-main/cuarto-form/cuarto-form.component';
import { CuartoCardComponent } from './components/cuarto-main/cuarto-card/cuarto-card.component';
import { ComidaMainComponent } from './components/comida-main/comida-main.component';
import { ComidaCardComponent } from './components/comida-main/comida-card/comida-card.component';
import { ComidaFormComponent } from './components/comida-main/comida-form/comida-form.component';
import { ComidaListComponent } from './components/comida-main/comida-list/comida-list.component';
import { HabitacionMainComponent } from './components/habitacion-main/habitacion-main.component';
import { HabitacionListComponent } from './components/habitacion-main/habitacion-list/habitacion-list.component';
import { HabitacionCardComponent } from './components/habitacion-main/habitacion-card/habitacion-card.component';
import { ServiceCardComponent } from './components/service-main/service-card/service-card.component';
import { ServiceMainComponent } from './components/service-main/service-main.component';
import { UsuarioStatisticsComponent } from './components/usuario-main/usuario-statistics/usuario-statistics.component';
import { ComidaStatisticsComponent } from './components/comida-main/comida-statistics/comida-statistics.component';


const routes: Routes = [
  {path:'',redirectTo:'/',pathMatch:'full'},
  {path: 'meal/stats', component: ComidaStatisticsComponent},
  {path: 'user', component: UsuarioMainComponent},
  {path: 'user/statistics', component: UsuarioStatisticsComponent},
  {path: 'user/:id', component: UsuarioCardComponent},
  {path: 'room', component: CuartoMainComponent},
  {path: 'room/:id', component: CuartoCardComponent},
  {path: 'meal', component: ComidaListComponent},
  {path: 'meal/form', component: ComidaFormComponent},
  {path: 'meal/list', component: ComidaListComponent},
  {path: 'meal/:id', component: ComidaCardComponent},
  {path: 'acomm', component: HabitacionMainComponent},
  {path: 'acomm/list', component: HabitacionListComponent},
  {path: 'acomm/:id', component: HabitacionCardComponent},
  {path: 'service/:id', component: ServiceCardComponent},
  {path: 'service', component: ServiceMainComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
