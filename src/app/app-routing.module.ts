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


const routes: Routes = [
  {path:'',redirectTo:'/',pathMatch:'full'},
  {path: 'user', component: UsuarioMainComponent},
  {path: 'room', component: CuartoMainComponent},
  {path: 'user/:id', component: UsuarioCardComponent},
  {path: 'room/:id', component: CuartoCardComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
