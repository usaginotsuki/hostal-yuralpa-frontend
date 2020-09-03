import { Component, OnInit } from '@angular/core';
import { faSave, faTimes,faUsersCog, faWifi, faWind, faEye, faPencilAlt, faTrash, faBed, faDoorClosed, faMoneyBillWave, faUsers } from '@fortawesome/free-solid-svg-icons';
import { Cuarto } from 'src/app/shared/models/cuarto';
import { CuartoService } from 'src/app/core/services/cuarto.service';
import { ActivatedRoute } from '@angular/router';
import {BooleanPipe} from '../../../shared/pipes/boolean.pipe';

@Component({
  selector: 'app-cuarto-card',
  templateUrl: './cuarto-card.component.html',
  styleUrls: ['./cuarto-card.component.css']
})

export class CuartoCardComponent implements OnInit {

  faSave=faSave;
  faTimes=faTimes;
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


  cuarto:Cuarto=new Cuarto();

  constructor(private cuartoService:CuartoService, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe( params =>{
      if(params['id']){
        this.cuartoService.retrieve(params['id'])
            .subscribe(result => 
              {
                this.cuarto = result;
                this.cuarto.idcuarto = params['id'];                                 
              }
            );
      }
    });        
  }
  
}