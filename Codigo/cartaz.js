function emCartaz(){
    let divCart = document.getElementById('filmesEmCartaz');
    let filmes = '';
    let obj = JSON.parse(this.responseText);
    filmes = obj.results.adult;
    divCart.innerHTML = filmes;
}

function error (err) {
    console.log('Erro: ', err);
}  

let xhr = new XMLHttpRequest();
xhr.onload = emCartaz;
xhr.onerror = error;
xhr.open('GET', 'https://api.themoviedb.org/3/movie/now_playing?api_key=3bf0718422e06d4d7d271d9d559a853f&language=pt-br');
xhr.send();