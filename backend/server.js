// server.js
import express from 'express';
import sequelize from './init_db.js';
import userRoutes from './routes/userRoutes.js';
import cardRoutes from './routes/cardRoutes.js';
import cors from 'cors';
import session from 'express-session';

const app = express();

// Configuration de la session
app.use(session({
  secret: 'BUTINFORMATIQUEMATHALAMAISON', // clé secrète pour sécuriser les sessions
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false } // Mets secure: true en production avec HTTPS
}));

// Configuration de CORS et du parser JSON
app.use(cors());
app.use(express.json());

// Routes pour les utilisateurs
app.use('/api/User', userRoutes);

// Routes pour les cartes
app.use('/api/Card', cardRoutes);

// Démarrer le serveur et synchroniser la base de données
const PORT = process.env.PORT || 3000;
sequelize.sync({ force: false }).then(() => { // force: true si tu veux recréer les tables à chaque démarrage
  app.listen(PORT, () => {
    console.log(`Le serveur fonctionne sur le port ${PORT}`);
  });
});