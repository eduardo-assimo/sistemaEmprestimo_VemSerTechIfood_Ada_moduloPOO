import { Emprestimo} from "./emprestimo";

export class EmprestimoPessoal extends Emprestimo {
  aprovar(): boolean {
    return this.solicitante.renda_mensal > 2500
  }
 
}