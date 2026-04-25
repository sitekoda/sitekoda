const main = document.getElementById('conteudo-principal');
const letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

// Criar botões de A a Z
const filtroDiv = document.getElementById('filtroAbc');
letras.forEach(letra => {
    let btn = document.createElement('button');
    btn.innerText = letra;
    btn.onclick = () => filtrarPorLetra(letra);
    filtroDiv.appendChild(btn);
});

// Função para mostrar os cards dos animes
function renderizarAnimes(lista) {
    main.innerHTML = "";
    lista.forEach(anime => {
        let card = document.createElement('div');
        card.className = "card-anime";
        card.innerHTML = `<img src="${anime.imagem}"><p>${anime.titulo}</p>`;
        card.onclick = () => mostrarEpisodios(anime.id);
        main.appendChild(card);
    });
}

// Filtro A-Z
function filtrarPorLetra(letra) {
    const filtrados = listaAnimes.filter(a => a.titulo.toUpperCase().startsWith(letra));
    renderizarAnimes(filtrados);
}

// Barra de Busca
function buscarAnime() {
    let termo = document.getElementById('inputBusca').value.toUpperCase();
    
    const filtrados = listaAnimes.filter(anime => {
        // Verifica o título principal
        const noTituloPrincipal = anime.titulo.toUpperCase().includes(termo);
        
        // O "|| []" garante que se titulosAlt não existir, o código não quebre
        const alt = anime.titulosAlt || [];
        const noTituloAlternativo = alt.some(a => a.toUpperCase().includes(termo));

        return noTituloPrincipal || noTituloAlternativo;
    });

    renderizarAnimes(filtrados);
}

// Mostrar lista de episódios
function mostrarEpisodios(id) {
    const anime = listaAnimes.find(a => a.id === id);
    
    let corNota = "#ff4d4d";
    if (anime.nota >= 7) corNota = "#2ecc71";
    else if (anime.nota >= 5) corNota = "#f1c40f";

    main.innerHTML = `
        <div class="lista-episodios">
            <div class="info-container">
                <img src="${anime.imagem}" style="width: 300px; border-radius: 10px;">
                <div class="info-texto">
                    <h1 style="color: #e50914; margin-top:0;">${anime.titulo}</h1>
                    <div class="nota-badge" style="color: ${corNota}">${anime.nota}</div>
                    <div class="detalhes-meta">
                        <span>📅 ${anime.ano}</span> | 
                        <span>🔞 ${anime.classificacao}</span>
                    </div>
                    <p><strong>Sinopse:</strong> ${anime.sinopse}</p>
                    
                    <a href="${anime.streamingUrl}" target="_blank" class="streaming-link">
                        <img src="https://www.google.com/s2/favicons?sz=64&domain=${anime.streamingUrl}" class="streaming-icon">
                        Disponível oficialmente em ${anime.streamingNome}
                    </a>
                </div>
            </div>

            <h3 class="subtitulo-temporada">${anime.temporada}</h3>
            <div id="container-links-eps"></div>
        </div>
    `;

    const containerEps = document.getElementById('container-links-eps');
    anime.eps.forEach((ep, index) => {
        let item = document.createElement('div');
        item.className = "item-ep";
        item.innerText = ep.n;
        item.onclick = () => abrirPlayer(anime.id, index);
        containerEps.appendChild(item);
    });

    window.scrollTo(0,0);
}

// Abrir o Player
function abrirPlayer(animeId, epIndex) {
    const anime = listaAnimes.find(a => a.id === animeId);
    const epAtual = anime.eps[epIndex];

    // Verifica se existe ep anterior ou próximo para desativar os botões se necessário
    const temAnterior = epIndex > 0;
    const temProximo = epIndex < anime.eps.length - 1;

    main.innerHTML = `
        <div class="player-container">
            <h2 style="text-align: left; margin-bottom: 15px;">${anime.titulo} - ${epAtual.n}</h2>
            
            <div class="video-wrapper">
                <iframe src="${epAtual.url}" allowfullscreen></iframe>
            </div>

            <div class="controles-player">
                <button class="btn-player" ${!temAnterior ? 'disabled' : ''} 
                    onclick="abrirPlayer(${anime.id}, ${epIndex - 1})">
                    ⬅ Anterior
                </button>
                
                <button class="btn-player btn-meio" onclick="mostrarEpisodios(${anime.id})">
                    Lista de Episódios
                </button>
                
                <button class="btn-player" ${!temProximo ? 'disabled' : ''} 
                    onclick="abrirPlayer(${anime.id}, ${epIndex + 1})">
                    Próximo ➡
                </button>
            </div>
        </div>
    `;
    window.scrollTo(0,0);
}

function renderizarHome() {
    renderizarAnimes(listaAnimes);
}

// Iniciar o site
renderizarHome();