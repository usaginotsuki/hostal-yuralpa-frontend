import { Component, OnInit, Output } from '@angular/core';
import { Comida } from '../../shared/models/comida';

@Component({
  selector: 'app-comida-main',
  templateUrl: './comida-main.component.html',
  styleUrls: ['./comida-main.component.css']
})
export class ComidaMainComponent implements OnInit {

  mainMeal:Comida;
  mainTitle:String;
  @Output() mainReload:Boolean;

  constructor() { }

  ngOnInit(): void {
    this.mainReload=false;
    this.onInit();
  }

  onInit(){
    this.mainMeal=new Comida();
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
    this.mainMeal=$event;
    this.mainTitle="Actualizar el registro de "+this.mainMeal.idcomida;
  }

}
