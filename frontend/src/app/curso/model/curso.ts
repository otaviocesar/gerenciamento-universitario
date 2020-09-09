export interface Curso {
    id: number;
    codigo: string;
    nome: string;
    dataCadastro: Date;
    cargaHoraria: string;
    alunos: [];
}
/* export class Curso {

    constructor(
        public id: number,
        public codigo: string,
        public nome: string,
        public dataCadastro: Date,
        public cargaHoraria: string
    ) {  }
  
  } */