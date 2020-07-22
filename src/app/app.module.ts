import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule, Routes } from '@angular/router';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsuarioMainComponent } from './usuario-main/usuario-main.component';
import { UsuarioFormComponent } from './usuario-main/usuario-form/usuario-form.component';
import { UsuarioListComponent } from './usuario-main/usuario-list/usuario-list.component';
import { UserCardComponent } from './user-card/user-card.component';

const routes:Routes=[
  {path:'',redirectTo:'/',pathMatch:'full'},
  {path:'user',component:UsuarioMainComponent},
  {path:'retrieve',component:UserCardComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    UsuarioMainComponent,
    UsuarioFormComponent,
    UsuarioListComponent,
    UserCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
