function f_qualitativa(vet100) {


    let cont = 0 //para contar variaveis
    let vetor = [] //vetor de objetos
    let maior = 0 //maior frequencia
    let moda = 0
    let grafico2 = [] //cria as colunas do grafico
    //organiza o vetor
    //--------------------------------------------------------------------------------------------
    function stringsort(vet) {
        vet.sort()
        /* vetorLimpo = vet.filter(function (este, i) {
             return vet.indexOf(este) == i;
         })*/
    }
    //-----------------------------------------------------------
    //chama funçar organizar
    stringsort(vet100)
    //-- clonar objeto
    let obj = {
        variavelPesquisada: '',
        frequencia: '',
        frequenciaPor: '',
        fac: '',
        facPorcentagem: '',
        posicao: ''
    }
    // atribui o objeto para as copias
    for (let i = 0; i < vetorLimpo.length; ++i) {
        vetor[i] = Object.assign({}, obj);
        vetor[i].variavelPesquisada = vetorLimpo[i]
    }
    // { a: 1 }
    vetor.push(obj)
    //-----------------------------------------------------------------
    //joga frequencia
    for (let x = 0; x < vetorLimpo.length; x++) {
        cont = 0
        for (let y = vet100.length; y >= 0; y--) {
            if (vetorLimpo[x] === vet100[y]) {
                cont++;
            }
        }
        vetor[x].frequencia = cont // jo NO OBJeto
        grafico2[x] = vetor[x].frequencia // joga a frequencia para o grafico
    }
    //-------------------------------------------------------------
    //frequencia acumulada
    let vet3 = [];
    let aux = 0;

    function fac() {
        vet3[0] = vetor[0].frequencia
        aux = vetor[0].frequencia
        for (var x = 0; x < vetorLimpo.length; x++) {
            aux += vetor[x + 1].frequencia;
            vet3[x + 1] = aux
            vetor[x].fac = vet3[x]
        }
        return aux;
    }
    fac() //chama funçao frequencia acumulada
    //---------------------------------------------------------------------
    //calcula a moda
    function funModa() {
        maior = vetor[0].frequencia
        for (let i = 1; i < vetor.length; ++i) {
            // ignorar propriedades herdadas
            if (vetor[i].frequencia >= maior) {
                maior = vetor[i].frequencia;
                moda = vetor[i].variavelPesquisada
            }
        }
        return moda;
    }
    funModa()

    //-----------------------------------------------------------------------------
    // Calcular Mediana
    let mediana = 0;

    function funMediana() {
        let somatoria = 0;
        let posicao = 0;
        // Calcula a somatória do fi
        for (let i = 0; i < vetor.length; i++) {
            somatoria += vetor[i].frequencia;
        }
        mediana = somatoria / 2;
        // Verifica a posião 
        for (let i = 0; i < vetor.length; i++) {
            vetor[i].posicao = posicao
            if (mediana <= vetor[i].fac) {
                mediana = vetor[i].variavelPesquisada


                break;
            }
            posicao++
        }
        return mediana;
    }
    funMediana()

    //CALCULA A O TOTAL DE fi
    let somatoriaFi = 0;

    function somaFi() {
        for (let i = 0; i < vetor.length; i++) {
            somatoriaFi += vetor[i].variavelPesquisada;
        }
        return somatoriaFi
    }

    somaFi();

    //--------------------------------------------------------------------
    //cria e preenche a tabela

    let tblDisc
    tblDisc = ('<table class="bordered striped centered highlight responsive - table ">')
    tblDisc += ('<tr>')
    tblDisc += (
        '<td>Variavel Pesquisada(xi)</td><td>Frequencia(fi)</td><td>Frequencia%(fi%)</td><td>Frequencia Acumulada</td><td>Fac %</td>'
    )
    tblDisc += ('</tr>') //primeira linha
    let totalfac = 0
    for (let linha = 0; linha < vetorLimpo.length; ++linha) {
        vetor[linha].frequenciaPor = Math.round((vetor[linha].frequencia / vet100.length) * 100)
        vetor[linha].facPorcentagem += Math.round((vetor[linha].fac / vet100.length) * 100)
        totalfac = Math.round(vetor[linha].facPorcentagem)
        tblDisc += ('<tr>')
        //primeira coluna
        tblDisc += ('<td>' + vetorLimpo[linha] + '</td><td>' + vetor[linha].frequencia + '</td>')
        //terceira coluna
        tblDisc += ('<td>' + Math.round((vetor[linha].frequencia / vet100.length) * 100) + '%' + '</td>')
        //
        //quarta coluna
        tblDisc += ('<td>' + parseInt((vetor[linha].fac)) + '</td>')
        //coluna fac porcentagem
        tblDisc += ('<td>' + (vetor[linha].facPorcentagem) + '%' + '</td>')
        tblDisc += ('</tr>')
    }
    tblDisc += ('<td>' + 'Total' + '</td>' + '<td>' + vet100.length + '</td>')
    tblDisc += ('<td>' + totalfac + '%' + '</td>' + '<td>' + vet100.length + '</td>')
    tblDisc += ('</table>')
    document.getElementById("outTabela").innerHTML = tblDisc;
    //pizza(grafico2, vetorLimpo)

    document.getElementById("moda").innerHTML = moda;
    document.getElementById("mediana").innerHTML = mediana;
    pizza(grafico2, vetorLimpo)
}