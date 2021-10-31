var anoNascimento, anoAtual, idade;

anoNascimento = prompt("Digite o seu ano de nascimento: ");
anoAtual = prompt("Digite o ano atual: ");

idade = parseInt(anoAtual) - parseInt(anoNascimento);

alert("Sua idade é " + idade + " ou " + parseInt(idade-1) + ", onde " + idade + 
" é a idade do usuário, caso ele tenha feito aniversário neste ano, e " + parseInt(idade-1) + 
" é a idade caso ele ainda não tenha aniversariado no ano corrente." );