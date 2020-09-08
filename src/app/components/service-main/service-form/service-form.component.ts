import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { faUserCircle,faGlobe, faPhone,faSave,faTimes } from '@fortawesome/free-solid-svg-icons';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { Servicio } from '../../../shared/models/servicio';
import { ServicioService } from '../../../core/services/servicio.service';
import { HabitacionService } from 'src/app/core/services/habitacion.service';

import swal from 'sweetalert2';
import { Habitacion } from 'src/app/shared/models/habitacion';

@Component({
  selector: 'app-service-form',
  templateUrl: './service-form.component.html',
  styleUrls: ['./service-form.component.css']
})
export class ServiceFormComponent implements OnInit {

  faUserCircle=faUserCircle;
  faGlobe=faGlobe;
  faPhone=faPhone;
  faSave=faSave;
  faTimes=faTimes;
  formServicio:FormGroup;
  
  habitaciones:Habitacion[];
  habs=[];
  id=[];
  submitted = false;
  @Input() servicio: Servicio;    
  @Input() title:String;
  @Output() flagToReload = new EventEmitter<Boolean>();

  constructor(private habitacionService:HabitacionService, private servicioServicio:ServicioService, private formBuilder:FormBuilder) { }
 
  ngOnInit(): void {
    this.formServicio=this.formBuilder.group({
      servicio:['',[Validators.required]],
      costo:['',[Validators.required]],
      fecha:['',[Validators.required]],
      detalle:['',[Validators.required]],
      num_habitacion:['',[Validators.required]],
    });
    this.listHabitaciones();
  }

  get f(){
    return this.formServicio.controls;
  }

  listHabitaciones():void{
    this.habitacionService.list(1,100).subscribe(
      result=>{
        this.habitaciones=result;
        for (var i=0; i<this.habitaciones.length;i++){
            this.habs[i]=this.habitaciones[i].num_cuarto;
            this.id[i]=this.habitaciones[i].idhabitacion;
          console.log(this.habs[i])
        }
      }
      
    )
    
  }

  onReset():void{
    this.formServicio.reset();
    this.submitted=false;
  }

  onSubmit():void{
    this.submitted=true;
    let index = this.habs.indexOf(this.servicio.num_habitacion);
    for(let i in this.habs){
      if(this.habitaciones[i].idhabitacion==this.id[index]){
        console.log(this.habitaciones[i]);
        let acomm=new Habitacion;
        acomm.num_cuarto=this.habitaciones[i].num_cuarto;
        acomm.idhabitacion=this.habitaciones[i].idhabitacion;
        acomm.fecha_entrada=this.habitaciones[i].fecha_entrada;
        acomm.fecha_salida=this.habitaciones[i].fecha_salida;
        this.servicio.habitacion=acomm;
        console.log(this.servicio);
      }
        
    }

    if(this.formServicio.invalid){
      console.log('Formulario invalido');
      return;
    }

    

    this.servicioServicio.save(this.servicio).subscribe(
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
