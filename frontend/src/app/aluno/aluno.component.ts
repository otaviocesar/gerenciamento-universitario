import { Component, OnInit } from '@angular/core';
import { Aluno } from 'src/app/aluno/model/aluno';
import { ApiService } from 'src/app/service/api.service';
@Component({
  selector: 'app-aluno',
  templateUrl: './aluno.component.html',
  styleUrls: ['./aluno.component.scss']
})
export class AlunoComponent implements OnInit {
  displayedColumns: string[] = [ 'nome', 'matricula', 'acao'];
  dataSource: Aluno[];
  isLoadingResults = true;
  constructor( private _api: ApiService) { }

  ngOnInit() {
    this._api.getAlunos()
    .subscribe(res => {
      this.dataSource = res;
      console.log(this.dataSource);
      this.isLoadingResults = false;
    }, err => {
      console.log(err);
      this.isLoadingResults = false;
    });
  }
}
