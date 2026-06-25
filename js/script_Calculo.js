export function calcularIPVA(valorVeiculo, tipoCombustivel, anoFabricacao) {
    const anoAtual = 2026;
    const idade = anoAtual - anoFabricacao;

    if (idade > 20) {
        return { valor: 0, status: "Isento" };
    }

    let taxa;

    switch(tipoCombustivel) {
        case 'gasolina':
            taxa = 0.20;
            break;
        case 'etanol':
            taxa = 0.15;
            break;
        case 'biocombustivel':
            taxa = 0.10;
            break;
        case 'hibrido':
            taxa = 0.08;
            break;
        case 'eletrico':
            taxa = 0.02;
            break;
        default:
            taxa = 0;
    }

    const valor = valorVeiculo * taxa;

    return { valor: valor.toFixed(2), status: "A pagar" };
}

export function calcularSeguro(valorVeiculo) {
    return (valorVeiculo * 0.10).toFixed(2);
}

export function calcularIdade(anoFabricacao) {
    return 2026 - anoFabricacao;
}

export function calcularValorFinal(seguro, ipva) {
    return (Number(seguro) + Number(ipva)).toFixed(2);
}
