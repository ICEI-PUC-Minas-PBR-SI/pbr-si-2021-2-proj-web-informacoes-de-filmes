let dadosDoFilmeSelecionado = JSON.parse(localStorage.getItem('dadosDoFilmeSelecionado'));
console.log('dados filme', dadosDoFilmeSelecionado)


let data = `
<div class="imagem">
    <img id="img" src="https://image.tmdb.org/t/p/w500${dadosDoFilmeSelecionado.poster_path ? dadosDoFilmeSelecionado.poster_path : dadosDoFilmeSelecionado.profile_path}">   
</div>

<div class="texto">

    <div class="usuario">
        

        <div class="dados_usuario">

            <a class="nome">
                ${dadosDoFilmeSelecionado.title}
            </a>
            
            <button type="button">
            ${dadosDoFilmeSelecionado.genres[0].name}
            </button></br>

            <a class="ano">
                
            </a>

        </div>

        <div class="corpo_texto">


            
        </div>

        <div>

            <div class = "Nota">

                <div class="comunidade">

                    <h3>
                        Nota da comunidade:
                    </h3>

                    <div class="estrelas">

                     

                      

                    </div>

                </div>

                <div class="crítica">

                    <h3>
                        
                    </h3>

                    <div class="estrelas">

                        <img src="./star-png.png" width="20" height="20">

                        <a> ${dadosDoFilmeSelecionado.vote_average}</a>

                    </div>

                </div>

            </div>


            <div class="info">

                <h4 class="sobre">
                    Informações sobre:
                </h4>

                <div>
                    <a class="title">
                        Lingua Original:
                    </a>
                    <a class="corpo">
                    ${dadosDoFilmeSelecionado.spoken_languages[0].name}
                    </a>
                </div>
                <div>
                    <a class="title">
                         Data de lançamento: 
                    </a>
                    <a class="corpo">
                    ${dadosDoFilmeSelecionado.release_date}
                    </a>
                </div>

                <div>
            
                    <a class="corpo">
                        
                    </a>
                </div>

                <div>
                    <a class="title">
                        Sinopse: 
                    </a>
                    <a class="corpo">
                    ${dadosDoFilmeSelecionado.overview}

                    </a>
                </div>

            </div>

            <div class = "Opiniões">

                <h4 class="Opinião">
                    Opiniões:
                </h4>

                <div class = "Usuário">
                    <img src = "./perfil.png" width = "40" height = "40">
                    
                    <a class = "opinião_nome">
                        João Victor,
                    </a>

                    <a class = "opinião_data">
                        01/10/2021
                    </a>

                    <div class="estrelas">
                        
                        <img src="./star-png.png" width="20" height="20">
                        
                        <a>9,8/10</a>

                    </div>
                </div></br>

                <div class = "Usuário">
                    <img src = "./perfil.png" width = "40" height = "40">
                    
                    <a class = "opinião_nome">
                        Maria Victoria,
                    </a>

                    <a class = "opinião_data">
                        01/10/2021
                    </a>

                    <div class="estrelas">

                        <img src="./star-png.png" width="20" height="20">

                        <a>9,2/10</a>

                    </div>
                </div></br>

                <div class = "Usuário">
                    <img src = "./perfil.png" width = "40" height = "40">
                    
                    <a class = "opinião_nome">
                        Eduardo,
                    </a>

                    <a class = "opinião_data">
                        01/10/2021
                    </a>

                    <div class="estrelas">

                        <img src="./star-png.png" width="20" height="20">

                        <a>10/10</a>

                    </div>
                </div></br>

            </div>

        </div>

        <div class="deixe_sua_nota">

            <h4 class="texto_nota">
                Deixe sua nota:
            </h4>

            <div class="5_estrelas">
                <img src="./estrela vazia.png" width="17" height="17">
                <img src="./estrela vazia.png" width="17" height="17">
                <img src="./estrela vazia.png" width="17" height="17">
                <img src="./estrela vazia.png" width="17" height="17">
                <img src="./estrela vazia.png" width="17" height="17">
                
            </div>

        </div>
    </div>
    
</div>`;



const content = document.getElementById('conteudo');
content.innerHTML = data;