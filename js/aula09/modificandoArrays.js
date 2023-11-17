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

funcionarios.forEach((funcionarios) => {
        console.log(`Nome do funcioraio: ${funcionarios.nome}`);
        console.log(`Seu salario é de: R$${funcionarios.salario},00`);
    });


let newArray = funcionarios.map((funcionario) => {
   
});
console.log(newArray); 