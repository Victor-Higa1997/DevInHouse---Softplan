var tipo, valor, valor2, resultado;

tipo = prompt("Qual tipo de cálculo que deseja fazer? + | - | * | /");

while((tipo != "+") && (tipo != "-") && (tipo != "*") && (tipo != "/")){
    alert("Digite uma das opções listadas");
    tipo = prompt("Qual tipo de cálculo que deseja fazer? + | - | * | /");
}

valor = prompt("Digite o primeiro valor: ");
valor2 = prompt("Digite o segundo valor: ");

switch(tipo){
    case "+":
        resultado = parseInt(valor) + parseInt(valor2);
        alert("O resultado do seu cálculo é: " + resultado);
        break;
    
    case "-":
        resultado = parseInt(valor) - parseInt(valor2);
        alert("O resultado do seu cálculo é: " + resultado);
        break;
    
    case "*":
        resultado = parseInt(valor) * parseInt(valor2);
        alert("O resultado do seu cálculo é: " + resultado);
        break; 

    case "/":
        resultado = parseInt(valor) / parseInt(valor2);
        alert("O resultado do seu cálculo é: " + resultado);
        break;
    default:
        alert("ERRO!");
}
