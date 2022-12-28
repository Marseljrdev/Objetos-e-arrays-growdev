
const data = [
    {
        nome: 'Roger Medeiros',
        sexo: 'M',
        salario: 3250,
    },
    {
        nome: 'Carolina Silva',
        sexo: 'F',
        salario: 1200,
    },
    {
        nome: 'Cristina Avila',
        sexo: 'F',
        salario: 8100,
    },
    {
        nome: 'Gustavo Hoffman',
        sexo: 'M',
        salario: 5200.35,
    },
    {
        nome: 'Eva Trindade',
        sexo: 'F',
        salario: 2501,
    },
    {
        nome: 'Andre Mathias',
        sexo: 'M',
        salario: 1750,
    },
    {
        nome: 'Joice Castro da Silva',
        sexo: 'F',
        salario: 3350.25,
    },
];


// JOB 1 - Imprima no console a quantidade de pessoas Total.

let count1 = 0;

let qtdPessoa = data.map(value => value = count1++);
console.log(`A quantidade de pessoas é ${count1}`);




// JOB 2 - Imprima no console a quantidade de pessoas pessoas do sexo Feminino.

let count2 = 0;

let qtdFem = data.map((value) => {

    if(value.sexo == 'F') {
        count2++
    }

});

console.log(`A quantidade de pessoas dos exo F é ${count2}`);


// JOB 3 - Imprima no console a soma do salário de todas as pessoas.


let result = 0;
let somaSalario = data.map(item => result = item.salario);

console.log(`A soma total do salario é de: ${result}`);


// JOB 4 - Imprima no console a soma do salario de todos as pessoas do sexo Masculino

let salarioMasc = 0;
let somaSalarioMasc = data.map((value) => {

    if(value.sexo == 'M'){
        
        salarioMasc = value.salario;
        
    }

});

console.log(`A soma total do salario masculino é de: ${salarioMasc}` );


// JOB 5 - Utilize a função Some, para descobrir se existe algum salário superior a R$ 7.000, imprima verdadeiro no console caso exista, caso contrário falso.

let salarioSuperior = data.some((element) => element.salario > 7000);

if(salarioSuperior == true) {
    console.log(salarioSuperior);
}else{
    console.log('false');
}


//  JOB 6 - Utilize a função findIndex, para descobrir a posição da pessoa de nome 'Eva Trindade'.

let positionEva = data.findIndex((value) => value.nome == 'Eva Trindade');
console.log(positionEva);


//  JOB 7 - Utilize a função filter, para filtrar todas pessoas que o nome possua o sobrenome "Silva".

let filterSilva = data.filter((value) => value.nome.includes('Silva'));
//console.log(filterSilva);

let obj = JSON.stringify(filterSilva);
console.log(obj);


// JOB 8 - Imprima os nomes utilizando o MAP

let nomes = data.map((value) => value.nome);
console.log(nomes);
 






