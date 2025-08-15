/*
3. Crie uma função anônima atribuída a uma constante chamada calcularDobro
que receba um número e retorne o dobro desse número. Exiba o resultado
utilizando document.write.*/



const valor = prompt(`Insira o número a ser calculado:`);
const calcularDobro = numero => {
  return numero * 2;
};
document.write(`<p>O dobro do número é ${calcularDobro(valor)}.</p>`);

