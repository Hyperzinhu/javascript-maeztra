const arrayClear = function (list) {

  // Colocando o Array em ordem
  let array = list.sort()

  // Definindo uma variavel(array) para receber o resultado
  let arrayResult = []

  // Percorrendo o array e parando antes do fim dele
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i + 1] == array[i]) {
      // Adicionando os valores duplicados no novo array
      arrayResult.push(array[i])
    }
  }
  // Retornando o novo array como resultado da funcao
  return arrayResult
}