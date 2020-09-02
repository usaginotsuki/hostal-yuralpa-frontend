import { Injectable } from '@angular/core';
import { Servicio } from "../../shared/models/servicio";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of} from 'rxjs';
import { retry, catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {
  url : string = "https://hostal-yuralpa.web.app/api/acomm/service";
  root:string="https://hostal-yuralpa.web.app/api/";

  httpOptions={
    headers:new HttpHeaders({
      'Content-Type':'application/json',
      Accept: 'application/json'
    })
  };

  constructor(private http:HttpClient) { }

  save(servicio:Servicio):Observable<any>{//create /update
    let servicioBody=JSON.stringify(servicio);
    console.log(servicioBody);

    if(servicio.idservicio===undefined){
      return this.http.post<Servicio>(
        this.url,servicioBody,this.httpOptions).
        pipe(
          retry(1),
          tap(_=>this.log('Servicio añadido')),
          catchError(this.handleError<Servicio>('createServ'))
      )
    }
    else{
      return this.http.patch<Servicio>(this.url.concat('/').concat(servicio.idservicio),
      servicioBody,this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError<Servicio>('retrieveServ'))      
      )
    }
  }

  retrieve(id: string): Observable<Servicio>  {    
    return this.http.get<Servicio>(this.url.concat('/').concat(id), this.httpOptions)
    .pipe(
      retry(1)     
    );
  }

  count(): Observable<any>  {    
    return this.http.get<any>( this.root.concat('count/acomm/service'), this.httpOptions)
    .pipe(
      retry(1)     
    );
  }

  list(page: number, limit : number): Observable<Servicio[]> {
    return this.http.get<Servicio[]>(this.root.concat("page/acomm/service/") + page + "/" + limit, this.httpOptions)
      .pipe(
        retry(1)
      );
  }

  delete(id:string):Observable<any>{
    return this.http.delete(this.url.concat('/').concat(id),this.httpOptions)
    .pipe(
    retry(1),
    tap(_ => this.log('Servicio eliminado')),
    catchError(this.handleError<Servicio>('Eliminar servicio'))
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