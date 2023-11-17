let frutas = '    Uva, Pera, Maça, Abacaxi';
console.log(frutas.length);
console.log(frutas.substring(0,2));
console.log(frutas.trim());
let novasFrutas = frutas.replace('Maça', 'Limão');
console.log(novasFrutas.toLocaleUpperCase())
console.log(`As frutas que estão nas suas listas são: ${frutas}`);