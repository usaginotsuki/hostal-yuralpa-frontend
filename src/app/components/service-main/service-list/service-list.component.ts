import { Component, OnInit, SimpleChanges,Input,Output, EventEmitter} from '@angular/core';
import { Servicio } from '../../../shared/models/servicio';
import { ServicioService } from '../../../core/services/servicio.service';
import { faEye, faPencilAlt, faTrash, faCamera } from '@fortawesome/free-solid-svg-icons';
import swal from 'sweetalert2'

@Component({
  selector: 'app-service-list',
  templateUrl: './service-list.component.html',
  styleUrls: ['./service-list.component.css']
})
export class ServiceListComponent implements OnInit {

  @Input() flagToReload : Boolean=false;
  @Output() reloadComplete=new EventEmitter<Boolean>(); 
  @Output() userToEdit= new EventEmitter<Servicio>();
  @Input() flagToNext = new EventEmitter<Boolean>();

  servicios:Servicio[];
  faCamera=faCamera;
  faEye=faEye;
  faPencilAlt=faPencilAlt;
  faTrash=faTrash;

  constructor(private serviceService: ServicioService) { }

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
    this.serviceService.list(1,100).subscribe(
      result => {        
        this.servicios = result;                
        this.reloadComplete.emit(true);
      }
    );
  }
 
  update (servicio:Servicio):void{
    console.log("User to edit"+servicio);
    this.userToEdit.emit(servicio);

  }

  delete(servicio:Servicio):void{
    swal.fire({
      title: 'Esta seguro??',
      text: `Se va a eliminar del registro de ${servicio.servicio} `,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Confirmar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.value) {
        this.serviceService.delete(servicio.idservicio).subscribe(
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

  retrieve(servicio: Servicio) : void {
    swal.fire({
      title: `<h4>${servicio.servicio}</h4>`,
      icon: 'info',
      confirmButtonText: 'Aceptar',
      html: `<hr><fieldset>
        <label>Detalle:&nbsp;</label><span>${servicio.detalle}</span><br>
        <label>Costo: &nbsp;</label><span>${servicio.costo}</span><br>
        <label>Fecha: &nbsp;</label><span>${servicio.fecha}</span><br>
      </fieldset>`
    });
  }

}
