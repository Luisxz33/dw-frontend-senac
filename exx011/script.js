var nota1 = 6;
var nota2 = 6;

var media = (nota1 + nota2) / 2;

console.log(`A media do aluno é : ${media}`);

/* As condições são: Se o aluno tem nova maior que 7 ele está Aprovado, caso contrário ele está reprovado */

if (media >= 7) {
    console.log('Aluno aprovado');


}  
else {    console.log('Aluno reprovado');
}


/* As condições são: Se o aluno tem média maior que 7 ele está Aprovado. Se a nota estiver entre 6 e 7, ele está de recuperação, caso a nota seja menor que 6, ele está reprovado. */

if (media >= 7) {
    console.log('Aluno aprovado');
}
else if (media >= 6) {
    console.log('Aluno de recuperação');
}
else {
    console.log('Aluno reprovado');
}