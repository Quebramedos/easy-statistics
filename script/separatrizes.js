let Q = 0
var somador = parseFloat(sessionStorage.getItem('SomaFiDiscreta'))
var tipo = sessionStorage.getItem('tipo')


function formulaContinua(vet, porcentagem, somador, medida) {
    let formula = 0
    let posicao = 0
    if (tipo == "Continua") {
        somador = parseFloat(sessionStorage.getItem('SomaFiContinua'))
        posicao = (somador * porcentagem) / 100;
        for (let i = 1; i < vet.length; ++i) {
            if (posicao <= vet[i].fac) {
                formula = vet[i].limMinimo + (((posicao - vet[i - 1].fac) / vet[i].frequencia) * vet[i].intervalo)
                console.log('form: ' + formula)
                console.log('LM: ' + vet[i].intervalo)
                return resposta = ('<h5>' + medida + '(' + formula.toFixed(2) + ')' +
                    vet[i].fac + "ºPosição" + '</h5>')
            }
        }
    }
}


function separatrizes(parametro, vet, medida) {
    // calculo porcentagem
    tipo
    for (let i = 0; i < vet.length; ++i) {
        Q = (somador * parametro) / 100;
        console.log(Q)
        if (Q <= vet[i].fac) { //pesquisa o objeto e acha o lugar
            return resposta = ('<h5>' + medida + '(' + vet[i].variavelPesquisada + ')' +
                vet[i].fac + "ºPosição" + '</h5>')
        }
    }
}

let Quartil = 'Quartil'

function casosQuartil(vetor) {
    let opçoes = document.getElementById("C_quartil").value
    switch (opçoes) {
        case "Q1":
            if (tipo == "Continua") {
                formulaContinua(vetor, 25, somador, Quartil)
            } else {
                separatrizes(25, vetor, Quartil)
            }
            // separatrizes(25, vetor, Quartil)
            document.getElementById("resultado").innerHTML = resposta
            break;
        case "Q2":
            if (tipo == "Continua") {
                formulaContinua(vetor, 50, somador, Quartil)
            } else {
                separatrizes(50, vetor, Quartil)
            }
            //separatrizes(50, vetor, Quartil)
            document.getElementById("resultado").innerHTML = resposta
            break;
        case "Q3":
            if (tipo == "Continua") {
                formulaContinua(vetor, 75, somador, Quartil)
            } else {
                separatrizes(75, vetor, Quartil)
            }
            //separatrizes(75, vetor, Quartil)
            document.getElementById("resultado").innerHTML = resposta
            break;
        case "Q4":
            if (tipo == "Continua") {
                formulaContinua(vetor, 100, somador, Quartil)
            } else {
                separatrizes(100, vetor, Quartil)
            }
            //  separatrizes(100, vetor, Quartil)
            document.getElementById("resultado").innerHTML = resposta
            break;
        default:
    }
}
let Quintil = "Quintil"

function casosQuintil(vetor) {
    let opçoes = document.getElementById("C_quintil").value
    switch (opçoes) {
        case "k1":
            if (tipo == "Continua") {
                formulaContinua(vetor, 20, somador, Quintil)
            } else {
                separatrizes(20, vetor, Quintil)
            }
            //separatrizes(20, vetor, Quintil)
            document.getElementById("resultado").innerHTML = resposta
            break;
        case "K2":
            if (tipo == "Continua") {
                formulaContinua(vetor, 40, somador, Quintil)
            } else {
                separatrizes(40, vetor, Quintil)
            }
            // separatrizes(40, vetor, Quintil)
            document.getElementById("resultado").innerHTML = resposta
            break;
        case "K3":
            if (tipo == "Continua") {
                formulaContinua(vetor, 60, somador, Quintil)
            } else {
                separatrizes(60, vetor, Quintil)
            }
            //  separatrizes(60, vetor, Quintil)
            document.getElementById("resultado").innerHTML = resposta
            break;
        case "K4":
            if (tipo == "Continua") {
                formulaContinua(vetor, 80, somador, Quintil)
            } else {
                separatrizes(80, vetor, Quintil)
            }
            // separatrizes(80, vetor, Quintil)
            document.getElementById("resultado").innerHTML = resposta
            break;
        case "K5":
            if (tipo == "Continua") {
                formulaContinua(vetor, 100, somador, Quintil)
            } else {
                separatrizes(100, vetor, Quintil)
            }
            // separatrizes(100, vetor, Quintil)
            document.getElementById("resultado").innerHTML = resposta
            break;
        default:
    }
}
let Decil = "Decil"

