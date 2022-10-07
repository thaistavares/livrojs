// cria referência ao form e elementos de resposta do programa
// const frm = document.querySelector("form");
const imClube = document.querySelector("#imgClube");
const dvTitulo = document.querySelector("#dvTitulo");
const inRadios = document.querySelectorAll("input");

const trocarClube = () => {
    const clubes = ["Brasil", "Pelotas", "Farroupilha"];    // vetor com a lista de clubes
    let selecao;
    
    // percorre os inRadios para verificar qual está selecionado
    for (let i = 0; i < inRadios.length; i++) {
        if (inRadios[i].checked) {
            selecao = i;    // se selecionado, armazena o índice do radio selecionado
            break;          // e sai da repetição
        }
    }

    if (selecao <= 2) {    // se selecao for menor ou igual a dois, então torce por algum clube
        dvTitulo.className = `row cores-${clubes[selecao]}`;    // modifica a cor
        // modifica a imagem de acordo com a seleção do cliente
        imClube.src = `img/${clubes[selecao].toLowerCase()}.png`;
        imClube.className = "img-fluid";         // muda o estilo para exibir a imagem 
        imClube.alt = `Símbolo do ${clubes[selecao]}`;     // modifica o atributo alt - textp alternativo
        localStorage.setItem("clube", clubes[selecao]);    // salva no navegador a escolha do cliente  
    } else {    // selecionou "Nenhum"
        dvTitulo.className = "row";          // tira a classe de cor de divTitulo
        imClube.className = "d-none";        // oculta a imagem
        imClube.alt = "";                    // limpa o texto alternativo
        localStorage.removeItem("clube");    // remove a variável do localStorage
    }

}

// percorre os elementos para associar function ao evento change
for (const inRadio of inRadios) {
    inRadio.addEventListener("change", trocarClube);
}

// associa ao evento change de cada botão do form a função trocarClube
// frm.rbBrasil.addEventListener("change", trocarClube);
// frm.rbPelotas.addEventListener("change", trocarClube);
// frm.rbFarroupilha.addEventListener("change", trocarClube);

const verificarClube = () => {
    if (localStorage.getItem("clube")) {    // se já estiver salvo algum clube
        const clube = localStorage.getItem("clube");    // obtém o nome do clube
        if (clube == "Brasil") {    // conforme o clube, marca checked
            inRadios[0].checked = true;
        } else if (clube == "Pelotas") {
            inRadios[1].checked = true;
       } else {
            inRadios[2].checked = true;
        }
        trocarClube();    // chama function que troca imagem e cores
    }
}

// ao carregar a página, verifica se cliente já selecionou clube anteriormente
window.addEventListener("load", verificarClube);