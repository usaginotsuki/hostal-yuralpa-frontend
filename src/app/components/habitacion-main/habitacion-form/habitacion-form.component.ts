import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { faUserCircle,faGlobe, faPhone,faSave,faTimes } from '@fortawesome/free-solid-svg-icons';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { HabitacionService } from '../../../core/services/habitacion.service';
import { Habitacion } from '../../../shared/models/habitacion';
import swal from 'sweetalert2';

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
  formHabitacion:FormGroup;

  submitted = false;
  @Input() habitacion: Habitacion;    
  @Input() title:String;
  @Output() flagToReload = new EventEmitter<Boolean>();

  constructor(private habitacionService:HabitacionService, private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.formHabitacion=this.formBuilder.group({
      fecha_entrada:['',[Validators.required]],
      fecha_salida:['',[Validators.required]],
      num_cuarto:['',[Validators.required]],
      observaciones:['',[Validators.required]],
      idusuario:['',[Validators.required]],
      idcuarto:['',[Validators.required]],

    });
  }

  get f(){
    return this.formHabitacion.controls;
  }

  onReset():void{
    this.formHabitacion.reset();
    this.submitted=false;
  }

  onSubmit():void{
    this.submitted=true;

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
  
}
