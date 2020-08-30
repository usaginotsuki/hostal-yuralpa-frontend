import { Injectable } from '@angular/core';
import { Habitacion } from "../../shared/models/habitacion";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of} from 'rxjs';
import { retry, catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HabitacionService {
  url : string = "https://hostal-yuralpa.web.app/api/acomm";
  root:string="https://hostal-yuralpa.web.app/api/";

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
          tap(_=>this.log('Alojamiento añadido')),
          catchError(this.handleError<Habitacion>('createAcomm'))
      )
    }
    else{
      return this.http.patch<Habitacion>(this.url.concat('/').concat(habitacion.idhabitacion),
      habitacionBody,this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError<Habitacion>('retrieveAcomm'))      
      )
    }
  }

  retrieve(id: string): Observable<Habitacion>  {    
    return this.http.get<Habitacion>(this.url.concat('/').concat(id), this.httpOptions)
    .pipe(
      retry(1)     
    );
  }

  count(): Observable<any>  {    
    return this.http.get<any>( this.root.concat('count/acomm'), this.httpOptions)
    .pipe(
      retry(1)     
    );
  }

  list(page: number, limit : number): Observable<Habitacion[]> {
    return this.http.get<Habitacion[]>(this.root.concat("page/acomm/") + page + "/" + limit, this.httpOptions)
      .pipe(
        retry(1)
      );
  }

  delete(id:string):Observable<any>{
    return this.http.delete(this.url.concat('/').concat(id),this.httpOptions)
    .pipe(
    retry(1),
    tap(_ => this.log('Alojamiento eliminado')),
    catchError(this.handleError<Habitacion>('Eliminar alojamiento'))
  )};

  

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