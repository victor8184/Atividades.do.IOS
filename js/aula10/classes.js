class alunosIos {
    constructor(ra, nome, idade) {
        (this.ra = ra), (this.nome = nome), (this.idade = idade);
    }
}

let aluno1 = new alunosIos(157, 'Victor', 16);
console.log(aluno1.ra);
console.log(aluno1.nome);
console.log(aluno1.idade);