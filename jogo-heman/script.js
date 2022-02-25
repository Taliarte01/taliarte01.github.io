class Hero {
  constructor(name, type, st, agi, int) {
    this.name = name
    this.type = type
    this.st = st //Força
    this.agi = agi //Agilidade
    this.int = int //Inteligência
    this.atkPower = 50 //Ataque base
    this.vida = 100
    this.dmgUp()
  }
  //Método que pega o tipo do personagem e soma o atributo do tipo na força
  dmgUp() {
    switch (this.type) {
      case 'Agilidade':
        console.log(this.atkPower, this.agi)
        this.atkPower += this.agi
        break
      case 'Forca':
        this.atkPower += this.st
        break
      case 'Inteligencia':
        this.atkPower += this.int
        break
    }
  }
  getAttack() {
    //retorna a força do ataque do personagem
    return this.atkPower
  }
  setAttack(ataqueRecebido) {
    //pega otaque e diminui a vida de quem recebeu o ataque
    const vidaAtual = this.vida - parseInt(ataqueRecebido * 0.3)
    this.vida = vidaAtual <= 0 ? 0 : vidaAtual
  }
  getVida() {
    //retorna a vida do personagem
    return this.vida
  }
}

let lutador1
let lutador2

//objeto com a discrição dos personagens
const herois = {
  heman: {
    nome: 'heman',
    tipo: 'Forca',
    forca: Math.floor(Math.random() * 100) + 1,
    inteligencia: Math.floor(Math.random() * 100) + 1,
    agilidade: Math.floor(Math.random() * 100) + 1
  },
  shera: {
    nome: 'shera',
    tipo: 'Forca',
    forca: Math.floor(Math.random() * 100) + 1,
    inteligencia: Math.floor(Math.random() * 100) + 1,
    agilidade: Math.floor(Math.random() * 100) + 1
  },
  gorpo: {
    nome: 'Gorpo',
    tipo: 'Agilidade',
    forca: Math.floor(Math.random() * 100) + 1,
    inteligencia: Math.floor(Math.random() * 100) + 1,
    agilidade: Math.floor(Math.random() * 100) + 1
  },

  esqueleto: {
    nome: 'esqueleto',
    tipo: 'Inteligencia',
    forca: Math.floor(Math.random() * 100) + 1,
    inteligencia: Math.floor(Math.random() * 100) + 1,
    agilidade: Math.floor(Math.random() * 100) + 1
  },
  mandibula: {
    nome: 'mandibula',
    tipo: 'Forca',
    forca: Math.floor(Math.random() * 100) + 1,
    inteligencia: Math.floor(Math.random() * 100) + 1,
    agilidade: Math.floor(Math.random() * 100) + 1
  },
  'homem-fera': {
    nome: 'homem-fera',
    tipo: 'Agilidade',
    forca: Math.floor(Math.random() * 100) + 1,
    inteligencia: Math.floor(Math.random() * 100) + 1,
    agilidade: Math.floor(Math.random() * 100) + 1
  }
}

// recalcula os atributos dos herois ao dar o reset na partida
function balanceiaAtributos() {
  Object.keys(herois).forEach(heroi => {
    herois[heroi].forca = Math.floor(Math.random() * 100) + 1
    herois[heroi].inteligencia = Math.floor(Math.random() * 100) + 1
    herois[heroi].agilidade = Math.floor(Math.random() * 100) + 1
  })
}

//funções
let caixaJogador1
let jogadorSelecionado1
function escolherLutador1(_nomeHeroi) {
  lutador1 = herois[_nomeHeroi]
  const jogadores1 = document.getElementsByClassName('jogador1')
  for (let jogador1 of jogadores1) {
    jogador1.style = 'borde: none;'
  }
  const jogador = document.getElementById(_nomeHeroi)
  jogador.style = 'border: 5px solid blue;  background-color: rgba(0,0,255,0.3)'

  const jogadorSelecionado = document.getElementById('lutador-sele-1')
  jogadorSelecionado.setAttribute('src', jogador.getAttribute('src'))

  const caixaJogador = document.getElementById('selecao-lutador-1')
  caixaJogador.style = 'visibility: visible;'
}

