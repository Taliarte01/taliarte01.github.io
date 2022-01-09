const frase = 'Tenham todos um ótimo verão'

function lousa() {
  let count = 0
  let lousacont = 0
  let lousaapagada = 0
  let countfrases = 0

  const rep = document.getElementById('qtdrepeticoes').value
  while (rep > count) {
    if (lousacont < 11) {
      lousacont++
      count++
      if (rep === count) {
        break
      }
    } else {
      lousacont = 0
      lousaapagada++
    }
  }
  while (lousacont > countfrases) {
    document.getElementById('quadro').innerHTML += `${frase}\n`
    countfrases++
  }

  document.getElementById(
    'qtdlousaapagada'
  ).innerHTML = `Quantidade de lousas apagadas: ${lousaapagada}`
  document.getElementById(
    'qtdnalousa'
  ).innerHTML = `Quantos ficaram na lousa: ${lousacont}`
}
