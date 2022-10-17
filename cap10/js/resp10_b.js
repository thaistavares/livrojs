// cria referência ao form e elementos de resposta do programa
const frm = document.querySelector("form");
const dvQuadro = document.querySelector("#divQuadro");

function gerarCor() {
    const letras = '0123456789ABCDEF';
    let cor = '#';
    
    for (let i = 0; i < 6; i++) {
      cor += letras[Math.floor(Math.random() * 16)];
    }
    
    return cor;
    
  }

// cria um "ouvinte" de evento, acionado quando o botão submit for clicado
frm.addEventListener("submit", (e) => {
    e.preventDefault();               // evita o envio do form

    const nome = frm.inNome.value;    // conteúdo do inNome

    const partes = nome.split(" ");

    for (let i = 0; i < partes.length; i++) {
        const h3 = document.createElement("h3");        // cria o elemento HTML h3
        const texto = document.createTextNode(partes[i]);    // cria um texto
        h3.appendChild(texto);       // define que texto será filho de h3
        h3.style.color = gerarCor();
        dvQuadro.appendChild(h3);    // e que h3 será filho de divQuadro
    }

    frm.inNome.value = "";     // limpa o campo de edição
    frm.inNome.focus();        // joga o cursor neste campo

});

window.addEventListener("load", () => {
    // verifica se há nomes salvos no navegador do usuário
    if (localStorage.getItem("nomesSalvos")) {
        // cria um vetor com a lista de nomes (separados pelo split(";"))
        const dados = localStorage.getItem("nomesSalvos".split(";"));

        // percorre os dados armazenados em localStorage
        dados.forEach(dado => {
            const h3 = document.createElement("h3");        // cria o elemento HTML h3
            const texto = document.createTextNode(dado);    // cria um texto
            h3.appendChild(texto);       // define que texto será filho de h3
            dvQuadro.appendChild(h3);    // e que h3 será filho de divQuadro
        });
    }
});