const number = (num) => {

  // Atribui o valor passado a uma variavel
  let list = num

  // Transforma a lista de inteiros passadas em um Array
  let numberArray = list.toString().split('')

  // Declaracao de variaveis Booleanas
  let isSort = true
  let isAscending = true
  let isDescending = true

  //  Definindo ate onde o loop pode percorrer (tamanho da lista -1)
  let range = (numberArray.length > 0) && (numberArray.length - 1)

  // Loop para verificar os elementos do array
  for (let i = 0; i < range; i++) {

    // Verifica se a lista é decrescente
    isDescending = isDescending && (numberArray[i] >= numberArray[i + 1]);

    // Verifica se a lista é crescente
    isAscending = isAscending && (numberArray[i] <= numberArray[i + 1]);

    if (isAscending) {

      // Verifica se a diferenca entre os elementos da lista é maior que 1 
      if ((numberArray[i] != numberArray[i + 1]) && (numberArray[i] != (Number(numberArray[i + 1]) - 1)))
        isSort = false

    } else if (isDescending) {

      // Verifica se a diferenca entre os elementos da lista é maior que 1 
      if ((numberArray[i] != numberArray[i + 1]) && (numberArray[i] != (Number(numberArray[i + 1]) + 1)))
        isSort = false
    }

    // Se a lista não for ordenada acontece o retorno para o usuario
    if (!isSort)
      return console.log(`A sequência ${list} não é ordenada.`)
  }

  if (isAscending && isDescending) {
    console.log(`A sequência ${list} é ordenada.`)
  } else if (isAscending) {
    console.log(`A sequência ${list} é ordenada e de forma crecente.`)
  } else if (isDescending) {
    console.log(`A sequência ${list} é ordenada e de forma decrescente.`)
  }
}
