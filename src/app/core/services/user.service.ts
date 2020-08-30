import { Injectable } from '@angular/core';
import { Usuario } from "../../shared/models/usuario";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of} from 'rxjs';
import { retry, catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url : string = "https://hostal-yuralpa.web.app/api/user";
  root:string="https://hostal-yuralpa.web.app/api/";

  httpOptions={
    headers:new HttpHeaders({
      'Content-Type':'application/json',
      Accept: 'application/json'
    })
  };

  constructor(private http:HttpClient) { }

  save(usuario:Usuario):Observable<any>{//create /update
    let usuarioBody=JSON.stringify(usuario);
    console.log(usuarioBody);

    if(usuario.idusuario===undefined){
      return this.http.post<Usuario>(
        this.url,usuarioBody,this.httpOptions).
        pipe(
          retry(1),
          tap(_=>this.log('Usuario añadido')),
          catchError(this.handleError<Usuario>('createUsuario'))
      )
    }
    else{
      return this.http.patch<Usuario>(this.url.concat('/').concat(usuario.idusuario),
      usuarioBody,this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError<Usuario>('retrieveUsuario'))      
      )
    }
  }

  retrieve(id: string): Observable<Usuario>  {    
    return this.http.get<Usuario>(this.url.concat('/').concat(id), this.httpOptions)
    .pipe(
      retry(1)     
    );
  }

  count(): Observable<any>  {    
    return this.http.get<any>( this.root.concat('count/user'), this.httpOptions)
    .pipe(
      retry(1)     
    );
  }

  list(page: number, limit : number): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.root.concat("page/user/") + page + "/" + limit, this.httpOptions)
      .pipe(
        retry(1)
      );
  }

  delete(id:string):Observable<any>{
    return this.http.delete(this.url.concat('/').concat(id),this.httpOptions)
    .pipe(
    retry(1),
    tap(_ => this.log('Usuario eliminado')),
    catchError(this.handleError<Usuario>('Eliminar usuario'))
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