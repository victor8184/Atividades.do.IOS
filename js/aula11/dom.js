alert('Olá, seja bem-vindo');

document.title = 'Manipulação do DOM';

let section = document.createElement('section');
let article = document.createElement('article');
let heading = document.createElement('h1');
let paragrafo = document.createElement('p');

heading.innerHTML = "Olá, Mundo";
paragrafo.innerHTML = "Amo muito o corinthians";

document.body.appendChild(section);
section.appendChild(article);
article.appendChild(heading);
article.appendChild(paragrafo);




