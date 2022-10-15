// cria referência ao form e elementos de resposta do programa
const frm = document.querySelector("form");
const dvVelas = document.querySelector("#divVelas");

// define texto alternativo das imagens (acessibilidade)
const alt0 = "Vela de zero";
const alt1 = "Vela de um";
const alt2 = "Vela de dois";
const alt3 = "Vela de três";
const alt4 = "Vela de quatro";
const alt5 = "Vela de cinco";
const alt6 = "Vela de seis";
const alt7 = "Vela de sete";
const alt8 = "Vela de oito";
const alt9 = "Vela de nove";

const criarVelas = (vela, textoAlt) => {
    const novaVela = document.createElement("img");    // cria elemento img
    novaVela.src = "img/" + vela;     // atributo src
    novaVela.textAlt = textoAlt;      // texto alternativo
    dvVelas.appendChild(novaVela);    // hierarquia DOM
} 

frm.addEventListener("submit", (e) => {
    e.preventDefault();    // evita o envio do form

    const idade = frm.inIdade.value;          // valor informado pelo usuário

    for (let i = 0; i < idade.length; i++) {
        criarVelas(`${idade.charAt(i)}.jpg`, `alt${idade.charAt(i)}`);
    }
    
    frm.submit.disabled = true;   // desabilita botão (resposta já foi exibida)

});

frm.addEventListener("reset", () => {
    window.location.reload();
 });