"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmprestimoEstudantil = void 0;
const emprestimo_1 = require("./emprestimo");
class EmprestimoEstudantil extends emprestimo_1.Emprestimo {
    aprovar() {
        return this.solicitante.renda_mensal > 1500 && this.solicitante.matriculado && this.solicitante.maior_idade() && this.solicitante.idade <= 30;
    }
}
exports.EmprestimoEstudantil = EmprestimoEstudantil;
