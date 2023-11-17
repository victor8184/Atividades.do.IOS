class carros {
    constructor(marca, modelo, valor, ano, cor) {
        (this.marca = marca),
            (this.modelo = modelo),
            (this.valor = valor),
            (this.ano = ano),
            (this.cor = cor);
    }
}

let carro1 = new carros('Fiat', 'Palio', 30000, 2007, ' vermelho');
let carro2 = new carros('Fiat', 'Punto', 35000, 2009, 'preto');
let carro3 = new carros('Fiat', 'Uno', 25000, 2003, 'cinza');

console.log(carro1);
console.log(carro2);
console.log(carro3);
