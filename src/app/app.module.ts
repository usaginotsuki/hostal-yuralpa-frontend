import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule, Routes } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsuarioMainComponent } from './usuario-main/usuario-main.component';
import { UsuarioFormComponent } from './usuario-main/usuario-form/usuario-form.component';
import { UsuarioListComponent } from './usuario-main/usuario-list/usuario-list.component';
import { UserCardComponent } from './user-card/user-card.component';
import {HabitacionMainComponent} from './habitacion-main/habitacion-main.component';
import {HabitacionFormComponent} from './habitacion-main/habitacion-form/habitacion-form.component';
import {HabitacionListComponent} from './habitacion-main/habitacion-list/habitacion-list.component';
import { CuartoMainComponent } from './cuarto-main/cuarto-main.component';
import { CuartoListComponent } from './cuarto-main/cuarto-list/cuarto-list.component';
import { CuartoFormComponent } from './cuarto-main/cuarto-form/cuarto-form.component';


const routes:Routes=[
  {path:'',redirectTo:'/',pathMatch:'full'},
  {path:'user',component:UsuarioMainComponent},
  {path:'retrieve',component:UserCardComponent},
  {path:'cuarto',component:CuartoMainComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    UsuarioMainComponent,
    UsuarioFormComponent,
    UsuarioListComponent,
    UserCardComponent,
    HabitacionFormComponent,
    HabitacionListComponent,
    HabitacionMainComponent,
    CuartoMainComponent,
    CuartoListComponent,
    CuartoFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
