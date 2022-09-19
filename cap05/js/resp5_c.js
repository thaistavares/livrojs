// cria referência ao form e elementos de resposta do programa
const frm = document.querySelector("form");
const resp1 = document.querySelector("#outResp1");
const resp2 = document.querySelector("#outResp2");

// cria um "ouvinte" de evento, acionado quando o botão submit for clicado
frm.addEventListener("submit", (e) => {
    e.preventDefault();           // evita o envio do form
    
    const numero = Number(frm.inNumero.value);   // obtém o número informado
    let qtdDivisores = "";
    let divisor;
    let soma = 0;

    for (let i = 1; i < numero; i++) {    // cria laço de repetição de 1 até numero
        
        if (numero % i == 0) {
            divisor = i;
            if (divisor != (numero/2)) {
                qtdDivisores = `${qtdDivisores}${divisor}, `; 
            } else {
                qtdDivisores = `${qtdDivisores}${divisor}`; 
            }
            soma = soma + divisor;
        }
    }

    resp1.innerText = `Divisores do ${numero}: ${qtdDivisores} (Soma: ${soma})`;

    if (soma == numero) {
        resp2.innerText = `${numero} É um Número Perfeito`;
    } else {
        resp2.innerText = `${numero} Não É um Número Perfeito`;
    }
    
});