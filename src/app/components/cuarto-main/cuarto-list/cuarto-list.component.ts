import { Component, OnInit, SimpleChanges,Input,Output, EventEmitter, Pipe } from '@angular/core';
import {CuartoService} from '../../../core/services/cuarto.service';
import{Cuarto} from '../../../shared/models/cuarto'
import { faUsersCog, faWifi, faWind, faEye, faPencilAlt, faTrash, faBed, faDoorClosed, faMoneyBillWave, faUsers } from '@fortawesome/free-solid-svg-icons';
import swal from 'sweetalert2'
import {BooleanPipe} from '../../../shared/pipes/boolean.pipe';

@Component({
  selector: 'app-cuarto-list',
  templateUrl: './cuarto-list.component.html',
  styleUrls: ['./cuarto-list.component.css']
})

export class CuartoListComponent implements OnInit {
  cuartos:Cuarto[];
  @Input() flagToReload : Boolean=false;
  @Output() reloadComplete=new EventEmitter<Boolean>(); 
  @Output() userToEdit= new EventEmitter<Cuarto>();
  @Input() flagToNext = new EventEmitter<Boolean>();

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
 
  constructor(private cuartoService:CuartoService) { }
 
  ngOnInit(): void {
    this.list();    
  }
  
  ngOnChanges(changes: SimpleChanges) {
    if(changes.flagToReload.currentValue){
      console.log("Flag changed to: " + this.flagToReload );
      if(this.flagToReload){
        this.list();
      }
    }
  }

  list() : void {
    this.cuartoService.list(1,100).subscribe(
      result => {        
        this.cuartos = result;                
        this.reloadComplete.emit(true);
      }
    );
  }
 
  update (cuarto:Cuarto):void{
    console.log("User to edit"+cuarto);
    this.userToEdit.emit(cuarto);

  }

  delete(cuarto:Cuarto):void{
    swal.fire({
      title: 'Esta seguro??',
      text: `Se va a eliminar del registro del cuarto ${cuarto.num_habitacion}`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Confirmar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.value) {
        this.cuartoService.delete(cuarto.idcuarto).subscribe(
          result=>{
            swal.fire(result);
            this.flagToReload=false;
            console.log(this.flagToReload);
            this.list();
          }
        );
      }
    })
  }

  retrieve(cuarto: Cuarto) : void {
    swal.fire({
      title: `<h4>${cuarto.idcuarto}</h4>`,
      icon: 'info',
      confirmButtonText: 'Aceptar',
      html: `<hr><fieldset>
        <label># de habitacion:&nbsp;</label><span>${cuarto.num_habitacion}</span><br>
        <label>Camas: &nbsp;</label><span>${cuarto.camas}</span><br>
        </fieldset>`
    });
  }

}
