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
              <li><a href="/jeu" class="menu-link">Jouer</a></li>
              <li><a href="/regle" class="menu-link">Règles</a></li>
              <li><a href="/classement" class="menu-link">Classement</a></li>
            </ul>
          </nav>
        </div>
        <div class="bottom-menu">
          <a href="/monCompte" class="menu-link">Compte</a>
        </div>
      </aside>

      <!-- Contenu principal -->
      <section class="main-content">
        <div class="leaderboard-group">
          <div class="leaderboard-container">
            <h2 class="leaderboard-title">Classement des joueurs</h2>
            <div class="leaderboard-box">
              <table class="leaderboard-table">
                <thead>
                  <tr>
                    <th>Classement</th>
                    <th>Joueur</th>
                    <th>Points</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="player in players" :key="player.id">
                    <td>#{{ player.rank }}</td>
                    <td>{{ player.name }}</td>
                    <td>{{ player.points }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <!-- Box utilisateur connecté -->
          <div class="user-info-box">
            <h3>{{ currentUser.name }}</h3>
            <div class="user-info">
              <div class="user-points">{{ currentUser.points }} Points</div>
              <div class="user-rank">#{{ currentUser.rank }}</div>
            </div>
          </div>
        </div>
      </section>
    </div>
</template>

<script>
export default {
  data() {
    return {
      players: [
        { id: 1, rank: 1, name: 'Joueur 1', points: 200 },
        { id: 2, rank: 2, name: 'Joueur 2', points: 190 }
      ],
      currentUser: {
        name: 'Joueur 2',
        points: 190,
        rank: 2
      }
    };
  }
};
</script>

<style scoped>


/* Conteneur groupé pour centrer les boxes de classement et utilisateur */
.leaderboard-group {
  display: flex;
  gap: 20px; /* Ajoute de l'espace entre les boxes */
  align-items: center;
  justify-content: center;
  width: 100%;
}

/* Classement des joueurs */
.leaderboard-container {
  background-color: #2C728C;
  border-radius: 10px;
  color: white;
  padding: 15px;
  width: 50%; /* Largeur de la box ajustée pour être plus petite */
  height: 450px; /* Hauteur ajustée */
  overflow-y: auto;
}

.leaderboard-title {
  font-size: 28px;
  margin-bottom: 15px;
  text-align: center;
}

.leaderboard-box {
  width: 100%;
}

.leaderboard-table {
  width: 100%;
  border-collapse: collapse;
  color: white;
  font-size: 18px;
}

.leaderboard-table th,
.leaderboard-table td {
  padding: 10px;
  border-bottom: 1px solid #ffffff50;
}

/* Box de l'utilisateur connecté */
.user-info-box {
  background-color: #2C728C;
  padding: 20px;
  width: 20%; /* Réduction de la largeur */
  height: 250px; /* Hauteur réduite */
  color: white;
  text-align: center;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.user-info {
  margin-top: 10px;
}

.user-points,
.user-rank {
  font-size: 20px;
  margin: 10px 0;
}
</style>
