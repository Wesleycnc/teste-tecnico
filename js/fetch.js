let url = 'https://api-teste-front-end-fc.herokuapp.com/cidades?estado';
const lista = document.querySelector('#cidades');

fetch(url).then(resposta => resposta.json()).then(dados => {
    console.log(dados);

    for (const cidade of dados) {
        let item = document.createElement("li");
        item.innerHTML = `${cidade.nome}`;
        lista.appendChild(item);
    }

})
