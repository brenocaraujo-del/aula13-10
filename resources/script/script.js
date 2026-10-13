// Arrays
// let nomes = ["Ana paula","Ana","Ricardo Vieira Santana","Pedro","Joana","Evandro","Ana cassia"]

// push, pop, unshift e shift
// console.log(nomes[6],nomes[0]);


// ATIVIDADE 1 \\ 


// filter
// let nomePesquisa = prompt("digite o nome a pesquisar: ");

// let listaFiltrada = nomes.filter( nome =>
// nome.toLowerCase() === nomePesquisa. toLowerCase().trim()

// );

// console.log(listaFiltrada);


// ATIVIDADE 2 \\ 


// let listanomes = ["Miguel Ângelo","Maria Eduarda","João Pedro","Ana Clara","Pedro Henrique",
// "Maria Alice","Luiz Felipe","Ana Júlia","João Miguel","Maria Cecília"]


// startwith()

// let nomePesquisa = prompt("digite o nome a pesquisar: ");
// let listaFiltrada = nomes.filter( nome =>
// nome.toLowerCase().startsWith(nomePesquisa.toLowerCase())
// );
// console.log(listaFiltrada);


// endwith()

// let nomePesquisa = prompt("digite o nome a pesquisar: ");
// let listaFiltrada = nomes.filter( nome =>
// nome.toLowerCase().endsWith(nomePesquisa.toLowerCase())
// );
// console.log(listaFiltrada);


// includes()

// let nomePesquisa = prompt("digite o nome a pesquisar: ");
// let listaFiltrada = nomes.filter( nome =>
// nome.toLowerCase().includes(nomePesquisa.toLowerCase())
// );
// console.log(listaFiltrada);


// ATIVIDADE 3 \\


let numeros  = [1,2,3,4,5,6,7,8,9,
    10,11,12,13,14,15,16,17,18,19,20]

let parounao = numeros.filter ( numeros => numeros %2 === 0)
console.log(parounao)