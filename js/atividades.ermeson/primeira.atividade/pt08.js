let peso = Number(prompt('Digite seu peso, em kilogramas. Ex: 75.3'));
let altura = Number(prompt('Digite sua altura, em metros. Ex: 1.85'));
let imc = peso / (altura*altura);

if (imc >= 18.5 && imc < 24.9) {
    alert('Você está saudável')
} else {
    alert('Você não está saudável')
}