const years = function (matrix) {
  // Declaracao de variaveis 
  let list = matrix
  let listStart = []
  let listEnd = []
  let invalidYears = []

  // Percorrendo a primeira camada da matriz e pegando cada Array dentro dela
  list.forEach((year) => {
    // Se o primeiro e segundo ano forem maior que 0 e o primeiro ano for menor que o segundo 
    if (year[0] > 0 && year[1] > 0 && year[0] < year[1]) {
      // Adicionando os anos de inicio e fim respectivamente dentro dos arrays
      listStart.push(year[0])
      listEnd.push(year[1])
    } else {
      // Adicionando os anos invalidos em um array
      invalidYears.push(year)
    }
  });

  // Usando spread operator para pegar o max e o min dos anos 
  let startYear = Math.max(...listStart)
  let endYear = Math.min(...listEnd)

  if (startYear === endYear) {
    console.log(`O ano que mais teve pessoas trabalhando foi o ano de: ${startYear}`)
  } else {
    console.log(`Entre os anos de ${startYear} à ${endYear} tiveram mais pessoas trabalhando`)
  }
  console.error(`[ERROR] ANOS INVALIDOS:`, invalidYears)
}

console.log(years([[1960, 2005], [1945, 2008], [1938, 1999], [0, 2003], [-1130, -1200]]))