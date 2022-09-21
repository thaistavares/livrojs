// cria referência ao form e elementos de resposta do programa
const frm = document.querySelector("form");
const resp = document.querySelector("pre");

const carros = [];    // declara vetor global

// cria um "ouvinte" de evento, acionado quando o botão submit for clicado
frm.addEventListener("submit", (e) => {
    e.preventDefault();           // evita o envio do form
    
    const modelo = frm.inModelo.value;          // obtém os dados do form
    const preco = Number(frm.inPreco.value);
    
    carros.push({modelo, preco});    // adiciona os dados ao vetor de objetos
    frm.inModelo.value = "";         // limpa os campos do form
    frm.inPreco.value = "";
    frm.inModelo.focus();                // posiciona o cursor em inModelo
    
    // dispara um evento de click em btListar (equivale a um click no botão da página)
    frm.btListar.dispatchEvent(new Event("click"));

});

// cria um "ouvinte" de evento, acionado quando o botão Listar for clicado
frm.btListar.addEventListener("click", () => {    // "escuta" clique em btListar
    if (carros.length == 0) {                     // se o tamanho do vetor for igual a zero
        alert("Não há carros na lista");
        return;
    }
    
    // o método reduce() concatena uma string, obtendo modelo e preço de cada veículo
    const lista = carros.reduce((acumulador, carro) =>
        acumulador + carro.modelo + "- R$: " + carro.preco.toFixed(2) + "\n", "");
    resp.innerText = `Lista dos Carros Cadastrados\n${"-".repeat(40)}\n${lista}`;

});

// cria um "ouvinte" de evento, acionado quando o botão Filtrar for clicado
frm.btFiltrar.addEventListener("click", () => {    // "escuta" clique em btFiltrar
    const maximo = Number(prompt("Qual o valor máximo que o cliente deseja pagar? "));
    if ((maximo == 0) || (isNaN(maximo))) {    // se não informou ou valor inválido
        return;                                // ... retorna
    }
    // cria um novo vetor com os objetos que atendem à condição de filtro
    const carrosFilter = carros.filter(carro => carro.preco <= maximo);
    if (carrosFilter.length == 0) {    // se tamanho do vetor filtrado for zero
        alert("Não há carros com preço inferior ou igual ao solicitado");
        return;
    }
    
    let lista = "";
    
    for (const carro of carrosFilter) {    // percorre cada elemento do array
        lista += `${carro.modelo} - R$${carro.preco.toFixed(2)}\n`;
    }

    resp.innerText = `Carros Até R$${maximo.toFixed(2)}\n${"-".repeat(40)}\n${lista}`;

});

// cria um "ouvinte" de evento, acionado quando o botão Simular Promoção for clicado
frm.btSimular.addEventListener("click", () => {    // "escuta" clique em btSimular
    const desconto = Number(prompt("Qual o percentual de desconto? "));
    if ((desconto == 0) || (isNaN(desconto))) {    // se não informou ou valor inválido
        return;                                // ... retorna
    }

    const carrosDesc = carros.map(aux => ({
        modelo: aux.modelo,
        preco: aux.preco - (aux.preco * desconto / 100)
    }))

    let lista ="";
   
    for (const carro of carrosDesc) {    // percorre cada elemento do array 
        lista += `${carro.modelo} - R$: ${carro.preco.toFixed(2)}\n`;
    }
    
    resp.innerText = `Carros com desconto: ${desconto}%\n${"-".repeat(40)}\n${lista}`;

});