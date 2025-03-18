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
    }
}