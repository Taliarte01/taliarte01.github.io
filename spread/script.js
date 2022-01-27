// resposta A
numeros = [2, 1, 4, 2]

function multiplica(num1, num2, num3, num4) {
  return num1 * num2 * num3 * num4
}

console.log(multiplica(...numeros))

// resposta B
function concatenaVetores(arr1, arr2) {
  return [...arr1, ...arr2]
}

console.log(concatenaVetores([1, 3], [1, 4]))

// resposta C
function maiorValor() {
  const numeros = []
  for (let i = 0; i < 10; i++) {
    numeros.push(Math.floor(Math.random() * 100) + 1)
  }
  return `Maior numero em [${numeros}]: ${Math.max(...numeros)}`
}

console.log(maiorValor())