function casosDecil(vetor) {
    let opçoes = document.getElementById("C_Decil").value
    switch (opçoes) {
        case "D1":

            if (tipo == "Continua") {
                formulaContinua(vetor, 10, somador, Decil)
            } else {
                separatrizes(10, vetor, Decil)
            }
            document.getElementById("resultado").innerHTML = resposta
            break;
        case "D2":
            if (tipo == "Continua") {
                formulaContinua(vetor, 20, somador, Decil)
            } else {
                separatrizes(20, vetor, Decil)
            }
            document.getElementById("resultado").innerHTML = resposta
            break;
        case "D3":
            if (tipo == "Continua") {
                formulaContinua(vetor, 30, somador, Decil)
            } else {
                separatrizes(30, vetor, Decil)
            }
            document.getElementById("resultado").innerHTML = resposta
            break;
        case "D4":
            if (tipo == "Continua") {
                formulaContinua(vetor, 40, somador, Decil)
            } else {
                separatrizes(40, vetor, Decil)
            }
            document.getElementById("resultado").innerHTML = resposta
            break;
        case "D5":
            if (tipo == "Continua") {
                formulaContinua(vetor, 50, somador, Decil)
            } else {
                separatrizes(50, vetor, Decil)
            }
            document.getElementById("resultado").innerHTML = resposta
            break;
        case "D6":
            if (tipo == "Continua") {
                formulaContinua(vetor, 60, somador, Decil)
            } else {
                separatrizes(60, vetor, Decil)
            }
            document.getElementById("resultado").innerHTML = resposta
            break;
        case "D7":
            if (tipo == "Continua") {
                formulaContinua(vetor, 70, somador, Decil)
            } else {
                separatrizes(70, vetor, Decil)
            }
            document.getElementById("resultado").innerHTML = resposta
            break;
        case "D8":

            if (tipo == "Continua") {
                formulaContinua(vetor, 80, somador, Decil)
            } else {
                separatrizes(80, vetor, Decil)
            }
            document.getElementById("resultado").innerHTML = resposta
            break;
        case "D9":
            if (tipo == "Continua") {
                formulaContinua(vetor, 90, somador, Decil)
            } else {
                separatrizes(90, vetor, Decil)
            }
            document.getElementById("resultado").innerHTML = resposta
            break;
        case "D10":
            if (tipo == "Continua") {
                formulaContinua(vetor, 100, somador, Decil)
            } else {
                separatrizes(100, vetor, Decil)
            }
            document.getElementById("resultado").innerHTML = resposta
            break;
        default:
    }
}

let Percentil = "Percentil"

function casoPercentil(valor) {
    valor = document.getElementById('input_p').value
    // separatrizes(valor, vetor, Percentil)
    if (tipo == "Continua") {
        formulaContinua(vetor, valor, somador, Percentil)
    } else {
        separatrizes(valor, vetor, Percentil)
    }
    document.getElementById('resultado').innerHTML = resposta
    /*
                Q = (total * valor) / 100
    
                resposta = ('<h1>' + medida + '(' + Q + ')' +
                    vet[i].posiçao + "ºPosição" + '</h1>');
                document
                */
}



function chamarSeparatrizes(vetor) {
    casosQuartil(vetor);
    casosQuintil(vetor);
    casosDecil(vetor);
    casoPercentil(vetor);
}
