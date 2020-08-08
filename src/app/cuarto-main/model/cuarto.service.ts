import { Injectable } from '@angular/core';
import {Cuarto} from '../model/cuarto'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of} from 'rxjs';
import { retry, catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CuartoService {
  url : string = "https://hostal-yuralpa.web.app/api/cuarto";
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


  delete(id:string):Observable<any>{
    return this.http.delete(this.url.concat('/').concat(id),this.httpOptions)
    .pipe(
    retry(1),
    tap(_ => this.log('Cuarto eliminado')),
    catchError(this.handleError<Cuarto>('Eliminar cuarto'))
  )};

  retrieve(id: string): Observable<Cuarto>  {    
    return this.http.get<Cuarto>(this.url.concat('/').concat(id), this.httpOptions)
    .pipe(
      retry(1)     
    );
  }

  list(page:string):Observable<Cuarto[]>{
    let paging="/page/";
    let list = this.url.concat(paging, page);
    return this.http.get<Cuarto[]>(list, this.httpOptions)
    .pipe(
    retry(1),
    tap(_ => this.log('User download')),
    catchError(this.handleError<Cuarto[]>('listUser',[]))
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
