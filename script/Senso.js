let est = 0;

function estima() {
    var i;
    for (i = 0; i < 2; i++) {
        if (document.estimacao.group1[i].checked) {
            break;
        }
    }
    est = parseInt(document.estimacao.group1[i].value)
    console.log(est)
    window.sessionStorage.setItem("senso", est);

    return est
}