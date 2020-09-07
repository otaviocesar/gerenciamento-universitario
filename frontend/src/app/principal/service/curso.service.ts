import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Curso } from '../model/curso';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  url = 'http://localhost:8080/cursos'; // api rest
  

  // injetando o HttpClient
  constructor(private httpClient: HttpClient) { }

  // Headers
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  // Obtem todas as cursos
  getCursos(): Observable<Curso[]> {
    return this.httpClient.get<Curso[]>(this.url)
      .pipe(
        retry(2),
        catchError(this.handleError))
  }

  // Obtem um curso pelo id
  getCursoById(id: number): Observable<Curso> {
    return this.httpClient.get<Curso>(this.url + '/' + id)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  // salva curso
  saveCurso(curso: Curso): Observable<Curso> {
    return this.httpClient.post<Curso>(this.url, JSON.stringify(curso), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  // utualiza curso
  updateCurso(curso: Curso): Observable<Curso> {
    return this.httpClient.patch<Curso>(this.url + '/', JSON.stringify(curso), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  // deleta curso
  deleteCurso(curso: Curso) {
    return this.httpClient.delete<Curso>(this.url + '/' + curso.id, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  // Manipulação de erros
  handleError(error: HttpErrorResponse) {
    let errorCurso = '';
    if (error.error instanceof Error) {
      // Erro ocorreu no lado do client
      errorCurso = error.error.message;
    } else {
      // Erro ocorreu no lado do servidor
      errorCurso = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    }
    console.log(errorCurso);
    return throwError(errorCurso);
  };

}