let paoValor
let paoNome
let carneValor
let carneNome
let saladaValor
let saladaNome
let queijoValor
let queijoNome

function tipoPao(nome) {
  paoNome = nome
  if (nome === 'frances') {
    paoValor = 3
  } else if (paoNome === 'australiano') {
    paoValor = 8
  } else if (paoNome === 'brioche') {
    paoValor = 6
  }
}

function tipoCarne(nome) {
  carneNome = nome
  if (carneNome === 'picanha') {
    carneValor = 13
  } else if (carneNome === 'costela') {
    carneValor = 10
  } else if (carneNome === 'vegano') {
    carneValor = 12
  }
}

function tipoSalada(nome) {
  saladaNome = nome
  if (saladaNome === 'alface') {
    saladaValor = 1.5
  } else if (saladaNome === 'tomate') {
    saladaValor = 1.5
  } else if (saladaNome === 'nenhuma') {
    saladaValor = 0
  }
}

function tipoQueijo(nome) {
  queijoNome = nome
  if (queijoNome === 'mussarela') {
    queijoValor = 3
  } else if (queijoNome === 'prato') {
    queijoValor = 3
  } else if (queijoNome === 'cheddar') {
    queijoValor = 5
  }
}

function geraPedido() {
  const conta = paoValor + carneValor + saladaValor + queijoValor

  const formatador = new Intl.NumberFormat('pt-BR', {
    currency: 'BRL',
    style: 'currency',
    minimumFractionDigits: 2
  })

  let html = '<tr>'
  html += '<td>' + 'Pão' + '</td>'
  html += '<td>' + paoNome + '</td>'
  html += '<td>' + formatador.format(paoValor) + '</td>'
  html += '</tr>'

  html += '<tr>'
  html += '<td>' + 'Hambúrguer' + '</td>'
  html += '<td>' + carneNome + '</td>'
  html += '<td>' + formatador.format(carneValor) + '</td>'
  html += '</tr>'

  html += '<tr>'
  html += '<td>' + 'Salada' + '</td>'
  html += '<td>' + saladaNome + '</td>'
  html += '<td>' + formatador.format(saladaValor) + '</td>'
  html += '</tr>'

  html += '<tr>'
  html += '<td>' + 'Queijo' + '</td>'
  html += '<td>' + queijoNome + '</td>'
  html += '<td>' + formatador.format(queijoValor) + '</td>'
  html += '</tr>'

  html += '<tr>'
  html += '<td>' + 'Total' + '</td>'
  html += '<td></td>'
  html += '<td>' + formatador.format(conta) + '</td>'
  html += '</tr>'

  document.getElementById('tablebody').innerHTML = html
}
