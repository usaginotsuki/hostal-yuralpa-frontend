import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { faUserCircle,faGlobe, faPhone,faSave,faTimes } from '@fortawesome/free-solid-svg-icons';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { Servicio } from '../../../shared/models/servicio';
import { ServicioService } from '../../../core/services/servicio.service';
import swal from 'sweetalert2';

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

  submitted = false;
  @Input() servicio: Servicio;    
  @Input() title:String;
  @Output() flagToReload = new EventEmitter<Boolean>();

  constructor(private servicioServicio:ServicioService, private formBuilder:FormBuilder) { }
 
  ngOnInit(): void {
    this.formServicio=this.formBuilder.group({
      servicio:['',[Validators.required]],
      costo:['',[Validators.required]],
      fecha:['',[Validators.required]],
      detalle:['',[Validators.required]],
      idhabitacion:['',[Validators.required]]
    });
  }

  get f(){
    return this.formServicio.controls;
  }

  onReset():void{
    this.formServicio.reset();
    this.submitted=false;
  }

  onSubmit():void{
    this.submitted=true;

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
