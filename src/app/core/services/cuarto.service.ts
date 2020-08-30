import { Injectable } from '@angular/core';
import { Cuarto } from "../../shared/models/cuarto";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of} from 'rxjs';
import { retry, catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CuartoService {
  url : string = "https://hostal-yuralpa.web.app/api/room";
  root:string="https://hostal-yuralpa.web.app/api/";

  httpOptions={
    headers:new HttpHeaders({
      'Content-Type':'application/json',
      Accept: 'application/json'
    })
  };

  constructor(private http:HttpClient) { }

  save(cuarto:Cuarto):Observable<any>{//create /update
    let cuartoBody=JSON.stringify(cuarto);
    console.log(cuartoBody);

    if(cuarto.idcuarto===undefined){
      return this.http.post<Cuarto>(
        this.url,cuartoBody,this.httpOptions).
        pipe(
          retry(1),
          tap(_=>this.log('Cuarto añadido')),
          catchError(this.handleError<Cuarto>('createCuarto'))
      )
    }
    else{
      return this.http.patch<Cuarto>(this.url.concat('/').concat(cuarto.idcuarto),
      cuartoBody,this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError<Cuarto>('retrieveCuarto'))      
      )
    }
  }

  retrieve(id: string): Observable<Cuarto>  {    
    return this.http.get<Cuarto>(this.url.concat('/').concat(id), this.httpOptions)
    .pipe(
      retry(1)     
    );
  }

  count(): Observable<any>  {    
    return this.http.get<any>( this.root.concat('count/cuarto'), this.httpOptions)
    .pipe(
      retry(1)     
    );
  }

  list(page: number, limit : number): Observable<Cuarto[]> {
    return this.http.get<Cuarto[]>(this.root.concat("page/cuarto/") + page + "/" + limit, this.httpOptions)
      .pipe(
        retry(1)
      );
  }

  delete(id:string):Observable<any>{
    return this.http.delete(this.url.concat('/').concat(id),this.httpOptions)
    .pipe(
    retry(1),
    tap(_ => this.log('Cuarto eliminado')),
    catchError(this.handleError<Cuarto>('Eliminar cuarto'))
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