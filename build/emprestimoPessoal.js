"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmprestimoPessoal = void 0;
const emprestimo_1 = require("./emprestimo");
class EmprestimoPessoal extends emprestimo_1.Emprestimo {
    aprovar() {
        return this.solicitante.renda_mensal > 2500;
    }
}
exports.EmprestimoPessoal = EmprestimoPessoal;
