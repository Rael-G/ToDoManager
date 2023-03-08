import { adicionarTarefa, novaTarefa } from './adicionarTarefa.js';
import { checarTarefa, editarTarefa, deletarTarefa } from './botoes.js';
import { baixarTarefas } from './baixarArmazenar.js';

document.addEventListener('DOMContentLoaded', main);

function main() {

    baixarTarefas();

    const form = document.querySelector('form');
    form.addEventListener('submit', function (evento) {
        evento.preventDefault();
        adicionarTarefa(novaTarefa(), false);
    });

    const listaTarefas = document.querySelector('ul');
    listaTarefas.addEventListener('click', function (evento) {
        const target = evento.target;

        if (target.classList.contains('checar')) {
            evento.preventDefault();
            checarTarefa(target);
        } else if (target.classList.contains('editar')) {
            evento.preventDefault();
            editarTarefa(target);
        } else if (target.classList.contains('deletar')) {
            evento.preventDefault();
            deletarTarefa(target);
        } else if (target.classList.contains('cancelar')){
            evento.preventDefault();
            target.parentNode.remove();
        }
    });

    document.getElementById("nome").addEventListener("keyup", function(event) {
        if (event.keyCode === 13) {
          document.getElementById("descricao").focus();
        }
      });

}