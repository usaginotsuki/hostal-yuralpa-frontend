import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Habitacion } from 'src/app/shared/models/habitacion';
import { HabitacionService } from 'src/app/core/services/habitacion.service';
import { faSearch, faCheck, faPlusSquare } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-habitacion-search',
  templateUrl: './habitacion-search.component.html',
  styleUrls: ['./habitacion-search.component.css']
})
export class HabitacionSearchComponent implements OnInit {

  faSearch = faSearch; 
  faCheck  = faCheck;
  faPlusSquare=faPlusSquare;
  acomms:Habitacion[];
  @Output() acommFound=new EventEmitter<Habitacion>();
  constructor(private acommService:HabitacionService) { }

  ngOnInit(): void {    
    this.list();
  }

  list() : void {
    this.acommService.list(1,10).subscribe(result => this.acomms = result);
  }

  select(a:Habitacion) :void {
    console.log(a);
    this.acommFound.emit(a);
  }

}