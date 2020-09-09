import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ApiService } from 'src/app/service/api.service';
import { MascaraUtil } from 'src/app/service/mascara';
@Component({
  selector: 'app-aluno-editar',
  templateUrl: './aluno-editar.component.html',
  styleUrls: ['./aluno-editar.component.scss']
})
export class AlunoEditarComponent implements OnInit {
  mascaraCpf = MascaraUtil.mascaraCpf;
  mascaraTel = MascaraUtil.mascaraTelefone;
  mascaraCep = MascaraUtil.mascaraCep;
  id: number = null;
  alunoForm: FormGroup;
  //curso: String = '';
  matricula: String = '';
  nome: String = '';
  cpf: String = '';
  endereco: String = '';
  cep: String = '';
  email: String = '';
  telefone: String = '';
  isLoadingResults = false;
  constructor(private router: Router, private route: ActivatedRoute, private api: ApiService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.getAluno(this.route.snapshot.params['id']);
    this.alunoForm = this.formBuilder.group({
   //'nomeCurso' : [null, Validators.required],
   'matricula' : [null, [Validators.required, Validators.pattern("^[0-9]+$")]],
   'nome' : [null, [Validators.required, Validators.minLength(5), Validators.maxLength(60)]],
   'cpf' : [null, Validators.required],
   'endereco' : [null, Validators.required],
   'cep' : [null, Validators.required],
   'email' : [null, [Validators.required, Validators.email]],
   'telefone' : [null, Validators.required],
 });
 }

 getAluno(id) {
  this.api.getAluno(id).subscribe(data => {
    this.id = data.id;
    this.alunoForm.setValue({
      matricula: data.matricula,
      nome: data.nome,
      cpf: data.cpf,
      cep: data.cep,
      endereco: data.endereco,
      email: data.email,
      telefone: data.telefone
    });
  });
}

updateAluno(form: NgForm) {
  this.isLoadingResults = true;
  this.api.updateAluno(this.id, form)
    .subscribe(res => {
        this.isLoadingResults = false;
        this.router.navigate(['/aluno-detalhe/' + this.id]);
      }, (err) => {
        console.log(err);
        this.isLoadingResults = false;
      }
    );
}
}
