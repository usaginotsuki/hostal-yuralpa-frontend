import { MbscModule } from '@mobiscroll/angular';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule, Routes } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';
import { AngularFireModule } from '@angular/fire'
import { AngularFireAuth } from  '@angular/fire/auth'


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
import { ServiceMainComponent } from './components/service-main/service-main.component';
import { ServiceListComponent } from './components/service-main/service-list/service-list.component';
import { ServiceFormComponent } from './components/service-main/service-form/service-form.component';
import { ServiceCardComponent } from './components/service-main/service-card/service-card.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectCountryModule } from '@angular-material-extensions/select-country';
import { UsuarioStatisticsComponent } from './components/usuario-main/usuario-statistics/usuario-statistics.component';
import { ChartsModule } from 'ng2-charts';


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
    ServiceMainComponent,
    ServiceListComponent,
    ServiceFormComponent,
    ServiceCardComponent,
    UsuarioStatisticsComponent

  
  ],
  imports: [ 
    MatSelectCountryModule,
    MbscModule, 
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    HttpClientModule,
    NgxPaginationModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyBjEZmiiYULt5WOsE6Y1eI8Wk-nzruKYs8",
      authDomain: "hostal-yuralpa.firebaseapp.com",
      databaseURL: "https://hostal-yuralpa.firebaseio.com",
      projectId: "hostal-yuralpa",
      storageBucket: "hostal-yuralpa.appspot.com",
      messagingSenderId: "841163467981",
      appId: "1:841163467981:web:0c1b310087059139870d84",
      measurementId: "G-WY992DD242" 
           
    }),
    NoopAnimationsModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
