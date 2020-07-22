import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuario-main/model/usuario';
import { faUserCircle,faGlobe, faPhone,faSave,faTimes } from '@fortawesome/free-solid-svg-icons';
import { UserService } from '../usuario-main/model/user.service';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {
  
  faUserCircle=faUserCircle;
  faGlobe=faGlobe;
  faPhone=faPhone;
  faSave=faSave;
  faTimes=faTimes;
  usuario:Usuario;

  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.userService.retrieve('UvabP7UnSV50gqM4Jkgo')
    .subscribe(result=>this.usuario=result);
  }

}
