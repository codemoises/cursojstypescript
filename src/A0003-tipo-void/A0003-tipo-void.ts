function semRetorno(...args: string[]): void {
  console.log(args.join(' '));
}

const pessoa = {
  nome: 'Moises',
  sobrenome: 'Cruz',
  exibirNome(): void {
    console.log(this.nome + ' ' + this.sobrenome);
  },
};

semRetorno('Moises', 'Cruz');
pessoa.exibirNome();

export { pessoa };
