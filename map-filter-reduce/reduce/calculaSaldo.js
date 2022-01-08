const lista = [{
    name: 'sabão em pó',
    preco: 12,
    }, 
    {
    name: 'pano',
    preco: 8,
    },
    {
    name: 'bicicleta',
    preco: 300,
    },
];

const saldoDisponivel = 400;

function calculaSaldo(saldoDisponivel, lista) {
    return lista.reduce(function (prev, current, index) {
        console.log('rodada', index + 1);
        console.log({ prev });
        console.log({ current });
        return prev - current.preco;
        }, saldoDisponivel);
}

console.log(calculaSaldo(saldoDisponivel, lista));