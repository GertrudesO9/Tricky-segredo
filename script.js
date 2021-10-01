let contador = 0;

function socorro(){
  let botaoOculto = document.getElementById("botaoOculto");
  
  if (contador == 0) {
    botaoOculto.style.visibility = "visible";
    AFF();
    contador++;
    console.log(contador);
  } else {
    botaoOculto.style.visibility = "hidden";
    contador--;
  }
  tempoMichael();
}

function tempoMichael() {
  let botaoMichael2 = setTimeout(function michaelJackson() {
    let botaoMichael = document.getElementById("botaoMichael");
    botaoMichael.style.visibility = "visible";
    contador++;
    console.log(contador);
  }, 1000);
}



function AFF() {
    var nome = "não vou parar!";
  var Eggman = document.getElementById("resposta3");
  Eggman.innerHTML = nome;
}



function Gaster(){
 var NUNCA = "PARA? NÃO VOU!";
  var Vagner = document.getElementById("resposta4");
  Vagner.innerHTML = NUNCA;
  let openWindow = setTimeout(function abrirNovaAba() {
  window.open("https://www.youtube.com/watch?v=GZmoHrq0mEY");
  }, 3000)
}

function abrirNovaAba() {
  window.open("https://www.youtube.com/watch?v=GZmoHrq0mEY");
}

function michaelJackson() {
  window.open("https://www.youtube.com/watch?v=6Ad3KMFwqfU");
}