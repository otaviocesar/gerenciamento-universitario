import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CursoNovoComponent } from './curso-novo/curso-novo.component';
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
    path: 'curso-novo',
    component: CursoNovoComponent,
    data: { title: 'Adicionar Curso' }
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
