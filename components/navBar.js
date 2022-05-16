function renderNavBar(){
    document.getElementById("navBar").innerHTML += /* html */`
    <nav>   
        <div class="logo">
            <h4>ToMAN</h4>
        </div>
        <ul class="nav_links">
            <li>
                <a href="./">Home</a>
            </li>
            <li>
                <a href="/sobre.html">Sobre</a>
            </li>
            <li class="dropdown">
                <p>
                    <a href="#">Problemas</a>
                    <i class="fa-solid fa-caret-down"></i>
                </p>
                <ul class="dropdown-content">
                    <li>
                        <a href="#">Amazônia</a>
                    </li>
                    <li>
                        <a href="#">Hidrelétrica</a>
                    </li>
                    <li>
                        <a href="#">Pecuária</a>
                    </li>
                </ul>
            </li>
            <li class="dropdown">
                <p>
                    <a href="#">Alternativas</a>
                    <i class="fa-solid fa-caret-down"></i>
                </p>
                <ul class="dropdown-content">
                    <li>
                        <a href="#">Energia Eólica</a>
                    </li>
                    <li>
                        <a href="#">Energia Solar</a>
                    </li>
                    <li>
                        <a href="#">Energia Maremotriz</a>
                    </li>
                </ul>
            </li>
        </ul>
        <div class="burger">
            <div class="line1"></div>
            <div class="line2"></div>
            <div class="line3"></div>
        </div>
    </nav>
    `
};

renderNavBar();
