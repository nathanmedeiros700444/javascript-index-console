//console.log("O arquivo separado esta funcionando");

//------------------Daqui para baixo

//alteração do titulo
//console.log(document);
//cria  variavel titulo e armazena o conteudo da classe 
let titulo = document.querySelector(".titulo");
//console.log(titulo);
//atribuição de um novo valor na variavel titulo
titulo.textContent = "fake natty Nutricão!";

//alteração da tabela
let paciente = document.querySelector("#primeiro-paciente");

let tdPeso = paciente.querySelector(".info-peso");
let tdAltura = paciente.querySelector (".info-altura");

let peso = tdPeso.textContext;
let altura = tdAltura.textContext;

let imc = peso / (altura * altura) ;

console.log("o imc do paulo é:" + imc );