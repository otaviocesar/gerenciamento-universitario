import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ApiService } from 'src/app/service/api.service';
@Component({
  selector: 'app-curso-novo',
  templateUrl: './curso-novo.component.html',
  styleUrls: ['./curso-novo.component.scss']
})

export class CursoNovoComponent implements OnInit {
  cursoForm: FormGroup;
  nome: String = '';
  codigo: String = '';
  cargaHoraria: number = null;
  isLoadingResults = false;
  constructor(private router: Router, private api: ApiService, private formBuilder: FormBuilder) { }

  ngOnInit() {
     this.cursoForm = this.formBuilder.group({
    'nome' : [null, [Validators.required, Validators.minLength(5), Validators.maxLength(60)]],
    'codigo' : [null, [Validators.required, Validators.minLength(5), Validators.maxLength(60)]],
    'cargaHoraria' : [null, [Validators.required, Validators.pattern("^[0-9]+$")]]
  });
  }

  addCurso(form: NgForm) {
    this.isLoadingResults = true;
    this.api.addCurso(form)
      .subscribe(res => {
          const id = res['id'];
          this.isLoadingResults = false;
          this.router.navigate(['/curso-detalhe', id]);
        }, (err) => {
          console.log(err);
          this.isLoadingResults = false;
        });
  }
}
