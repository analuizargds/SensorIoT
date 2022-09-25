var ppm, dados;
var max = 0;
var min = 0;
var gas = 0;
function GetDados() {
    ppm = [];
    var requests = new XMLHttpRequest();
    requests.onreadystatechange = function() {
        if (requests.readyState == 4) {
            dados = JSON.parse(requests.responseText);
            for (i = 0; i < dados.length; i++) {
                gas = parseFloat(dados[i].Gas);
                ppm.push(gas);
            };
            AlterarValor();
        };
    };
    try {
        requests.open("GET", "http://localhost:3000/Receber");
        requests.send();
    } catch (e) {
        console.log(e);
    }
}

function AlterarValor(){
    document.getElementById("valor").innerHTML = parseFloat(ppm.at(-1));
}

setInterval(GetDados, 1000);