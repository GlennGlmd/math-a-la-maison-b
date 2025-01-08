import { Sequelize } from 'sequelize';
import path from 'path';

// Configurer Sequelize pour SQLite (ou autre base de données si nécessaire)
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './db/math_a_la_maison.db', // Assure-toi que le chemin est correct
});

export default sequelize;
