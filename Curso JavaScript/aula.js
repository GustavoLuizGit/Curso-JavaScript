//AULA 1 INICIO
// let idade = 5;
// console.log(idade);
// console.log(idade + 1);
// let altura = 180;
// console.log(altura);
// let altura = 180;
// let nome = 'Gustavo';
// let idade = 21;
// console.log('O nome é ',nome,'e ele tem',idade,'anos e ',altura,'de altura');
//AULA 1 FIM

//INICIO AULA 2
// const valorIngressoAdulto = 20;
// console.log(valorIngressoAdulto);
//FIM AULA 2 

//INICIO AULA 3
// let nome = 'Gustavo'; //string literal
// let idade = 25; //number literal
// let statusAprovado = true; //boolean
// let sobrenome = undefined // nada comum fazer isso, sem tipo
// let corSelecionado = null; //null é utilizado quando voce quer resetar um valor
//FIM AULA 3

//INICIO AULA 4
//OBJETOS
// let nome = 'Maria';
// let idade = 21;
// let anoNascimento = 2000;
// let sobrenome = 'Oliveira';
// let statusAprovado = true;

// let pessoa = {
//     nome : 'Gustavo',
//     idade : 30,
//     anoNascimento : 2000,
//     statusAprovado : true
// };
// console.log(pessoa);
//FIM AULA 4

//INICIO AULA 5
//ARRAYAS
// let familia = ['Gustavo','Marcio','Henrique','Sei la'];
// console.log(familia.length); //tamanho do array
// console.log(familia);
// let colega = ['Henrique',21,2000];
// //testando...
// console.log('O nome do meu amigo é ',colega[0],' ele tem ',colega[1],'anos e nasceu no ano de ',colega[2]);
//FIM AULA 5

//INICIO AULA 6 FUNCTIONS
//nomear uma função= verbo + substantivo
// let corSite = "Azul";
// function resetaCor(cor, tonalidade){
//     corSite = cor +' ' +  tonalidade;
// };

// console.log(corSite);
// resetaCor("vermelho", "claro");
// console.log(corSite);
// let idade = 21;
// let ano = 2000;
// function alterarNascimento(ida,an){
//     idade = ida;
//     ano = an;
// }
// console.log('Idade : ',idade,' Ano : ',ano);
// alterarNascimento(19,1999);
// console.log('Idade : ',idade,' Ano : ',ano);
//FIM AULA 6

//Inicio aula 7 - Tipos de funções
//Nao utiliza retorno
// function dizerNome(){
//     console.log('Jhonatan');
// }
// dizerNome();

//retorna valor
// function multiplicarPorDois(valor){
//     return valor * 2;
// }
// console.log(multiplicarPorDois(5));

// let resultado = multiplicarPorDois(4);
// console.log(resultado);
//Fim aula 7 


//Inicio Aula 8 - Operadores
//Operadores Arimeticos
// salario = 100;
// console.log(salario + salario);
// console.log(salario - 50);
// console.log(salario/4);
// console.log(5 ** 5);
//let idade = 18;
//console.log(++idade);
//console.log(idade++); mas como a operação é primeiro, vai mostrar o 18 pra dps incrementar
//console.log(--idade);
//console.log(idade--); mesmo caso do ++ dps

//Operadores Atribuição
// let valorTecladoGamer = 100;
// valorTecladoGamer += valorTecladoGamer;
// //valorTecladoGamer = valortecladoGamer + valorTecladoGamer
// console.log(valorTecladoGamer);
// valorTecladoGamer -= valorTecladoGamer;
// console.log(valorTecladoGamer);

//Operadores de Comparação
//Igualdade estrita 
// console.log(1 === 1); //comparando o tipo ou seja esse é verdadeiro
// console.log('1' === 1); // e esse é falso

// //Igualdade solta
// console.log ( 1 == 1); // comparando o numero, ou seja, ve se o 1 é realmente 1 e nao o tipo sao iguais , ou seja verdadeiro
// console.log ('1' == 1) // tambem verdadeiro
// let pontos = 150;
// let tipo = pontos >100 ? 'premium' : 'comum';
// voce faz (expressao) ? escreve o que recebe :(senao) isso;
// console.log(tipo);

//Operadores Lógicos
//and-e (&&)
//console.log(false && false);
// let maiorDeIdade = true;
// let possuiCarteiraDeTrabalho = false;
// let podeAplicar = maiorDeIdade && possuiCarteiraDeTrabalho;
// console.log(podeAplicar);

// //or - ou (||)
// podeAplicar = maiorDeIdade || possuiCarteiraDeTrabalho;
// console.log(podeAplicar);

// //Not (!)
// let candidatoRecusador = (!podeAplicar);
// console.log(candidatoRecusador);
//Fim aula 8 

//Inicio aula 9 - Troca de valores de variaveis
// let a = 'vermelho';
// let b = 'azul';

// console.log(a);
// console.log(b);

// let aux = b;
// b = a;
// a = aux;
// console.log(a);
// console.log(b);
//Fim aula 9