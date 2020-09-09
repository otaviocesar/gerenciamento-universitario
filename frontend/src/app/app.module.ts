import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatListModule } from "@angular/material/list";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatTableModule } from "@angular/material/table";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatSelectModule } from "@angular/material/select";
import { CursoComponent } from './curso/curso.component';
import { AlunoComponent } from './aluno/aluno.component';
import { PrincipalComponent } from './principal/principal.component';
import { CursoNovoComponent } from './curso-novo/curso-novo.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { CursoEditarComponent } from './curso-editar/curso-editar.component';
import { AlunoNovoComponent } from './aluno-novo/aluno-novo.component';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import { AlunoEditarComponent } from './aluno-editar/aluno-editar.component';
import { ExcelService } from './service/excel.service';
import { TextMaskModule } from 'angular2-text-mask';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CursoComponent,
    AlunoComponent,
    PrincipalComponent,
    CursoNovoComponent,
    CursoDetalheComponent,
    CursoEditarComponent,
    AlunoNovoComponent,
    AlunoDetalheComponent,
    AlunoEditarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,  
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatIconModule,
    MatListModule,
    MatProgressSpinnerModule, 
    MatSelectModule,
    MatSidenavModule,  
    MatTableModule,
    MatToolbarModule,
    TextMaskModule,
  ],
  providers: [ { provide: 'ORIGIN_URL', useValue: location.origin }, ExcelService],
  bootstrap: [AppComponent]
})
export class AppModule { }
