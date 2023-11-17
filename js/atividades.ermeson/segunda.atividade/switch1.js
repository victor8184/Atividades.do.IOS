let precoOriginal = Number(prompt('Insira o valor do seu produto'));
let codigo = prompt('Insira seu codigo promocional');
let desconto = codigo.toUpperCase();


switch (desconto) {
    case 'DESC1':
        alert('Seu desconto é de 5%');
        let valorDesconto1 = precoOriginal * (1 - 0.05);
        alert(`O valor de seu produto sem desconto é de: ${precoOriginal}. E com desconto o valor é de: R$${valorDesconto1.toFixed(2)}.`);
        break;
    case 'DESC2':
        alert('Seu desconto é de 10%');
        let valorDesconto2 = precoOriginal * (1 - 0.10);
        alert(`O valor de seu produto sem desconto é de: ${precoOriginal}. E com desconto o valor é de: R$${valorDesconto2.toFixed(2)}.`);
        break;
    case 'DESC3':
        alert('Seu desconto é de 15%');
        let valorDesconto3 = precoOriginal * (1 - 0.15);
        alert(`O valor de seu produto sem desconto é de: ${precoOriginal}. E com desconto o valor é de: R$${valorDesconto3.toFixed(2)}.`);
        break;
    case 'DESC4':
        alert('Seu desconto é de 20%');
        let valorDesconto4 = precoOriginal * (1 - 0.20);
        alert(`O valor de seu produto sem desconto é de: ${precoOriginal}. E com desconto o valor é de: R$${valorDesconto4.toFixed(2)}.`);
        break;
    case 'DESC5':
        alert('Seu desconto é de 25%');
        let valorDesconto5 = precoOriginal * (1 - 0.25);
        alert(`O valor de seu produto sem desconto é de: ${precoOriginal}. E com desconto o valor é de: R$${valorDesconto5.toFixed(2)}.`);
        break;
    default:
        alert('Codigo inválido');
        break;
}
