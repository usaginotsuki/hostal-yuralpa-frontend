import { Injectable } from '@angular/core';
import { Habitacion } from "../model/habitacion";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of} from 'rxjs';
import { retry, catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HabitacionService {
  url : string = "https://hostal-yuralpa.web.app/api/habitacion";
  httpOptions={
    headers:new HttpHeaders({
      'Content-Type':'application/json',
      Accept: 'application/json'
    })
  };
  constructor(private http:HttpClient) { }
  save(habitacion:Habitacion):Observable<any>{//create /update
    let habitacionBody=JSON.stringify(habitacion);
    console.log(habitacionBody);

    if(habitacion.idhabitacion===undefined){
      return this.http.post<Habitacion>(
        this.url,habitacionBody,this.httpOptions).
        pipe(
          retry(1),
          tap(_=>this.log('Habitacion añadida')),
          catchError(this.handleError<Habitacion>('createHabitacion'))
      )
    }
    else{
      return this.http.patch<Habitacion>(this.url.concat('/').concat(habitacion.idhabitacion),
      habitacionBody,this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError<Habitacion>('retrieveHabitacion'))      
      )
    }
  }

  list(page:string):Observable<Habitacion[]>{
    let paging="/page/";
    let list = this.url.concat(paging, page);
    return this.http.get<Habitacion[]>(list, this.httpOptions)
    .pipe(
    retry(1),
    tap(_ => this.log('User download')),
    catchError(this.handleError<Habitacion[]>('listUser',[]))
  )};

  delete(id:string):Observable<any>{
    return this.http.delete(this.url.concat('/').concat(id),this.httpOptions)
    .pipe(
    retry(1),
    tap(_ => this.log('Habitacion eliminada')),
    catchError(this.handleError<Habitacion>('Eliminar usuario'))
  )};

  retrieve(id: string): Observable<Habitacion>  {    
    return this.http.get<Habitacion>(this.url.concat('/').concat(id), this.httpOptions)
    .pipe(
      retry(1)     
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      
      return of(result as T);
    };
  }

  private log(message: string) {
    console.log(message);
  }

}
