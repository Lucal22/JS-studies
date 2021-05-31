function escopo() {
    const dataHora = document.querySelector('.data-hora');
    const data = new Date();
    dataHora.innerHTML = data.toLocaleString('pt-BR', {dateStyle: "full", timeStyle: "short"});
}
escopo();