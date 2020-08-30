import { Component, OnInit, Output } from '@angular/core';
import {Cuarto} from '../../shared/models/cuarto';

@Component({
  selector: 'app-cuarto-main',
  templateUrl: './cuarto-main.component.html',
  styleUrls: ['./cuarto-main.component.css']
})
export class CuartoMainComponent implements OnInit {

  mainCuarto:Cuarto;
  mainTitle: String;
  @Output() mainReload:Boolean;
  constructor() { }

  ngOnInit(): void {
    this.mainReload=false;
    this.onInit();
  }

  onInit(){
    this.mainCuarto=new Cuarto();
    this.mainTitle="Registro de un nuevo cuarto";
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
    this.mainCuarto=$event;
    this.mainTitle="Actualizar el registro del cuarto "+this.mainCuarto.num_habitacion;
  }

}
