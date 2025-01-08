<template>
    <div class="body">
      <main id="main">
        <div id="top">
          <h1>CONNEXION</h1>
        </div>
        <section class="connex">
          <form @submit.prevent="login"> <!-- Utilisation de @submit.prevent -->
            <input type="email" v-model="email" id="email" name="email"
                   pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
                   title="Veuillez entrer une adresse email valide"
                   placeholder="Adresse mail" required>
                   
            <input type="password" v-model="password" id="mot_de_passe" name="mot_de_passe"
                   pattern=".{8,}" title="Le mot de passe doit contenir au moins 8 caractères"
                   placeholder="Mot de passe" required><br><br>
  
            <div id="submit">
              <button type="submit">Se connecter</button>
            </div><br><br>
          </form>
          <p>Vous n'avez pas de compte ? <a href="/inscription">Inscrivez-vous</a></p>
        </section>
      </main>
    </div>
  </template>
  
  
  <script>
import axios from 'axios';

export default {
  data() {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    login() {
      const email = this.email;
      const password = this.password;

      if (!email || !password) {
        alert("Veuillez remplir tous les champs.");
        return;
      }

      axios.post('http://localhost:3000/api/User/login', {
        email: email,
        password: password
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(response => {
        if (response.status === 200) { // Assure-toi que le statut est 200 pour confirmer le succès
          alert("Connexion réussie !");
          localStorage.setItem('token', response.data.token);
          localStorage.setItem('user', JSON.stringify(response.data.user)); // Enregistre l'utilisateur dans localStorage
          this.$router.push('/accueil'); // Redirige vers la page d'accueil
        } else {
          alert("Erreur inattendue lors de la connexion.");
        }
      })
      .catch(error => {
        if (error.response && error.response.status === 401) { // Vérifie si l'erreur est un 401
          alert("Identifiants incorrects.");
        } else {
          console.error("Erreur lors de la connexion :", error.message);
          alert("Erreur lors de la connexion.");
        }
      });
    }
  }
};
</script>

  