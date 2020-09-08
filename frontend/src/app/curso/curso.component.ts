
import { Component, OnInit } from '@angular/core';
import { Curso } from 'src/app/curso/model/curso';
import { ApiService } from 'src/app/service/api.service';
@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.scss']
})
export class CursoComponent implements OnInit {
  displayedColumns: string[] = [ 'nome', 'codigo', 'acao'];
  dataSource: Curso[];
  isLoadingResults = true;
  constructor( private _api: ApiService) { }

  ngOnInit() {
    this._api.getCursos()
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