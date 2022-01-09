let first
let second
let third
let fourth

var numeros = []
var reorg = []

function armazenar() {
  primeiro = document.getElementById('primeiro').value
  segundo = document.getElementById('segundo').value
  terceiro = document.getElementById('terceiro').value
  quarto = document.getElementById('quarto').value

  numeros = [
    Number(primeiro),
    Number(segundo),
    Number(terceiro),
    Number(quarto)
  ]
  document.getElementById('lista-numeros').innerHTML = numeros
}

function decrescente() {
  ordenar()
  reorg = [numeros[3], numeros[2], numeros[1], numeros[0]]
  document.getElementById('decrescente').innerHTML = reorg
}

function crescente() {
  ordenar()
  document.getElementById('crescente').innerHTML = numeros
}

function ordenar() {
  armazenar()
  let n = numeros.length
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++)
      if (numeros[j] > numeros[j + 1]) {
        let aux = numeros[j]
        numeros[j] = numeros[j + 1]
        numeros[j + 1] = aux
      }
  }
}

function limparCampos() {
  document.getElementById('primeiro').value = ''
  document.getElementById('segundo').value = ''
  document.getElementById('terceiro').value = ''
  document.getElementById('quarto').value = ''
  document.getElementById('lista-numeros').innerHTML = ''
  document.getElementById('crescente').innerHTML = ''
  document.getElementById('decrescente').innerHTML = ''
}
