// cria referência ao form e elementos de resposta do programa
const frm = document.querySelector("form");
const resp = document.querySelector("h3");

// cria um "ouvinte" de evento, acionado quando o botão submit for clicado
frm.addEventListener("submit", (e) => {
    e.preventDefault();           // evita o envio do form
    
    const numero = Number(frm.inNumero.value); // obtém o número informado
    /* let numDivisores = 0;   // declara e iniciliza o contador
    
    for (let i = 1; i <= numero; i++) {   // percorre todos os possíveis divisores de numero
        if (numero % i == 0) {   // verifica se i (1, 2, 3,...) é divisor do numero
            numDivisores++;   // se for, incrementa o contador
        } 
    }
    
    if (numDivisores == 2) {   // é primo se possui apenas dois divisores
        resp.innerText = `${numero} é primo`;
    } else {
        resp.innerText = `${numero} não é primo`;
    } */

    let temDivisor = 0;    // declara a inicializa a variável do tipo flag

    for (let i = 2; i <= (numero / 2); i++) { // percorre os possíveis divisores de numero
        if (numero % i == 0) {   // se tem um divisor
            temDivisor = 1;      // muda a flag
            break;               // sai da repetição
        }
    }
    if ((numero > 1) && !temDivisor) {   // se num > 1 e não possui divisor
        resp.innerText = `${numero} é primo`;
    } else {
        resp.innerText = `${numero} não é primo`;
    }

});