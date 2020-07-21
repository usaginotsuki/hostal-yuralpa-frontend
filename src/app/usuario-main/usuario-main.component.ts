import { Component, OnInit } from '@angular/core';
import {Usuario } from './model/usuario';

@Component({
  selector: 'app-usuario-main',
  templateUrl: './usuario-main.component.html',
  styleUrls: ['./usuario-main.component.css']
})
export class UsuarioMainComponent implements OnInit {

  mainUsuario: Usuario;
  mainTitle: String;
  mainReload:Boolean;

  constructor() { }

  ngOnInit(): void {
    this.onInit();
  }

  onInit(){
    this.mainUsuario=new Usuario();
    this.mainTitle="Registro de un nuevo huesped";
  }
  reload($event){
    this.mainReload=$event;
    if(this.mainReload){
      console.log("Reload list");
    }
  }

}
