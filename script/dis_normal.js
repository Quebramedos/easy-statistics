let zN;
let mediaN = 0;
let dpN = 0;
const infinitoN = 0.5;
let variavelN
let ateN
//-----------------------------------------------------------
//função para caixa EntreN
function optionCheckN() {
    var option = document.getElementById("cbopçoesN").value;
    if (option == "EntreN") {
        document.getElementById("mostrarN").style.visibility = "visible";
    } else {
        document.getElementById("mostrarN").style.visibility = "hidden";
    }
};
//---------------------------------------------------------------------
function botaoN() {
    mediaN = parseFloat(document.getElementById('mediaN').value);
    dpN = parseFloat(document.getElementById('desvioPadraoN').value)
    variavelN = parseFloat(document.getElementById('variavelN').value)
    ateN = parseFloat(document.getElementById('maiorN').value)
    return mediaN, dpN, variavelN, ateN
}

function distribuicaoNormal(x, mediaN, dpN) {
    zN = (x - mediaN) / dpN;
    zN = parseFloat(zN.toFixed(2));
    if (zN < 0) {
        zN = zN * (-1)
    }
    return zN
}
let respostaN
let somaN
let menos = 'menos'
let mais = 'mais'
let rr
function somarN(constante, valor, operaçao) {
    if (operaçao == 'menos') {
        somaN = (constante - valor) * 100
    } else if (operaçao == 'mais') {
        somaN = (constante + valor) * 100
    }
    if (somaN < 0) {
        somaN = somaN * (-1)
    }
    somaN = somaN.toFixed(2)
    return somaN
}
function casosN() {
    let opçoesN = document.getElementById("cbopçoesN").value
    switch (opçoesN) {
        //------------------------------------------------------------
        case "maior_queN": //caso maiorN que
            distribuicaoNormal(variavelN, mediaN, dpN) //calcula o o valor de zN
            procurar(zN) //procura o valor de zN na tabela
            achar(numero3, numero2, array) // retorna o valor da tabela variavelN resul
            if (variavelN > mediaN) {
                somarN(infinitoN, resul, menos) //chama funçao para subtrair os valores
            } else if (variavelN < mediaN) {
                somarN(infinitoN, resul, mais) //chama funçao para somarN os valores
            }
            respostaN = ('<h2>' + 'Resultado:' + somaN + '%' + '</h2>') //da o resultado
            document.getElementById("resultadoN").innerHTML = respostaN
            break;
        //-----------------------------------------------------------------------------
        case "Menor_queN": //caso maiorN que
            distribuicaoNormal(variavelN, mediaN, dpN) //calcula o o valor de zN
            procurar(zN) //procura o valor de zN na tabela

            achar(numero3, numero2, array) // retorna o valor da tabela variavelN resul
            if (variavelN > mediaN) {
                somarN(infinitoN, resul, mais) //chama funçao para subtrair os valores
            } else if (variavelN < mediaN) {
                somarN(infinitoN, resul, menos) //chama funçao para somarN os valores
            }

            respostaN = ('<h2>' + 'Resultado:' + somaN + '%' + '</h2>') //da o resultado

            document.getElementById("resultadoN").innerHTML = respostaN
            break;
        case "Ex_igualN":
            document.getElementById("resultadoN").innerHTML = respostaN
            break;
        case "EntreN":
            //calcula o o valor de zN
            //procura o valor de zN na tabela
            // retorna o valor da tabela variavelN resul
            let zN1 = distribuicaoNormal(variavelN, mediaN, dpN)
            let zN2 = distribuicaoNormal(ateN, mediaN, dpN)
            procurar(zN1)
            zN1 = achar(numero3, numero2, array);
            procurar(zN2)
            zN2 = achar(numero3, numero2, array);
            if ((variavelN < mediaN) && (ateN > mediaN)) {
                somarN(zN1, zN2, mais)
            } else if ((variavelN > mediaN) && (ateN > mediaN)) {
                somarN(zN2, zN1, menos)
            } else if ((variavelN == mediaN) && (ateN > mediaN)) {
                somarN(zN2, zN1, menos)
            } else {
                somarN(zN2, zN1, menos)
            }
            respostaN = ('<h2>' + 'Resultado:' + somaN + '%' + '</h2>') //da o resultado
            document.getElementById("resultadoN").innerHTML = respostaN
        default:
    }
}

/* html
<div>
    <form id="form1">
      <h2 align="center">Digite os dados:</h2>
      <label>Digite a média:</label>
      <input type="text" class='mediaN' id='mediaN'>
      <br>
      <br>
      <label>Digite o desvio padrão:</label>
      <input type="text" class="dpNadrao" id='desvioPadraoN'>
      <br>
      <p>

        <label for="text">Probabilidade:</label>
        <select id="cbopçoes" onchange="optionCheck()">
          <option value="maiorN_queN">maiorN Que</option>
          <option value="Menor_queN">MENOR Que</option>
          <option value="Ex_igualN">EXATAMENTE</option>
          <option value="EntreN">EntreN</option>
        </select>

        <input type="text" name="campo" id="variavelN" />
        <label for="nome"></label>

        <div id="mostrarN" style="border:1px;visibility:hidden;">
          <label for="nome">Até(Max)</label>
          <input type="text" id="maiorN" />

        </div>
      </p>
      <div id="bot">
        <button class="css3button" type="button" value="Enviar" onclick="botao(this.form),casos()">
          Enviar</button>
      </div>
    </form>
  </div>
  <div id="resultado">
    <h2 align="center">Resultado:</h2>
  </div>
*/