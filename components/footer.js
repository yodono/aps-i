function renderFooter() {
    document.getElementById("footer").innerHTML += /* html */`
        <div>
            <strong>Social</strong>
            <ul>
                <li><a href="contato.html">Contate-nos</a></li>
                <li><a href="sobre.html">Sobre</a></li>
                <li><a href="https://github.com/yodono-unip/aps-i" rel="noopener" target="_blank">Github</a></li>
            </ul>
        </div>

        <div>
            <strong>Problemas</strong>
            <ul>
                <li><a href="amazonia.html">Amazônia</a></li>
                <li><a href="hidreletricas.html">Hidrelétricas</a></li>
                <li><a href="pecuaria.html">Pecuária</a></li>
            </ul>
        </div>

        <div>
            <strong>Alternativas</strong>
            <ul>
                <li><a href="eolica.html">Energia Eólica</a></li>
                <li><a href="solar.html">Energia Solar</a></li>
                <li><a href="maremotriz.html">Energia Maremotriz</a></li>
            </ul>
        </div>

        <div>
            <span>Cabral, Belchior, Brito, Diniz, Masson e Yodono - Tópicos de Meio Ambiente Nacional @ 2022</span>
        </div>
    ` 
};

renderFooter();

