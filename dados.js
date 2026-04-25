const listaAnimes = [
    {
        id: 2,
        titulo: "Kaijuu 8-gou 2",
		titulosAlt: ["Kaiju No. 8"],
        imagem: "https://i.ibb.co/TDNzKVR7/a6419397228e.webp",
		nota: 7.78,
        ano: 2025,
        classificacao: "14+",
        sinopse: "Segunda temporada de Kaijuu 8-gou: Kafka devota sua força Kaiju para provar seu valor nos campos de batalha sob o comando do infame Capitão Narumi, enquanto enfrenta a ameaça crescente do Kaiju nº 9. Violência, intriga e redenção compõem esta temporada de extremos.",
		streamingNome: "Crunchyroll", // Nome da plataforma
        streamingUrl: "https://www.crunchyroll.com/pt-br/series/GG5H5XQ7D/kaiju-no-8", // Link oficial
        temporada: "Temporada 2",
        eps: [
            { n: "Episódio 01", url: "https://1a-1791.com/video/fww1/50/s8/2/a/c/G/4/acG4y.aaa.mp4?u=0&b=0" },
			{ n: "Episódio 02", url: "https://1a-1791.com/video/fww1/a4/s8/2/E/b/K/5/EbK5y.aaa.mp4?u=0&b=0" },
			{ n: "Episódio 03", url: "https://1a-1791.com/video/fww1/6e/s8/2/g/F/o/-/gFo-y.aaa.mp4?u=0&b=0" },
			{ n: "Episódio 04", url: "https://1a-1791.com/video/fww1/ef/s8/2/o/F/o/-/oFo-y.aaa.mp4?u=0&b=0" },
			{ n: "Episódio 05", url: "https://1a-1791.com/video/fww1/1b/s8/2/2/p/W/_/2pW_y.aaa.mp4?u=0&b=0" },
			{ n: "Episódio 06", url: "https://1a-1791.com/video/fww1/2f/s8/2/k/c/T/b/kcTbz.aaa.mp4?u=0&b=0" },
			{ n: "Episódio 07", url: "https://1a-1791.com/video/fww1/59/s8/2/0/4/M/d/04Mdz.aaa.mp4?u=0&b=0" },
			{ n: "Episódio 08", url: "https://1a-1791.com/video/fww1/56/s8/2/g/O/k/k/gOkkz.aaa.mp4?u=0&b=0" },
			{ n: "Episódio 09", url: "https://1a-1791.com/video/fww1/59/s8/2/u/O/k/k/uOkkz.aaa.mp4?u=0&b=0" },
			{ n: "Episódio 10", url: "https://1a-1791.com/video/fww1/53/s8/2/A/O/k/k/AOkkz.aaa.mp4?u=0&b=0" },
			{ n: "Episódio 11", url: "https://1a-1791.com/video/fwe2/35/s8/2/Y/m/V/l/YmVlz.aaa.mp4?u=0&b=0" },
			{ n: "teste", url: "https://1a-1791.com/video/fwe2/35/s8/2/Y/m/V/l/YmVlz.aaa.mp4?u=0&b=0" }
        ]
    },
	
	{
        id: 1,
        titulo: "Kaijuu 8-gou",
		titulosAlt: ["Kaiju No. 8"],
        imagem: "https://i.ibb.co/JtgPHJR/12f7209b3256.webp", // Substitua pelo link da imagem real
		nota: 8.22,
        ano: 2024,
        classificacao: "14+",
        sinopse: "Depois de terem sua cidade destruída por um kaiju quando eram crianças, Kafka Hibino e Mina Ashiro decidem se juntar a Força de Defesa Japonesa para combater as criaturas,mas após falhar várias vezes nos testes, Kafka não conseguiu se tornar um membro do exercito, sendo designado para um esquadrão focado na limpeza da cidade após a batalha.Certo dia, um pequeno monstro falante entra em seu corpo pela boca, fazendo com que ele ganhe a habilidade de se transformar em um kaiju e se manter consciente. Graças a essa nova capacidade, ele passa a ser conhecido como Kaijuu No.8, o primeiro a conseguir escapar do Esquadrão da Força de Defesa Japonesa.",
		streamingNome: "Crunchyroll", // Nome da plataforma
        streamingUrl: "https://www.crunchyroll.com/pt-br/series/GG5H5XQ7D/kaiju-no-8", // Link oficial
        temporada: "Temporada 1",
        eps: [
            { n: "Episódio 01", url: "https://1a-1791.com/video/s8/2/R/h/S/8/RhS8q.haa.mp4?u=0&b=0" },
            { n: "Episódio 02", url: "https://1a-1791.com/video/s8/2/V/a/j/f/Vajfr.haa.mp4?u=0&b=0" },
			{ n: "Episódio 03", url: "https://1a-1791.com/video/s8/2/r/d/H/n/rdHnr.haa.mp4?u=0&b=0" },
			{ n: "Episódio 04", url: "https://1a-1791.com/video/fw/s8/2/3/F/1/v/3F1vr.haa.mp4?u=0&b=0" },
			{ n: "Episódio 05", url: "https://1a-1791.com/video/s8/2/d/O/B/W/dOBWr.aaa.mp4?u=0&b=0" },
			{ n: "Episódio 06", url: "https://1a-1791.com/video/s8/2/J/b/F/N/JbFNr.aaa.mp4?u=0&b=0" },
			{ n: "Episódio 07", url: "https://1a-1791.com/video/s8/2/h/K/y/W/hKyWr.aaa.mp4?u=0&b=0" },
			{ n: "Episódio 08", url: "https://1a-1791.com/video/fw/s8/2/1/M/n/6/1Mn6r.aaa.mp4?u=0&b=0" },
			{ n: "Episódio 09", url: "https://1a-1791.com/video/s8/2/R/e/X/d/ReXds.aaa.mp4?u=0&b=0" },
			{ n: "Episódio 10", url: "https://1a-1791.com/video/s8/2/9/q/L/m/9qLms.aaa.mp4?u=0&b=0" },
			{ n: "Episódio 11", url: "https://1a-1791.com/video/s8/2/5/x/a/v/5xavs.aaa.mp4?u=0&b=0" },
			{ n: "Episódio 12", url: "https://1a-1791.com/video/s8/2/3/S/h/E/3ShEs.aaa.mp4?u=0&b=0" }
        ]
    }
	
];
