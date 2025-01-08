# Maths à la maison

## Table des Matières
1. [Description](#description)
2. [Fonctionnalités](#fonctionnalités)
3. [Technologies Utilisées](#technologies-utilisées)
4. [Installation](#installation)
5. [Utilisation](#utilisation)
6. [Contribution](#contribution)
7. [Licence](#licence)
8. [Auteurs](#auteurs)

## Description
Ce projet est une application web interactive conçue pour offrir une expérience ludique à travers un jeu de plateau éducatif. L'application permet aux utilisateurs de s'inscrire, de se connecter, et de naviguer à travers différentes pages tout en participant à des activités interactives sur un plateau de jeu.

## Fonctionnalités
### Actuelles
- **Inscription et Connexion :** Permet aux utilisateurs de créer un compte et de se connecter pour accéder à leurs données de jeu personnalisées.
- **Plateau Interactif :** Les utilisateurs peuvent déplacer des pions sur un plateau de jeu, ce qui permet une interaction directe avec le jeu.
- **Navigation :** Plusieurs pages de navigation facilitent l'accès à différentes fonctionnalités du jeu, telles que les règles du jeu et le classement des joueurs.

### Prochaines Évolutions
- **Mode Multi-joueur :** Implémentation prévue pour permettre à plusieurs joueurs de participer simultanément dans des sessions de jeu interactives.
- **Amélioration de l'UI/UX :** Des améliorations continues seront apportées pour rendre l'interface utilisateur plus attrayante et intuitive.

## Technologies utilisées
- **Node.js :** Une plateforme côté serveur basée sur le moteur JavaScript V8 de Chrome. Lancée en 2009, elle permet de construire des applications réseau rapides et évolutives.
- **Vue.js :** Un framework progressif pour la construction d'interfaces utilisateur. Introduit en 2014, il est conçu pour être incrémentalement adoptable.
- **Sequelize :** Un ORM (Object-Relational Mapping) pour Node.js. Il supporte les bases de données SQL et facilite la gestion des données avec une approche orientée objet.
- **SQLite :** Un système de gestion de base de données relationnelle contenu dans une bibliothèque C. SQLite3 offre des fonctionnalités améliorées pour la gestion de données.
- **Postman :** Un outil populaire pour tester les API. Il permet de créer, partager, tester et documenter les API plus facilement, ce qui est essentiel pour assurer le bon fonctionnement des interactions backend.

### Prérequis
Avant de commencer, assurez-vous que les logiciels suivants sont installés sur votre système Linux :

- **Node.js et npm** :
  Pour installer Node.js et npm sur Ubuntu (ou une distribution basée sur Debian), vous pouvez utiliser `apt` :
  ```bash
  sudo apt update
  sudo apt install nodejs npm
  ```
  Pour d'autres distributions, vous pouvez consulter [la documentation officielle de Node.js](https://nodejs.org/en/download/package-manager/) pour des instructions spécifiques.

- **Vue.js** :
  Une fois Node.js installé, vous pouvez installer Vue.js globalement via npm :
  ```bash
  sudo npm install -g vue
  ```

- **SQLite3** :
  SQLite3 peut également être installé via `apt` sur les systèmes basés sur Debian :
  ```bash
  sudo apt install sqlite3
  ```

### Cloner le projet
Pour obtenir le projet sur votre machine locale, clonez le dépôt Git avec la commande suivante :
```bash
git clone https://forgens.univ-ubs.fr/gitlab/e2300473/maths-a-la-maison-b
```
### Installer les dépendances
Naviguez dans le dossier du projet et installez les dépendances pour le backend et le frontend :

#### Backend
```bash
cd backend
npm install
```
Cette commande installera toutes les dépendances nécessaires pour le backend spécifiées dans le fichier `package.json`.

#### Frontend
```bash
cd ../frontend
npm install
```
De même, cela installera les dépendances nécessaires pour le frontend.

### Lancer l'application

#### Démarrer le Backend
Pour lancer le serveur backend, utilisez la commande suivante dans le répertoire `backend` :
```bash
node server.js
```
Cela démarrera le serveur backend sur le port par défaut ou le port configuré dans votre application.

#### Démarrer le Frontend
Pour lancer l'application frontend, exécutez cette commande dans le répertoire `frontend` :
```bash
npm run dev
```

## Utilisation
Pour utiliser l'application, commencez par créer un compte ou connectez-vous si vous avez déjà un compte. Une fois connecté, lancez une partie et déplacez votre pion sur le plateau interactif pour commencer à jouer.

## Contribution
Pour contribuer au projet, veuillez suivre ces étapes :
1. Fork le répertoire du projet.
2. Créez une nouvelle branche pour vos modifications (`git checkout -b ma-nouvelle-fonctionnalité`).
3. Faites vos changements et committez-les (`git commit -am 'Ajout de quelques fonctionnalités'`).
4. Poussez la branche (`git push origin ma-nouvelle-fonctionnalité`).
5. Créez une nouvelle Pull Request.

## Licence
Nous envisageons d'utiliser la **MIT License** pour ce projet, bien que cette décision ne soit pas encore finalisée.

## Auteurs
Voir [AUTHORS.md](AUTHORS.md) pour la liste des contributeurs et leurs rôles.