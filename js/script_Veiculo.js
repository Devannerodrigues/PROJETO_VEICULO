// Importa as funções de cálculo
import { calcularSeguro, calcularIPVA, calcularIdade, calcularValorFinal } from './script_Calculo.js';

// Pega os elementos do DOM
const formVeiculo = document.querySelector('formVeiculo');
const listaVeiculos = document.querySelector('listaVeiculos');

// Quando o formulário for enviado
document.getElementById('lista de Veiculos').addEventListener('submit', function(event) {
    event.preventDefault(); 

    // Captura os dados do formulário
    const marca = document.querySelector('marca').value;
    const modelo = document.querySelector('modelo').value;
    const placa = document.querySelecto('placa').value;
    const ano = Number(document.querySelector('ano').value);
    const valor = Number(document.querySelector('valor').value);
    
    const combustivelSelecionado = document.querySelector('input[name="combustivel"]:checked').value;

    // Cálculos
    const seguro = calcularSeguro(valor);
    const dadosIPVA = calcularIPVA(valor, combustivelSelecionado, ano);
    const idadeVeiculo = calcularIdade(ano);
    const valorFinal = calcularValorFinal(seguro, dadosIPVA.valor);

    // Cria item da lista
    const listaVeiculos = document.createElement('div');
    item.innerHTML = `
        <strong>${marca} ${modelo}</strong><br>
        Placa: ${placa}<br>
        Ano: ${ano} | Idade: ${idadeVeiculo} anos<br>
        Seguro: R$ ${seguro}<br>
        IPVA: R$ ${dadosIPVA.valor} <em>(${dadosIPVA.status})</em><br>
        <strong>Valor total (Seguro + IPVA): R$ ${valorFinal}</strong><br>
        <hr>
    `;

    // Adiciona na lista
    listaVeiculos.innerHTML(listaVeiculos);

    // Limpa formulário
    formVeiculo.reset();
});
