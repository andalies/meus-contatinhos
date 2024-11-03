const form = document.getElementById("form-contato");
const nomes = [];
const telefones = [];


let linhas = '';

form.addEventListener("submit", function(e) {
    e.preventDefault();
    
    adicionaLinha();
    atualizaTabela();

});

function adicionaLinha() {
    
    const inputNomeContato = document.getElementById("Nome");
    const inputNumTeL = document.getElementById("Telefone");

    if (nomes.includes(inputNomeContato.value)) {
        alert(`O contato ${inputNomeContato.value} já foi adicionado`);
    } else {

        nomes.push(inputNomeContato.value);
        telefones.push(inputNumTeL.value);
    
    

        let linha = '<tr>';
        linha += `<td>${inputNomeContato.value}`;
        linha += `<td>${inputNumTeL.value}`;
        linha += '</tr>';

        linhas += linha;
}

    inputNomeContato.value = '';
    inputNumTeL.value = '';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

