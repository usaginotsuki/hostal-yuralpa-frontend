import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Cuarto } from 'src/app/shared/models/cuarto';
import { CuartoService } from 'src/app/core/services/cuarto.service';
import { faSearch, faCheck, faPlusSquare } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-cuarto-search',
  templateUrl: './cuarto-search.component.html',
  styleUrls: ['./cuarto-search.component.css']
})
export class CuartoSearchComponent implements OnInit {

  faSearch = faSearch; 
  faCheck  = faCheck;
  faPlusSquare=faPlusSquare;
  cuartos:Cuarto[];
  @Output() acommFound=new EventEmitter<Cuarto>();
  constructor(private cuartoService:CuartoService) { }

  ngOnInit(): void {    
    this.list();
  }

  list() : void {
    this.cuartoService.list(1,10).subscribe(result => this.cuartos = result);
  }

  select(a:Cuarto) :void {
    console.log(a);
    this.acommFound.emit(a);
  }

}