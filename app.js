let listaAmigos = [];

function adicionarAmigo() {
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
    let textoLista = document.getElementById('textoLista');
    textoLista.innerHTML = 'Lista de participantes:';
    let nomes = '';
    for (let i = 0; i < listaAmigos.length; i++) {
        nomes += '<li>'+listaAmigos[i]+'</li>';
    }
    lista.innerHTML = nomes;
}

function sortearAmigo() {
    let tamanho = listaAmigos.length;
    let indiceAleatorio = Math.floor(Math.random() * (tamanho));
    let textoResultado = document.getElementById('textoResultado');
    if (listaAmigos.length === 0) {
        alert('Adicione um amigo primeiro');
    } else {
        textoResultado.innerHTML = 'O seu amigo secreto é:';
        resultado = document.getElementById('resultado')
        resultado.innerHTML = listaAmigos[indiceAleatorio];
    }
}