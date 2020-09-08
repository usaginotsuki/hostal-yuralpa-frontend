import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { faTrash,faUtensils, faPlusSquare, faTimes, faCalendar, faQuoteRight, faSave, faComment, faHourglass, faDollarSign } from '@fortawesome/free-solid-svg-icons';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { ComidaService } from '../../../core/services/comida.service';
import { Comida } from '../../../shared/models/comida';
import swal from 'sweetalert2';
import { Habitacion } from '../../../shared/models/habitacion';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-comida-form',
  templateUrl: './comida-form.component.html',
  styleUrls: ['./comida-form.component.css']
})

export class ComidaFormComponent implements OnInit {

  faSave = faSave;
  faTimes = faTimes;
  faComment=faComment;
  faCalendar = faCalendar; 
  faQuoteRight = faQuoteRight;
  faHourglass=faHourglass;
  faPlusSquare = faPlusSquare;
  faDollarSign=faDollarSign;
  faUtensils=faUtensils;
  faTrash=faTrash;
  formComida:FormGroup;
  comida:Comida;
  submitted: boolean  = true;
  title = "Nuevo registro";

  constructor(private comidaService: ComidaService, 
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute, 
    private router: Router) { }

    ngOnInit(): void {
    
      this.activatedRoute.params.subscribe(
        params=>{
          if(params['id']){
            this.comidaService.retrieve(params['id'])
            .subscribe(
              result=>{
                this.comida = result;
                this.comida.idcomida = params['id'];
                this.title = "Actualizando registro";
                console.warn(this.comida);
              }
            )
            
          } 
          else{
            this.comida = new Comida();
            console.warn(this.comida);
            
          }
        }
      )
      this.formComida = this.formBuilder.group({
        comida: ['', [Validators.required]],
        costo: [''],
        fecha: [''],
        observaciones: [''],
      });    
      
      
    }
  
    get f(){
      return this.formComida.controls;
    }
  
    onSubmit(): void{
      this.submitted = true;
  
      if(this.formComida.invalid){
        console.warn('Forma Invalida')
        return
      }
      this.comidaService.save(this.comida).subscribe(
      (result)=>{
        this.submitted = false;
        if(result!==undefined){
          if(result.icon ==="success"){
            this.router.navigate(['meal/list'])
          }
        }
      }
  
      )
    }
  
    onReset(){
      this.comida = new Comida;
      this.submitted=true;
      this.formComida.reset();
    }
  
    addMeal($event){ //Vincula un evento Output de otro componente
      let isNot:Boolean=true;
       console.log($event)
      for( let i in this.comida.acomms){
       
        console.log(this.comida.acomms[i])
        if (this.comida.acomms[i].idhabitacion==$event.idhabitacion){
          isNot=false;
          let timerInterval;
          swal.fire({
            title: 'Habitacion añadida previamente',
            timer:1000,
            timerProgressBar:true,     
            onClose: () => {
              clearInterval(timerInterval)
            }
          })
        }
      }
      console.log(isNot);
      if(isNot){
        let newAcomm = new Habitacion();
        newAcomm.idhabitacion=$event.idhabitacion;
        newAcomm.num_cuarto = $event.num_cuarto;
        newAcomm.fecha_salida = $event.fecha_salida;        
        newAcomm.observaciones = $event.observaciones;   
        this.comida.acomms.push(newAcomm);
        console.log($event);
      }
      
      //Nuevo participante del proyecto
      
    }

    delete(habitacion:Habitacion){
      let j=0;
      for(let i in this.comida.acomms){
        if(this.comida.acomms[i]==habitacion){
              this.comida.acomms.splice(j,1);  
        }
        j++;
      }
    }
  
  
                        
  }
  