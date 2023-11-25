import { Emprestimo } from "./emprestimo"

interface EmprestimosProcessados {
  aprovados: Emprestimo[];
  reprovados: Emprestimo[];
}

export class SolicitacaoEmprestimo {
  public emprestimos: Emprestimo[] = []
  
  constructor(
    public id: number,
  ) {}

  add(emprestimo: Emprestimo): void {
    this.emprestimos.push(emprestimo)
  }
    
  processar(): EmprestimosProcessados {
    const aprovados: Emprestimo[] = []
    const reprovados: Emprestimo[] = []

    for (const emprestimo of this.emprestimos){
      if (emprestimo.aprovar()) {
        aprovados.push(emprestimo)
      } else {
        reprovados.push(emprestimo)
      }
    }
    return { aprovados, reprovados } 
  }
  
}
