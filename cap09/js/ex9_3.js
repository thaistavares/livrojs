// cria referência ao form e elementos de resposta do programa
const frm = document.querySelector("form");
const respLista = document.querySelector("pre");

// cria um "ouvinte" de evento, acionado quando o botão submit for clicado
frm.addEventListener("submit", (e) => {
    e.preventDefault();           // evita o envio do form

    const nome = frm.inNome.value;            // conteúdo do inNome
    const peso = Number(frm.inPeso.value);    // conteúdo do inPeso

    // chama function que verifica se peso já foi apostado
    if (verApostaExiste(peso)) {
        alert("Alguém já apostou este peso. Por favor, informe outro...");
        frm.inPeso.focus();
        return;
    }

    if (localStorage.getItem("melanciaNome")) {    // se houver dados em localStorage
        // obtém o conteúdo já salvo e acrescenta ";" + dados da aposta
        const melanciaNome = localStorage.getItem("melanciaNome") + ";" + nome;
        const melanciaPeso = localStorage.getItem("melanciaPeso") + ";" + peso;
        localStorage.setItem("melanciaNome", melanciaNome);    // salva os dados
        localStorage.setItem("melanciaPeso", melanciaPeso);
    } else {    // senão, é a primeira aposta
        localStorage.setItem("melanciaNome", nome);    // salva os dados (sem ";")
        localStorage.setItem("melanciaPeso", peso);
    }

    mostrarApostas();      // chama function que mostra as apostas já salvas
    frm.reset();           // limpa o form
    frm.inNome.focus();    // joga o foco (cursor) no campo inNome

});

    const verApostaExiste = (peso) => {
        if (localStorage.getItem("melanciaPeso")) {    // se existir dados em localStorage
            // obtém seu conteúdo e a string é dividida em itens de vetor a cada ";"
            const pesos = localStorage.getItem("melanciaPeso").split(";");
            // o peso deve ser convertido em string, pois o vetor contém strings
            return pesos.includes(peso.toString());
        } else {
            return false;
        }
    }

    const mostrarApostas = () => {
        // se não há apostas armazenadas em localStorage
        if (!localStorage.getItem("melanciaNome")) {
            // limpa o espaço de exibição das apostas (para quando "Limpar Apostas")
            respLista.innerText = "";
            return;    // retorna (não executa os comandos abaixo)
        }

        // obtém o conteúdo das variáveis salvas no localStorage, separando-as
        // em elementos de vetor a cada ocorrência do ";"
        const nomes = localStorage.getItem("melanciaNome").split(";");
        const pesos = localStorage.getItem("melanciaPeso").split(";");

        let linhas = "";    // irá acumular as linhas a serem exibidas

        // repetição para percorrer todos os elementos do vetor
        for (let i = 0; i < nomes.length; i++) {
            // concatena em linhas os nomes dos apostadores e suas apostas
            linhas += nomes[i] + " - " + pesos[i] + "g \n";
        }

        //exibe as linhas (altera o conteúdo do elemento respLista)
        respLista.innerText = linhas; 

    };

    // chama a function quando a página é carregada para mostrar as apostas salvas
    window.addEventListener("load", mostraApostas);

frm.btVencedor.addEventListener("click", () => {
    
    // se não há apostas armazenadas em localStorage
    if (!localStorage.getItem("melanciaNome")) {
        alert("Não há apostas cadastradas");
        return;    // retorna (não executa os comandos abaixo)
    }

    // solicita o peso correto da melancia
    const pesoCorreto = Number(prompt("Qual o peso correto da melancia?"));
    
    // se não informou, retorna
    if (pesoCorreto == 0 || isNaN(pesoCorreto)) {
        return;
    }

    // obtém os dados armazenados, separando-os em elementos de vetor
    const nomes = localStorage.getItem("melanciaNome").split(";");
    const pesos = localStorage.getItem("melanciaPeso").split(";");
    
    // valor inicial para vencedor é o da primeira aposta
    let vencedorNome = nomes[0];
    let vencedorPeso = Number(pesos[0]);    // percorre as apostas
    
    for (let i = 1; i < nomes.length; i++) {
        // calcula a diferença de peso do "vencedor" e da aposta atual
        const difVencedor = Math.abs(vencedorPeso - pesoCorreto);
        const difAposta = Math.abs(Number(pesos[i]) - pesoCorreto);

        // se a diferença da aposta atual (no for) for menor que a do "vencedor"
        if (difAposta < difVencedor) {
            vencedorNome = nomes[i];            // troca o "vencedor"
            vencedorPeso = Number(pesos[i]);    // para este elemento
        }

    }
    
    // monta mensagem com dados do vencedor
    let mensagem = "Resultado - Peso Correto: " + pesoCorreto + "g";
    mensagem += "\n----------------------------------------------";
    mensagem += "\nVencedor: " + vencedorNome;
    mensagem += "\nAposta: " + vencedorPeso + "g";
    alert(mensagem);

    });

    frm.btLimpar.addEventListener("click", () => {
        
        // solicita confirmação para excluir as apostas
        if (confirm("Confirma exclusão de todas as apostas?")) {
            localStorage.removeItem("melanciaNome");    // remove as variáveis salvas
            localStorage.removeItem("melanciaPeso");    // em localStorage
            mostrarApostas(); // exibe a listagem vazia
        }
    
    });