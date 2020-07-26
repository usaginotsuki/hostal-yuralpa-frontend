import { Injectable } from '@angular/core';
import { Usuario } from "../model/usuario";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of} from 'rxjs';
import { retry, catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url : string = "https://hostal-yuralpa.web.app/api/usuarios";
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

  list(page:string):Observable<Usuario[]>{
    let paging="/page/";
    let list = this.url.concat(paging, page);
    return this.http.get<Usuario[]>(list, this.httpOptions)
    .pipe(
    retry(1),
    tap(_ => this.log('User download')),
    catchError(this.handleError<Usuario[]>('listUser',[]))
  )};

  delete(id:string):Observable<any>{
    return this.http.delete(this.url.concat('/').concat(id),this.httpOptions)
    .pipe(
    retry(1),
    tap(_ => this.log('Usuario eliminado')),
    catchError(this.handleError<Usuario>('Eliminar usuario'))
  )};

  retrieve(id: string): Observable<Usuario>  {    
    return this.http.get<Usuario>(this.url.concat('/').concat(id), this.httpOptions)
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