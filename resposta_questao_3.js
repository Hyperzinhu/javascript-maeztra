// Funcao para refatorar as variaveis(objetos)
const refactor = function () {
  return {
    start: 0,
    end: 0,
    // Metodo de validaçao interno
    validate() {
      // Verificando se o inicio e fim sao diferentes de 0 e iguais
      if (this.start != 0 && this.end != 0 && this.start == this.end)
        return true
      else
        return false
    }
  }
}

// Funcao para validar a sequencia de caracteres
const validateSequences = (char) => {
  // Declarando as variaveis(objetos) de cada caractere.
  let parentheses = refactor();
  let brackets = refactor();
  let keys = refactor();

  // Loop para percorrer a lista de caracteres e verificar sua ocorrencia
  for (let i = 0; i < char.length; i++) {
    switch (char.charAt(i)) {
      case '(':
        parentheses.start++;
        break;
      case ')':
        parentheses.end++;
        break;
      case '[':
        brackets.start++;
        break;
      case ']':
        brackets.end++;
        break;
      case '{':
        keys.start++;
        break;
      case '}':
        keys.end++;
        break;
    }
  }

  // Usando o metodo validate criado dentro do objeto para conferir se a sequencia e valida ou nao
  if (keys.validate() && brackets.validate() && parentheses.validate())
    return `${char} é uma sequência válida`
  else
    return `${char} não é uma sequência válida`
}

// Imprimindo resultados 
const testList = ["{[()(){}[]]{}}", "{[(()]}", "{}[]()", "((){}[[])"]

// Percorrendo a lista de testes
testList.map(c => { console.log(validateSequences(c)) })