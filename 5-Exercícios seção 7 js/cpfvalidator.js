//Validador de CPF utilizando classes
//705.484.450-52  070.987.720-03
class ValidaCPF {
    constructor(cpfEnviado) {
        Object.defineProperty(this, 'cpfLimpo',{
            enumerable: true,
            writable: false,
            configurable: false,
            value: cpfEnviado.replace(/\D+/g, '')
        })
    }
    verificaCPF() {
        if (typeof this.cpfLimpo === 'undefined') return false;
        if (this.cpfLimpo.length !== 11) return false;
        if (this.isSequencia()) false;
        const cpfParcial = this.cpfLimpo.slice(0, -2);
        const digito1 = this.criaDigito(cpfParcial);
        const digito2 = this.criaDigito(cpfParcial + digito1);
        const novoCpf = cpfParcial + String(digito1) + String(digito2)
        if(novoCpf !== this.cpfLimpo) return console.log('Cpf inválido');
        console.log('Cpf válido');
    }

    criaDigito(cpfParcial) {
        const cpfArray = Array.from(cpfParcial);
        let regressivo = cpfArray.length + 1;
        let total = cpfArray.reduce((ac, valor) => {
            ac += (regressivo * Number(valor));
            regressivo--;
            return ac;
        }, 0);
        const digito = 11 - (total % 11);
        return digito > 9 ? 0 : digito;

    }
    isSequencia() {
        const repeticao = this.cpfLimpo[0].repeat(this.cpfLimpo.length);
        return this.cpfLimpo === repeticao;
    }

}

const cpf1 = new ValidaCPF('705.484.450-52');
cpf1.verificaCPF();