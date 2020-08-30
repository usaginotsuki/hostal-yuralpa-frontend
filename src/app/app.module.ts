import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule, Routes } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsuarioFormComponent } from './components/usuario-main/usuario-form/usuario-form.component';
import { UsuarioMainComponent } from './components/usuario-main/usuario-main.component';
import { UsuarioListComponent } from './components/usuario-main/usuario-list/usuario-list.component';
/*import { UserCardComponent } from './components/user-card/user-card.component';
import {HabitacionMainComponent} from './components/habitacion-main/habitacion-main.component';
import {HabitacionFormComponent} from './components/habitacion-main/habitacion-form/habitacion-form.component';
import {HabitacionListComponent} from './components/habitacion-main/habitacion-list/habitacion-list.component';*/
import { CuartoMainComponent } from './components/cuarto-main/cuarto-main.component';
import { CuartoListComponent } from './components/cuarto-main/cuarto-list/cuarto-list.component';
import { CuartoFormComponent } from './components/cuarto-main/cuarto-form/cuarto-form.component';
import { BooleanPipe } from './shared/pipes/boolean.pipe';
import { CuartoCardComponent } from './components/cuarto-main/cuarto-card/cuarto-card.component';


const routes:Routes=[
  {path:'',redirectTo:'/',pathMatch:'full'},

 /* {path:'retrieve',component:UserCardComponent},
  {path:'cuarto',component:CuartoMainComponent}*/
]

@NgModule({
  declarations: [
    AppComponent,
    UsuarioMainComponent,
    UsuarioFormComponent,
    UsuarioListComponent,
    /*UserCardComponent,
    HabitacionFormComponent,
    HabitacionListComponent,
    HabitacionMainComponent,*/
    CuartoMainComponent,
    CuartoListComponent,
    CuartoFormComponent,
    BooleanPipe,
    CuartoCardComponent,
  
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
