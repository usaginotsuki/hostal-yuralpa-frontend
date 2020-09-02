import { Component, OnInit, Output } from '@angular/core';
import { Servicio } from '../../shared/models/servicio';

@Component({
  selector: 'app-service-main',
  templateUrl: './service-main.component.html',
  styleUrls: ['./service-main.component.css']
})
export class ServiceMainComponent implements OnInit {

  mainServicio: Servicio;
  mainTitle:String;
  @Output() mainReload:Boolean;

  constructor() { }

  ngOnInit(): void {
    this.mainReload=false;
    this.onInit();
  }

  onInit(){
    this.mainServicio=new Servicio();
    this.mainTitle="Registro de un nuevo servicio";
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
    this.mainServicio=$event;
    this.mainTitle="Actualizar el registro de "+this.mainServicio.servicio;
  }

}
