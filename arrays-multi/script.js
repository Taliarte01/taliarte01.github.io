let jogador1 = 'O'
let jogador2 = 'X'
let jogadorAtual = jogador1
let ganhou = 'em jogo'

const tabuleiro = [
  [' ', ' ', ' '],
  [' ', ' ', ' '],
  [' ', ' ', ' ']
]

function iniciaJogo() {
  const aleatorio = Math.round(Math.random())
  if (aleatorio === 0) {
    jogadorAtual = jogador1
  } else {
    jogadorAtual = jogador2
  }

  document.getElementById('jogador').innerHTML = jogadorAtual
}

function passaJogada() {
  verificaGanhador()

  if (jogadorAtual === jogador2) {
    jogadorAtual = jogador1
  } else {
    jogadorAtual = jogador2
  }

  document.getElementById('jogador').innerHTML = jogadorAtual
}

//funcao para fazer jogadas //
function selecionar(objButton, i, j) {
  console.log(objButton.getAttribute('attr-position'))
  if (tabuleiro[i][j] === ' ') {
    tabuleiro[i][j] = jogadorAtual
    objButton.innerHTML = jogadorAtual
    passaJogada()
  } else {
    alert('Jogada Inválida!')
  }
}

//verifica se alguem ganhou//
function verificaGanhador() {
  //colunas - não funciona!!//
  for (let i = 0; i < 3; i++) {
    if (
      tabuleiro[0][i] !== ' ' &&
      tabuleiro[0][i] === tabuleiro[1][i] &&
      tabuleiro[1][i] === tabuleiro[2][i]
    ) {
      ganhou = jogadorAtual
      document.getElementById('ganhador').innerHTML = 'O ganhador é: ' + ganhou
    }
  }

  //linhas//
  for (let i = 0; i < 3; i++) {
    if (
      tabuleiro[i][0] !== ' ' &&
      tabuleiro[i][0] === tabuleiro[i][1] &&
      tabuleiro[i][1] === tabuleiro[i][2]
    ) {
      ganhou = jogadorAtual
      document.getElementById('ganhador').innerHTML = 'O ganhador é: ' + ganhou
    }
  }

  //diagonal//
  if (
    tabuleiro[0][0] !== ' ' &&
    tabuleiro[0][0] === tabuleiro[1][1] &&
    tabuleiro[1][1] === tabuleiro[2][2]
  ) {
    ganhou = jogadorAtual
    document.getElementById('ganhador').innerHTML = 'O ganhador é: ' + ganhou
  }
  //outra diagonal//
  if (
    tabuleiro[0][2] !== ' ' &&
    tabuleiro[0][2] === tabuleiro[1][1] &&
    tabuleiro[1][1] === tabuleiro[2][0]
  ) {
    ganhou = jogadorAtual
    document.getElementById('ganhador').innerHTML = 'O ganhador é: ' + ganhou
  }

  if (ganhou !== 'em jogo') {
    alert('fim de jogo')
    tabuleiro = [
      [' ', ' ', ' '],
      [' ', ' ', ' '],
      [' ', ' ', ' ']
    ]
    return
  }
}
