<template>
  <div class="body">
    <div class="main-container">

      <!-- Logo et Titre -->
      <img src="/public/icon.png" alt="Logo Maths à la Maison">
      <h1 class="main-title">Maths à la Maison</h1>

      <!-- Section principale de la page d'accueil -->
      <section class="main-content-box">
        <h2 class="main-subtitle">Bienvenue sur Maths à la Maison</h2>
        <p class="main-description">
          Cette plateforme est dédiée à l'apprentissage des mathématiques. Vous pouvez vous inscrire ou vous connecter pour accéder à vos ressources et outils pédagogiques.
        </p>

        <!-- Boutons d'actions -->
        <div class="main-action-buttons">
          <a href="/inscription" class="main-action-button">Inscription</a>
          <a href="/connexion" class="main-action-button">Connexion</a>
          <a href="/accueil" class="main-action-button">accueil</a>
          <a href="/monCompte" class="main-action-button">mon compte</a>
          <a href="/regle" class="main-action-button">Règle</a>
          <a href="/plateau" class="main-action-button">Plateau</a>
        </div>
      </section>
    </div>
  </div>
</template>



<style>
/* Conteneur principal de la page d'accueil */
.body{
  background-image: url('/public/fond.png');
  background-size: cover;
  background-position: center;
}
.main-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh; /* Assure que la page est centrée verticalement */
}

.main-container img {
  width: 150px; /* Taille du logo */
  height: auto;
  margin-bottom: 10px;
}

.main-title {
  color: white;
  font-size: 28px;
  margin-bottom: 20px;
  text-align: center;
}

/* Boîte de contenu de l'accueil */
.main-content-box {
  background-color: #0b3c47; /* Couleur sombre de la boîte */
  padding: 30px;
  border-radius: 15px; /* Coins arrondis */
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2); /* Ombre */
  width: 350px;
  text-align: center; /* Centre le texte */
}

.main-subtitle {
  color: white;
  font-size: 20px;
  margin-bottom: 15px;
}

.main-description {
  color: #dde6e9;
  font-size: 16px;
  margin-bottom: 20px;
}

/* Boutons d'action */
.main-action-buttons {
  display: flex;
  justify-content: center;
}

.main-action-button {
  background-color: #2C728C;
  color: white;
  padding: 10px 20px;
  border-radius: 8px;
  text-decoration: none;
  font-size: 16px;
  margin: 10px;
}

.main-action-button:hover {
  background-color: #2C728C;
  opacity: 50%;
  transition: 0.2s;
}

/* Bouton Accueil en haut à gauche */
.header-container {
  position: absolute;
  top: 20px;
  left: 20px;
}

.main-home-button {
  background-color: #285b8f;
  color: white;
  padding: 10px 20px;
  font-size: 14px;
  border-radius: 8px;
  text-decoration: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.main-home-button:hover {
  background-color: #244f7a;
}

@media screen and (max-width: 435px){
  .main-content-box{
    width: 80%;
  }
}

@media screen and (max-width: 570px){
  #index{
    height: 100%;
  }
}

</style>