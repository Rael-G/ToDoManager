
document.addEventListener('DOMContentLoaded', main);

    function main() {

        baixaTarefas();

        const form = document.querySelector('form');
        form.addEventListener('submit', function(evento){
             evento.preventDefault();
             adicionarTarefa(criaObjTarefa(), false);
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

function adicionarTarefa(objCriado, tarefaExistente){

    const listaTarefas = document.querySelector('ul');
    let tarefa = objCriado;

    if(tarefa.nome == '' || tarefa.descricao == ''){
        alert("Os campos: Nome e Descrição não podem ficar vazios!");
        return 0;
    }

    if(tarefaExistente === false) {
        console.log("chamando armazen ");
        armazenaTarefa(tarefa);
    }

    const novoItem = document.createElement("li");
    const titulo = document.createElement("h2");
    titulo.textContent = tarefa.nome;
    const descricao = document.createElement("p");
    descricao.textContent = tarefa.descricao;
    const id = tarefa.id;
    console.log(tarefa.nome + "" + tarefa.descricao)

    const checkBtn = document.createElement("button");
    checkBtn.classList.add("checar");
    checkBtn.setAttribute("type", "button");
    checkBtn.innerHTML = '<i class="fas fa-check"></i>';

    const editBtn = document.createElement("button");
    editBtn.classList.add("editar");
    editBtn.setAttribute("type", "button");
    editBtn.innerHTML = '<i class="fas fa-pencil-alt"></i>';

    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("deletar");
    deleteBtn.setAttribute("type", "button");
    deleteBtn.innerHTML = '<i class="fas fa-times"></i>';
    
    novoItem.setAttribute('id', id);
    novoItem.appendChild(titulo);
    novoItem.appendChild(descricao);
    novoItem.appendChild(checkBtn);
    novoItem.appendChild(editBtn);
    novoItem.appendChild(deleteBtn);
    listaTarefas.appendChild(novoItem);

    document.querySelector('#nome').value = '';
    document.querySelector('#descricao').value = '';
}

function checarTarefa(button){
    console.log("check", button);
    
}

function editarTarefa(button) {
    console.log("edit", button)
    
}

function deletarTarefa(button) {
    console.log("delete", button)
    
}

function armazenaTarefa(tarefa) {
    
    const tarefas = JSON.parse(localStorage.getItem('tarefas')) || [];
    tarefas.push(tarefa);
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
 
}

function baixaTarefas(){
    const tarefas = JSON.parse(localStorage.getItem('tarefas')) || [];
    console.log(tarefas)
    console.log("tentando baixar")
   // if(tarefas.lenght > 0) {
        for (i = 0; i <= tarefas.lenght; i++){
            adicionarTarefa(tarefas[i], true);
            console.log("baixado");
        }

        tarefas.array.forEach(element => {
            console.log("baixado for each")
            adicionarTarefa(element, true);
        });
   // }
}

function criaObjTarefa() {
    const nome = document.querySelector('#nome').value;
    const descricao = document.querySelector('#descricao').value;
    const id = Date.now(); // exemplo de id baseado na data e hora atual

    return tarefa = {nome: nome, descricao : descricao, id: id};
}