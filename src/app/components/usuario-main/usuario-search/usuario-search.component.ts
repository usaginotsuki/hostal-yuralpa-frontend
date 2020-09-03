import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Usuario } from 'src/app/shared/models/usuario';
import { UserService } from 'src/app/core/services/user.service';
import { faSearch, faCheck, faPlusSquare } from '@fortawesome/free-solid-svg-icons';



@Component({
  selector: 'app-usuario-search',
  templateUrl: './usuario-search.component.html',
  styleUrls: ['./usuario-search.component.css']
})
export class UsuarioSearchComponent implements OnInit {

  faSearch = faSearch; 
  faCheck  = faCheck;
  faPlusSquare=faPlusSquare;

  usuarios:Usuario[];

  @Output() userFound=new EventEmitter<Usuario>();
  
  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.list();
  }

  list(): void{
    this.userService.list(1,100).subscribe(
      result=>this.usuarios=result
    );
  }

  select(u:Usuario):void{
    console.log(u);
    this.userFound.emit(u);
  }

}
