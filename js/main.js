import { adicionarTarefa, novaTarefa } from './adicionarTarefa.js';
import { checarTarefa } from './checarTarefa.js';
import { deletarTarefa } from './deletarTarefa.js';
import { baixarTarefas } from './baixarArmazenar.js';
import { editarTarefa} from './editarTarefa.js'

document.addEventListener('DOMContentLoaded', main);

    function main() {

        baixarTarefas();

        const form = document.querySelector('form');
        form.addEventListener('submit', function(evento){
             evento.preventDefault();
             adicionarTarefa(novaTarefa(), false);
        });

        const listaTarefas = document.querySelector('ul');
        listaTarefas.addEventListener('click', function(evento) {
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
            }
        });

    }