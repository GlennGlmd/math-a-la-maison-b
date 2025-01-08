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
                  <li><a href="#" class="menu-link" @click="deconnexion">Déconnexion</a></li>
                </ul>
              </nav>
            </div>
        </aside>
  
        <!-- Contenu principal -->
        <section class="main-contents">
          <div class="centered-container">
            <div class="game-board">
              <img src="/public/plateau2.png" alt="Plateau du jeu" />
            </div>
            <div class="game-info">
              <h1 class="main-heading">Jouer à Maths à la Maison !</h1>
              <button class="start-button">Lancer une partie</button>
              <p class="rules-link">
                Vous avez un doute sur les règles ? <router-link to="/regle">Règles</router-link>
              </p>
            </div>
          </div>
        </section>
    </div>
</template>

<script>
export default {
  methods: {
    deconnexion() {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      
      this.$router.push('/connexion');
    }
  }
};
</script>
  
  <style>  
  /* Contenu principal */
  .main-contents {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    width: 100%;
    background-color: white;
  }
  
  /* Centrage de l'ensemble (image + texte) */
  .centered-container {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    margin-left: 15%;
  }
  
  /* Image du plateau - augmentée */
  .game-board {
    width: 500px; /* Taille augmentée */
    height: 400px; /* Taille augmentée */
    margin-bottom: 10%;
  }

  .game-board img{
    width: 100%; /* Taille du logo */
    height: auto;
  }
  
  /* Texte aligné à droite de l'image */
  .game-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  
  /* Augmenter la taille du texte principal */
  .main-heading {
    color: black;
    font-size: 48px; /* Taille augmentée */
    margin-bottom: 30px; /* Marges augmentées */
    text-align: center;
  }
  
  /* Agrandir le bouton */
  .start-button {
    background-color: #2C728C;
    color: white;
    border: none;
    border-radius: 30px;
    padding: 20px 40px; /* Taille du bouton augmentée */
    font-size: 22px; /* Taille de la police augmentée */
    cursor: pointer;
    margin: 30px auto; /* Marges plus grandes */
    display: block;
  }
  
  .start-button:hover {
    background-color: #285b8f;
  }
  
  /* Agrandir le texte des règles */
  .rules-link {
    color: black;
    font-size: 20px; /* Taille augmentée */
    margin-top: 30px;
    text-align: center;
    width: 100%;
  }
  
  .rules-link a {
    color: #2C728C;
    text-decoration: none;
  }
  
  .rules-link a:hover {
    text-decoration: underline;
  }

  @media screen and (max-width: 1400px){
  .game-board img{
    width: 80%;
  }
  .game-board{
    margin-bottom: 0;
    margin-top: 15%;
  }
  .centered-container{
    justify-content: center;
    margin-left: 25%;
  }
}
  </style>
  