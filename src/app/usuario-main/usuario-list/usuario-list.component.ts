import { Component, OnInit, SimpleChanges,Input,Output, EventEmitter} from '@angular/core';
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

  @Input() flagToReload : Boolean=false;
  @Output() reloadComplete=new EventEmitter<Boolean>(); 
  @Output() userToEdit= new EventEmitter<Usuario>();

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
        this.reloadComplete.emit(false);
      }
    );
  }

  update (usuario:Usuario):void{
    console.log("User to edit"+usuario);
    this.userToEdit.emit(usuario);

  }

  delete(usuario:Usuario):void{
    swal.fire({
      title: 'Esta seguro??',
      text: `Se va a eliminar del registro de ${usuario.nombre} ${usuario.apellido}`,
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
            this.flagToReload=false;
            console.log(this.flagToReload);
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
        <label>Apellido: &nbsp;</label><span>${usuario.apellido}</span><br>
        <label>Nacionalidad: &nbsp;</label><span>${usuario.nacionalidad}</span><br>
        <label>Teléfono: &nbsp;</label><span>${usuario.telefono}</span><br>
      </fieldset>`
    });
  }
  ngOnInit(): void {
    this.list();
  }

  ngOnChanges(changes:SimpleChanges){
    if(changes.flagToReload.currentValue){ 
      console.log("Flag to reload");
      if(this.flagToReload){
        this.list();
      }
    }

  }
}
