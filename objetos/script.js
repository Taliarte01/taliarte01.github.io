let carrovolta
let PedroVolta
let EdnaVolta
let JucaVolta
let PedroGanhador = 0
let EdnaGanhador = 0
let JucaGanhador = 0
let carroedna
let carrojuca
let carropedro

//Sorteio dos carros //
function tipocarro() {
  var carro = []
  for (let index = 0; index < 3; index++) {
    randomico = Math.random() * 100
    if (randomico <= 60) {
      carro.push('Popular')
    } else if (randomico <= 95) {
      carro.push('Sport')
    } else if (randomico <= 100) {
      carro.push('Super Sport')
    }
  }
  carroedna = carro[0]
  carrojuca = carro[1]
  carropedro = carro[2]

  //mostra quem corre com cada carro//
  document.getElementById('caredna').innerHTML =
    'O carro de Edna é ' + carroedna
  document.getElementById('carjuca').innerHTML =
    'O carro de Juca é ' + carrojuca
  document.getElementById('carpedro').innerHTML =
    'O carro de Pedro é ' + carropedro
}

//configurações dos carro nos objetos
//1- valor velmax, 2- valor velmin e 3- diferença entre velmax e velmin

const popular = {
  velmax: [180, 200, 20],
  velmin: [110, 130, 20],
  derr: [0.03, 0.04, 0.01]
}

const sport = {
  velmax: [195, 215, 20],
  velmin: [125, 145, 20],
  derr: [0.02, 0.03, 0.01]
}

const supersport = {
  velmax: [210, 230, 20],
  velmin: [140, 160, 20],
  derr: [0.01, 0.0175, 0.0075]
}

//função calcula a volta
function volta(velmax, velmin, derr) {
  velocidademaxima = Math.round(Math.random() * velmax[2]) + velmax[0]
  velocidademinima = Math.round(Math.random() * velmin[2]) + velmin[0]
  derr = Math.round(Math.random() * derr[2]) + derr[0]
  diff = velocidademaxima - velocidademinima
  sortedValue = Math.round(Math.random() * diff) + velocidademinima
  carrovolta = sortedValue - sortedValue * derr
  return carrovolta
}

//função que primeiro acha qual carro foi sorteado, realiza a função deste carro e retorna a velocidade da volta //
function Pedro() {
  if ((carropedro = 'Popular')) {
    volta(popular.velmax, popular.velmin, popular.derr)
  } else if ((carropedro = 'Sport')) {
    volta(sport.velmax, sport.velmin, sport.derr)
  } else if ((carropedro = 'Super Sport')) {
    volta(supersport.velmax, supersport.velmin, supersport.derr)
  }
  PedroVolta = carrovolta
  return PedroVolta
}

function Juca() {
  if ((carrojuca = 'Popular')) {
    volta(popular.velmax, popular.velmin, popular.derr)
  } else if ((carrojuca = 'Sport')) {
    volta(popular.velmax, popular.velmin, popular.derr)
  } else if ((carrojuca = 'Super Sport')) {
    volta(supersport.velmax, supersport.velmin, supersport.derr)
  }
  JucaVolta = carrovolta
  return JucaVolta
}

function Edna() {
  if ((carroedna = 'Popular')) {
    volta(popular.velmax, popular.velmin, popular.derr)
  } else if ((carroedna = 'Sport')) {
    volta(popular.velmax, popular.velmin, popular.derr)
  } else if ((carroedna = 'Super Sport')) {
    volta(supersport.velmax, supersport.velmin, supersport.derr)
  }
  EdnaVolta = carrovolta
  return EdnaVolta
}

// verifica o ganhador de cada volta//
function corrida() {
  for (var i = 0; i < numeroVoltas; i++) {
    Edna()
    Juca()
    Pedro()

    if (EdnaVolta > JucaVolta && EdnaVolta > PedroVolta) {
      EdnaGanhador++
    }
    if (JucaVolta > EdnaVolta && JucaVolta > PedroVolta) {
      JucaGanhador++
    }
    if (PedroVolta > JucaVolta && PedroVolta > EdnaVolta) {
      PedroGanhador++
    }
  }
}

//verifica quem ganhou a corrida toda = quem tem o contador de vitorias mais alto//
function ganhador() {
  if (EdnaGanhador > JucaGanhador && EdnaGanhador > PedroGanhador) {
    document.getElementById(
      'resultado'
    ).innerHTML = `Edna Campeã / Edna ganhou: ${EdnaGanhador}`
  }
  if (JucaGanhador > EdnaGanhador && JucaGanhador > PedroGanhador) {
    document.getElementById(
      'resultado'
    ).innerHTML = `Juca Campeão / Juca ganhou: ${JucaGanhador}`
  }
  if (PedroGanhador > JucaGanhador && PedroGanhador > EdnaGanhador) {
    document.getElementById(
      'resultado'
    ).innerHTML = `Pedro Campeão / Pedro ganhou: ${PedroGanhador}`
  }
}

//corrida rapida de 10 voltas//
function rapida() {
  numeroVoltas = 10
  corrida()
  ganhador()
  PedroGanhador = 0
  JucaGanhador = 0
  EdnaGanhador = 0
}

//corrida gp de 70 voltas//
function gp() {
  numeroVoltas = 70
  corrida()
  ganhador()
  PedroGanhador = 0
  JucaGanhador = 0
  EdnaGanhador = 0
}

//corrida enduro de 160 voltas//
function enduro() {
  numeroVoltas = 160
  corrida()
  ganhador()
  PedroGanhador = 0
  JucaGanhador = 0
  EdnaGanhador = 0
}
