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
  result.value = 0
}

function somar() {
  inicializa()
  const soma = num1 + num2
  result.value = soma
}

function subtrair() {
  inicializa()
  const subtracao = num1 - num2
  result.value = subtracao
}

function dividir() {
  inicializa()
  const divisao = num1 / num2
  result.value = divisao
}

function multiplicar() {
  inicializa()
  const multiplicacao = num1 * num2
  result.value = multiplicacao
}
