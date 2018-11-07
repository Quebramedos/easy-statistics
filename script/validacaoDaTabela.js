let vetorLimpo = []
//let vet100 = []

function limpa(vet) {
    for (let i = 0; i < vet.length - 1; ++i) {
        vetorLimpo = vet.filter(function (este, i) {
            return vet.indexOf(este) == i;
        })
    }
    console.log(vetorLimpo)
    return vetorLimpo
}


function teste() {
    let aux = vetorLimpo.length;
    if (isNaN(vetorLimpo[1])) {
        console.log("Tabela Qualitativa")
        f_qualitativa(vet100);
    }
    else if (aux <= 7) {
        console.log("Tabela Discreta")
        total(vet100, vetorLimpo);
    }
    else if (aux > 7) {
        console.log("Tabela Contínua")
        f_continua(vet100);
    }
}

/*
<body>
    <br>
    <label for="">Digite os Dados:</label>
    <input type="text" id="Input">
    <button id='bot' onclick="botao(),limpa(vet100), teste()">Enviar</button>
    <div id="outTabela"></div>
    <br>
    <div id='outResul'></div>
    <hr>
</body>
*/

