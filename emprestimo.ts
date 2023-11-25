import { Solicitante } from "./solicitante";

export abstract class Emprestimo {
  static taxa_de_juros: number = 0.01;

  constructor(
    public id: number,
    public valor_requerido: number,
    public numero_parcelas: number,
    public solicitante: Solicitante
  ){}

  abstract aprovar(): boolean

  calcular_valor_parcela(): number{
    return this.valor_requerido * Emprestimo.taxa_de_juros / 1 - (1 + Emprestimo.taxa_de_juros)**this.numero_parcelas
  }

  calcular_valor_emprestimo(): number{
    return this.calcular_valor_parcela() * this.numero_parcelas
  }
}