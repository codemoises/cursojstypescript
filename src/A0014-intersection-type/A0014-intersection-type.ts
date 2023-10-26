type TemNome = { nome: string };
type TemSobrenome = { sobrenome: string };
type TemIdade = { idade: number };
type Pessoa = TemNome & TemSobrenome & TemIdade;

type AB = 'A' | 'B';
type AC = 'A' | 'c';
type AD = 'D' | 'A';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
type Intersecao = AB & AC & AD;

const pessoa: Pessoa = {
  nome: 'Moises',
  sobrenome: 'Cruz',
  idade: 30,
};

console.log(pessoa);

export { pessoa };
