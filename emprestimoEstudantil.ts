import { Emprestimo } from "./emprestimo";

export class EmprestimoEstudantil extends Emprestimo {
  aprovar(): boolean {
    return this.solicitante.renda_mensal > 1500 && this.solicitante.matriculado && this.solicitante.maior_idade() && this.solicitante.idade <= 30
  }
}