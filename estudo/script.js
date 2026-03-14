var contador = 0;
var resultado = document.getElementById("contador");
function contarClique() {
    contador++;
    resultado.textContent = contador;
}
function resetContador() {
    contador = 0;
    resultado.textContent = contador;
}