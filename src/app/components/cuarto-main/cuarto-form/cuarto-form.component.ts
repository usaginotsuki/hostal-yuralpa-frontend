import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { faSave, faTimes,faUsersCog, faWifi, faWind, faEye, faPencilAlt, faTrash, faBed, faDoorClosed, faMoneyBillWave, faUsers } from '@fortawesome/free-solid-svg-icons';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { CuartoService } from '../../../core/services/cuarto.service';
import { Cuarto } from '../../../shared/models/cuarto';
import swal from 'sweetalert2';

@Component({
  selector: 'app-cuarto-form',
  templateUrl: './cuarto-form.component.html',
  styleUrls: ['./cuarto-form.component.css']
})

export class CuartoFormComponent implements OnInit {

  faSave=faSave;
  faTimes=faTimes;
  faUsersCog=faUsersCog;
  faWifi=faWifi;
  faWind=faWind;
  faUsers=faUsers;
  faMoneyBillWave=faMoneyBillWave;
  faBed=faBed;
  faEye=faEye;
  faPencilAlt=faPencilAlt;
  faTrash=faTrash;
  faDoorClosed=faDoorClosed;

  formCuarto:FormGroup;
  
  submitted = false;
  @Input() cuarto: Cuarto;    
  @Input() title:String;
  @Output() flagToReload = new EventEmitter<Boolean>();

  constructor(private cuartoService:CuartoService, private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.formCuarto=this.formBuilder.group({
      aire:['',[Validators.required]],
      camas:['',[Validators.required, Validators.pattern("^[0-9]*$")]],
      compartido:['',[Validators.required]],
      costo:['',[Validators.required, Validators.pattern("^[0-9]*$")]],
      disponibilidad:['',[Validators.required]],
      internet:['',[Validators.required]],
      num_habitacion:['',[Validators.required, Validators.pattern("^[0-9]*$") ]],
    });
  }

  get f(){
    return this.formCuarto.controls;
  }

  onReset():void{
    this.formCuarto.reset();
    this.submitted=false;
  }

  onSubmit():void{
    this.submitted=true;

    if(this.formCuarto.invalid){
      console.log('Formulario invalido');
      return;
    }

    this.cuartoService.save(this.cuarto).subscribe(
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
