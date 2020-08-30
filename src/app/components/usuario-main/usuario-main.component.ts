import { Component, OnInit, Output} from '@angular/core';
import { Usuario } from '../../shared/models/usuario';

@Component({
  selector: 'app-usuario-main',
  templateUrl: './usuario-main.component.html',
  styleUrls: ['./usuario-main.component.css']
})
export class UsuarioMainComponent implements OnInit {

  mainUsuario: Usuario;
  mainTitle: String;
  @Output() mainReload:Boolean;

  constructor() { }

  ngOnInit(): void {
    this.mainReload=false;
    this.onInit();
  }

  onInit(){
    this.mainUsuario=new Usuario();
    this.mainTitle="Registro de un nuevo huesped";
  }
  reloadToDo($event){
    this.mainReload=$event;
    if(this.mainReload){
      console.log("Main call to Reload list");
    }
  }
  reloadDone($event){
    this.mainReload=$event;
  }

  mainUpdate($event){
    this.mainUsuario=$event;
    this.mainTitle="Actualizar el registro de "+this.mainUsuario.nombre;
  }

}
