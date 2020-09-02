import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { faUserCircle,faGlobe, faPhone,faSave,faTimes,faIdCard } from '@fortawesome/free-solid-svg-icons';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../../core/services/user.service';
import { Usuario } from '../../../shared/models/usuario';
import swal from 'sweetalert2';


const remoteData = {
  url: 'https://trial.mobiscroll.com/content/countries.json',
  type: 'json'
};

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
  faIdCard=faIdCard;
  submitted = false;
  @Input() usuario: Usuario;    
  @Input() title:String;
  @Output() flagToReload = new EventEmitter<Boolean>();

  constructor(private userService:UserService, private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.formUsuario=this.formBuilder.group({
      nombre:['',[Validators.required]],
      apellido:['',[Validators.required]],
      nacionalidad:['',[Validators.required]],
      telefono:['',[Validators.required, Validators.pattern("^[0-9]*$")]],
      identification:['',[Validators.required]],
    
    }); 
  }

  get f(){
    return this.formUsuario.controls;
  }

  onReset():void{
    this.formUsuario.reset();
    this.submitted=false;
  }

  onSubmit():void{
    this.submitted=true;

    if(this.formUsuario.invalid){
      console.log('Formulario invalido');
      return;
    }
    this.usuario.prefijo =(Object.values(this.usuario.nacionalidad)[3]);
    this.usuario.nacionalidad = (Object.values(this.usuario.nacionalidad)[0]);
    console.log(this.usuario.nacionalidad);
    /*console.log(nacion)
    let nacion2 = (JSON.stringify(nacion));
    console.log(nacion2[2]);*/
    this.userService.save(this.usuario).subscribe(
      result=>{
        this.submitted=false;
        
        if(result.icon==="success"){
          console.log("Flag form success");
          swal.fire(result);
          this.flagToReload.emit(true);
          return;
       
        }

        swal.fire(result);
      }
    )
    
  }
  
}