let caixaJogador2
let jogadorSelecionado2
function escolherLutador2(_nomeHeroi) {
  lutador2 = herois[_nomeHeroi]
  //contorno do personagem selecionado
  const jogadores2 = document.getElementsByClassName('jogador2')
  for (let jogador2 of jogadores2) {
    jogador2.style = 'borde: none;'
  }
  const jogador = document.getElementById(_nomeHeroi)
  jogador.style = 'border: 5px solid red; background-color: rgba(255,0,0,0.3);'

  //Mostra o usuário selecionado no ring
  jogadorSelecionado2 = document.getElementById('lutador-sele-2')
  jogadorSelecionado2.setAttribute('src', jogador.getAttribute('src'))

  caixaJogador2 = document.getElementById('selecao-lutador-2')
  caixaJogador2.style = 'visibility: visible;'
}

function atacar(jogador) {
  const vencedor = document.getElementById('vencedor')

  if (jogador === 'jogador1') {
    attrLutador2.setAttack(attrLutador1.getAttack())
    const vida = document.getElementById('vida-jogador-2')
    // diminui a barra de vida
    vida.style.setProperty('width', `${attrLutador2.getVida() * 2}px`)

    if (attrLutador2.getVida() <= 0) {
      vencedor.style = 'visibility: visible;'
      vencedor.innerHTML = `${lutador1.nome.toUpperCase()} VENCEU`
      encerraJogo()
    }
  } else if (jogador === 'jogador2') {
    attrLutador1.setAttack(attrLutador2.getAttack())
    const vida = document.getElementById('vida-jogador-1')
    // diminui a barra de vida
    vida.style.setProperty('width', `${attrLutador1.getVida() * 2}px`)

    if (attrLutador1.getVida() <= 0) {
      vencedor.style = 'visibility: visible;'
      vencedor.innerHTML = `${lutador2.nome.toUpperCase()} VENCEU`
      encerraJogo()
    }
  }
}

let attrLutador1
let attrLutador2

const botao = document.getElementById('botao')
const comecar = document.getElementById('comecar')

function lutar() {
  attrLutador1 = new Hero(
    lutador1.nome,
    lutador1.tipo,
    lutador1.forca,
    lutador1.agilidade,
    lutador1.inteligencia
  )
  attrLutador2 = new Hero(
    lutador2.nome,
    lutador2.tipo,
    lutador2.forca,
    lutador2.agilidade,
    lutador2.inteligencia
  )

  const vidas = document.getElementsByClassName('vida-jogador')
  for (let vida of vidas) {
    vida.style = 'visibility: visible;'
  }

  const barraVida1 = document.getElementById('barra-vida-1')
  barraVida1.style = 'visibility: visible;'

  const barraVida2 = document.getElementById('barra-vida-2')
  barraVida2.style = 'visibility: visible;'

  const botoes = document.getElementsByClassName('botao-atacar')
  for (let botao of botoes) {
    botao.style = 'visibility: visible;'
  }
  botao.style = 'display: none;'
  comecar.style = 'display: inline;'
}

function encerraJogo() {
  const botoes = document.getElementsByClassName('botao-atacar')
  for (let botao of botoes) {
    botao.style = 'visibility: hidden;'
  }

  const vidas = document.getElementsByClassName('vida-jogador')
  for (let vida of vidas) {
    vida.style = 'visibility: hidden;'
  }

  const barraVida1 = document.getElementById('barra-vida-1')
  barraVida1.style = 'visibility: hidden;'

  const barraVida2 = document.getElementById('barra-vida-2')
  barraVida2.style = 'visibility: hidden;'
}

// reinicia a partida e todos os componentes do jogo
function fightAgain() {
  lutador1 = null
  lutador2 = null
  attrLutador1 = null
  attrLutador2 = null

  caixaJogador1 = document.getElementById('selecao-lutador-1')
  caixaJogador1.style = 'visibility: hidden;'
  jogadorSelecionado1 = document.getElementById('lutador-sele-1')
  jogadorSelecionado1.removeAttribute('src')
  const jogadores1 = document.getElementsByClassName('jogador1')
  for (let jogador1 of jogadores1) {
    jogador1.style = 'borde: none;'
  }

  caixaJogador2 = document.getElementById('selecao-lutador-2')
  caixaJogador2.style = 'visibility: hidden;'
  jogadorSelecionado2 = document.getElementById('lutador-sele-2')
  jogadorSelecionado2.removeAttribute('src')
  const jogadores2 = document.getElementsByClassName('jogador2')
  for (let jogador2 of jogadores2) {
    jogador2.style = 'borde: none;'
  }

  const botoes = document.getElementsByClassName('botao-atacar')
  for (let botao of botoes) {
    botao.style = 'visibility: hidden;'
  }

  const vencedor = document.getElementById('vencedor')
  vencedor.style = 'visibility: hidden;'

  botao.style = 'display: inline;'
  comecar.style = 'display: none;'

  balanceiaAtributos()
}
