
const people = function (val) {
  // Declarando uma variavel para receber a ordem
  let order = []

  // Constroi uma ordem de numeros ate o numero passado
  for (i = 1; i <= val; i++) {
    order.push(i)
  }

  // Atribui a variavel a multiplicacao dos numeros 
  let ways = order.reduce(function (a, b) {
    return a * b
  })

  return ways
}