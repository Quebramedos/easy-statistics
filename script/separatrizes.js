let Q = 0

function separatrizes(parametro, vet, medida) {
    // calculo porcentagem
    for (let i = 0; i < vet.length; ++i) {
        Q = (somatoriaFi * parametro) / 100;
        if (Q <= vet[i].somaVariavel) { //pesquisa o objeto e acha o lugar
            return resposta = ('<h4>' + medida + '(' + Q + ')' +
                vet[i].posiçao + "ºPosição" + '</h4>');
        }
        resposta = ''
    }
}
let Quartil = 'Quartil'

function casosQuartil(vetor) {
    let opçoes = document.getElementById("C_quartil").value
    switch (opçoes) {
        case "Q1":
            separatrizes(25, vetor, Quartil)
            document.getElementById("resultado").innerHTML = resposta
            break;
        case "Q2":
            separatrizes(50, vetor, Quartil)
            document.getElementById("resultado").innerHTML = resposta
            break;
        case "Q3":
            separatrizes(75, vetor, Quartil)
            document.getElementById("resultado").innerHTML = resposta
            break;
        case "Q4":
            separatrizes(100, vetor, Quartil)
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
            separatrizes(20, vetor, Quintil)
            document.getElementById("resultado").innerHTML = resposta
            break;
        case "K2":
            separatrizes(40, vetor, Quintil)
            document.getElementById("resultado").innerHTML = resposta
            break;
        case "K3":
            separatrizes(60, vetor, Quintil)
            document.getElementById("resultado").innerHTML = resposta
            break;
        case "K4":
            separatrizes(80, vetor, Quintil)
            document.getElementById("resultado").innerHTML = resposta
            break;
        case "K5":
            separatrizes(100, vetor, Quintil)
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
            separatrizes(10, vetor, Decil)
            document.getElementById("resultado").innerHTML = resposta
            break;
        case "D2":
            separatrizes(20, vetor, Decil)
            document.getElementById("resultado").innerHTML = resposta
            break;
        case "D3":
            separatrizes(30, vetor, Decil)
            document.getElementById("resultado").innerHTML = resposta
            break;
        case "D4":
            separatrizes(40, vetor, Decil)
            document.getElementById("resultado").innerHTML = resposta
            break;
        case "D5":
            separatrizes(50, vetor, Decil)
            document.getElementById("resultado").innerHTML = resposta
            break;
        case "D6":
            separatrizes(60, vetor, Decil)
            document.getElementById("resultado").innerHTML = resposta
            break;
        case "D7":
            separatrizes(70, vetor, Decil)
            document.getElementById("resultado").innerHTML = resposta
            break;
        case "D8":
            separatrizes(80, vetor, Decil)
            document.getElementById("resultado").innerHTML = resposta
            break;
        case "D9":
            separatrizes(90, vetor, Decil)
            document.getElementById("resultado").innerHTML = resposta
            break;
        case "D10":
            separatrizes(100, vetor, Decil)
            document.getElementById("resultado").innerHTML = resposta
            break;
        default:
    }

    let Percentil = "Percentil"

    function casoPercentil(total, valor, medida) {
        valor = document.getElementById('input_p').value
        separatrizes(valor, vetor, Percentil)
        document.getElementById('resultado').innerHTML = resposta
        /*
                Q = (total * valor) / 100
        
                resposta = ('<h1>' + medida + '(' + Q + ')' +
                    vet[i].posiçao + "ºPosição" + '</h1>');
                document
                */
    }
    

}




function chamarSeparatrizes(vetor) {
    casosQuartil(vetor);
    casosQuintil(vetor);
    casosDecil(vetor);
}