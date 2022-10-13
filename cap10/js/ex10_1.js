// cria referência ao form e elementos de resposta do programa
const frm = document.querySelector("form");
const dvQuadro = document.querySelector("#dvQuadro");

// cria um "ouvinte" de evento, acionado quando o botão submit for clicado
frm.addEventListener("submit", (e) => {
    e.preventDefault();           // evita o envio do form

    const tarefa = frm.inTarefa.value;    // conteúdo do inTarefa

    const h5 = document.createElement("h5");          // cria o elemento HTML h5
    const texto = document.createTextNode(tarefa);    // cria um texto
    
    h5.appendChild(texto);       // define que texto será filho de h5
    dvQuadro.appendChild(h5);    // e que h5 será filho de divQuadro

    frm.inTarefa.value = "";     // limpa o campo de edição
    frm.inTarefa.focus();        // joga o cursor neste campo

});

frm.btSelecionar.addEventListener("click", () => {
    const tarefas = document.querySelectorAll("h5");    // obtém tags h5 da página

    if (tarefas.length == 0) {
        alert("Não há tarefas para selecionar");    // se não houver tarefas, exibe um alerta
    }

    let aux = -1;    // variável auxiliar para indicar linha selecionada

    // percorre a lista de elementos h5 inseridos na página, ou seja, tarefas
    for (let i = 0; i < tarefas.length; i++) {
        // se a tag for da classe tarefa-selecionada (estiver selecionada)
        if (tarefas[i].className == "tarefa-selecionada") {
            tarefas[i].className = "tarefa-normal";    // troca para normal
            aux = i;    // muda o valor da variável auxiliar
            break;      // sai da repetição
        }
    }

    // se a linha que está selecionada for a última, então voltará para a primeira
    if (aux == tarefas.length -1) {
        aux = -1;
    }

    tarefas[aux+1].className = "tarefa-selecionada";    // muda estilo da próxima linha

});

frm.btRetirar.addEventListener("click", () => {
    const tarefas = document.querySelectorAll("h5");    // obtém tags h5 da página

    let aux = -1;    // variável auxiliar para indicar linha selecionada

    // percorre a lista das tarefas inseridas na página (elementos h5)
    tarefas.forEach((tarefa, i) => {
        if (tarefa.className == "tarefa-selecionada") {    // se for da classe tarefa-selecionada
            aux = i;    // muda valor da variável aux
        }
    });

    if (aux == -1) {    // se não houver tarefa selecionada (ou se a lista estiver vazia...)
        alert("Selecione uma tarefa para removê-la");
        return;
    }

    // solicita confirmação (exibindo o conteúdo da tag h5 selecionada)
    if (confirm(`Confirma Exclusão de "${tarefas[aux].innerText}"?`)) {
        dvQuadro.removeChild(tarefas[aux]);    // remove um dos filhos de divQuadro
    }

});