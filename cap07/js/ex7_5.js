// cria referência ao form e elementos de resposta do programa
const frm = document.querySelector("form");
const resp = document.querySelector("h3");

// cria um "ouvinte" de evento, acionado quando o botão submit for clicado
frm.addEventListener("submit", (e) => {
    e.preventDefault();           // evita o envio do form
    
    const funcionario = frm.inFuncionario.value.trim();    // obtém o nome do funcionário

    // divide o nome em itens de vetor, criados a cada ocorrência do espaço
    const partes = funcionario.split(" ");
    let email = "";    // vai concatenar letras
    const tam = partes.length;    // obtém o número de itens do vetor partes

    for(let i = 0; i < tam - 1; i++) {    // percorre itens do vetor (exceto o último)
        email += partes[i].charAt(0);     // e obtém a letra inicial de cada item
    }

    // concatena as letras iniciais com a última parte (sobrenome) e empresa
    email += partes[tam - 1] + "@empresa.com.br";

    resp.innerText = `E-mail: ${email.toLowerCase()}`;    // exibe o e-mail em minúsculas

});