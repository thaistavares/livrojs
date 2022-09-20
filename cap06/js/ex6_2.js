// cria referência ao form e elementos de resposta do programa
const frm = document.querySelector("form");
const respErros = document.querySelector("#outErros");
const respChances = document.querySelector("#outChances");
const respDica = document.querySelector("#outDica");

const erros = [];    // declara vetor de escopo global com números já apostados
const sorteado = Math.floor(Math.random() * 100) + 1;    // número aleatório entre 1 e 100
const CHANCES = 6;   // constante com o número máximo de chances

// cria um "ouvinte" de evento, acionado quando o botão submit for clicado
frm.addEventListener("submit", (e) => {
    e.preventDefault();           // evita o envio do form
    
    const numero = Number(frm.inNumero.value);   // obtém o número digitado
    
    if (numero == sorteado) {    // se acertou
        respDica.innerText = `Parabéns!! Número sorteado: ${sorteado}`;
        frm.btSubmit.disabled = true;    // troca status dos botões
        frm.btNovo.className = "exibe";
    } else {
        if (erros.includes(numero)) {    // se o número existe no vetor erros (já apostou)
            alert(`Você já apostou o número ${numero}. Tente outro...`);
        } else {
            erros.push(numero);                       // adiciona o número ao vetor
            const numErros = erros.length;            // obtém o tamanho do vetor erros
            const numChances = CHANCES - numErros;    // calcula o número de chances
            // exibe nº de erros, conteúdo do vetor e nº de chances
            respErros.innerText = `${numErros} (${erros.join(", ")})`;
            respChances.innerText = numChances;
            if (numChances == 0) {
                alert("Suas chances acabaram...")
                frm.btSubmit.disabled = true;    // troca status dos botões
                frm.btNovo.className = "exibe";
                respDica.innerText = `Game Over!! Número sorteado: ${sorteado}`;
            } else {
                // usa operador ternário para mensagem da dica
                const dica = numero < sorteado ? "maior" : "menor";
                respDica.innerText = `Dica: Tente um número ${dica} que ${numero}`;
            }
        }
    }
    
    frm.inNumero.value = "";    // limpa campo de entrada
    frm.inNumero.focus();       // posiciona cursor neste campo

});

frm.btNovo.addEventListener("click", () => {
    location.reload();    // recarrega a página
});