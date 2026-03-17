 function gerarTabuada() {
            const input = document.getElementById('numero');
            const resultado = document.getElementById('resultado');
            const erro = document.getElementById('erro');

            const numero = parseInt(input.value);

            // Validação
            if (input.value === '' || isNaN(numero)) {
                erro.textContent = 'Por favor, digite um número válido.';
                resultado.innerHTML = '';
                return;
            }

            erro.textContent = '';
            resultado.innerHTML = '';



            // Loop de 0 até 10
            for (let i = 0; i <= 10; i++) {
                const calc = numero * i;

                const linha = document.createElement('div');
                linha.className = 'linha';
                linha.innerHTML = `
                    <span>${numero} × ${i} =</span>
                    <span class="resultado">${calc}</span>
                `;
                resultado.appendChild(linha);
            }
        }

        // Permite pressionar Enter para calcular
        document.getElementById('numero').addEventListener('keydown', function(e) {
            if (e.key === 'Enter') gerarTabuada();
        });