import { Component, OnInit } from '@angular/core';
import { faUser, faIdCard, faCalendar, faMapMarkedAlt, faPhone, faAt, faRoad  } from '@fortawesome/free-solid-svg-icons';
import { Habitacion } from 'src/app/shared/models/habitacion';
import { HabitacionService } from 'src/app/core/services/habitacion.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-habitacion-card',
  templateUrl: './habitacion-card.component.html',
  styleUrls: ['./habitacion-card.component.css']
})
export class HabitacionCardComponent implements OnInit {
  faUser = faUser;    
  faIdCard = faIdCard;
  faCalendar = faCalendar;
  faMapMarkedAlt = faMapMarkedAlt;
  faPhone = faPhone;
  faAt = faAt;
  faRoad = faRoad;

  habitacion:Habitacion=new Habitacion();
  constructor(private habitacionService:HabitacionService, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe( params =>{
      if(params['id']){
        this.habitacionService.retrieve(params['id'])
            .subscribe(result => 
              {
                this.habitacion = result;
                this.habitacion.idhabitacion = params['id'];                                 
              }
            );
      }
    });        
  }
  
}