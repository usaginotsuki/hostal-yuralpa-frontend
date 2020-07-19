import { Component, OnInit } from '@angular/core';
import { UserService } from '../model/user.service';
import { Usuario } from '../model/usuario'; 
import { faEye, faPencilAlt, faTrash, faCamera } from '@fortawesome/free-solid-svg-icons';
import swal from 'sweetalert2'

@Component({
  selector: 'app-usuario-list',
  templateUrl: './usuario-list.component.html',
  styleUrls: ['./usuario-list.component.css']
})
export class UsuarioListComponent implements OnInit {

  usuarios:Usuario[];
  faCamera=faCamera;
  faEye=faEye;
  faPencilAlt=faPencilAlt;
  faTrash=faTrash;

  constructor(private userService:UserService) { }
  list():void {
    this.userService.list().subscribe(
      result=>{
        this.usuarios=result;
      }
    );
  }

  delete(usuario:Usuario):void{
    swal.fire({
      title: 'Esta seguro??',
      text: `Se va a eliminar del registro de ${usuario.nombre}`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Confirmar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.value) {
        this.userService.delete(usuario.idusuario).subscribe(
          result=>{
            swal.fire(result);
            this.list();
          }
        );
      }
    })
  }

  retrieve(usuario: Usuario) : void {
    swal.fire({
      title: `<h4>${usuario.nombre}</h4>`,
      icon: 'info',
      confirmButtonText: 'Aceptar',
      html: `<hr><fieldset>
        <label>Nombre:&nbsp;</label><span>${usuario.nombre}</span><br>
        <label>NRC: &nbsp;</label><span>${usuario.apellido}</span><br>
        <label>Horas: &nbsp;</label><span>${usuario.nacionalidad}</span><br>
        <label>Área: &nbsp;</label><span>${usuario.telefono}</span><br>
      </fieldset>`
    });
  }
  ngOnInit(): void {
    this.list();
  }
}
