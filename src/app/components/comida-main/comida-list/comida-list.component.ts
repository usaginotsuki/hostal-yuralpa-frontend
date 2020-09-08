import { Component, OnInit, SimpleChanges,Input,Output, EventEmitter} from '@angular/core';
import { ComidaService } from '../../../core/services/comida.service';
import { Comida } from '../../../shared/models/comida';
import { faPlus, faEye, faPencilAlt, faTrash, faCamera, faDollarSign } from '@fortawesome/free-solid-svg-icons';
import swal from 'sweetalert2'

@Component({
  selector: 'app-comida-list',
  templateUrl: './comida-list.component.html',
  styleUrls: ['./comida-list.component.css']
})
export class ComidaListComponent implements OnInit {
  @Input() flagToReload : Boolean=false;
  @Output() reloadComplete=new EventEmitter<Boolean>(); 
  @Output() userToEdit= new EventEmitter<Comida>();
  @Input() flagToNext = new EventEmitter<Boolean>();

  comida:Comida[];
  faCamera=faCamera;
  faEye=faEye;
  faPencilAlt=faPencilAlt;
  faTrash=faTrash;
  faPlus=faPlus;
  faDollarSign=faDollarSign;

  constructor(private comidaService:ComidaService) { }
  
  ngOnInit(): void {
    this.list();
    console.log(this.comida)
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
    this.comidaService.list(1,100).subscribe(
      result => {        
        this.comida = result;                
        this.reloadComplete.emit(true);
        console.log("Datos")
        console.log(this.comida);
      }
    );
  }
 
  update (comida:Comida):void{
    console.log("User to edit"+comida);
    this.userToEdit.emit(comida);

  }

  delete(comida:Comida):void{
    swal.fire({
      title: 'Esta seguro??',
      text: `Se va a eliminar del registro de ${comida.fecha}`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Confirmar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.value) {
        this.comidaService.delete(comida.idcomida).subscribe(
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

 

}
