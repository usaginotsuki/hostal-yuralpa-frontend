import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { faUserCircle,faGlobe, faPhone,faSave,faTimes, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { HabitacionService } from '../../../core/services/habitacion.service';
import { Habitacion } from '../../../shared/models/habitacion';
import swal from 'sweetalert2';
import { CuartoService } from 'src/app/core/services/cuarto.service';
import { Cuarto } from '../../../shared/models/cuarto';
import { Usuario } from '../../../shared/models/usuario';
import { UserService } from '../../../core/services/user.service';
import { User } from 'firebase';

@Component({
  selector: 'app-habitacion-form',
  templateUrl: './habitacion-form.component.html',
  styleUrls: ['./habitacion-form.component.css']
})
export class HabitacionFormComponent implements OnInit {
  faUserCircle=faUserCircle;
  faGlobe=faGlobe;
  faPhone=faPhone;
  faSave=faSave;
  faTimes=faTimes;
  faTrash=faTrash;
  formHabitacion:FormGroup;

  submitted = false;
  @Input() habitacion: Habitacion;    
  @Input() title:String;
  @Output() flagToReload = new EventEmitter<Boolean>();
  cuartos:Cuarto[];
  nums=[];
  usuarios:Usuario[];
  usr=[];
  

  constructor(private UserService:UserService,private cuartoService:CuartoService, private habitacionService:HabitacionService, private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.formHabitacion=this.formBuilder.group({
      fecha_entrada:['',[Validators.required]],
      fecha_salida:['',[Validators.required]],
      num_cuarto:['',[Validators.required]],
      observaciones:['',[Validators.required]],
    });
    this.listCuartosUsers();
  }

  get f(){
    return this.formHabitacion.controls;
  }

  listCuartosUsers() : void {
    this.cuartoService.list(1,1000).subscribe(
      result => {        
        this.cuartos = result;
        console.log(this.cuartos);
        for( var i=0; i<this.cuartos.length;i++){
          this.nums[i]=this.cuartos[i].num_habitacion;
          console.log(this.nums[i]);
        }

      }
    );
  }

  onReset():void{
    this.formHabitacion.reset();
    this.submitted=false;
  }

  onSubmit():void{
    this.submitted=true;
    for (let i=0;i<this.cuartos.length;i++){
      if((this.habitacion.num_cuarto==this.cuartos[i].num_habitacion)){
        console.log(this.cuartos[i].disponibilidad)
        if((this.cuartos[i].disponibilidad)){
          console.log(this.cuartos[i])
          let room= new Cuarto;
          console.log(room);
          room.num_habitacion=this.cuartos[i].num_habitacion;
          room.camas=this.cuartos[i].camas;
          room.costo=this.cuartos[i].costo;
          console.log(room)
          this.habitacion.cuarto=room;
          console.log(this.habitacion.cuarto)
        }
        
      }
    }
    console.log(this.habitacion);
    if(this.formHabitacion.invalid){
      console.log('Formulario invalido');
      return;
    }

    this.habitacionService.save(this.habitacion).subscribe(
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

  delete(usuario:Usuario){
  let j=0;
  
  for(let i in this.habitacion.usuario){
    
    if(this.habitacion.usuario[i]==usuario){
          this.habitacion.usuario.splice(j,1);  
    }
    j++;
  }
  }
  addUser($event){ //Vincula un evento Output de otro componente
    //Nuevo participante del proyecto
    let isNot:Boolean=true;
    let newUser = new Usuario();
    for(let i of this.habitacion.usuario){
      if(i.idusuario==$event.idusuario){
        isNot=false;
        let timerInterval;
          swal.fire({
            title: 'Usuario añadido previamente',
            timer:1000,
            timerProgressBar:true,     
            onClose: () => {
              clearInterval(timerInterval)
            }
          })
      }
    }
    if(isNot){
      newUser.identification=$event.identification;
      newUser.nombre = $event.nombre;
      newUser.apellido = $event.apellido;        
      newUser.prefijo = $event.prefijo;   
      newUser.telefono = $event.telefono;
      newUser.idusuario=$event.idusuario;
      this.habitacion.usuario.push(newUser);
    }
    
  }

  
}
