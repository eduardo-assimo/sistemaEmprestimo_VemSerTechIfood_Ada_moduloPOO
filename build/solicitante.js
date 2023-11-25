"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Solicitante = void 0;
class Solicitante {
    constructor(id, nome, idade, renda_mensal, habilitado, matriculado) {
        this.id = id;
        this.nome = nome;
        this.idade = idade;
        this.renda_mensal = renda_mensal;
        this.habilitado = habilitado;
        this.matriculado = matriculado;
        this.maior_idade = () => this.idade >= 18;
    }
}
exports.Solicitante = Solicitante;
