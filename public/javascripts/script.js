function mostrarTela(pagina) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("conteudo").innerJS = this.responseText;
        }
    };
    xhttp.open("GET", pagina, true);
    xhttp.send();
}