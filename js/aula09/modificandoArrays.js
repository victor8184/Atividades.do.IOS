let = funcionarios = [
    {
        nome: 'Daniel',
        salario: '7600'
    },
    {
        nome: 'Wally',
        salario: '4800'
    },
    {
        nome: 'Victor',
        salario: '3200'
    },
    {
        nome: 'Claudinei',
        salario: '4950'
    },
    {
        nome: 'Gabriel',
        salario: '4730'
    }
]

let informacoesFuncionarios = funcionarios.forEach((funcionario) => {
    console.log(funcionario.nome);
    console.log(funcionario.salario);
});

//Dissídio dos salários
let novosSalarios = funcionarios.map((ajustes) => {
   return ajustes.salario * 1.05;
});
console.log(novosSalarios);

//filtragem dos que ficaram acima de 5mil
let filtroDosSuperiores = novosSalarios.filter((superiores) => {
    return superiores >= 5000;
});
console.log(filtroDosSuperiores);

//ver se wally ficou acima de 5mil
let = funcionariosCaros = [
    {
        nome: 'Daniel',
        salario: '7980'
    },
    {
        nome: 'Wally',
        salario: '5040'
    },
   
    {
        nome: 'Claudinei',
        salario: '5197.5'
    }
]
let findWally = funcionariosCaros.find((encontrar) => {
    return encontrar.nome === 'Wally';
})
console.log(findWally);


