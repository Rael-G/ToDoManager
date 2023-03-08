const tarefas = JSON.parse(localStorage.getItem('tarefas')) || [];

//verifica se o id da tarefa existe no local storage e retorna indice
function verificaID(id) {

    for (let i = 0; i < tarefas.length; i++) {
        if (tarefas[i].id == id) {
            return i;
        }
    }
    return null;
}

//checa a tarefa e salva a modificação no local storage
export function checarTarefa(button) {

    const li = button.parentNode;
    const id = li.id;
    const i = verificaID(id);

    li.classList.toggle('concluida');

    if (i != null) {
        if (tarefas[i].concluida == true) {
            tarefas[i].concluida = false;
        }
        else {
            tarefas[i].concluida = true;
        }
        localStorage.setItem('tarefas', JSON.stringify(tarefas));
    }

}

//deleta a tarefa do local storage e remove do DOM
export function deletarTarefa(button) {

    const li = button.parentNode;
    const id = li.id;
    const i = verificaID(id);

    tarefas.splice(i, 1);
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
    li.remove();

}

//cria um formulario, altera o elemento do local storage e DOM e remove o formulario
export function editarTarefa(button,) {

    const formAntigo = document.querySelector('form.editar');
    if (formAntigo) {
      formAntigo.remove();
    }

    const li = button.parentNode;
    const id = li.id;
    const i = verificaID(id);
    let form = li.querySelector("form");

    if (!form) {


        form = document.createElement("form");
        form.classList.add("editar");
        form.innerHTML = '<label for="nome">Nome:</label><input type="text" id="nome" name="nome"><br><label for="descricao">Descrição:</label><input type="text" id="descricao" name="descricao"><button class="adicionar" type="submit"><i class="fas fa-pencil-alt"></i></button>';
        li.appendChild(form);


        form.appendChild(botaoCancelar());


        form.addEventListener('submit', function (evento) {
            evento.preventDefault();

            const nome = li.querySelector('#nome').value;
            const descricao = li.querySelector('#descricao').value;

            if (nome == '' || descricao == '') {
                alert("Os campos: Nome e Descrição não podem ficar vazios!");
                return null;
            }

            tarefas[i].nome = nome;
            tarefas[i].descricao = descricao;
            li.querySelector("h2").textContent = nome;
            li.querySelector("p").textContent = descricao;

            localStorage.setItem('tarefas', JSON.stringify(tarefas));
            form.remove();


        });
    }




}

//cria o botao cancelar
function botaoCancelar() {
    const cancel = document.createElement("button");
    cancel.classList.add("cancelar");
    cancel.setAttribute("type", "button");
    cancel.innerHTML = '<i class="fas fa-pencil-alt"></i>';
    return cancel;
}