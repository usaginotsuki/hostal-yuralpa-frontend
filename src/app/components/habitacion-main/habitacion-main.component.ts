import { Component, OnInit } from '@angular/core';
import {Habitacion } from '../../shared/models/habitacion';


@Component({
  selector: 'app-habitacion-main',
  templateUrl: './habitacion-main.component.html',
  styleUrls: ['./habitacion-main.component.css']
})
export class HabitacionMainComponent implements OnInit {

  mainHabitacion:Habitacion;
  mainTitle:string;

  constructor() { }

  ngOnInit(): void {
  }

  onInit(){
    this.mainHabitacion=new Habitacion();
    this.mainTitle="Registro de una nueva habitacion";
  }

  

}
