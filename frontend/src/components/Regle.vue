<template>
    <div class="main-container">
        <!-- Barre latérale -->
        <aside class="sidebar">
            <div>
                <div class="logo">
                    <img src="/public/icon.png" alt="Logo Maths à la maison" />
                </div>
                <nav class="menu">
                    <ul>
                      <li><a href="/plateau" class="menu-link">Jeu</a></li>
                      <li><a href="/regle" class="menu-link">Règles</a></li>
                      <li><a href="/classement" class="menu-link">Classement</a></li>
                    </ul>
                </nav>
            </div>
            <div class="bottom-menu">
              <nav class="menu">
                <ul>
                  <li><a href="/monCompte" class="menu-link">Mon Compte</a></li>
                  <li><a href="/inscription" class="menu-link">Déconnexion</a></li>
                </ul>
              </nav>
            </div>
        </aside>

        <!-- Contenu principal pour les règles -->
        <section class="main-content">
            <div class="centered-containers">
                <div class="regle">
                    <h1>Règle du Jeu</h1>
                    <p>
                        Un jeu de plateau avec près de 600 questions différentes classées selon 12 catégories et permettant d’explorer tout le programme de maths du collège.
                        Un jeu ludique grâce aux 14 actions: des duels, des chronos, des défis, des téléportations…
                        <br><br>
                        L’idéal est de jouer à 4 autour de chaque plateau.
                        <br><br>
                        <strong>Déroulement:</strong><br>
                        Le départ se situe au centre. On lance le dé (j’utilise un dé à 10 faces mais un dé à 6 faces convient très bien aussi). Le joueur avance son pion dans le sens qu’il souhaite. 
                        Une fois sur la case, il pioche une action qui sera à réaliser avec la question correspondant à la catégorie de la case où le joueur s’est posé.
                        <br><br>
                        Les points sont comptabilisés sur les cartes à points.
                        <br><br>
                        <strong>Pour gagner:</strong> avoir le plus de points possibles ou avoir le plus de catégories réussies.
                        <br><br>
                        <strong>Catégories:</strong> Nombres, calcul littéral, informatique, stats ou probas, logique, communiquer, proportionnalité, fonctions, espace, géométrie, calculs, transformations.
                    </p>
                </div>
            </div>
        </section>
    </div>
</template>

<style>
/* Sidebar styling */
.sidebar {
    background-color: #2C728C;
    width: 15%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-top: 2%;
    color: white;
    position: fixed;
    left: 0;
    top: 0;
    height: 100%;
    box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
  }
  
  .logo img {
    width: 50%;
    height: auto;
    margin-bottom: 3%;
    margin-left: 25%;
  }
  
  .menu ul {
    list-style: none;
    padding: 0;
    margin: 0;
    width: 100%;
    text-align: left;
    padding-left: 10%;
  }
  
  .menu ul li {
    margin: 5% 0;
  }
  
  .menu-link {
    color: white;
    font-size: 1.3em;
    text-decoration: none;
    display: inline-block;
    padding: 10px 0;
  }
  
  .menu-link:hover {
    background-color: #285b8f;
    color: #fff;
    padding: 10px;
    border-radius: 10px;
  }
  
  .bottom-menu {
    margin-bottom: 30%;
  }

/* Main content styling */
.centered-containers {
    max-width: 80%;
}

.regle {
    text-align: center;
    color: #333;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 45%;
}

.regle h1 {
    font-size: 2em;
    color: #2C728C;
    margin-bottom: 20px;
}

.regle p {
    font-size: 18px;
    line-height: 1.6;
}

@media screen and (max-width: 1300px){
  .sidebar{
    width: 20%;
  }
}

@media screen and (max-width: 1080px){
  .centered-container{
    max-width: 100%;
    width: 100%;
  }
  .regle{
    max-width: 100%;
    width: 80%;
    margin-left: 35%;
  }
}

@media screen and (max-width: 800px){
  .regle ,.regle p{
    font-size: 1em;
    height: 100vh;
  }
  .regle{
    width: 70%;
    margin-left: 40%;
  }
  .sidebar{
    font-size: 0.8em;
  }
}

@media screen and (max-width: 530px){

}
</style>