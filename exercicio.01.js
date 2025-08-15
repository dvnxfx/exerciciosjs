/*1. Funções: O Desafio da Calculadora Universal
Contexto: Você foi contratado para desenvolver uma calculadora web que não
apenas realiza operações básicas, mas também pode exibir mensagens
personalizadas e calcular o dobro ou a metade de um número. Seu desafio é criar
funções flexíveis que possam lidar com diferentes tipos de entradas e retornar os
resultados de forma clara.
Tarefa:
*/

const user = prompt(`Insira seu nome:`);

function saudacaoPersonalizada(user) {
  document.write(`<p>Olá, ${user}! Bem-vindo(a) à Calculadora Universal!</p>`);
};

saudacaoPersonalizada(user);

