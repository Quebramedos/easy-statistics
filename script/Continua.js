 //vetor continua
 let str = ''


 function f_continua(vet100) {
     let vetorGrafico = []
     let cont = 0

     //variaveis para intevalo
     let xmax = Math.max(...vet100); //maior valor de um vetor

     let xmin = Math.min(...vet100); //menor valor de um vetor

     let n = vet100.length // total de elementos do vetor
     //--------------------------------------------------------------------------------------------
     function diretasort(vet) {

         let aux = 0;
         let menor = 0;
         for (let i = 0; i < vet.length - 1; ++i) {
             menor = i //primeiro atribui o valor para parametro                           
             for (let j = i + 1; j < vet.length; ++j) { // atribui j = a i mais 1
                 if (vet[menor] > vet[j]) { //compara as posiçoes
                     menor = j //atribui o indice para troca                    
                 }
             }
             aux = vet[menor]
             vet[menor] = vet[i] //troca o menor valor
             vet[i] = aux //troca o maior valor
             //limpa vetor
         }
     }
     //-----------------------------------------------------------
     //chama funçar organizar
     diretasort(vet100)
     diretasort(vetorLimpo)
     //--formula para continua----------------------------------------------
     let at = 0
     let ic = 0

     function intervaloClasse() {
         at = xmax - xmin;
         if (xmin !== 0) {
             k = Math.floor(Math.sqrt(n));
         } else {
             k = Math.floor(Math.sqrt(n)) - 1;

         }
         // k = parseInt(Math.round((Math.sqrt(n))));
         let vetk = [k - 1, k, k + 1]
         while (ic == 0) {
             at += 1;
             for (let i = 0; i < vetk.length; i++) {
                 if (at % vetk[i] == 0) {
                     ic = at / vetk[i];
                     k = vetk[i]
                     break;
                 }
             }
         }
         return ic
     }
     intervaloClasse()

     //---------------------------------------------------------
     //-- clonar objeto
     let obj = {
         PontoMedio: '',
         frequencia: '',
         frequenciaPor: '',
         fac: '',
         classe: '',
         limMinimo: '',
         limMaximo: '',
         somaVariavel: '',
         intervalo: '',
         tipo: 'Continua'

     }
     let aux4 = xmin
     let total = []
     for (let i = 0; i < k; ++i) {
         vetor[i] = Object.assign({}, obj);
         total.push(aux4 += ic) //atribui o limito maximo
         vetor[i].limMaximo = total[i] //atribui o valor para o limite maximo
         vetor[i].limMinimo = vetor[i].limMaximo - ic // atribui o valor para o limite minimo
         vetorGrafico[i] = vetor[i].limMaximo //atribui para parametro
         vetor[i].intervalo = ic
         vetor[i].PontoMedio = (vetor[i].limMinimo + vetor[i].limMaximo) / 2 // ponto medio da classe
     }; // { a: 1 }
     vetor.push(obj)
     //-----------------------------------------------------------------
     aux4 = xmin
     //joga frequencia
     for (let x = 0; x < vetor.length; x++) {
         cont = 0
         for (let y = vet100.length; y >= 0; y--) {
             if ((vet100[y] < vetor[x].limMaximo) && (vet100[y] >= vetor[x].limMinimo)) {
                 cont++;
             }
         }
         // jo NO OBJO
         vetor[x].frequencia = cont
     }
     //-------------------------------------------------------------
     //frequencia acumulada
     let vet3 = []
     let aux = 0

     function fac() {
         vet3[0] = vetor[0].frequencia
         aux = vetor[0].frequencia
         let contadorfac = 1
         for (var x = 0; x < vetorGrafico.length; x++) {
             aux += vetor[contadorfac].frequencia;
             vet3[contadorfac] = aux
             vetor[x].fac = vet3[x]
             contadorfac++
         }
         return
     }
     fac()
     let moda = 0
     //---------------------------------------------------------------------
     //calcula a moda
     function funModa() {
         maior = vetor[0].frequencia
         for (let i = 0; i < vetor.length; ++i) {
             // ignorar propriedades herdadas
             if (vetor[i].frequencia >= maior) {
                 maior = vetor[i].frequencia;
                 moda = vetor[i].PontoMedio //acha o ponto medio
             }
         }
     }
     funModa() //chama funçao moda
     //----------------------------------------------------------------

     //Variáveis para achar a fi posterior e anterior
     let fiPosterior = 0;
     let fiAnterior = 0;
     let MoKing = 0;

     function fun_fi_anterior_posterior() {
         maior = vetor[0].frequencia
         for (let i = 0; i < vetor.length; ++i) {
             // ignorar propriedades herdadas
             if (vetor[i].frequencia >= maior) {
                 maior = vetor[i].frequencia;
                 moda = vetor[i].PontoMedio //acha o ponto medio
                 limitiMinimo = vetor[i].limMinimo

                 if (i != vetor.length - 1) {
                     fiPosterior = vetor[i + 1].frequencia;
                 } else {
                     fiPosterior = vetor[i].frequencia;
                 };

                 if (i != 0) {
                     fiAnterior = vetor[i - 1].frequencia;
                 } else {
                     fiAnterior = 0;
                 }
             }
         }
     }
     fun_fi_anterior_posterior() //chamar a função fi a p

     //Função da moda de king
     function ModaKing() {
         MoKing = (limitiMinimo + ((fiPosterior) / (fiAnterior + fiPosterior)) * ic).toFixed(2)
         return MoKing;
     };
     ModaKing(); // Chamando a função Moda de King

     //Função da moda de Cuzber
     let MoCuzber = 0;

     function ModaCuzber() {
         MoCuzber = (limitiMinimo + ((maior - fiAnterior) / ((maior - fiAnterior) + (maior - fiPosterior))) * ic).toFixed(
             2)
         return MoCuzber;
     };
     ModaCuzber(); // Chamando a função de Moda de Cuzber 

     let MoPearson = 0;

     function ModaPearson() {
         MoPearson = ((3 * mediana) - (2 * media)).toFixed(2)
         return MoPearson;
     }

     // Calcular a Média
     let media = 0;

     function funMedia() {
         let divisor = 0;
         let dividendo = 0;
         for (let i = 0; i < vetor.length; i++) {
             dividendo += vetor[i].PontoMedio * vetor[i].frequencia;
             divisor += vetor[i].frequencia;
         }
         media = (dividendo / divisor);
         return media;
     }
     funMedia()
     //-----------------------------------------------------------------------------
     // Calcular Mediana
     // pode dar erro aki
     let mediana = 0;
     let aux5 = 0
     let aux6 = 0

     function funMediana() {
         aux5 = vet100.length / 2;
         // Verifica a posião 
         for (let i = 0; i < vetor.length; i++) {

             if (vetor[0].fac >= aux5) {
                 aux6 = 0
                 mediana = ((vetor[i].limMinimo + ((aux5 - aux6) / vetor[i].frequencia) * ic))
                 mediana = ((mediana).toFixed(2))
                 break;
             }
             if (aux5 < vetor[i].fac) {
                 aux6 = vetor[i - 1].fac
                 mediana = ((vetor[i].limMinimo + ((aux5 - aux6) / vetor[i].frequencia) * ic))
                 mediana = ((mediana).toFixed(2))
                 break;
             }
         }
         return mediana;

     }
     funMediana()

     ModaPearson()

     //-----------------------------------------------------------------
     //desvio padrao
     let coificiente = 0
     let desvioPadrao = 0
     let aux2 = 0
     let aux3 = 0

     function funDesvio() {
         for (let i = 0; i < vetor.length; ++i) {
             aux2 = vetor[i].PontoMedio - media // tira a media da variavel
             //desvio padrao recebe frequencia - media elevado ao quadrado
             desvioPadrao += (Math.pow(aux2, 2) * vetor[i].frequencia)
         }
         //--------------------------------alerta--------------------------------------------------------
         //se for popula tira o menos 1
         aux3 = desvioPadrao / (aux - est) //auxiliar para receber o desvio
         desvioPadrao = (Math.sqrt(aux3))
         //--------------------------------------------------------------
         //coificiente padrao
         coificiente = Math.round((desvioPadrao / media) * 100)
     }
     funDesvio() //chama funçao desvio padrao 
     //chama funçao
     //----------------------------------------------
     //CALCULA A O TOTAL DE fi
     let somatoriaFi = 0;

     function somaFi() {
         for (let i = 0; i < vetor.length; i++) {
             somatoriaFi += vetor[i].frequencia
             vetor[i].somaVariavel = somatoriaFi

         }
         window.sessionStorage.setItem("SomaFiContinua", somatoriaFi)
         window.sessionStorage.setItem("tipo", vetor[2].tipo)
         return somatoriaFi
     }
     //Medidas separatrizes
     somaFi();
     console.log(vetor)
     let facP = []
     let totalfac = 0
     //--------------------------------------------------------------------
     let tbl_tabela = ('<table class="bordered striped centered highlight responsive-table">')
     tbl_tabela += ('<tr>')
     tbl_tabela += (
         '<th>Classe</th><th>Intervalo de Classe</th><th>Frequencia(fi)</th><th>Frequencia%</th><th>F. Acumulada</th><th>Fac(%)'
     )
     tbl_tabela += ('</tr>')
     let contClasses = 1
     for (let linha = 0; linha < k; ++linha) {
         vetor[linha].facPorcentagem += Math.round((vetor[linha].fac / vet100.length) * 100)
         totalfac = Math.round(vetor[linha].facPorcentagem)
         tbl_tabela += ('<tr>')
         //primeira coluna classe
         tbl_tabela += ('<td>' + contClasses + '</td>')
         vetor[linha].classe = contClasses
         //segunda coluna intervalo de classe
         tbl_tabela += ('<td>' + xmin + ' |--- ' + (xmin += ic) + '</td>')
         //terceira coluna
         tbl_tabela += ('<td>' + vetor[linha].frequencia + '</td>')
         //quarta coluna
         tbl_tabela += ('<td>' + Math.round((vetor[linha].frequencia / vet100.length) * 100) + '%' + '</td>')
         //enche o grafico
         vetor[linha].frequenciaPor = Math.round((vetor[linha].frequencia / vet100.length) * 100)
         grafico2[linha] = vetor[linha].frequenciaPor
         facP[linha] = vetor[linha].frequenciaPor + '%'
         //quinta coluna
         tbl_tabela += ('<td>' + parseInt((vetor[linha].fac)) + '</td>')
         //sexta coluna
         tbl_tabela += ('<td>' + Math.round((vetor[linha].fac / vet100.length) * 100) + '%' + '</td>')
         tbl_tabela += ('</tr>')
         contClasses++
     }
     tbl_tabela += ('<tr><td><b>' + 'Total: ' + vetor[vetor.length - 1].somaVariavel + '</td>' + '<td><b>' + vetor[1].intervalo +
         '</td>')
     tbl_tabela += ('<td><b>' + somatoriaFi + '</td>' + '<td><b>' + somatoriaFi + '%' + '</td><td>' + " " + '</td>')
     tbl_tabela += ('</table>')
     document.getElementById("outTabela").innerHTML = tbl_tabela
     //---------------------------------------------------------------------------
     //resultados
     document.getElementById("moda").innerHTML = moda;
     document.getElementById("media").innerHTML = media.toFixed(2);
     document.getElementById("mediana").innerHTML = mediana;
     document.getElementById("desvio").innerHTML = desvioPadrao.toFixed(2);
     document.getElementById("coificiente").innerHTML = coificiente;
     document.getElementById("modaKing").innerHTML = MoKing;
     document.getElementById("modaCuzber").innerHTML = MoCuzber;
     document.getElementById("modaPearson").innerHTML = MoPearson;

     // enche o grafico
     vetorGrafico.unshift(vet100[0])
     grafico2.push('')
     graficoContinuo(vetorGrafico, grafico2)
     return vetor
 }
