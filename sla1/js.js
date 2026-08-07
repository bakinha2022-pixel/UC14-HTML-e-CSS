let Name = prompt('Insira seu nome porfavor')
let quantovale = prompt('Qual foi o valor de sua compra?')
let Vip = prompt('Voce é um client Vip?')

let descontovip3 = (quantovale * 0, 15)
let descontovip2 = (quantovale * 0, 10)
let descontovip = (quantovale * 0, 2)


if (clientVip == 'True' || 'Sim') {
    let ValorFinal = (quantovale - descontovip)
} else if (quantovale > 500); {
    let ValorFinal = (quantovale - descontovip2)
} else if (quantovale > 200) {
    let ValorFinal = (quantovale - descontovip3)
} else if (quantovale > 100)
    
    console.log(`Seu desconto foi de ${ValorFinal}!`)