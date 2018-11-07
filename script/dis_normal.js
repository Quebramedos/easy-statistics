let z;
let media = 0;
let dp = 0;
const infinito = 0.5;
let variavel
let ate
//-----------------------------------------------------------
//função para caixa entre
function optionCheck() {
    var option = document.getElementById("cbopçoes").value;
    if (option == "Entre") {
        document.getElementById("mostrar").style.visibility = "visible";
    } else {
        document.getElementById("mostrar").style.visibility = "hidden";
    }
};
//---------------------------------------------------------------------
function botao() {
    media = parseFloat(document.getElementById('Media').value);
    dp = parseFloat(document.getElementById('desvioPadrao').value)
    variavel = parseFloat(document.getElementById('Variavel').value)
    ate = parseFloat(document.getElementById('maior').value)
    return media, dp, variavel, ate
}

function distribuicaoNormal(x, media, dp) {
    z = (x - media) / dp;
    z = parseFloat(z.toFixed(2));
    if (z < 0) {
        z = z * (-1)
    }
    return z
}
let resposta
let soma
let menos = 'menos'
let mais = 'mais'
let rr
function somar(constante, valor, operaçao) {
    if (operaçao == 'menos') {
        soma = (constante - valor) * 100
    } else if (operaçao == 'mais') {
        soma = (constante + valor) * 100
    }
    if (soma < 0) {
        soma = soma * (-1)
    }
    soma = soma.toFixed(2)
    return soma
}
function casos() {
    let opçoes = document.getElementById("cbopçoes").value
    switch (opçoes) {
        //------------------------------------------------------------
        case "Maior_que": //caso maior que
            distribuicaoNormal(variavel, media, dp) //calcula o o valor de z
            procurar(z) //procura o valor de z na tabela
            achar(numero3, numero2, array) // retorna o valor da tabela variavel resul
            if (variavel > media) {
                somar(infinito, resul, menos) //chama funçao para subtrair os valores
            } else if (variavel < media) {
                somar(infinito, resul, mais) //chama funçao para somar os valores
            }
            resposta = ('<h2>' + 'Resultado:' + soma + '%' + '</h2>') //da o resultado
            document.getElementById("resultado").innerHTML = resposta
            break;
        //-----------------------------------------------------------------------------
        case "Menor_que": //caso maior que
            distribuicaoNormal(variavel, media, dp) //calcula o o valor de z
            procurar(z) //procura o valor de z na tabela

            achar(numero3, numero2, array) // retorna o valor da tabela variavel resul
            if (variavel > media) {
                somar(infinito, resul, mais) //chama funçao para subtrair os valores
            } else if (variavel < media) {
                somar(infinito, resul, menos) //chama funçao para somar os valores
            }

            resposta = ('<h2>' + 'Resultado:' + soma + '%' + '</h2>') //da o resultado

            document.getElementById("resultado").innerHTML = resposta
            break;
        case "Ex_igual":
            document.getElementById("resultado").innerHTML = resposta
            break;
        case "Entre":
            //calcula o o valor de z
            //procura o valor de z na tabela
            // retorna o valor da tabela variavel resul
            let z1 = distribuicaoNormal(variavel, media, dp)
            let z2 = distribuicaoNormal(ate, media, dp)
            procurar(z1)
            z1 = achar(numero3, numero2, array);
            procurar(z2)
            z2 = achar(numero3, numero2, array);
            if ((variavel < media) && (ate > media)) {
                somar(z1, z2, mais)
            } else if ((variavel > media) && (ate > media)) {
                somar(z2, z1, menos)
            } else if ((variavel == media) && (ate > media)) {
                somar(z2, z1, menos)
            } else {
                somar(z2, z1, menos)
            }
            resposta = ('<h2>' + 'Resultado:' + soma + '%' + '</h2>') //da o resultado
            document.getElementById("resultado").innerHTML = resposta
        default:
    }
}

/* html
<div>
    <form id="form1">
      <h2 align="center">Digite os dados:</h2>
      <label>Digite a média:</label>
      <input type="text" class='media' id='Media'>
      <br>
      <br>
      <label>Digite o desvio padrão:</label>
      <input type="text" class="dPadrao" id='desvioPadrao'>
      <br>
      <p>

        <label for="text">Probabilidade:</label>
        <select id="cbopçoes" onchange="optionCheck()">
          <option value="Maior_que">MAIOR Que</option>
          <option value="Menor_que">MENOR Que</option>
          <option value="Ex_igual">EXATAMENTE</option>
          <option value="Entre">ENTRE</option>
        </select>

        <input type="text" name="campo" id="Variavel" />
        <label for="nome"></label>

        <div id="mostrar" style="border:1px;visibility:hidden;">
          <label for="nome">Até(Max)</label>
          <input type="text" id="maior" />

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