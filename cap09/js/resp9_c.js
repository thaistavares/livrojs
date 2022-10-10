// cria referência ao form e elementos de resposta do programa
const frm = document.querySelector("form");
const respLista = document.querySelector("pre");

// cria um "ouvinte" de evento, acionado quando o botão submit for clicado
frm.addEventListener("submit", (e) => {
    e.preventDefault();           // evita o envio do form

    const produto = frm.inProduto.value;            // conteúdo do inProduto

    // chama function que verifica se produto já foi adicionado
    if (verProdutoExiste(produto)) {
        alert("Este produto já foi adicionado. Por favor, informe outro...");
        frm.inProduto.focus();
        return;
    }

    if (localStorage.getItem("produtoNome")) {    // se houver dados em localStorage
        // obtém o conteúdo já salvo e acrescenta ";" + dados do produto
        const produtoNome = localStorage.getItem("produtoNome") + ";" + produto;
        localStorage.setItem("produtoNome", produtoNome);    // salva o produto
    } else {    // senão, é a primeira vez que adiciona um produto
        localStorage.setItem("produtoNome", produto);    // salva o produto (sem ";")
    }

    mostrarProdutos();      // chama function que mostra os produtos já salvos
    frm.reset();           // limpa o form
    frm.inProduto.focus();    // joga o foco (cursor) no campo inProduto

});

    const verProdutoExiste = (produto) => {
        if (localStorage.getItem("produtoNome")) {    // se existir dados em localStorage
            // obtém seu conteúdo e a string é dividida em itens de vetor a cada ";"
            const produtos = localStorage.getItem("produtoNome").split(";");
            // o produto deve ser convertido em string, pois o vetor contém strings
            return produtos.includes(produto.toString());
        } else {
            return false;
        }
    }

    const mostrarProdutos = () => {
        // se não há produtos armazenados em localStorage
        if (!localStorage.getItem("produtoNome")) {
            // limpa o espaço de exibição dos produtos (para quando "Limpar Lista")
            respLista.innerText = "";
            return;    // retorna (não executa os comandos abaixo)
        }

        // obtém o conteúdo da variável salva no localStorage, separando-o
        // em elementos de vetor a cada ocorrência do ";"
        const produtos = localStorage.getItem("produtoNome").split(";");
        
        let ordem = produtos.sort();    // ordena o vetor produtos em ordem alfabética
        let linhas = "";

        // repetição para percorrer todos os elementos do vetor
        for (let i = 0; i < produtos.length; i++) {
            linhas += `${ordem[i]}\n`;
        }

        //exibe as linhas (altera o conteúdo do elemento respLista)
        respLista.innerText = `Produtos Adicionados\n--------------------\n${linhas}`;

    };

    // chama a function quando a página é carregada para mostrar os produtos salvos
    window.addEventListener("load", mostrarProdutos);

    frm.btLimpar.addEventListener("click", () => {
        
        // solicita confirmação para excluir os produtos
        if (confirm("Confirma exclusão de todos os produtos?")) {
            localStorage.removeItem("produtoNome"); // remove as variável salva em localStorage
            mostrarProdutos(); // exibe a listagem vazia
        }
    
    });