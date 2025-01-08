import { createRouter, createWebHistory } from 'vue-router';
import Index from './components/Index.vue';
import Accueil from './components/Accueil.vue';
import Classement from './components/Classement.vue';
import Connexion from './components/Connexion.vue';
import Inscription from './components/Inscription.vue';
import Jeu from './components/Jeu.vue';
import Regle from './components/Regle.vue';
import MonCompte from './components/MonCompte.vue';
import Plateau from './components/Plateau.vue';

const routes = [
  { path: '/', component: Index },
  { path: '/accueil', component: Accueil },
  { path: '/classement', component: Classement },
  { path: '/connexion', component: Connexion },
  { path: '/inscription', component: Inscription },
  { path: '/jeu', component: Jeu },
  { path: '/regle', component: Regle },
  { path: '/monCompte', component: MonCompte },
  { path: '/plateau', component: Plateau },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
