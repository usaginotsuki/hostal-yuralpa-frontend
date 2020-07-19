import { Component, OnInit, Input } from '@angular/core';
import { faUserCircle,faGlobe, faPhone,faSave,faTimes } from '@fortawesome/free-solid-svg-icons';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { UserService } from '../model/user.service';
import { Usuario } from '../model/usuario'
import swal from 'sweetalert2';
@Component({
  selector: 'app-usuario-form',
  templateUrl: './usuario-form.component.html',
  styleUrls: ['./usuario-form.component.css']
})
export class UsuarioFormComponent implements OnInit {
  
  faUserCircle=faUserCircle;
  faGlobe=faGlobe;
  faPhone=faPhone;
  faSave=faSave;
  faTimes=faTimes;
  formUsuario:FormGroup;

  submitted = false;

  title:String="Registro de nuevo usuario";
  @Input() usuario: Usuario;    

  constructor(private userService:UserService, private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.formUsuario=this.formBuilder.group({
      nombre:['',[Validators.required]],
      apellido:['',[Validators.required]],
      nacionalidad:['',[Validators.required]],
      telefono:['',[Validators.required]]
    }
      
    );
  }

  save():void{
    this.submitted=true;
    if (this.formUsuario.invalid){
      return;
    }
    this.userService.save(this.usuario).subscribe(
      result=>{
        this.submitted=false;
        if(result.icon==="success"){
          swal.fire(result);
          return;
        }

        swal.fire({
          text:result.text,
          icon:result.icon,
          title:"Error!!!"
        })
      }
    )
  }

}
