// cria referência ao form e elementos de resposta do programa
const frm = document.querySelector("form");
const resp1 = document.querySelector("#outResp1");
const resp2 = document.querySelector("#outResp2");

const numeros = [];    // declara vetor global

// cria um "ouvinte" de evento, acionado quando o botão submit for clicado
frm.addEventListener("submit", (e) => {
    e.preventDefault();           // evita o envio do form
    
    const numero = Number(frm.inNumero.value);          // obtém os dados do form

    
    if (numeros.includes(numero)) {
        alert("Número repetido. Digite outro número: ");
        frm.reset(); 
    } else {

        numeros.push(numero);    // adiciona os dados ao vetor de objetos
        frm.reset();             // limpa os campos do form
        frm.inNumero.focus();    // posiciona o cursor em inNumero

    }

    if (numeros.length == 0) {                     // se o tamanho do vetor for igual a zero
        alert("Não há números na lista");
        return;
    }

    let lista = "";    // para concatenar lista de crianças
    for (let i = 0; i < numeros.length; i++) {
        if (i == 0) {
            lista = `${lista}Números: ${numeros[i]}`;    
        } else {
            lista = `${lista}, ${numeros[i]}`;
        }
    }
    
    resp1.innerText = lista;    // exibe a lista

}); 

// cria um "ouvinte" de evento, acionado quando o botão Verificar for clicado
frm.btVerificar.addEventListener("click", () => {    // "escuta" clique em btMontar
    
    const copia = [...numeros];
    const vetor = copia.sort((a, b) => a - b);

    for (i = 0; i < vetor.length; i++) {
        if (vetor[i] == numeros[i]) {
            resp2.innerText = `Atenção... Números estão em ordem crescente`;
        } else {
            resp2.innerText = `Atenção... Números não estão em ordem crescente`;
        }
    }

});