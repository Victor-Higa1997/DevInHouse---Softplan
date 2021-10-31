var nome, idade, gostaDeEsporte;


nome = prompt("Qual é o seu nome? ");
idade = prompt("Qual é a sua idade? ");
gostaDeEsporte = window.confirm("Gosta de praticar algum esporte?");


//console.log(typeof(nome));
//console.log(typeof(parseInt(idade)));
//console.log(typeof(gostaDeEsporte));

console.log("Seu nome é: " + nome);
console.log("Sua idade é: " + idade);

if (gostaDeEsporte == true) {
    console.log("Gosta de praticar algum esporte: Sim");    
}else{
    console.log("Gosta de praticar algum esporte: Não");
}

