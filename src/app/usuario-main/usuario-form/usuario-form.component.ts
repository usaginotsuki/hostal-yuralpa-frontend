import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
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
  @Input() usuario: Usuario;    
  @Input() title:String;
  @Output() flagToReload = new EventEmitter<Boolean>();

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
  
/*
  save():void{
    this.submitted=true;
    if (this.formUsuario.invalid){
      console.log("inv");
      return;
    }
    this.userService.save(this.usuario).subscribe(
      result=>{
        console.log("val1");
        this.submitted=false;
        if(result.icon==="success"){
          console.log("val2");
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
*/
}
