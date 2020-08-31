import { Component, OnInit, SimpleChanges,Input,Output, EventEmitter} from '@angular/core';
import { HabitacionService } from '../../../core/services/habitacion.service';
import { Habitacion } from '../../../shared/models/habitacion';
import { faEye, faPencilAlt, faTrash, faCamera } from '@fortawesome/free-solid-svg-icons';
import swal from 'sweetalert2'

@Component({
  selector: 'app-habitacion-list',
  templateUrl: './habitacion-list.component.html',
  styleUrls: ['./habitacion-list.component.css']
})
export class HabitacionListComponent implements OnInit {

  @Input() flagToReload : Boolean=false;
  @Output() reloadComplete=new EventEmitter<Boolean>(); 
  @Output() userToEdit= new EventEmitter<Habitacion>();
  @Input() flagToNext = new EventEmitter<Boolean>();

  habitacion:Habitacion[];

  faCamera=faCamera;
  faEye=faEye;
  faPencilAlt=faPencilAlt;
  faTrash=faTrash;
  constructor(private habitacionService:HabitacionService) { }

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
    this.habitacionService.list(1,100).subscribe(
      result => {        
        this.habitacion = result;                
        this.reloadComplete.emit(true);
      }
    );
  }
 
  update (habitacion:Habitacion):void{
    console.log("User to edit"+habitacion);
    this.userToEdit.emit(habitacion);

  }

  delete(habitacion:Habitacion):void{
    swal.fire({
      title: 'Esta seguro??',
      text: `Se va a eliminar del registro de ${habitacion.num_cuarto}`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Confirmar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.value) {
        this.habitacionService.delete(habitacion.idhabitacion).subscribe(
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

  retrieve(habitacion: Habitacion) : void {
    swal.fire({
      title: `<h4>${habitacion.idhabitacion}</h4>`,
      icon: 'info',
      confirmButtonText: 'Aceptar',
      html: `<hr><fieldset>
        <label>Fecha Entrada:&nbsp;</label><span>${habitacion.fecha_entrada}</span><br>
        <label>Fecha Salida: &nbsp;</label><span>${habitacion.fecha_salida}</span><br>
        <label>Numero de Cuarto: &nbsp;</label><span>${habitacion.num_cuarto}</span><br>
        <label>Observaciones: &nbsp;</label><span>${habitacion.observaciones}</span><br>
      </fieldset>`
    });
  }

}
