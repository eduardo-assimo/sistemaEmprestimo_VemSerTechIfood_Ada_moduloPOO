import { SolicitacaoEmprestimo } from "./solicitacaoEmprestimo";
import { Emprestimo } from "./emprestimo";
import { Solicitante } from "./solicitante";
import { EmprestimoAutomovel } from "./emprestimoAutomovel";
import { EmprestimoEstudantil } from "./emprestimoEstudantil";
import { EmprestimoPessoal } from "./emprestimoPessoal";

const solicitante1 = new Solicitante(1, "Marcella", 30,2000, true, true)

const solicitacao = new SolicitacaoEmprestimo(1)
solicitacao.add(new EmprestimoPessoal(1, 1000, 10, solicitante1))
const retorno = solicitacao.processar()
console.log(retorno)



