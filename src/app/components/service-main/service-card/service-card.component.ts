import { Component, OnInit } from '@angular/core';
import { faUser, faIdCard, faCalendar, faMapMarkedAlt, faPhone, faAt, faRoad  } from '@fortawesome/free-solid-svg-icons';
import { Servicio } from '../../../shared/models/servicio';
import { ServicioService } from '../../../core/services/servicio.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-service-card',
  templateUrl: './service-card.component.html',
  styleUrls: ['./service-card.component.css']
})
export class ServiceCardComponent implements OnInit {

  faUser = faUser;    
  faIdCard = faIdCard;
  faCalendar = faCalendar;
  faMapMarkedAlt = faMapMarkedAlt;
  faPhone = faPhone;
  faAt = faAt;
  faRoad = faRoad;

  servicio:Servicio=new Servicio();

  constructor(private servicioService:ServicioService, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe( params =>{
      if(params['id']){
        this.servicioService.retrieve(params['id'])
            .subscribe(result => 
              {
                this.servicio = result;
                this.servicio.idservicio = params['id'];                                 
              }
            );
      }
    });        
  }
  
}