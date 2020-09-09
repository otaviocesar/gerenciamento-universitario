import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ApiService } from 'src/app/service/api.service';
import { CursoService } from 'src/app/aluno-novo/service/curso.service';
import { Curso } from '../curso/model/curso';

@Component({
  selector: 'app-aluno-novo',
  templateUrl: './aluno-novo.component.html',
  styleUrls: ['./aluno-novo.component.scss']
})

export class AlunoNovoComponent implements OnInit {
  curso = {} as Curso;
  cursos: Curso[];
  alunoForm: FormGroup;
  nomeCurso: String = '';
  matricula: String = '';
  nome: String = '';
  cpf: String = '';
  endereco: String = '';
  cep: String = '';
  email: String = '';
  telefone: String = '';
  isLoadingResults = false;
  constructor(private router: Router, private api: ApiService, private formBuilder: FormBuilder, private cursoService: CursoService) { }

  ngOnInit() {
    this.getCursos();
    this.alunoForm = this.formBuilder.group({
    'nomeCurso' : [null, Validators.required],       
    'matricula' : [null, Validators.required],
    'nome' : [null, Validators.required],
    'cpf' : [null, Validators.required],
    'endereco' : [null, Validators.required],
    'cep' : [null, Validators.required],
    'email' : [null, Validators.required],
    'telefone' : [null, Validators.required]
  });
  }

  // Chama o serviço para obtém todos os cursos
  getCursos() {
      this.cursoService.getCursos().subscribe((cursos: Curso[]) => {
      this.cursos = cursos;
    });
  } 

  addAluno(form: NgForm) {
    this.isLoadingResults = true;
    this.api.addAluno(form)
      .subscribe(res => {
          const id = res['id'];
          this.isLoadingResults = false;
          this.router.navigate(['/aluno-detalhe', id]);
        }, (err) => {
          console.log(err);
          this.isLoadingResults = false;
        });
  }

}
