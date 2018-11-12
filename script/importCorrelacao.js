let vet100 = []
let vet100x = []
let vet200 = []
let meioVetor = 0
var leitorDeCSV = new FileReader()

window.onload = function init() {
    leitorDeCSV.onload = leCSVcorrelacao;
}

function pegaCSV(inputFile) {
    var file = inputFile.files[0];
    leitorDeCSV.readAsText(file);
}

function leCSVcorrelacao(evt) {
    //recebe o arquivo e joga em um vetor
    var fileArr = evt.target.result.split('\n');

    for (var i = 0; i < fileArr.length; i++) {
        fileArr[i] = fileArr[i].replace(/,/g, ".")
        //limpa a string e  joga no vetor
        vet100[i] = (fileArr[i].split(';')).map(Number)
        alert(vet100)
    }
    meioVetor = vet100.length / 2
    // console.log(vet100)
    vet100x = (vet100.slice(0, meioVetor))
    vet200 = vet100.slice(meioVetor, vet100.length - 1)

    window.sessionStorage.setItem("vet200", vet200);
    window.sessionStorage.setItem("vet100x", vet100x);
    return vet100x // retorna o vetor 
}

/*
  <input type="file" id="inputCSV" onchange="pegaCSV(this)">
*/
