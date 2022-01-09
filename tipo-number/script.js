const result = document.getElementById('resultado')
let num1 = 0
let num2 = 0

/* Função para inicializar os valores dos inputs */
function inicializa() {
  num1 = Number(document.getElementById('num1').value)
  num2 = Number(document.getElementById('num2').value)
}

/* função para limpar os valores */
function limpar() {
  document.getElementById('num1').value = 0
  document.getElementById('num2').value = 0
  num1 = 0
  num2 = 0
  result.innerHTML = 0
}

function somar() {
  inicializa()
  const soma = num1 + num2
  result.innerHTML = soma
}

function subtrair() {
  inicializa()
  const subtracao = num1 - num2
  result.innerHTML = subtracao
}

function dividir() {
  inicializa()
  const divisao = num1 / num2
  result.innerHTML = divisao
}

function multiplicar() {
  inicializa()
  const multiplicacao = num1 * num2
  result.innerHTML = multiplicacao
}
