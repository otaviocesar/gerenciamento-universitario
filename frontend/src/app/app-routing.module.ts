import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CursoComponent } from './curso/curso.component';
import { CursoNovoComponent } from './curso-novo/curso-novo.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { CursoEditarComponent } from './curso-editar/curso-editar.component';
import { AlunoEditarComponent } from './aluno-editar/aluno-editar.component';
import { AlunoComponent } from './aluno/aluno.component';
import { AlunoNovoComponent } from './aluno-novo/aluno-novo.component';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import { PrincipalComponent } from './principal/principal.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    data: { title: 'Dashboard' }
  },
  {
    path: 'principal',
    component: PrincipalComponent,
    data: { title: 'Visão Geral' }
  },
  {
    path: 'cursos',
    component: CursoComponent, 
    data: { title: 'Lista de Cursos' }
  },
  {
    path: 'curso-detalhe/:id',
    component: CursoDetalheComponent,
    data: { title: 'Detalhe do Curso' }
  },
  {
    path: 'curso-editar/:id',
    component: CursoEditarComponent,  
    data: { title: 'Editar o Curso' }
  },
  {
    path: 'curso-novo',
    component: CursoNovoComponent,
    data: { title: 'Adicionar Curso' }
  },
  {
    path: 'alunos',
    component: AlunoComponent, 
    data: { title: 'Lista de Alunos' }
  },
  {
    path: 'aluno-detalhe/:id',
    component: AlunoDetalheComponent,
    data: { title: 'Detalhe do Aluno' }
  },
  {
    path: 'aluno-editar/:id',
    component: AlunoEditarComponent,  
    data: { title: 'Editar o Aluno' }
  },
  {
    path: 'aluno-novo',
    component: AlunoNovoComponent,
    data: { title: 'Adicionar Aluno' }
  },
  { path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
