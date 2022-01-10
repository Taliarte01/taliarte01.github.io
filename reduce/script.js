var clientes = []
var clientesjuros = []
var clienteespecifico = []

//cadastra os clientes
function incluircliente() {
  clientes.push({
    NomeCliente: document.getElementById('nome').value,
    DataVencimento: document.getElementById('datavencimento').value,
    ValorCompra: document.getElementById('valor').value,
    ValorAtualizado: ''
  })

  //mostra os clientes em uma tabela
  var tabela = clientes.map(function (item, indice) {
    return `<tr>
                <td>${indice + 1}</td>
                <td>${item.NomeCliente}</td>
                <td>${item.DataVencimento}</td>
                <td>${item.ValorCompra}</td>
                </tr>`
  })
  document.querySelector('#tblista tbody').innerHTML = tabela.join('')
}

//funcao de calculo de juros
function funcaojuros() {
  //mostra o titulo da tabela apresentada
  document.getElementById('tituloboleto').innerHTML =
    'Lista de Boletos com juros'
  //calcula os juros
  var tabjuros = clientes.map(function (item, indice) {
    // um dia em milissegundos
    var one_day = 1000 * 60 * 60 * 24

    // cria variaveis com as datas
    var hoje = new Date()
    var dataVence = new Date(item.DataVencimento)

    // calcula a diferença entre datas
    var Difference_In_Time = hoje.getTime() - dataVence.getTime()

    // verifica se está atrasado
    if (Difference_In_Time > 0) {
      // calcula o numero de dias entre as duas datas
      var diasAtraso = Difference_In_Time / (1000 * 3600 * 24)
      // calcula juros
      juros = diasAtraso * 0.001 * parseFloat(item.ValorCompra)
      //calcula mora
      mora = parseFloat(item.ValorCompra) * 0.02
      // Dá o valor atualizado
      valorcomjuros = parseFloat(item.ValorCompra) + juros + mora
      item.ValorAtualizado = valorcomjuros.toFixed(2)
    } else {
      item.ValorAtualizado = item.ValorCompra
    }

    // coloca os valores atualizados na tabela
    return `<tr>
            <td>${indice + 1}</td>
            <td>${item.NomeCliente}</td>
            <td>${item.DataVencimento}</td>
            <td>${item.ValorAtualizado}</td>
            </tr>`
  })

  document.querySelector('#tbjuros tbody').innerHTML = tabjuros.join('')

  //mostra a soma de todos os itens da tabela
  let initialValue = 0
  let sum = clientes.reduce(function (total, currentValue) {
    return parseFloat(total) + parseFloat(currentValue.ValorAtualizado)
  }, initialValue)

  document.getElementById('valortotal').innerHTML =
    'Total Acumulado:' + parseFloat(sum)
}

//funcao para agrupar clientes em uma tabela
function funcaoagruparcliente() {
  //mostra o titulo da tabela
  document.getElementById('tituloboleto').innerHTML =
    'Lista de Boletos por Cliente'
  //coloca na const cliente especifico todos os boletos de determinado cliente
  clientes.forEach(funcaobuscar)
  function funcaobuscar(item, index) {
    if (document.getElementById('buscapornome').value === item.NomeCliente) {
      clienteespecifico.push(clientes[index])
    }
  }

  //manda para o html a tabela dos boletos do cliente especifico
  var tabela = clienteespecifico.map(function (item, indice) {
    return `<tr>
                <td>${indice + 1}</td>
                <td>${item.NomeCliente}</td>
                <td>${item.DataVencimento}</td>
                <td>${item.ValorCompra}</td>
                </tr>`
  })
  document.querySelector('#tbjuros tbody').innerHTML = tabela.join('')

  //mostra a soma dos boletos do cliente especifico
  let initialValue = 0
  let sum = clienteespecifico.reduce(function (total, currentValue) {
    return parseFloat(total) + parseFloat(currentValue.ValorCompra)
  }, initialValue)

  document.getElementById('valortotal').innerHTML =
    'Total Acumulado:' + parseFloat(sum)
}

//funcao para agrupar por data de vencimento em uma tabela
function funcaoagrupardata() {
  //mostra o titulo da tabela
  document.getElementById('tituloboleto').innerHTML =
    'Lista de Boletos por Data de Vencimento'
  //coloca na const cliente especifico todos os boletos de determinado cliente
  clientes.forEach(funcaobuscar)
  function funcaobuscar(item, index) {
    if (
      document.getElementById('buscarpordatavencimento').value ===
      item.DataVencimento
    ) {
      clienteespecifico.push(clientes[index])
    }
  }

  //manda para o html a tabela dos boletos do cliente especifico
  var tabela = clienteespecifico.map(function (item, indice) {
    return `<tr>
                <td>${indice + 1}</td>
                <td>${item.NomeCliente}</td>
                <td>${item.DataVencimento}</td>
                <td>${item.ValorCompra}</td>
                </tr>`
  })
  document.querySelector('#tbjuros tbody').innerHTML = tabela.join('')

  //mostra a soma dos boletos do cliente especifico
  let initialValue = 0
  let sum = clienteespecifico.reduce(function (total, currentValue) {
    return parseFloat(total) + parseFloat(currentValue.ValorCompra)
  }, initialValue)

  document.getElementById('valortotal').innerHTML =
    'Total Acumulado:' + parseFloat(sum)
}
