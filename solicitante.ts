
export class Solicitante {

  constructor(
    public id: number,
    public nome: string,
    public idade: number,
    public renda_mensal: number,
    public habilitado: boolean,
    public matriculado: boolean
  ) { } 
  
  maior_idade = () => this.idade >= 18
}



