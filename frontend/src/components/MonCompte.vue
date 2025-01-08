<template>
    <body class="body">
      <main id="main">
        <div id="top">
          <h1>MON COMPTE</h1>
        </div>
        <section class="connex">
          <form @submit.prevent="updateProfile">
            <label>Pseudo :</label>
            <input type="text" v-model="pseudo" placeholder="Pseudo" @input="removeSpaces($event)" @keydown="preventSpace" />
            <p>Email : {{ email }}</p>
            <button type="button" @click="toggleChangePassword" class="modifier-password-button" >
              Modifier le mot de passe
            </button>
            <div v-if="showChangePassword">
              <input type="password" v-model="currentPassword" placeholder="Mot de passe actuel" required @input="removeSpaces($event)" @keydown="preventSpace"/>
              <input type="password" v-model="newPassword" placeholder="Nouveau mot de passe" required @input="removeSpaces($event)" @keydown="preventSpace"/>
              <input type="password" v-model="confirmNewPassword" placeholder="Confirmer le nouveau mot de passe" required @input="removeSpaces($event)" @keydown="preventSpace" />
            </div>
  
            <div id="top-left-button">
              <button @click="goToAccueil">Accueil</button>
            </div>
            <div id="submit">
              <button type="submit">Sauvegarder</button>
            </div><br /><br />
          </form>
        </section>
      </main>
    </body>
  </template>
  
  
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        pseudo: '', 
        email: '', 
        showChangePassword: false,
        currentPassword: '',
        newPassword: '',
        confirmNewPassword: ''
      };
    },
    methods: {
      toggleChangePassword() {
        this.showChangePassword = !this.showChangePassword;
      },
      removeSpaces(event) {
        event.target.value = event.target.value.replace(/\s/g, ''); // Retirer les espaces
      },
      goToAccueil(){
          this.$router.push('/accueil');
      },
      async updateProfile() {
        if (this.showChangePassword && this.newPassword !== this.confirmNewPassword) {
          alert("Les nouveaux mots de passe ne correspondent pas.");
          return;
        }
  
        try {
          const response = await axios.put('http://localhost:3000/api/User/update', {
            pseudo: this.pseudo,
            email: this.email,
            currentPassword: this.showChangePassword ? this.currentPassword : null,
            newPassword: this.showChangePassword ? this.newPassword : null
          });
          
          alert("Profil mis à jour avec succès !");
          this.currentPassword = '';
          this.newPassword = '';
          this.confirmNewPassword = '';
        } catch (error) {
          console.error("Erreur lors de la mise à jour :", error);
          alert("Erreur lors de la mise à jour.");
        }
      },
      preventSpace(event) {
        if (event.key === ' ') {
          event.preventDefault(); // Empêche uniquement l'espace
        }
      }
    },
    async mounted() {
      const token = localStorage.getItem('token');
      axios.get('http://localhost:3000/api/User/profile', {
          headers: {
              'Authorization': `Bearer ${token}`
          }
      })
      .then(response => {
          this.pseudo = response.data.pseudo;
          this.email = response.data.email;
      })
      .catch(error => {
          console.error("Erreur lors de la récupération du profil utilisateur :", error);
          alert("Erreur lors de la récupération du profil utilisateur.");
          this.$router.push('/connexion');
      });
    }
  };
  </script>
  

  
<style>
.modifier-password-button {
  background-color: #2C728C;
  color: white;
  border: none;
  border-radius: 20px;
  padding: 8px 20px; /* Réduisez la taille du bouton */
  font-size: 17px;
  cursor: pointer;
  display: block;
  margin: 10px auto; /* Centrer le bouton */
  text-align: center;
}

.modifier-password-button:hover {
  opacity: 0.8;
}

#top-left-button {
    position: absolute;
    top: 20px;
    left: 20px;
}

#top-left-button button {
    background-color: #2C728C;
    color: white;
    padding: 10px 40px;
    border-radius: 10px;
    border: none;
    font-size: 16px;
    cursor: pointer;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
}

#top-left-button button:hover {
    opacity: 0.8;
}


</style>