function imc() {
    let altura = Number(document.querySelector('#altu').value);
    let peso = Number(document.querySelector('#pes').value);
    let resultado = document.querySelector('#txt');
    let seuImc = peso / (altura * altura);
    resultado.innerHTML = `O valor do seu IMC é de ${seuImc.toFixed(1)}`;

    let suasCondicoes = document.querySelector('#txt02');
    if (seuImc < 16.9) suasCondicoes.innerHTML = 'Você está muito abaixo do peso';
    else if (seuImc > 17 && seuImc < 18.4) suasCondicoes.innerHTML = 'Você está a baixo do peso';
    else if (seuImc > 18.5 && seuImc < 24.9) suasCondicoes.innerHTML = 'Seu peso está normal';
    else if (seuImc > 25 && seuImc < 29.9) suasCondicoes.innerHTML = 'Você está acima do peso';
    else if (seuImc > 30 && seuImc < 34.9) suasCondicoes.innerHTML = 'Você está com obesidade grau 1';
    else if (seuImc > 35 && seuImc < 40) suasCondicoes.innerHTML = 'Você está com obesidade grau 2';
    else if (seuImc > 40) suasCondicoes.innerHTML = 'Você está com obesidade grau 3';
}
