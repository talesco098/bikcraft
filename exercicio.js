function livro (nome, ano, autor) {
  const nomeMaior = nome.toUpperCase;
  ano = 2050 - ano;
  frase = nome + " por " + autor;
  objeto = {
    nome,
    ano,
    autor
  }
  return objeto;
}

livro ("O Senhor dos Anéis", 1954, "J. R. R. Tolkien")

const variavel = console.log(livro);