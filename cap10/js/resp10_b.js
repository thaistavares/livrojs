// cria referência ao form e elementos de resposta do programa
const frm = document.querySelector("form");
const dvQuadro = document.querySelector("#divQuadro");

const gerarCor = () => {
    const letras = "0123456789ABCDEF";
    let cor = "#";
    
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

    if (partes.length == 1) {
        alert("Informe o nome completo");
        frm.inNome.focus();
        return;
    }

    // para retirar os h3 já existentes (se clicou uma segunda vez no botão) 
    const listaH3 = document.querySelectorAll("h3");
    for (let i = 0; i < listaH3.length; i++) {
        dvQuadro.removeChild(listaH3[i]);
    }

    for (let parte of partes) {
        const h3 = document.createElement("h3");         // cria o elemento HTML h3
        const texto = document.createTextNode(parte);    // cria um texto
        h3.appendChild(texto);       // define que texto será filho de h3
        h3.style.color = gerarCor(); // gera as cores aleatórias
        dvQuadro.appendChild(h3);    // define que h3 será filho de divQuadro
    }

    frm.inNome.value = "";     // limpa o campo de edição
    frm.inNome.focus();        // joga o cursor neste campo

});