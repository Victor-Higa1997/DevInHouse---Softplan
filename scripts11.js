var valorInicial, raiz, cont, result;

valorInicial = prompt("Digite o valor inicial:");
raiz = prompt("Digite a Raiz: ");

result = valorInicial;

for(cont = 0; cont < 10; cont++){
    result = parseInt(result) + parseInt(raiz);
    console.log(result);

}