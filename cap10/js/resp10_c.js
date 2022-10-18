// cria referência ao form e elementos de resposta do programa
const frm = document.querySelector("form");
const dvQuadro = document.querySelector("#divQuadro");
const tbJogos = document.querySelector("table");

const inserirLinha = (clube1, clube2) => {
    const linha = tbJogos.insertRow(-1);    // adiciona uma linha na tabela
    const col1 = linha.insertCell(0);        // cria colunas na linha inserida
    const col2 = linha.insertCell(1);

    col1.innerText = clube1;    // joga um conteúdo em cada cédula
    col2.innerText = clube2;

};

frm.addEventListener("submit", (e) => {

    e.preventDefault();    // evita o envio do form

    const clube = frm.inClube.value;    // obtém conteúdo do campo    

    const h5 = document.createElement("h5");          // cria o elemento HTML h5
    const texto = document.createTextNode(clube);    // cria um texto
    
    h5.appendChild(texto);       // define que texto será filho de h5
    dvQuadro.appendChild(h5);    // e que h5 será filho de divQuadro

    frm.inClube.value = "";    // limpa campos do form
    frm.inClube.focus();       // posiciona o cursor em inTitulo

});

btMontar.addEventListener("click", (e) => {

    const listaH5 = document.querySelectorAll("h5");

    if (listaH5.length % 2 != 0) {
        alert("Informe um número par de clubes");
        frm.inClube.focus();
        return;
    }

    // percorre os elementos do vetor e os insere na tabela
    for (let i = 0; i < listaH5.length; i++) {
        inserirLinha(listaH5[i], listaH5[i]);
    }

});

btNovos.addEventListener("click", (e) => {

    window.location.reload();

});
