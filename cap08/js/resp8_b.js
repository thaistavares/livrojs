// cria referência ao form e elementos de resposta do programa
const frm = document.querySelector("form");
const resp = document.querySelector("h3");

const validarNome = (nome) => {
    
    if (!nome.includes(" ")) {
        alert("Por favor, escreva seu nome completo");
        return false;
    } else {
        return true;
    }

}

const obterSobrenome = (nome) => {

    const nomes = nome.split(" ");
    const sobrenome = nomes.pop();
    return sobrenome.toLowerCase();

}

const contarVogais = (nome) => {
   
    let contador = 0;
    const nomes = nome.split("");
    
    for (const vogal of nomes) {
        if ((vogal == "a") || (vogal == "e") || (vogal == "i") || (vogal == "o") || (vogal == "u")) {
            contador++;
        }   
    }
    
    return contador;

}

// cria um "ouvinte" de evento, acionado quando o botão submit for clicado
frm.addEventListener("submit", (e) => {
    e.preventDefault();           // evita o envio do form
    
    const nome = frm.inNome.value;    // obtém o nome do(a) aluno(a) informado pelo usuário
    //const validacao = validarNome(nome);
    const sobrenome = obterSobrenome(nome);     
    const vogais = contarVogais(nome);
    
    // acrescenta 0 se a quantidade de vogais for menor que 10
    const vogaisZero = vogais < 10 ? "0" + vogais : vogais 

    resp.innerText = `Senha Inicial: ${sobrenome}${vogaisZero}`;

});