const main = document.getElementById('conteudo-principal');
const letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const EPS_POR_PAGINA = 30;
const QNT_HOME = 22;

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
	if (lista.length === 0) {
        main.innerHTML = "<p style='text-align:center; width:100%; margin-top:50px; color:#888;'>Nenhum anime encontrado.</p>";
        return;
    }
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
function mostrarEpisodios(id, paginaAtual = 0) {
    const anime = listaAnimes.find(a => a.id === id);
    
    // Lógica da Paginação
    const inicio = paginaAtual * EPS_POR_PAGINA;
    const fim = inicio + EPS_POR_PAGINA;
    const epsPaginados = anime.eps.slice(inicio, fim);
    const totalPaginas = Math.ceil(anime.eps.length / EPS_POR_PAGINA);

    let corNota = (anime.nota >= 7) ? "#2ecc71" : (anime.nota >= 5) ? "#f1c40f" : "#ff4d4d";

    main.innerHTML = `
        <div class="lista-episodios">
            <div class="info-container">
                <img src="${anime.imagem}" alt="Capa">
                <div class="info-texto">
                    <h1 style="color: #e50914; margin-top:0;">${anime.titulo}</h1>
                    <div class="nota-badge" style="color: ${corNota}">${anime.nota}</div>
                    <div class="detalhes-meta"><span>📅 ${anime.ano}</span> | <span>🔞 ${anime.classificacao}</span></div>
                    <p><strong>Sinopse:</strong> ${anime.sinopse}</p>
                    <a href="${anime.streamingUrl}" target="_blank" class="streaming-link">
                        <img src="https://www.google.com/s2/favicons?sz=64&domain=${anime.streamingUrl}" class="streaming-icon">
                        Assistir no ${anime.streamingNome}
                    </a>
                </div>
            </div>

            <h3 class="subtitulo-temporada">${anime.temporada} - Página ${paginaAtual + 1}</h3>
            
            <div id="container-links-eps"></div>

            <div class="paginacao-eps">
                <button class="btn-player" ${paginaAtual === 0 ? 'disabled' : ''} 
                    onclick="mostrarEpisodios(${id}, ${paginaAtual - 1})">⬅ Anterior</button>
                
                <span style="margin: 0 15px;">Página ${paginaAtual + 1} de ${totalPaginas}</span>
                
                <button class="btn-player" ${paginaAtual >= totalPaginas - 1 ? 'disabled' : ''} 
                    onclick="mostrarEpisodios(${id}, ${paginaAtual + 1})">Próxima ➡</button>
            </div>
        </div>
    `;

	// Renderiza apenas a "fatia" de episódios daquela página
    const containerEps = document.getElementById('container-links-eps');
    epsPaginados.forEach((ep, i) => {
        let indexReal = inicio + i;
        let item = document.createElement('div');
        
        // VERIFICA SE JÁ FOI VISTO
        const jaVisto = estaVisto(anime.id, ep.n);
        item.className = `item-ep ${jaVisto ? 'visto' : ''}`;
        
        item.innerText = ep.n;
        item.onclick = () => abrirPlayer(anime.id, indexReal);
        containerEps.appendChild(item);
    });

    window.scrollTo(0,0);
}

// Abrir o Player
function abrirPlayer(animeId, epIndex) {
    const anime = listaAnimes.find(a => a.id === animeId);
    const epAtual = anime.eps[epIndex];
	
	// MARCA COMO VISTO ASSIM QUE ABRE O PLAYER
    marcarComoVisto(animeId, epAtual.n);

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

// Salva que o episódio foi visto
function marcarComoVisto(animeId, epNome) {
    let vistos = JSON.parse(localStorage.getItem('vistos')) || [];
    const chave = `${animeId}-${epNome}`;
    
    if (!vistos.includes(chave)) {
        vistos.push(chave);
        localStorage.setItem('vistos', JSON.stringify(vistos));
    }
}

// Verifica se o episódio já está na lista de vistos
function estaVisto(animeId, epNome) {
    let vistos = JSON.parse(localStorage.getItem('vistos')) || [];
    return vistos.includes(`${animeId}-${epNome}`);
}

function renderizarHome() {
    // Pega apenas a quantidade definida (ex: os 20 primeiros do dados.js)
    const selecionados = listaAnimes.slice(0, QNT_HOME);
    
    // Limpa o conteúdo principal completamente
    main.innerHTML = "";
    
    // Renderiza os cards sem nenhum título ou texto extra
    renderizarAnimes(selecionados);
}

// Iniciar o site
renderizarHome();