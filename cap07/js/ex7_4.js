// cria referência ao form e elementos de resposta do programa
const frm = document.querySelector("form");
const resp = document.querySelector("h3");

// cria um "ouvinte" de evento, acionado quando o botão submit for clicado
frm.addEventListener("submit", (e) => {
    e.preventDefault();           // evita o envio do form
    
    // obtém o nome informado e retira os espaços em branco do início e do final da string
    const nome = frm.inNome.value.trim();

    if (!nome.includes(" ")) {    // se o nome não (!) possuir espaços
        alert("Informe o nome completo...");
        return;
    }

    const priEspaco = nome.indexOf(" ");        // posição do primeiro espaço
    const ultEspaco = nome.lastIndexOf(" ");    // posição do último espaço
    // copia nome e sobrenome usando os parâmetros do substr()
    const cracha = nome.substr(0, priEspaco) + nome.substr(ultEspaco);

    resp.innerText = `Crachá: ${cracha}`;       // exibe a resposta

});