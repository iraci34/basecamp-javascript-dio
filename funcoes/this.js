function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}

const pessoa1 = {
    nome: 'João',
    idade: 23,
};

const pessoa2 = {
    nome: 'Maria',
    idade: 45,
};

const pessoa3 = {
    nome: 'Bob',
    idade: 34,
};

const pessoa4 = {
    nome: 'Ana',
    idade: 29,
};

console.log(calculaIdade.call(pessoa3, 40));
console.log(calculaIdade.apply(pessoa2, [24]));

