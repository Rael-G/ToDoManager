import { adicionarTarefa } from './adicionarTarefa.js';

//adiciona as tarefas salvas do local storage ao DOM
export function baixarTarefas() {
    const tarefas = JSON.parse(localStorage.getItem('tarefas')) || [];

    if (tarefas.length > 0) {

        tarefas.forEach(element => {
            adicionarTarefa(element, true);
        });
    }
}

//armazena uma tarefa no local storage
export function armazenarTarefa(tarefa) {

    const tarefas = JSON.parse(localStorage.getItem('tarefas')) || [];
    tarefas.push(tarefa);
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
}