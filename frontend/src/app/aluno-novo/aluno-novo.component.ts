import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ApiService } from 'src/app/service/api.service';
@Component({
  selector: 'app-aluno-novo',
  templateUrl: './aluno-novo.component.html',
  styleUrls: ['./aluno-novo.component.scss']
})

export class AlunoNovoComponent implements OnInit {
  alunoForm: FormGroup;
  curso: String = '';
  matricula: String = '';
  nome: String = '';
  cpf: String = '';
  endereco: String = '';
  cep: String = '';
  email: String = '';
  telefone: String = '';
  isLoadingResults = false;
  constructor(private router: Router, private api: ApiService, private formBuilder: FormBuilder) { }

  ngOnInit() {
     this.alunoForm = this.formBuilder.group({
    'curso' : [null, Validators.required],
    'matricula' : [null, Validators.required],
    'nome' : [null, Validators.required],
    'cpf' : [null, Validators.required],
    'endereco' : [null, Validators.required],
    'cep' : [null, Validators.required],
    'email' : [null, Validators.required],
    'telefone' : [null, Validators.required]
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
