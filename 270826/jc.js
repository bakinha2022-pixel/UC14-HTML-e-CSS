const estado = prompt( 'Estado de destino (sigla):\n' + 'Ex: RN, SP, RS, AM')?.toUpperCase().trim();

let frete = 0;
let regiao = '';
let prazo = '';

switch (etado) {
    case 'RN':
    case 'CE':
    case 'PB':
    case 'PF':     
    case 'PE':
    case 'MA':
    case 'PI':
    case 'AL':
    case 'SE':
    case 'BA':
        regiao = 'Nordeste';
        frete = 15;
        prazo = '3 dias úteis';                         
        break;
     case 'RS':
     case 'SC':
     case 'PR':
        regiao = 'Sul';
        frete = 30;
        prazo = '7 dias uteis';
        break;

        case 'GO':
        case 'MT':
        case 'MS':
        case 'DF':
         regiao = 'Centro-Oeste';
         frete = 35;
         prazo = '8 dias uteis';
         break;

        case 'AM':
        case 'PA':
        case 'AC':
        case 'RO':
        case 'RR':
        case 'AP':
        case 'TO':
            regiao = 'Norte';
            frete = '45';
            prazo = '12 dias uteis'
            break;

    default:
        regiao = 'Estado não encontado'
        frete = 0;
        prazo = 'Indisponivel';
        break;
}
if (frete > 0) {
    alert(
        `Estado: ${estado}\n` +
        `Região: ${regiao}\n` +
        `Frete:  R$ ${frete},oo\n`
        `Prazo:  ${prazo}`
    );
    console.log({ estado, regiao, frete, prazo});
} else {
    alert(`Estado "${estado}" não encontrado. \nVerifique a sigla e tente novamente.`);
}