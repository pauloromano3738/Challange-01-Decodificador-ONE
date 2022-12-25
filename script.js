// A letra "a" é convertida para "ai"
// A letra "e" é convertida para "enter"
// A letra "i" é convertida para "imes"
// A letra "o" é convertida para "ober"
// A letra "u" é convertida para "ufat"

var input = document.querySelector("#input-texto");
var resultado = document.querySelector(".resultado");

input.addEventListener("keypress", function (x) {
  const keyCode = x.keyCode ? x.keyCode : x.key;
  if (keyCode > 47 && keyCode < 58) {
    x.preventDefault();
  }
});

function exibi() {
  document.querySelector("#resultado-convertido").style.display = "block";
  document.querySelector(".botao-copiar").style.display = "block";
}

function oculta() {
  document.querySelector(".ilustracao").style.display = "none";
  document.querySelector(".texto-padrao2").style.display = "none";
  document.querySelector(".texto-mensagem").style.display = "none";
}

function copia() {
  var texto = document.querySelector("#resultado-convertido").value;
  navigator.clipboard.writeText(texto);

  input.value = "";
  input.focus();
  document.querySelector(".ilustracao").style.display = "block";
  document.querySelector(".texto-padrao2").style.display = "block";
  document.querySelector(".texto-mensagem").style.display = "block";

  document.querySelector("#resultado-convertido").style.display = "none";
  document.querySelector(".botao-copiar").style.display = "none";
}

function criptografa() {
  oculta();
  exibi();

  var texto = input.value;

  var convertido = texto.replace(/e/g, "enter");
  convertido = convertido.replace(/i/g, "imes");
  convertido = convertido.replace(/a/g, "ai");
  convertido = convertido.replace(/o/g, "ober");
  convertido = convertido.replace(/u/g, "ufat");

  resultado.value = convertido;

  document.querySelector("#resultado-convertido").innerHTML = convertido;
  input.value = "";
}

function descriptografa() {
  oculta();
  exibi();

  var texto = input.value;

  var convertido = texto.replace(/enter/g, "e");
  convertido = convertido.replace(/imes/g, "i");
  convertido = convertido.replace(/ai/g, "a");
  convertido = convertido.replace(/ober/g, "o");
  convertido = convertido.replace(/ufat/g, "u");

  resultado.value = convertido;

  document.querySelector("#resultado-convertido").innerHTML = convertido;
  input.value = "";
}

var chave = document.querySelector(".light-mode");
var logo = document.querySelector(".logo");
var atencao = document.querySelector(".atencao");
var ilustracao = document.querySelector(".ilustracao");

function mudaTema() {
  document.body.classList.toggle("light-theme");

  if (document.body.classList.contains("light-theme")) {
    chave.src = "./svg/darkmode.svg";
    logo.src = "./svg/logoLaranja.svg";
    atencao.src = "./svg/atencaoLaranja.svg";
    ilustracao.src = "./svg/ilustracaoLaranja.svg";
  } else {
    chave.src = "./svg/lightmode.svg";
    logo.src = "./svg/logoVerde.svg";
    atencao.src = "./svg/atencaoVerde.svg";
    ilustracao.src = "./svg/ilustracaoVerde.svg";
  }
}

var botaoCriptografa = document.querySelector(".botao-criptografar");
var botaoDescriptografa = document.querySelector(".botao-descriptografar");
var botaoCopia = document.querySelector(".botao-copiar");

botaoCriptografa.onclick = criptografa;
botaoDescriptografa.onclick = descriptografa;
botaoCopia.onclick = copia;
chave.onclick = mudaTema;
