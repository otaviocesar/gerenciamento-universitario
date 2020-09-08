import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { Curso } from '../curso/model/curso';
import { Aluno } from '../aluno/model/aluno';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
const apiCurso = 'http://localhost:8080/cursos';
const apiAluno = 'http://localhost:8080/alunos';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getCursos (): Observable<Curso[]> {
    return this.http.get<Curso[]>(apiCurso)
      .pipe(
        tap(Cursos => console.log('leu os Cursos')),
        catchError(this.handleError('getCursos', []))
      );
  }

  getCurso(id: number): Observable<Curso> {
    const url = `${apiCurso}/${id}`;
    return this.http.get<Curso>(url).pipe(
      tap(_ => console.log(`leu o Curso id=${id}`)),
      catchError(this.handleError<Curso>(`getCurso id=${id}`))
    );
  }

  addCurso (Curso): Observable<Curso> {
    return this.http.post<Curso>(apiCurso, Curso, httpOptions).pipe(
      // tslint:disable-next-line:no-shadowed-variable
      tap((Curso: Curso) => console.log(`adicionou o Curso com w/ id=${Curso.id}`)),
      catchError(this.handleError<Curso>('addCurso'))
    );
  }

  updateCurso(id, Curso): Observable<any> {
    const url = `${apiCurso}/${id}`;
    return this.http.put(url, Curso, httpOptions).pipe(
      tap(_ => console.log(`atualiza o curso com id=${id}`)),
      catchError(this.handleError<any>('updateCurso'))
    );
  }

  deleteCurso (id): Observable<Curso> {
    const url = `${apiCurso}/${id}`;

    return this.http.delete<Curso>(url, httpOptions).pipe(
      tap(_ => console.log(`remove o curso com id=${id}`)),
      catchError(this.handleError<Curso>('deleteCurso'))
    );
  }

  getAlunos (): Observable<Aluno[]> {
    return this.http.get<Aluno[]>(apiAluno)
      .pipe(
        tap(Alunos => console.log('leu os Alunos')),
        catchError(this.handleError('getAlunos', []))
      );
  }

  getAluno(id: number): Observable<Aluno> {
    const url = `${apiAluno}/${id}`;
    return this.http.get<Aluno>(url).pipe(
      tap(_ => console.log(`leu o Aluno id=${id}`)),
      catchError(this.handleError<Aluno>(`getAluno id=${id}`))
    );
  }

  addAluno (Aluno): Observable<Aluno> {
    return this.http.post<Aluno>(apiAluno, Aluno, httpOptions).pipe(
      // tslint:disable-next-line:no-shadowed-variable
      tap((Aluno: Aluno) => console.log(`adicionou o Aluno com w/ id=${Aluno.id}`)),
      catchError(this.handleError<Aluno>('addAluno'))
    );
  }

  updateAluno(id, Aluno): Observable<any> {
    const url = `${apiAluno}/${id}`;
    return this.http.put(url, Aluno, httpOptions).pipe(
      tap(_ => console.log(`atualiza o produco com id=${id}`)),
      catchError(this.handleError<any>('updateAluno'))
    );
  }

  deleteAluno (id): Observable<Aluno> {
    const url = `${apiAluno}/delete/${id}`;

    return this.http.delete<Aluno>(url, httpOptions).pipe(
      tap(_ => console.log(`remove o Aluno com id=${id}`)),
      catchError(this.handleError<Aluno>('deleteAluno'))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}