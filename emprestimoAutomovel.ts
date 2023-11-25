import { Emprestimo } from "./emprestimo";


export class EmprestimoAutomovel extends Emprestimo {
  aprovar(): boolean {
    return this.solicitante.renda_mensal > 3000 && this.solicitante.habilitado
  }

}