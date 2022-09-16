// cria referência ao form e elementos de resposta do programa
const frm = document.querySelector("form");
const resp1 = document.querySelector("#outResp1");
const resp2 = document.querySelector("#outResp2");
const resp3 = document.querySelector("#outResp3");

// cria um "ouvinte" de evento, acionado quando o botão submit for clicado
frm.addEventListener("submit", (e) => {
    e.preventDefault();           // evita o envio do form
    const valorSaque = Number(frm.inValorSaque.value); // obtém os valores do form
    
    if ((valorSaque % 10) != 0) {
        alert(`Valor inválido para notas disponíveis (R$10, R$50, R$100)`)
    } else {
        
        let qtdNotas100 = Math.floor(valorSaque / 100);
        let resto = valorSaque % 100;
        let qtdNotas50 = Math.floor((resto / 50));
        let qtdNotas10 = Math.floor(((resto) % 50) / 10);
        
        if (qtdNotas100 > 0) {
            resp1.innerText = `Notas de R$100: ${qtdNotas100}`;
        }
        if (qtdNotas50 > 0) {
            resp2.innerText = `Notas de R$50: ${qtdNotas50}`;
        }
        if (qtdNotas10 > 0) {
            resp3.innerText = `Notas de R$10: ${qtdNotas10}`;
        }

    }
    
});