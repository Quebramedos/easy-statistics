//Variaveis
var fracaForte=''
var Ydependente = []
var Ydependente = []
var vety = ''
var vetx = ''
vetx = sessionStorage.getItem('vet100x')
vety = sessionStorage.getItem('vet200')
Ydependente = vety.split(',').map(Number)
Xindependente = vetx.split(',').map(Number)
//Xindependente = parseFloat(sessionStorage.getItem('vet100x'))
console.log(vety)

vet(Xindependente, Ydependente)
console.log(vetx)
//Função somatoria
function Somatoria(vet) {
    let soma = 0;
    for (let i = 0; i < vet.length; i++) {
        soma += vet[i];
    };
    return soma
}


//Função somatória de X x Y
function SomatoriaXeY(vet, vet2) {
    let soma = 0;
    for (let i = 0; i < vet.length; i++) {
        soma = (vet[i] * vet2[i]) + soma;
    };
    return soma
}


//Função Somatoria do quadrado da variaveis
function SomatoriaQuadrado(vet) {
    let soma = 0;
    for (let i = 0; i < vet.length; i++) {
        soma = Math.pow(vet[i], 2) + soma;
    };
    return soma

}

//Função para achar o coeficiente da Correlação
function Correlacao() {
    //Variavel Coeficiente
    let r = 0;

    let dividendo = ((Xindependente.length) * SomatoriaXeY(Xindependente, Ydependente) - (Somatoria(Xindependente) * Somatoria(Ydependente)))
    let divisor = ((Xindependente.length) * SomatoriaQuadrado(Xindependente) - (Math.pow(Somatoria(Xindependente), 2))) * ((Xindependente.length) * SomatoriaQuadrado(Ydependente) - (Math.pow(Somatoria(Ydependente), 2)))
    r = parseFloat((dividendo / Math.sqrt(divisor)).toFixed(2))
    let porcent = r * 100
    
    if (r > 0 && r < 0.3) {
        fracaForte = 'Correlação inexistente ou fraca'
    } else if (r >= 0.3 && r < 0.6) {
        fracaForte = 'Correlação fraca ou média'
    } else if (r <= 0.6 && r <= 1) {
        fracaForte = 'Correlação média a forte'
    }
    
    console.log(fracaForte)
    console.log('Porcentagem da relação ' + porcent + '%')
    return r,document.getElementById('Linha').innerHTML = fracaForte
}

let b = 0
let a = 0
//Função da regreção
function regressao(x) {
    let dividendo = ((Xindependente.length) * SomatoriaXeY(Xindependente, Ydependente) - (Somatoria(Xindependente) * Somatoria(Ydependente)))
    let divisor = ((Xindependente.length) * SomatoriaQuadrado(Xindependente) - (Math.pow(Somatoria(Xindependente), 2)))
    a = parseFloat((dividendo / divisor))
    let Ymedia = Somatoria(Ydependente) / Ydependente.length
    let Xmedia = Somatoria(Xindependente) / Xindependente.length

    b = Ymedia - (a * Xmedia)

    let ydemanda = parseFloat((a * x + b).toFixed(2))
    let formula
    formula = 'Y=' + a.toFixed(2) + 'x + ' + b.toFixed(2);
    document.getElementById('Formula').innerHTML = formula
    console.log(Ymedia)
    console.log(Xmedia)
    console.log(a)
    console.log(b)
    return ydemanda
}

// Função calculo da demanda
function demanda(x) {

    // valor de Y
    let demanda = ((a * x) + b).toFixed(2)
    Xindependente.push(x)
    Ydependente.push(demanda)
  
    vet(Xindependente, Ydependente)
    return demanda
}

//preço em relação a demanda
function PrecoDemanda(y) {
    // valor de X
    let pre = parseFloat((b - y) / (-1 * a).toFixed(2))
    Xindependente.push(pre)
    Ydependente.push(y)
    vet(Xindependente, Ydependente)
    return pre
}
//formula M
//(N * SomatoriaXeY) - (somatoriax * somatoriay) / ((N * xquadrado) - (Math.pow(somatoriax)))

//formuyla b
//(xquadrado * somatoriay) - (somatoriax * SomatoriaXeY) / ((N * xquadrado) - (Math.pow(somatoriax)))
