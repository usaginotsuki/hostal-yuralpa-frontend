import { Component, OnInit } from '@angular/core';
import { faUser, faIdCard, faCalendar, faMapMarkedAlt, faPhone, faAt, faRoad  } from '@fortawesome/free-solid-svg-icons';
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
  faUser = faUser;    
  faIdCard = faIdCard;
  faCalendar = faCalendar;
  faMapMarkedAlt = faMapMarkedAlt;
  faPhone = faPhone;
  faAt = faAt;
  faRoad = faRoad;

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