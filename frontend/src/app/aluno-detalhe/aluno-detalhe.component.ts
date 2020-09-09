import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';
import { Aluno } from 'src/app/aluno/model/aluno';
@Component({
  selector: 'app-aluno-detalhe',
  templateUrl: './aluno-detalhe.component.html',
  styleUrls: ['./aluno-detalhe.component.scss']
})
export class AlunoDetalheComponent implements OnInit {
  aluno: Aluno = { id: null, curso: [], matricula: '', nome: '', cpf: '', endereco:'', cep:'', email:'', telefone:''};
  isLoadingResults = true;
  constructor(private router: Router, private route: ActivatedRoute, private api: ApiService) { }


  ngOnInit() {
    this.getAluno(this.route.snapshot.params['id']);
  }

  getAluno(id) {
    this.api.getAluno(id)
      .subscribe(data => {
        this.aluno = data;
        console.log(this.aluno);
        this.isLoadingResults = false;
      });
  }

  deleteAluno(id) {
    this.isLoadingResults = true;
    this.api.deleteAluno(id)
      .subscribe(res => {
          this.isLoadingResults = false;
          this.router.navigate(['/alunos']);
        }, (err) => {
          console.log(err);
          this.isLoadingResults = false;
        }
      );
  }
}

