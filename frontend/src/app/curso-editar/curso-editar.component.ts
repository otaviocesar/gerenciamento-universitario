import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ApiService } from 'src/app/service/api.service';
@Component({
  selector: 'app-curso-editar',
  templateUrl: './curso-editar.component.html',
  styleUrls: ['./curso-editar.component.scss']
})
export class CursoEditarComponent implements OnInit {
  id: number = null;
  cursoForm: FormGroup;
  nome: String = '';
  codigo: String = '';
  cargaHoraria: number = null;
  isLoadingResults = false;
  constructor(private router: Router, private route: ActivatedRoute, private api: ApiService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.getCurso(this.route.snapshot.params['id']);
    this.cursoForm = this.formBuilder.group({
   'nome' : [null, Validators.required],
   'codigo' : [null, Validators.required],
   'cargaHoraria' : [null, Validators.required]
 });
 }

 getCurso(id) {
  this.api.getCurso(id).subscribe(data => {
    this.id = data.id;
    this.cursoForm.setValue({
      nome: data.nome,
      codigo: data.codigo,
      cargaHoraria: data.cargaHoraria
    });
  });
}

updateCurso(form: NgForm) {
  this.isLoadingResults = true;
  this.api.updateCurso(this.id, form)
    .subscribe(res => {
        this.isLoadingResults = false;
        this.router.navigate(['/curso-detalhe/' + this.id]);
      }, (err) => {
        console.log(err);
        this.isLoadingResults = false;
      }
    );
}
}