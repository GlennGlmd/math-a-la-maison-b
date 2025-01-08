# Tests du Backend pour Maths à la maison

## Introduction
Ce document explique comment exécuter et comprendre les tests du backend pour [Nom du Projet] en utilisant Postman, un outil puissant pour tester des API de manière efficace.

## À propos de Postman
Postman est une plateforme populaire utilisée par les développeurs pour développer, tester, partager et documenter des API. Cet outil offre une interface utilisateur graphique permettant de créer, envoyer et analyser des requêtes HTTP sans écrire de code. Postman est particulièrement utile pour:
- Tester des API en envoyant différents types de requêtes HTTP (GET, POST, PUT, DELETE, etc.).
- Examiner les réponses des API, y compris les codes de statut, les headers, et les corps des messages.
- Automatiser des tests à l'aide de scripts et de collections.
- Gérer et partager des environnements de test qui incluent des variables d'environnement pour différents stages de développement.

## Prérequis
- **Node.js et npm** : Assurez-vous que Node.js et npm sont installés sur votre machine.
- **Postman** : Postman doit être installé pour exécuter les tests d'API.

### Installation de Postman
Vous pouvez installer Postman de plusieurs manières, selon votre système d'exploitation:
- **Sur Linux** : Utilisez Snap pour installer Postman rapidement:
  ```bash
  sudo snap install postman
  ```

## Tests avec Postman

### Importer la Collection de Tests
1. Ouvrez Postman.
2. Utilisez la fonctionnalité d'importation pour charger la collection de tests fournie dans le dossier `tests/postman/`.
3. Importez également l'environnement Postman fourni pour accéder aux variables prédéfinies nécessaires pour les tests.

### Exécuter les Tests
1. Sélectionnez la requête que vous souhaitez tester dans la collection.
2. Appuyez sur le bouton 'Send' pour exécuter la requête.
3. Analysez la réponse et les codes de statut pour vérifier la conformité avec les attentes.

## Ajouter des Tests
Pour ajouter de nouveaux tests à la collection :
- Dupliquez une requête existante et modifiez ses paramètres selon les besoins spécifiques du nouveau test.
- Nommez clairement la nouvelle requête pour indiquer précisément ce qu'elle est destinée à tester.
