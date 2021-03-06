import { Component, OnInit, Output } from '@angular/core';
import {Habitacion } from '../../shared/models/habitacion';


@Component({
  selector: 'app-habitacion-main',
  templateUrl: './habitacion-main.component.html',
  styleUrls: ['./habitacion-main.component.css']
})
export class HabitacionMainComponent implements OnInit {

  mainHabitacion:Habitacion;
  mainTitle:string;
  @Output() mainReload:Boolean;

  constructor() { }


  ngOnInit(): void {
    this.mainReload=false;
    this.onInit();
  }

  onInit(){
    this.mainHabitacion=new Habitacion();
    this.mainTitle="Registro de un nuevo huesped";
  }
  reloadToDo($event){
    this.mainReload=$event;
    if(this.mainReload){
      console.log("Main call to Reload list");
    }
  }
  reloadDone($event){
    this.mainReload=$event;
  }

  mainUpdate($event){
    this.mainHabitacion=$event;
    this.mainTitle="Actualizar el registro de "+this.mainHabitacion.num_cuarto;
  }

}