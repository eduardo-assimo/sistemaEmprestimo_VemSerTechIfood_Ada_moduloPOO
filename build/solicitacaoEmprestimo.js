"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SolicitacaoEmprestimo = void 0;
class SolicitacaoEmprestimo {
    constructor(id) {
        this.id = id;
        this.emprestimos = [];
    }
    add(emprestimo) {
        this.emprestimos.push(emprestimo);
    }
    processar() {
        const aprovados = [];
        const reprovados = [];
        for (const emprestimo of this.emprestimos) {
            if (emprestimo.aprovar()) {
                aprovados.push(emprestimo);
            }
            else {
                reprovados.push(emprestimo);
            }
        }
        return { aprovados, reprovados };
    }
}
exports.SolicitacaoEmprestimo = SolicitacaoEmprestimo;
