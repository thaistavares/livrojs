// cria referência ao form e elementos de resposta do programa
const frm = document.querySelector("form");
const resp1 = document.querySelector("#outResp1");
const resp2 = document.querySelector("#outResp2");

// cria um "ouvinte" de evento, acionado quando o botão submit for clicado
frm.addEventListener("submit", (e) => {
    e.preventDefault();           // evita o envio do form
    
    const ladoA = Number(frm.inLadoA.value); // obtém os valores do form
    const ladoB = Number(frm.inLadoB.value);
    const ladoC = Number(frm.inLadoC.value);

    if ((ladoA > (ladoB + ladoC)) || (ladoB > (ladoA + ladoC)) || (ladoC > (ladoA + ladoB))) {
        resp1.innerText = `Lados não podem formar um triângulo`;
    } else {
        if ((ladoA == ladoB) && (ladoA == ladoC)) {
            resp1.innerText = `Lados podem formar um triângulo`;
            resp2.innerText = `Tipo: Equilátero`;
        } else if ((ladoA == ladoB) || (ladoA == ladoC) || (ladoB == ladoC)) {
            resp1.innerText = `Lados podem formar um triângulo`;
            resp2.innerText = `Tipo: Isósceles`;
        } else if ((ladoA != ladoB) && (ladoA != ladoC)) {
            resp1.innerText = `Lados podem formar um triângulo`;
            resp2.innerText = `Tipo: Escaleno`
        }
    } 
});