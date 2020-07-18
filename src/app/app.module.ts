import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsuarioMainComponent } from './usuario-main/usuario-main.component';
import { UsuarioFormComponent } from './usuario-main/usuario-form/usuario-form.component';
import { UsuarioListComponent } from './usuario-main/usuario-list/usuario-list.component';

@NgModule({
  declarations: [
    AppComponent,
    UsuarioMainComponent,
    UsuarioFormComponent,
    UsuarioListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
