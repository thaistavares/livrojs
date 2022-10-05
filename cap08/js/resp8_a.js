// cria referência ao form e elementos de resposta do programa
const frm = document.querySelector("form");
const resp1 = document.querySelector("#outResp1");
const resp2 = document.querySelector("#outResp2");

let linha = "";

function retornarTracos(nome) {
    for (let i = 0; i < nome.length; i++) {
        if (nome.charAt(i) != " ") {
            linha += "-";
        } else {
            linha += " ";
        }
    }
    return linha;
}

const categorizarAlunos = (idade) => {
    
    let categoria;

    if (idade <= 12) {
        categoria = "Infantil";
    } else if ((idade >= 13) && (idade <= 18)) {
        categoria = "Juvenil"; 
    } else if (idade > 18) {
        categoria = "Adulto";
    }

    return categoria;

}

// cria um "ouvinte" de evento, acionado quando o botão submit for clicado
frm.addEventListener("submit", (e) => {
    e.preventDefault();           // evita o envio do form
    
    const nome = frm.inNome.value;              // obtém o nome do(a) atleta informado pelo usuário
    const idade = Number(frm.inIdade.value);    // obtém a idade do(a) atleta informada pelo usuário
    const categoria = categorizarAlunos(idade);

    resp1.innerText = `${nome}\n${retornarTracos(nome)}`;
    resp2.innerText = `Categoria: ${categoria}`;

});