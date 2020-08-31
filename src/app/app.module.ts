import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule, Routes } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';
import { MatSelectCountryModule } from '@angular-material-extensions/select-country';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsuarioFormComponent } from './components/usuario-main/usuario-form/usuario-form.component';
import { UsuarioMainComponent } from './components/usuario-main/usuario-main.component';
import { UsuarioListComponent } from './components/usuario-main/usuario-list/usuario-list.component';
import {HabitacionMainComponent} from './components/habitacion-main/habitacion-main.component';
import {HabitacionFormComponent} from './components/habitacion-main/habitacion-form/habitacion-form.component';
import {HabitacionListComponent} from './components/habitacion-main/habitacion-list/habitacion-list.component';
import { CuartoMainComponent } from './components/cuarto-main/cuarto-main.component';
import { CuartoListComponent } from './components/cuarto-main/cuarto-list/cuarto-list.component';
import { CuartoFormComponent } from './components/cuarto-main/cuarto-form/cuarto-form.component';
import { BooleanPipe } from './shared/pipes/boolean.pipe';
import { CuartoCardComponent } from './components/cuarto-main/cuarto-card/cuarto-card.component';
import { ComidaMainComponent } from './components/comida-main/comida-main.component';
import { ComidaListComponent } from './components/comida-main/comida-list/comida-list.component';
import { ComidaCardComponent } from './components/comida-main/comida-card/comida-card.component';
import { ComidaFormComponent } from './components/comida-main/comida-form/comida-form.component';
import { HabitacionSearchComponent } from './components/habitacion-main/habitacion-search/habitacion-search.component';
import { HabitacionCardComponent } from './components/habitacion-main/habitacion-card/habitacion-card.component';
import { CuartoSearchComponent } from './components/cuarto-main/cuarto-search/cuarto-search.component';


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
    HabitacionFormComponent,
    HabitacionListComponent,
    HabitacionMainComponent,
    CuartoMainComponent,
    CuartoListComponent,
    CuartoFormComponent,
    BooleanPipe,
    CuartoCardComponent,
    ComidaMainComponent,
    ComidaListComponent,
    ComidaCardComponent,
    ComidaFormComponent,
    HabitacionSearchComponent,
    HabitacionCardComponent,
    CuartoSearchComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    NgxPaginationModule,
    MatSelectCountryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
