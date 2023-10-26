let x = 10;
// eslint-disable-next-line @typescript-eslint/no-unused-vars
x = 0b1010;
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const y = 10;
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const a = 100;

const pessoa = {
  nome: 'Moises' as const,
  sobrenome: 'Cruz',
};
console.log(pessoa);

function escolhaCor(cor: 'Vermelho' | 'Amarelo' | 'Azul') {
  return cor;
}
console.log(escolhaCor('Vermelho'));

export default 1;
