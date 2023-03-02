
document.addEventListener('DOMContentLoaded', main);

    function main() {

        const form = document.querySelector('form');
        form.addEventListener('submit', function(evento){
             evento.preventDefault();
             adicionarTarefa()
        });



    }

function adicionarTarefa(){

    const form = document.querySelector('form');
    const listaTarefas = document.querySelector('ul');

    const nomeTarefa = document.querySelector('#nome');
    const valorNome = nomeTarefa.value;

    const descricaoTarefa = document.querySelector('#descricao');
    const valorDescricao = descricaoTarefa.value;

    if(valorNome == '' || valorDescricao == ''){
        alert("Os campos: Nome e Descrição não podem ficar vazios!");
        return 0;
    }

    const novoItem = document.createElement("li");

    const titulo = document.createElement("h2");
    titulo.textContent = valorNome;

    const descricao = document.createElement("p");
    descricao.textContent = valorDescricao;

    const checkBtn = document.createElement("button");
    checkBtn.classList.add("checar");
    checkBtn.setAttribute("type", "submit");
    checkBtn.innerHTML = '<i class="fas fa-check"></i>';

    const editBtn = document.createElement("button");
    editBtn.classList.add("editar");
    editBtn.setAttribute("type", "submit");
    editBtn.innerHTML = '<i class="fas fa-pencil-alt"></i>';

    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("deletar");
    deleteBtn.setAttribute("type", "submit");
    deleteBtn.innerHTML = '<i class="fas fa-times"></i>';
    
    novoItem.appendChild(titulo);
    novoItem.appendChild(descricao);
    novoItem.appendChild(checkBtn);
    novoItem.appendChild(editBtn);
    novoItem.appendChild(deleteBtn);
    listaTarefas.appendChild(novoItem);

    nomeTarefa.value = '';
    descricaoTarefa.value = '';
}

function checarTarefa(){
    alert("Checado");
}

function editarTarefa() {
    alert("editado");
}

function deletarTarefa() {
    alert("deletado");
}