let listaAmigos = [];

function adicionarAmigo(){
    let nomeEscolhido = document.querySelector('input').value;
    if (nomeEscolhido == '') {
        alert('Por favor, insira um nome');
    } else {
        listaAmigos.push(nomeEscolhido)
        nomeEscolhido = document.querySelector('input');
        nomeEscolhido.value = '';
        console.log(listaAmigos);
        atualizarListaDeAmigos();
    }
}
function atualizarListaDeAmigos() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';

    let nomes = '';
    for (let i = 0; i < listaAmigos.length; i++) {
        nomes += '<li>'+listaAmigos[i]+'</li>';
    }
    lista.innerHTML = nomes;
}