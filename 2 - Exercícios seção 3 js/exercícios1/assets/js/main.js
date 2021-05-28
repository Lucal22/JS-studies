function escopo() {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');
    function recebeValores(valores) {
        valores.preventDefault();
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');
        const imcPeso = Number(peso.value);
        const imcAltura = Number(altura.value);
        let imc = imcPeso / (imcAltura ** 2);
        let imcLog = imc.toFixed(1);
        if (!imcPeso || !imcAltura) {
            resultado.innerHTML = `<p>Favor, verificar se os campos foram preenchidos corretamente.</p>`;
            return;
        }
        else if (imc > 0 && imc < 18.5) {
            classePeso = 'Abaixo do peso';
        } else if (imc >= 18.5 && imc <= 24.9) {
            classePeso = 'Peso normal';
        } else if (imc >= 25 && imc <= 29.9) {
            classePeso = 'Sobrepeso';
        } else if (imc >= 30 && imc <= 34.9) {
            classePeso = 'Obesidade grau 1';
        } else if (imc >= 35 && imc <= 39.9) {
            classePeso = 'Obesidade grau 2';
        } else if (imc > 40) {
            classePeso = 'Obesidade grau 3';
        }
        resultado.innerHTML = `<p>Seu IMC é ${imcLog} (${classePeso})</p>`;
    }
    form.addEventListener('submit', recebeValores);
}
escopo();