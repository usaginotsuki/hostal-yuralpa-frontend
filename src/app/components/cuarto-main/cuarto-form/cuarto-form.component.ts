import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { faUserCircle,faGlobe, faPhone,faSave,faTimes } from '@fortawesome/free-solid-svg-icons';
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
  faUserCircle=faUserCircle;
  faGlobe=faGlobe;
  faPhone=faPhone;
  faSave=faSave;
  faTimes=faTimes;
  formCuarto:FormGroup;
  
  submitted = false;
  @Input() cuarto: Cuarto;    
  @Input() title:String;
  @Output() flagToReload = new EventEmitter<Boolean>();

  constructor(private cuartoService:CuartoService, private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.formCuarto=this.formBuilder.group({
      aire:['',[Validators.required]],
      camas:['',[Validators.required]],
      compartido:['',[Validators.required]],
      costo:['',[Validators.required]],
      disponibilidad:['',[Validators.required]],
      internet:['',[Validators.required]],
      num_habitacion:['',[Validators.required]],
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
