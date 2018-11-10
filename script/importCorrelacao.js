let vet100 = []
let vet200
let meioVetor
var leitorDeCSV = new FileReader()
window.onload = function init() {
    leitorDeCSV.onload = leCSV;
}

function pegaCSV(inputFile) {
    var file = inputFile.files[0];
    leitorDeCSV.readAsText(file);
}

function leCSV(evt) {
    //recebe o arquivo e joga em um vetor
    var fileArr = evt.target.result.split('\n');

    for (var i = 0; i < fileArr.length; i++) {
        fileArr[i] = fileArr[i].replace(/,/g, ".")
        //limpa a string e  joga no vetor
        vet100[i] = fileArr[i].split(';').map(Number);
    }
    meioVetor = vet100.length / 2
    // console.log(vet100)
    vet200 = vet100.slice(meioVetor, vet100.length)
    console.log(vet100)
    window.sessionStorage.setItem("vet200", vet200);
    window.sessionStorage.setItem("vet100", vet100);
    return vet100 // retorna o vetor 
}
console.log(vet100)
/*
  <input type="file" id="inputCSV" onchange="pegaCSV(this)">
*/