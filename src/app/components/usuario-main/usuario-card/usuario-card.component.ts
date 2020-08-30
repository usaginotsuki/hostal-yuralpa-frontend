import { Component, OnInit } from '@angular/core';
import { faUser, faIdCard, faCalendar, faMapMarkedAlt, faPhone, faAt, faRoad  } from '@fortawesome/free-solid-svg-icons';
import { Usuario } from 'src/app/shared/models/usuario';
import { UserService } from 'src/app/core/services/user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario-card',
  templateUrl: './usuario-card.component.html',
  styleUrls: ['./usuario-card.component.css']
})
export class UsuarioCardComponent implements OnInit {

  faUser = faUser;    
  faIdCard = faIdCard;
  faCalendar = faCalendar;
  faMapMarkedAlt = faMapMarkedAlt;
  faPhone = faPhone;
  faAt = faAt;
  faRoad = faRoad;

  usuario:Usuario=new Usuario();

  constructor(private userService:UserService, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe( params =>{
      if(params['id']){
        this.userService.retrieve(params['id'])
            .subscribe(result => 
              {
                this.usuario = result;
                this.usuario.idusuario = params['id'];                                 
              }
            );
      }
    });        
  }
  
}