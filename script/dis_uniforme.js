let min
let max
let media
let desvio
let resul
let parametro
let diff
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
}
function padrao(a, b) {
    desvio = Math.pow(b - a, 2)
    desvio = desvio / 12
    desvio = Math.sqrt(desvio)
    desvio = parseFloat(desvio.toFixed(2))
    console.log('desvio: ' + desvio)
}
//-------------------------------------------------------------------------
// função para pegar os valores
function uniforme() {
    min = parseFloat(document.getElementById("minimo").value)
    max = parseFloat(document.getElementById("maximo").value)
    parametro = parseFloat(document.getElementById("valor").value)
    ate = parseFloat(document.getElementById("Maior").value)
    media = (min + max) / 2
    padrao(min, max)
    return min, max
}
function diferença(maxi, mini) {
    diff = maxi - mini
    return diff
}
function probabilidade(x, y, dif) {
    resul = (1 / (y - x)) * dif // formula probabilidade
    resul = resul * 100
    console.log(resul)
    return resul
}
let resposta
function casos() {
    let opçoes = document.getElementById("cbopçoes").value
    switch (opçoes) {
        case "maior_Q":
            diferença(max, parametro) // valor maximo - o parametro
            probabilidade(min, max, diff) //chama funçao para calculo
            resposta = ('<h2>' + 'Resultado:' + '<br>' +
                resul.toFixed(2) + '%' + '</h2>')
            document.getElementById("resultado").innerHTML = resposta //joga resposta no documento
            break;
        case "menor_Q":
            diferença(parametro, min) // vai pégar o valor da diferença
            probabilidade(min, max, diff) //chama funçao para calculo
            resposta = ('<h2>' + 'Resultado:' + '<br>' +
                resul.toFixed(2) + '%' + '</h2>')
            document.getElementById("resultado").innerHTML = resposta
            break;
        //--------------------------------------------------------------------------
        case "Entre":
            diferença(ate, parametro) // vai pégar o valor da diferença
            probabilidade(min, max, diff) //chama funçao para calculo
            resposta = ('<h2>' + 'Resultado:' + '<br>' +
                resul.toFixed(2) + '%' + '</h2>')
            document.getElementById("resultado").innerHTML = resposta
            break;
        default:
    }
}
/* html de entrada e saida
<body>
    <h2>Digite os dados:</h2>
    <p>
        <label>Minimo:</label>
        <input type="text" id="minimo">
        <br>
        <br>
        <label>Máximo:</label>
        <input type="text" id="maximo">
    </p>
    <h2>Probabilidade</h2>
    <select name="combo" id="cbopçoes" onchange="optionCheck()">
        <option value="maior_Q">Maior que</option>
        <option value="menor_Q" onchange="casos()">Menor que</option>
        <option value="Entre">Entre</option>
    </select>
    <input type="text" id="valor">

    <div id="mostrar" style="visibility:hidden;">
        <label for="nome" padding="10px 20px 40px">Até:</label>
        <input type="text" id="Maior" />

    </div>
    <button id="botao" onclick="uniforme(), casos()">Enviar</button>
    <!-- <input type="range" min='100' max='2000'>-->

    <div id="resultado"></div>
</body>

 */