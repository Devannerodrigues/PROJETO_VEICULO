import { calcularSeguro, calcularIPVA, calcularIdade, calcularValorFinal } from './script_Calculo.js';

const formVeiculo = document.querySelector('#formVeiculo');
const listaVeiculos = document.querySelector('#listaVeiculos');

formVeiculo.addEventListener('submit', function(event) {
    event.preventDefault();

    const marca = document.querySelector('#marca').value;
    const modelo = document.querySelector('#modelo').value;
    const placa = document.querySelector('#placa').value;
    const ano = Number(document.querySelector('#ano').value);
    const valor = Number(document.querySelector('#valor').value);

    const combustivelSelecionado = document.querySelector('input[name="combustivel"]:checked').value;

    const seguro = calcularSeguro(valor);
    const dadosIPVA = calcularIPVA(valor, combustivelSelecionado, ano);
    const idadeVeiculo = calcularIdade(ano);
    const valorFinal = calcularValorFinal(seguro, dadosIPVA.valor);

    const item = document.createElement('div');

    item.innerHTML = `
        <strong>${marca} ${modelo}</strong><br>
        Placa: ${placa}<br>
        Ano: ${ano} | Idade: ${idadeVeiculo} anos<br>
        Seguro: R$ ${seguro}<br>
        IPVA: R$ ${dadosIPVA.valor} <em>(${dadosIPVA.status})</em><br>
        <strong>Valor total: R$ ${valorFinal}</strong>
        <hr>
    `;

    listaVeiculos.appendChild(item);

    formVeiculo.reset();
});
