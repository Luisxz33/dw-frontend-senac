var resultado = document.getElementById("resultado");

var acao1 = 0;
var acao2 = 0;
var acao3 = 0;
var acao4 = 0;
var acao5 = 0;

function contaracao() {
    acao1++;
    resultado.textContent += `Você clicou no primeiro botão `;
}
function contaracao2() {
    acao2++;
    resultado.textContent += `Você clicou no segundo botão `;
}
function contaracao3() {
    acao3++;
    resultado.textContent += `Você clicou no terceiro botão `;
}
function contaracao4() {
    acao4++;
    resultado.textContent += `Você clicou no quarto botão `;
}
function contaracao5() {
    acao5++;
    resultado.textContent += `Você clicou no quinto botão `;
}


function resetContador() {
    acao1 = 0;
    acao2 = 0;
    acao3 = 0;
    acao4 = 0;
    acao5 = 0;
    resultado.textContent = "";
}