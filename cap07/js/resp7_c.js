// cria referência ao form e elementos de resposta do programa
const frm = document.querySelector("form");
const resp1 = document.querySelector("#outResp1");
const resp2 = document.querySelector("#outResp2");

// cria um "ouvinte" de evento, acionado quando o botão submit for clicado
frm.addEventListener("submit", (e) => {
    e.preventDefault();           // evita o envio do form
    
    const dataInfracao = frm.inDataInfracao.value;    // obtém a data da infração informada
    const multa = Number(frm.inMulta.value);    // obtém o valor da multa informado
    const dataLimite = new Date();

    const partes = dataInfracao.split("-");    // data vem no formato aaaa-mm-dd
    dataLimite.setDate(Number(partes[2]));
    dataLimite.setMonth(Number(partes[1]) - 1);
    dataLimite.setFullYear(Number(partes[0]));

    dataLimite.setDate(dataLimite.getDate()+90);

    const dia = dataLimite.getDate()
    const mes = dataLimite.getMonth() + 1 // mês varia de 0 a 11, por isso, +1
    const ano = dataLimite.getFullYear()
    const diaZero = dia < 10 ? "0" + dia : dia // acrescenta 0 se dia menor que 10
    const mesZero = mes < 10 ? "0" + mes : mes // acrescenta 0 se mês menor que 10

    const desconto = multa - multa * 0.2;

    resp1.innerText = `Data Limite para Pgto com Desconto: ${diaZero}/${mesZero}/${ano}`;
    resp2.innerText = `Valor com Desconto R$${desconto.toFixed(2)}`;
    
});
