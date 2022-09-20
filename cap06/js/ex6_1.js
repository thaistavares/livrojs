// cria referência ao form e elementos de resposta do programa
const frm = document.querySelector("form");
const respNome = document.querySelector("span");
const respLista = document.querySelector("pre");

const pacientes = [];    // declara vetor global

// cria um "ouvinte" de evento, acionado quando o botão submit for clicado
frm.addEventListener("submit", (e) => {
    e.preventDefault();           // evita o envio do form
    
    const nome = frm.inPaciente.value;   // obtém o nome do paciente
    pacientes.push(nome);                // adiciona o nome no final do vetor
    let lista = "";                          // string para concatenar pacientes
    
    // for "tradicional" (inicia em 0, enquanto menor que tamanho do array)
    for (let i = 0; i < pacientes.length; i++) {    // cria laço de repetição de 1 até numero
        lista = `${lista}${i + 1}.${pacientes[i]}\n`;
    }

    respLista.innerText = lista;    // exibe a lista de pacientes na página
    frm.inPaciente.value = "";      // limpa o conteúdo do campo do formulário
    frm.inPaciente.focus();         // posiciona o cursos no campo
});

// cria um "ouvinte" para o evento click no btUrgencia que está no form
frm.btUrgencia.addEventListener("click", () => {
    // verifica se as validações do form estão ok (no caso, paciente is required)
    if (!frm.checkValidity()) {
        alert("Informe o nome do paciente a ser atendido em caráter de urgência");
        frm.inPaciente.focus();    // posiciona o cursor no campo inPaciente
        return;                    // retorna ao form
    }

    const nome = frm.inPaciente.value;   // obtém o nome do paciente
    pacientes.unshift(nome);             // adiciona o paciente no início do vetor
    let lista = "";                          // string para concatenar pacientes
    
    // forEach aplicado sobre o array pacientes
    pacientes.forEach((paciente, i) => (lista = `${lista}${i + 1}.${paciente}\n`));

    respLista.innerText = lista;    // exibe a lista de pacientes na página
    frm.inPaciente.value = "";      // limpa o conteúdo do campo do formulário
    frm.inPaciente.focus();         // posiciona o cursos no campo
});

// cria um "ouvinte" para o evento click no btAtender que está no form
frm.btAtender.addEventListener("click", () => {
    // se o tamanho do vetor for igual a zero
    if (pacientes.length == 0) {
        alert("Não há pacientes na lista de espera");
        frm.inPaciente.focus();    // posiciona o cursor no campo inPaciente
        return;                    // retorna ao form
    }

    const atender = pacientes.shift();    // remove do início da fila (e obtém o nome)
    respNome.innerText = atender;         // exibe o nome do paciente em atendimento
    let lista = "";                       // string para concatenar pacientes
    
    // forEach aplicado sobre o array pacientes
    pacientes.forEach((paciente, i) => (lista = `${lista}${i + 1}.${paciente}\n`));
    respLista.innerText = lista;    // exibe a lista de pacientes na página
});