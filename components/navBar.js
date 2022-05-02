function rendernavBar(){
    document.getElementById("navBar").innerHTML += /* html */` 
        <div class="sidebar">
        <div class="logo_content">
            <div class="logo">
            <i class="fa-solid fa-dove"></i>
                <div class="logo_name">ToMAN</div>
            </div>
            <i class="fa-solid fa-bars" id="btn"></i>
        </div>  
        <ul class="nav_list">
            <li><a href="#">
                <div class="icon-wrapper"><i class="fa-solid fa-house"></i></div>
                <span class="links_name">Home</span>
            </a></li>
            <!-- <span class="tooltip">Home</span> -->
            
            <li><a href="#">
            <div class="icon-wrapper"><i class="fa-solid fa-tree"></i></div>
                <span class="links_name">Amazônia</span>
            </a></li>
            <!-- <span class="tooltip">Amazônia</span> -->

            <li><a href="#">
            <div class="icon-wrapper"><i class="fa-solid fa-water"></i></div>
                <span class="links_name">Hidrelétricas</span>
            </a></li>
            <!-- <span class="tooltip">Hidrelétricas</span> -->

            <li><a href="#">
            <div class="icon-wrapper"><i class="fa-solid fa-cow"></i></div>
                <span class="links_name">Pecuária</span>
            </a></li>
            <!-- <span class="tooltip">Pecuária</span> -->

            <li><a href="#">
            <div class="icon-wrapper"><i class="fa-solid fa-fan"></i></div>
                <span class="links_name">Energia Eólica</span>
            </a></li>
            <!-- <span class="tooltip">Energia Eólica</span> -->

            <li><a href="#">
            <div class="icon-wrapper"><i class="fa-solid fa-sun"></i></div>
                <span class="links_name">Energia Solar</span>
            </a></li>
            <!-- <span class="tooltip">Energia Solar</span> -->

            <li><a href="#">
                <div class="icon-wrapper"><i class="fa-solid fa-fish"></i></div>
                <span class="links_name">Energia Maremotriz</span>
            </a></li>
            <!-- <span class="tooltip">Energia Maremotriz</span> -->

            </ul>
        </div>
  
    `
};

rendernavBar();