let num1 = Number(prompt('Digite o primeiro número:\n '));
let num2 = Number(prompt('Digite o segundo número:\n '));

function soma() {

    soma = num1 + num2;

    if (num1 == num2) {
        console.log(`Os números ${num1} e ${num2} são iguais.`);
    } else {
        console.log(`Os números ${num1} e ${num2} não são iguais`);
    }

    if (soma < 10 && soma < 20) {
        console.log(`Sua soma é ${soma}, que é menor que 10 e menor que 20.`);
    } else if (soma > 10 && soma > 20) {
        console.log(`Sua soma é ${soma}, que é maior que 10 e maior que 20.`);
    } else {
        console.log(`Sua soma é ${soma}, que é maior que 10 e menor que 20.`);
    }
}
    soma();
