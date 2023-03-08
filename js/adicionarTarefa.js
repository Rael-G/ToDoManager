import { armazenarTarefa } from './baixarArmazenar.js';

function criarTitulo(nome) {
    const titulo = document.createElement("h2");
    titulo.textContent = nome;
    return titulo;
}

function criarDescricao(descricao) {
    const desc = document.createElement("p");
    desc.textContent = descricao;
    return desc;
}

function botaoChecar() {
    const checar = document.createElement("button");
    checar.classList.add("checar");
    checar.setAttribute("type", "button");
    checar.innerHTML = '<i class="fas fa-check"></i>';
    return checar;
}

function botaoEditar() {
    const editar = document.createElement("button");
    editar.classList.add("editar");
    editar.setAttribute("type", "button");
    editar.innerHTML = '<i class="fas fa-pencil-alt"></i>';
    return editar;
}

function botaoDeletar() {
    const deletar = document.createElement("button");
    deletar.classList.add("deletar");
    deletar.setAttribute("type", "button");
    deletar.innerHTML = '<i class="fas fa-times"></i>';
    return deletar;
}

export function novaTarefa() {
    const nome = document.querySelector('#nome').value;
    const descricao = document.querySelector('#descricao').value;
    const id = Date.now(); // exemplo de id baseado na data e hora atual
    let tarefa = { nome: nome, descricao: descricao, id: id, concluida: false };
    return tarefa;
}

//recebe um objeto tarefa e um bool true se a tarefa ja estiver armazena no local storage
//verifica se os campos estão vazios, adiciona os atributos da tarefa recebida a um "li" que é adicionado em "ul"
export function adicionarTarefa(tarefaGerada, tarefaExistente) {
    const listaTarefas = document.querySelector('ul');
    let tarefa = tarefaGerada;

    if (tarefa.nome == '' || tarefa.descricao == '') {
        alert("Os campos: Nome e Descrição não podem ficar vazios!");
        return null;
    }

    const novoItem = document.createElement("li");

    if (tarefaExistente === false) {
        armazenarTarefa(tarefa);
    }
    else if (tarefa.concluida == true){
        novoItem.classList.add('concluida');
    }

    novoItem.setAttribute('id', tarefa.id);
    novoItem.appendChild(criarTitulo(tarefa.nome));
    novoItem.appendChild(criarDescricao(tarefa.descricao));
    novoItem.appendChild(botaoChecar());
    novoItem.appendChild(botaoEditar());
    novoItem.appendChild(botaoDeletar());
    listaTarefas.appendChild(novoItem);

    document.querySelector('#nome').value = '';
    document.querySelector('#descricao').value = '';
}