import { adicionarTarefa } from './adicionarTarefa.js';

export function baixarTarefas(){
    const tarefas = JSON.parse(localStorage.getItem('tarefas')) || [];

    if(tarefas.length > 0) {

        tarefas.forEach(element => {
            adicionarTarefa(element, true);
        });
    }
}

export function armazenarTarefa(tarefa) {
    
    const tarefas = JSON.parse(localStorage.getItem('tarefas')) || [];
    tarefas.push(tarefa);
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
}