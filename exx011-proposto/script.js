function verificar() { 
   
    var numero1 = Number(document.getElementById('numero1').value); 
    var numero2 = Number(document.getElementById('numero2').value);
    var numero3 = Number(document.getElementById('numero3').value);
    
    var resultado = document.getElementById('resultado');

    
    if (numero1 === numero2 && numero2 === numero3) {
     
        resultado.innerHTML = "Os números são iguais.";
    } 
    else {
        
        var maior = Math.max(numero1, numero2, numero3); //"math.max" ajuda a encontrar o maior número
        resultado.innerHTML = "O maior número é: " + maior;
    }
}




