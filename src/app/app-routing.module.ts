import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsuarioFormComponent } from './components/usuario-main/usuario-form/usuario-form.component';
import { UsuarioMainComponent } from './components/usuario-main/usuario-main.component';
import { UsuarioListComponent } from './components/usuario-main/usuario-list/usuario-list.component';
import {UsuarioCardComponent} from './components/usuario-main/usuario-card/usuario-card.component'
import {AppModule} from './app.module'

const routes: Routes = [
  {path:'',redirectTo:'/',pathMatch:'full'},
  {path: 'user/:id', component: UsuarioCardComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
