// carro Pedro
const maxSpdPedro = 230
const minSpdPedro = 150
const driftPedro = 0.03

// carro Juca
const maxSpdJuca = 260
const minSpdJuca = 120
const driftJuca = 0.05

// carro Edna
const maxSpdEdna = 220
const minSpdEdna = 180
const driftEdna = 0.01

//Função que busca a velocidade de um carrinho
function obterVelocidade(min, max) {
  return Math.round(Math.random() * (max - min) + min)
}

function realizarCorrida(laps) {
  //contadores de vitorias
  let pedroWins = 0
  let jucaWins = 0
  let ednaWins = 0

  for (let i = 0; i < laps; i++) {
    //Executa calculo de velocidade do Pedro
    let spdPedro = obterVelocidade(minSpdPedro, maxSpdPedro)
    spdPedro = spdPedro - spdPedro * driftPedro

    //Executa calculo de velocidade do Juca
    let spdJuca = obterVelocidade(minSpdJuca, maxSpdJuca)
    spdJuca = spdJuca - spdJuca * driftJuca

    //Executa calculo de velocidade da Edna
    let spdEdna = obterVelocidade(minSpdEdna, maxSpdEdna)
    spdEdna = spdEdna - spdEdna * driftEdna

    //identifica quem ganhou a volta
    let resultados = [spdPedro, spdJuca, spdEdna]
    let vencedor = resultados.reduce(function (a, b) {
      return Math.max(a, b)
    })

    //Soma 1 no contador de vitoria de quem ganhou a volta
    if (vencedor == spdPedro) {
      pedroWins++
    } else if (vencedor == spdJuca) {
      jucaWins++
    } else {
      ednaWins++
    }
  }

  //Identifica quem ganhou mais voltas pra identificar o ganhador da corrida
  let finalResults = [pedroWins, jucaWins, ednaWins]
  let vencedor = finalResults.reduce(function (a, b) {
    return Math.max(a, b)
  })

  if (vencedor == pedroWins) {
    alert('Pedro ganhou!!! Pedro venceu ' + pedroWins + ' voltas!')
  } else if (vencedor == jucaWins) {
    alert('Juca ganhou!!! Juca venceu ' + jucaWins + ' voltas!')
  } else {
    alert('Edna ganhou!!! Edna venceu ' + ednaWins + ' voltas!')
  }
}
