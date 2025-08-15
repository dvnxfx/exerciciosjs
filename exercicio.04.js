
/* 4. Crie uma Arrow Function atribuída a uma constante chamada calcularMetade
que receba um número e retorne a metade desse número. Exiba o resultado
utilizando document.write.
*/


const n1 = prompt(`Insira o primeiro número:`);
const n2 = prompt(`Insira o segundo número:`);

const divisao = (n1, n2) => 
  eval (`${n1} / ${n2}`);

  document.write(`<p> O resultado da operação é ${divisao(n1, n2)}.</p>`);

