import { Component, OnInit, SimpleChanges,Input,Output, EventEmitter} from '@angular/core';
import { UserService } from '../../../core/services/user.service';
import { Usuario } from '../../../shared/models/usuario';
import { faPhoneAlt,faIdBadge, faUserAlt, faFlag,faEye, faPencilAlt, faTrash } from '@fortawesome/free-solid-svg-icons';
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
  @Input() flagToNext = new EventEmitter<Boolean>();

  faIdBadge=faIdBadge;
  faUserAlt=faUserAlt;
  faFlag=faFlag;
  faEye=faEye;
  faPencilAlt=faPencilAlt;
  faTrash=faTrash;
  faPhoneAlt=faPhoneAlt;

  usuarios:Usuario[];
 
  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.list();    
  }
  
  ngOnChanges(changes: SimpleChanges) {
    if(changes.flagToReload.currentValue){
      console.log("Flag changed to: " + this.flagToReload );
      if(this.flagToReload){
        this.list();
      }
    }
  }

  list() : void {
    this.userService.list(1,100).subscribe(
      result => {        
        this.usuarios = result;                
        this.reloadComplete.emit(true);
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

}
