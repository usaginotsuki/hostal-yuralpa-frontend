import { Injectable } from '@angular/core';
import { Comida } from "../../shared/models/comida";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of} from 'rxjs';
import { retry, catchError, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ComidaService {
  url : string = "https://hostal-yuralpa.web.app/api/meal";
  root:string="https://hostal-yuralpa.web.app/api/";

  httpOptions={
    headers:new HttpHeaders({
      'Content-Type':'application/json',
      Accept: 'application/json'
    })
  };
  constructor(private http:HttpClient) { }

  save(comida:Comida):Observable<any>{//create /update
    let cuartoBody=JSON.stringify(comida);
    console.log(cuartoBody);

    if(comida.idcomida===undefined){
      return this.http.post<Comida>(
        this.url,cuartoBody,this.httpOptions).
        pipe(
          retry(1),
          tap(_=>this.log('Comida añadida')),
          catchError(this.handleError<Comida>('createMeal'))
      )
    }
    else{
      return this.http.patch<Comida>(this.url.concat('/').concat(comida.idcomida),
      cuartoBody,this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError<Comida>('retrieveMeal'))      
      )
    }
  }

  retrieve(id: string): Observable<Comida>  {    
    return this.http.get<Comida>(this.url.concat('/').concat(id), this.httpOptions)
    .pipe(
      retry(1)     
    );
  }

  count(): Observable<any>  {    
    return this.http.get<any>( this.root.concat('count/meal'), this.httpOptions)
    .pipe(
      retry(1)     
    );
  }

  list(page: number, limit : number): Observable<Comida[]> {
    return this.http.get<Comida[]>(this.root.concat("page/meal/") + page + "/" + limit, this.httpOptions)
      .pipe(
        retry(1)
      );
  }

  delete(id:string):Observable<any>{
    return this.http.delete(this.url.concat('/').concat(id),this.httpOptions)
    .pipe(
    retry(1),
    tap(_ => this.log('Comida eliminado')),
    catchError(this.handleError<Comida>('Eliminar comida'))
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