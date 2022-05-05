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
            <li>
                <a href="#">Problemas</a>
            </li>
            <li>
                <a href="#">Alternativas</a>
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
