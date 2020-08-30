import { Component, OnInit, SimpleChanges,Input,Output, EventEmitter, Pipe } from '@angular/core';
import {CuartoService} from '../../../core/services/cuarto.service';
import{Cuarto} from '../../../shared/models/cuarto'
import { faEye, faPencilAlt, faTrash, faCamera } from '@fortawesome/free-solid-svg-icons';
import swal from 'sweetalert2'
import {BooleanPipe} from '../../../shared/pipes/boolean.pipe';

@Component({
  selector: 'app-cuarto-list',
  templateUrl: './cuarto-list.component.html',
  styleUrls: ['./cuarto-list.component.css']
})

export class CuartoListComponent implements OnInit {

  @Input() flagToReload : Boolean=false;
  @Output() reloadComplete=new EventEmitter<Boolean>(); 
  @Output() userToEdit= new EventEmitter<Cuarto>();
  @Input() flagToNext = new EventEmitter<Boolean>();

  p:number=0;
  l:Number=1;

  cuartos:Cuarto[];
  faCamera=faCamera;
  faEye=faEye;
  faPencilAlt=faPencilAlt;
  faTrash=faTrash;

 
  constructor(private cuartoService:CuartoService) { }
  list():void {
    this.p=this.p+1;
    console.log(this.p);
    this.cuartoService.list(this.p.toString()).subscribe(
      result=>{
        this.cuartos=result;
        this.reloadComplete.emit(false);
      }
    );
  }

  listAnterior():void {
    if(this.p>0){
      this.p=this.p-1;
      console.log(this.p);
    }
    this.cuartoService.list(this.p.toString()).subscribe(
      result=>{
        this.cuartos=result;
        this.reloadComplete.emit(false);
      }
    );
  }

  update (cuarto:Cuarto):void{
    console.log("User to edit "+cuarto);
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
      title: `<h4>${cuarto.num_habitacion}</h4>`,
      icon: 'info',
      confirmButtonText: 'Aceptar',
      html: `<hr><fieldset>
        <label>Camas:&nbsp;</label><span>${cuarto.camas}</span><br>
        <label>Costo: &nbsp;</label><span>${cuarto.costo}</span><br>
        <label>Compartido: &nbsp;</label><span>${cuarto.internet}</span><br>
        <label>Teléfono: &nbsp;</label><span>${cuarto.disponibilidad}</span><br>
      </fieldset>`
    });
  }
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

}
