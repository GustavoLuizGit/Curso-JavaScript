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

//Aula 10 - IF
// let hora = 06;
// if (hora >=0 && hora<=12){
//     console.log("Bom dia !");
// }
// else if (hora >= 12 && hora<=18){
//     console.log("Boa tarde");
// }
// else{
//     console.log("Boa noite");
// }
//Fim aula 10

//Aula 11 - switch
// let permissao = 'Gerente'; //comum, gerente, diretor

// switch (permissao){
//     case 'Comum':
//         console.log("Usuário comum");
//         break;
//     case 'Gerente':
//         console.log("Usuário Gerente");
//         break;
//     case 'Diretor':
//         console.log("Usuário diretor");
//         break;
//     default:
//         console.log("Usuário não reconhecido");

// }
//Fim aula 11

//Inicio aula 12 - Laços de repetição
//For
// for(let i = 0; i<5; i++){
//     if(i % 2 !== 0){ //apenas impares
//         console.log(i);
//     }
// }
    
//While
// let i = 5;
// while (i>0){
//     console.log(i);
//     i--;
// }

//Do..While
// let i = 0;
// do{
//     console.log(i);
//     i++
// }while(i<10);

//For..In
// const pessoa = {
//     nome :'Gustavo',
//     idade: 25
// };
//key-value
// for(let chave in pessoa){
//     console.log(chave,pessoa['nome']);
// }
// const cores = ['Vermelho','Azul','Verde'];
// for (let indice in cores){
//     console.log(indice,cores[indice])
// }

//For..of
// for(let cor of cores){
//     console.log(cor);
// }
//Fim aula 12

//Inicio aula 13 - Exercicio
//Escreva uma função que usa 2 números e retorna o maior entre eles
// function maiorValor(num1,num2){
//     if(num1>num2){
//         return num1;
//     }
//     else if (num2>num1){
//         return num2;
//     }
//     else{
//         return "São iguais";
//     }
// }
// console.log(maiorValor(4,4));

// function maiorValor(num1,num2){
//     return num1 > num2 ? num1 : num2;
// }
// console.log(maiorValor(5,3));
//Fim aula 13

//Inicio aula 14 - FizzBuzz
//Divisivel por 3 => Fizz
//Divisivel por 5 => Buzz
//Divisivel por ambos => FizzBuzz
//Não divisivel por 3 ou 5 => Entrada
//Não é um numero =>"Não é número";
// function fizzBuzz(entrada)
// {
//     if(typeof entrada != 'number'){
//         return 'Não é um número';
//     }
//     else if(entrada % 5 == 0 && entrada % 3 == 0){
//         return 'FizzBuzz';
//     }
//     else if(entrada % 5 == 0){
//         return 'Buzz';
//     }
//     else if(entrada % 3 == 0){
//         return 'Fizz';
//     }
//     else{
//         return entrada;
//     }
// }
// const resultado = fizzBuzz(11);
// console.log(resultado);
//Fim aula 14

//Inicio aula 15 - verificarVelocidade
//Velocidade maxima de até 70 km
//A cada 5 km acima do limite voce ganhara 1 ponto
//Math.Floor()//Arrendonda o float para int
//aso pontos maior que 12 -> "Carteira Suspendida" 
// function verificarVelocidade(velocidade){
//     let pontos = 0;
//     if (velocidade <= 70){
//         return "OK";
//     }
//     else
//     {
//         let pontos = Math.floor((velocidade - 70)/5);
//         if(pontos > 12){
//             return "Carteira suspensa";
//         }
//         else if(pontos<1){
//             return "Diminua sua velocidade, pontos a partir de 75km";
//         }
//         else{
//             return pontos
//         }
//     }
// }

// console.log(verificarVelocidade(75));
//Fim aula 15