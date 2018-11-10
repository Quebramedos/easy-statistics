// Digitar fracasso e sucesso
let sucesso = 0
let fracasso = 0
let n = 0
let k = 0
let result = 0
let vet = []

function converter(a, b) {
    a = a / 100
    b = b / 100
    return a, b
}

function disBinomial() {

    n = parseInt(document.getElementById("totalBino_N").value)
    sucesso = parseFloat(document.getElementById("Sucesso_S").value)
    fracasso = parseFloat(document.getElementById("Fracasso_F").value)
    k = parseInt(document.getElementById("Variavel_K").value)
    converter(sucesso, fracasso)
    for (let i = 0; i < n; i++) {
        vet.push(i)
    }
}
// função binomial
let p //parametro sucesso
let q; //parametro fracasso
let PK = 0

function binomial(x, y) { //x pra n        Y pra k
    p = sucesso / (sucesso + fracasso);
    q = fracasso / (sucesso + fracasso);
    result = fatorial(x) / (fatorial(y) * (fatorial(x - y))) //fatorial 
    PK = (result * ((Math.pow(p, y))) * (Math.pow(q, (x - y))))
    PK = parseFloat((PK * 100))
}
// função fatorial
function fatorial(num) {
    if (num < 0) {
        return -1;
    } else if (num == 0) {
        return 1;
    } else {
        return (num * fatorial(num - 1));
    }
}
//-----------------------------------------------------------
//função para caixa entre
// função para soma de todos os valores
let soma = 0

function totalBino(P_menor, P_maior) {
    soma = 0
    for (let i = P_menor; i <= P_maior; ++i) {
        binomial(n, i)
        soma += PK
    }
}
//--------------------------------------------------------------
let resposta

function casos() {
    let opçoes = document.getElementById("cbopçoes").value
    switch (opçoes) {
        case "Ex_igual":
            binomial(n, k) //passa o parametro normal
            resposta = ('<h2>' + 'Resultado:' + '<br>' +
                PK.toFixed(2) + '%' + '</h2>')
            document.getElementById("resultado").innerHTML = resposta
            break;
            //------------------------------------------------------------
        case "Maior_que": //caso maior que
            totalBino(k + 1, n) //nesse caso vai de k +1 ate o final
            resposta = ('<h2>' + 'Resultado:' + '<br>' +
                soma.toFixed(2) + '%' + '</h2>')
            //saida
            document.getElementById("resultado").innerHTML = resposta
            break;
            //-----------------------------------------------------------------
        case "Menor_que":
            totalBino(0, k - 1) //passa o parametro 0 como inicial ate k -1
            resposta = ('<h2>' + 'Resultado:' + '<br>' +
                soma.toFixed(2) + '%' + '</h2>')
            document.getElementById("resultado").innerHTML = resposta
            break;
            //-------------------------------------------------------------------
        case "P_menos":
            totalBino(k, n) //passa o parametro k como inicial, ate n
            resposta = ('<h2>' + 'Resultado:' + '<br>' +
                soma.toFixed(2) + '%' + '</h2>')
            document.getElementById("resultado").innerHTML = resposta
            //-----------------------------------------------------------------------
        case "Ate":
            totalBino(0, k) //passa o parametro 0 como inicial ate k
            resposta = ('<h2>' + 'Resultado:' + '<br>' +
                soma.toFixed(2) + '%' + '</h2>')
            document.getElementById("resultado").innerHTML = resposta
            break;
            //-----------------------------------------------------------------------
        case "N_Minimo":
            totalBino(k, n) //passa o parametro 0 como inicial ate k
            resposta = ('<h2>' + 'Resultado:' + '<br>' +
                soma.toFixed(2) + '%' + '</h2>')
            document.getElementById("resultado").innerHTML = resposta
            break;
            //-------------------------------------------------------------------------
        case "N_Maximo":
            totalBino(0, k) //passa o parametro 0 como inicial ate k
            resposta = ('<h2>' + 'Resultado:' + '<br>' +
                soma.toFixed(2) + '%' + '</h2>')
            document.getElementById("resultado").innerHTML = resposta
            break;
            //----------------------------------------------------------------------------
        case "Entre":
            let maximo = document.getElementById("Ate").value
            totalBino(k, maximo) //passa o parametro 0 como inicial ate k
            resposta = ('<h2>' + 'Resultado:' + '<br>' +
                soma.toFixed(2) + '%' + '</h2>')
            document.getElementById("resultado").innerHTML = resposta
            break;
        default:
    }
};

/*
<body>
    <!-- Conteúdo -->
    <div id="grupo">
        <div id="form1">
            <h2>Digite os Dados:</h2>
            <form class="formulario-validacao" id="form">
                <p>
                    <input type="text" name="campo" id="totalBino_N" />
                    <label for="nome">Tamanho(N)</label>
                </p>
                <p>
                    <input type="text" name="campo" id="Sucesso_S" />
                    <label for="nome">Sucesso(S) </label>
                </p>
                <p>
                    <input type="text" name="campo" id="Fracasso_F" />
                    <label for="nome">Fracasso(F)</label>
                </p>
                <p>
                    <select id="cbopçoes" onchange="optionCheck()">
                        <option value="Ex_igual">EXATAMENTE</option>
                        <option value="Maior_que">MAIOR Que</option>
                        <option value="Menor_que">MENOR Que</option>
                        <option value="Entre">ENTRE</option>
                        <option value="P_menos">Pelo MENOS</option>
                        <option value="Ate">ATÉ</option>
                        <option value="N_Minimo">No MINIMO</option>
                        <option value="N_Maximo">No MAXIMO</option>
                    </select>

                    <input type="text" name="campo" id="Variavel_K" />
                    <label for="nome">Variavel(K)</label>

                    <div id="mostrar" style="border:1px;visibility:hidden;">
                        <input type="text" id="maior" />
                        <label for="nome">Até(Max)</label>
                    </div>
                </p>
                <button type="button" name="submit" value="Enviar" onclick="botao(this.form),casos()" class="css3button">Enviar</button>
            </form>
        </div>

        <div id="resultado">
            <h2>Resultado:</h2>
        </div>
    </div>
*/