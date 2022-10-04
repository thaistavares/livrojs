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

// cria um "ouvinte" de evento, acionado quando o botão submit for clicado
frm.addEventListener("submit", (e) => {
    e.preventDefault();           // evita o envio do form
    
    const nome = frm.inNome.value;              // obtém o nome do(a) aluno(a) informado pelo usuário
    //const idade = Number(frm.inIdade.value);    // obtém a idade do(a) aluno(a) informada pelo usuário

    resp1.innerText = `${nome}\n${retornarTracos(nome)}`;

});

/* const categorizarAlunos(idade) => {
    
} */