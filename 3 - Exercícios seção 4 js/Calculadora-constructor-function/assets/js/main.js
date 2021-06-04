function CriaCalculadora(){
    this.display = document.querySelector('.display');
    this.btnClear = document.querySelector('.btn-clear');
    this.clearDisplay = function() {
        this.display.value='';
    };
    this.clearOne = function() {
        this.display.value=this.display.value.slice(0, -1);
    }
    this.inicia = function() {
        this.cliqueBotoes();
        this.pressionaEnter();

    };
    this.pressionaEnter = function(){
        this.display.addEventListener('keyup', function(e){
            if(e.keyCode === 13) {
                this.realizaConta();
            }
        });
    };
    this.realizaConta = function(){
        let conta = this.display.value;
        try{
            conta = eval(conta);
            if(!conta){
                alert('Conta inválida!');
                return;
            }
            this.display.value = conta;
        }catch(e) {
            alert('Conta inválida!');
            return;
        }
    };
    this.cliqueBotoes = function() {
        document.addEventListener('click', function(e){
            const el=e.target;
            if(el.classList.contains('btn-num')){
                this.btnParaDisplay(el.innerText);
            }
            if(el.classList.contains('btn-clear')){
                this.clearDisplay();
            }
            if(el.classList.contains('btn-del')){
                this.clearOne();
            }
            if(el.classList.contains('btn-eq')){
                this.realizaConta();
            }
        }.bind(this));
    };
    this.btnParaDisplay=function(valor) {
        this.display.value += valor;

    };
};
this.cliqueBotoes = function() {
    document.addEventListener('click', function(e){
        const el=e.target;
        if(el.classList.contains('btn-num')){
            this.btnParaDisplay(el.innerText);
        }
        if(el.classList.contains('btn-clear')){
            this.clearDisplay();
        }
        if(el.classList.contains('btn-del')){
            this.clearOne();
        }
        if(el.classList.contains('btn-eq')){
            this.realizaConta();
        }
    }.bind(this));
};
this.btnParaDisplay = function(valor) {
    this.display.value += valor;

};
const calculadora = new CriaCalculadora();
calculadora.inicia();