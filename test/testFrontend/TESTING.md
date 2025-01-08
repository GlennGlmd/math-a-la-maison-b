# Guide de Tests pour Maths à la maison

## Introduction
Ce document détaille les procédures de test pour les principales fonctionnalités de l'application. Suivez ces instructions pour garantir que l'application fonctionne comme prévu et pour identifier les potentiels bugs ou améliorations nécessaires.

## Prérequis
- Assurez-vous que l'application est installée et configurée correctement sur votre environnement local ou de test.
- Tous les tests doivent être effectués dans les dernières versions des navigateurs majoritairement utilisés (Chrome, Firefox, Safari, etc.).

## Fonctionnalités à Tester

### 1. Connexion
- **Objectif :** Vérifier que les utilisateurs peuvent se connecter efficacement avec des identifiants valides et recevoir un message d'erreur approprié avec des identifiants invalides.
- **Étapes :**
  1. Accéder à la page de connexion.
  2. Entrer un email et un mot de passe valides. Cliquer sur "Connexion".
  3. Vérifier que la redirection vers la page d'accueil est réussie.
  4. Déconnectez-vous, puis réessayez avec un email ou mot de passe incorrect.
  5. Confirmer que le message d'erreur approprié s'affiche.
- **Résultats Attendus :**
  - Connexion réussie avec des credentials valides.
  - Message d'erreur clair avec des credentials invalides.

### 2. Inscription
- **Objectif :** Assurer que les nouveaux utilisateurs peuvent créer un compte et que les validations de formulaire fonctionnent comme prévu.
- **Étapes :**
  1. Aller à la page d'inscription.
  2. Remplir le formulaire avec des détails valides et soumettre.
  3. Essayer de soumettre le formulaire avec des données invalides (e.g., format d'email incorrect).
  4. Vérifier les réactions de l'application dans les deux cas.
- **Résultats Attendus :**
  - Création de compte réussie avec des informations valides.
  - Affichage de messages d'erreur adéquats pour les données invalides.

### 3. Navigation entre les Pages
- **Objectif :** Confirmer que la navigation entre les pages principales via la barre de navigation ou d'autres liens est fluide et sans erreurs.
- **Étapes :**
  1. Cliquer sur chaque élément de la barre de navigation.
  2. Vérifier la charge de chaque page correspondante.
  3. Assurer que les liens internes dans les pages mènent aux sections appropriées.
- **Résultats Attendus :**
  - Chaque page se charge correctement sans erreurs.
  - Les liens internes fonctionnent correctement.

### 4. Utilisation du Plateau de Jeu Interactif
- **Objectif :** Tester l'interaction avec le plateau de jeu, incluant les fonctionnalités de déplacement de pions, les animations et les réponses du jeu.
- **Étapes :**
  1. Démarrer une partie de jeu.
  2. Interagir avec le plateau en utilisant les contrôles disponibles.
  3. Observer les réponses du système et les animations.
- **Résultats Attendus :**
  - Les contrôles du jeu sont réactifs et les déplacements des pions sont fluides.
  - Les animations et transitions sont affichées correctement.


