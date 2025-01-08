<template>
  <body class="body">
    <main id="main">
      <div id="top">
        <h1>INSCRIPTION</h1>
      </div>
      <section class="connex">
        <form action="/inscription" method="POST" @submit.prevent="validateForm">
          <input type="text" ref="pseudo" name="pseudo" placeholder="Pseudo" required @input="removeSpaces($event)" />
          <input type="email" ref="email" name="email" placeholder="E-mail" required @input="removeSpaces($event)" />
          <input type="password" ref="mot_de_passe" name="mot_de_passe" placeholder="Mot de passe" required @input="removeSpaces($event)" />
          <input type="password" ref="confirm_mot_de_passe" name="confirm_mot_de_passe" placeholder="Confirmer mot de passe" required @input="removeSpaces($event)" /><br><br>
          <div id="submit">
            <button type="submit">S'inscrire</button>
          </div><br><br>
        </form>
      
        <p>Déjà un compte ? <a href="/connexion">Se connecter</a></p>
      </section>
    </main>
  </body>
</template>

<script>
import axios from 'axios';

export default {
  methods: {
    validateForm() {
      console.log('Formulaire soumis !');
      const pseudo = this.$refs.pseudo.value;
      const email = this.$refs.email.value;
      const password = this.$refs.mot_de_passe.value; // Garde la variable 'password' ici

      // Vérifier si les mots de passe correspondent
      if (password !== this.$refs.confirm_mot_de_passe.value) {
        alert("Les mots de passe ne correspondent pas.");
        return;
      }

      // Vérification si le pseudo et l'email sont bien remplis
      if (!pseudo || !email) {
        alert("Veuillez remplir tous les champs.");
        return;
      }

      // Si tout est bon, envoyer les données au backend via axios
      axios.post('http://localhost:3000/api/User/create', {
        pseudo: pseudo,
        email: email,
        password: password // Utilise 'password' pour correspondre à l'attente du backend
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(response => {
        if (response.status === 201) {
          alert("Inscription réussie !");
          console.log(response.data);
        } else {
          console.error("Erreur inattendue, statut :", response.status);
          alert("Erreur lors de l'inscription.");
        }
      })
      .catch(error => {
        console.error("Erreur lors de l'inscription :", error);
        if (error.response) {
          console.log("Détails de l'erreur :", error.response.data);
        }
        alert("Erreur lors de l'inscription.");
      });
    },
    removeSpaces(event) {
      event.target.value = event.target.value.replace(/\s/g, ''); // Retirer les espaces
    }
  }
};
</script>

<style>
body {
  margin: 0;
  height: 100vh;
}

#main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  height: 100vh;
}

.connex {
  background-color: rgba(0, 0, 0, 0.75);
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 10px;
  padding: 20px;
  width: 25%;
}

input {
  border-radius: 10px;
  background-color: white;
  border: 2px solid rgba(0, 0, 0, 0);
  padding: 10px;
  width: 95%;
  margin: 10px 0px;
}

#submit {
  display: flex;
  justify-content: center;
}

button {
  background-color: #2C728C;
  border-radius: 30px;
  border: #092952;
  width: 50%;
  color: white;
  padding: 10px;
  font-size: 17px;
}

#submit :hover {
  opacity: 50%;
  cursor: pointer;
}

.connex p {
  margin: auto;
}

.connex p a {
  color: #2C728C;
}

#top {
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 20px;
}

@media screen and (max-width: 850px) {
  input {
    width: 95%;
  }
  button {
    width: 100%;
    font-size: 1em;
  }
  .connex {
    width: 70%;
  }
}

@media screen and (max-width: 650px) {
  .connex {
    width: 90%;
  }
}

@media screen and (max-width: 350px) {
  input {
    width: 90%;
  }
  button {
    width: 100%;
    font-size: 0.8em;
  }
  .connex {
    width: 80%;
  }
}
</style>
