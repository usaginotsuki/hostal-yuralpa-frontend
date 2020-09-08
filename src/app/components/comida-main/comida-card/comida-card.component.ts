import { Component, OnInit } from '@angular/core';
import { faUser, faIdCard, faCalendar, faMapMarkedAlt, faPhone, faAt, faRoad, faEye  } from '@fortawesome/free-solid-svg-icons';
import { Comida } from 'src/app/shared/models/comida'
import { ComidaService } from 'src/app/core/services/comida.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-comida-card',
  templateUrl: './comida-card.component.html',
  styleUrls: ['./comida-card.component.css']
})
export class ComidaCardComponent implements OnInit {
  faUser = faUser;    
  faIdCard = faIdCard;
  faCalendar = faCalendar;
  faMapMarkedAlt = faMapMarkedAlt;
  faPhone = faPhone;
  faAt = faAt;
  faRoad = faRoad;
  faEye=faEye;

  comida:Comida=new Comida();

  constructor(private comidaService:ComidaService, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe( params =>{
      if(params['id']){
        this.comidaService.retrieve(params['id'])
            .subscribe(result => 
              {
                this.comida = result;
                this.comida.idcomida = params['id'];                                 
              }
            );
      }
    });        
  }

}
