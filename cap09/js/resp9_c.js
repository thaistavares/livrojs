// cria referência ao form e elementos de resposta do programa
const frm = document.querySelector("form");
const resp1 = document.querySelector("#outResp1");
const resp2 = document.querySelector("#outResp2");

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

    mostrarServicos();        // chama function que mostra os serviços já salvos
    frm.reset();              // limpa o form
    frm.inServico.focus();    // joga o foco (cursor) no campo inServico

});

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
        // se não há serviços armazenados em localStorage
        if (!localStorage.getItem("servicoNome")) {
            // limpa o espaço de exibição dos serviços
            resp2.innerText = "";
            return;    // retorna (não executa os comandos abaixo)
        }

        // obtém o conteúdo da variável salva no localStorage, separando-o
        // em elementos de vetor a cada ocorrência do ";"
        const servicos = localStorage.getItem("servicoNome").split(";");
        
        let linhas = "";

        // repetição para percorrer todos os elementos do vetor
        for (let i = 0; i < servicos.length; i++) {
            linhas += `${servicos[i]}\n`;
        }

        //exibe as linhas (altera o conteúdo do elemento respLista)
        resp1.innerText = ${linhas};

    };

    // chama a function quando a página é carregada para mostrar os serviços salvos
    window.addEventListener("load", mostrarServicos);

    frm.btExecutar.addEventListener("click", () => {
        
        // solicita confirmação para excluir os serviços
        if (confirm("Confirma exclusão de todos os serviços?")) {
            localStorage.removeItem("produtoNome"); // remove as variável salva em localStorage
            mostrarProdutos(); // exibe a listagem vazia
        }
    
    });