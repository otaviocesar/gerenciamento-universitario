import { Component, OnInit } from '@angular/core';
import { AlunoService } from './service/aluno.service';
import { CursoService } from './service/curso.service';
import { Curso } from '../curso/model/curso';
import { Aluno } from '../aluno/model/aluno';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.sass']
})
export class PrincipalComponent implements OnInit {

  curso = {} as Curso;
  cursos: Curso[];

  aluno = {} as Aluno;
  alunos: Aluno[];

  constructor(private cursoService: CursoService, private alunoService: AlunoService) {}

  ngOnInit(): void {
    this.getCursos();
    this.getAlunos();
  }
    // Chama o serviço para obtém todos os cursos
    getCursos() {
      this.cursoService.getCursos().subscribe((cursos: Curso[]) => {
      this.cursos = cursos;
      });
    } 
    // Chama o serviço para obtém todos os alunos
    getAlunos() {
      this.alunoService.getAlunos().subscribe((alunos: Aluno[]) => {
      this.alunos = alunos;
      });
    }      
   
  // limpa o formulario
  cleanForm(form: NgForm) {
    form.resetForm();
  }
}
