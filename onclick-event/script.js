function salvaAvaliacao() {
  const nome = document.getElementById('nome').value
  console.log(nome)
  const email = document.getElementById('email').value
  const avalAtendimento = document.getElementById('aval-atendimento').value
  const avalServico = document.getElementById('aval-servico').value
  const avalFuncionarios = document.getElementById('aval-funcionarios').value

  const resultados = document.getElementById('resultados')

  resultados.innerHTML = montaResultado(
    nome,
    email,
    avalAtendimento,
    avalServico,
    avalFuncionarios
  )
}

function limpaResultados() {
  const resultados = document.getElementById('resultados')
  resultados.innerHTML = ''
}

function montaResultado(
  nome,
  email,
  avalAtendimento,
  avalServico,
  avalFuncionarios
) {
  let resultado = `Olá ${nome} - ${email}<br><br>`
  resultado += 'Suas respostas foram:<br>'
  resultado += `Avaliação do atendimento: ${avalAtendimento}<br>`
  resultado += `Avaliação do serviço: ${avalServico}<br>`
  resultado += `Avaliação dos funcionários: ${avalFuncionarios}<br>`

  return resultado
}
