"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Emprestimo = void 0;
class Emprestimo {
    constructor(id, valor_requerido, numero_parcelas, solicitante) {
        this.id = id;
        this.valor_requerido = valor_requerido;
        this.numero_parcelas = numero_parcelas;
        this.solicitante = solicitante;
    }
    calcular_valor_parcela() {
        return this.valor_requerido * Emprestimo.taxa_de_juros / 1 - (1 + Emprestimo.taxa_de_juros) ** this.numero_parcelas;
    }
    calcular_valor_emprestimo() {
        return this.calcular_valor_parcela() * this.numero_parcelas;
    }
}
exports.Emprestimo = Emprestimo;
Emprestimo.taxa_de_juros = 0.01;
