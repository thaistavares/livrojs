// cria referência ao form e elementos de resposta do programa
const frm = document.querySelector("form");
const resp1 = document.querySelector("span");
const resp2 = document.querySelector("h4");


const verServicoExiste = (servico) => {
    if (localStorage.getItem("servicoNome")) {    // se existir dados em localStorage
        // obtém seu conteúdo e a string é dividida em itens de vetor a cada ";"
        const servicos = localStorage.getItem("servicoNome").split(";");
        // o serviço deve ser convertido em string, pois o vetor contém strings
        return servicos.includes(servico.toString());
    } else {
        return false;
    }
}

const mostrarServicos = () => {

    const servicos = localStorage.getItem("servicoNome").split(";");
    resp1.innerText = `${servicos.length}`;

}

// cria um "ouvinte" de evento, acionado quando o botão submit for clicado
frm.addEventListener("submit", (e) => {
    e.preventDefault();           // evita o envio do form

    const servico = frm.inServico.value;            // conteúdo do inServico

    // chama function que verifica se produto já foi adicionado
    if (verServicoExiste(servico)) {
        alert("Este servico já foi adicionado. Por favor, informe outro...");
        frm.inServico.focus();
        return;
    }

    if (localStorage.getItem("servicoNome")) {    // se houver dados em localStorage
        // obtém o conteúdo já salvo e acrescenta ";" + dados do serviço
        const servicoNome = localStorage.getItem("servicoNome") + ";" + servico;
        localStorage.setItem("servicoNome", servicoNome);    // salva o serviço
    } else {    // senão, é a primeira vez que adiciona um produto
        localStorage.setItem("servicoNome", servico);    // salva o serviço (sem ";")
    }

    frm.reset();              // limpa o form
    frm.inServico.focus();    // joga o foco (cursor) no campo inServico
    mostrarServicos();

    return servicoNome;

});

    // chama a function quando a página é carregada para mostrar os serviços salvos
    window.addEventListener("load", mostrarServicos);

    frm.btExecutar.addEventListener("click", () => {

        const servicos = localStorage.getItem("servicoNome").split(";");
        localStorage.setItem("servicoNome", servicos);
        const execucao = servicos.shift();
        resp2.innerText = `${execucao}`;
        localStorage.setItem("servicoNome", servicos.join(";"));    // salva a nova lista (sem o removido)
        resp1.innerText = `${servicos.length}`;
        if (servicos.length == 0) {
            localStorage.removeItem("servicoNome");
        }
        
    });