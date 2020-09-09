import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';
import { Curso } from 'src/app/curso/model/curso';
@Component({
  selector: 'app-curso-detalhe',
  templateUrl: './curso-detalhe.component.html',
  styleUrls: ['./curso-detalhe.component.scss']
})
export class CursoDetalheComponent implements OnInit {
  curso: Curso = { id: null, nome: '', codigo: '', cargaHoraria: null, dataCadastro: null, alunos: []};
  isLoadingResults = true;
  constructor(private router: Router, private route: ActivatedRoute, private api: ApiService) { }


  ngOnInit() {
    this.getCurso(this.route.snapshot.params['id']);
  }

  getCurso(id) {
    this.api.getCurso(id)
      .subscribe(data => {
        this.curso = data;
        console.log(this.curso);
        this.isLoadingResults = false;
      });
  }

  deleteCurso(id) {
    this.isLoadingResults = true;
    this.api.deleteCurso(id)
      .subscribe(res => {
          this.isLoadingResults = false;
          this.router.navigate(['/cursos']);
        }, (err) => {
          console.log(err);
          this.isLoadingResults = false;
        }
      );
  }
}
