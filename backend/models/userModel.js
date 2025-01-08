import { Sequelize, DataTypes } from 'sequelize';

// Connexion à la base de données
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: '../math_a_la_maison.db'
});

// Définition du modèle User
const UserModel = sequelize.define('User', {
  pseudo: {
    type: DataTypes.TEXT,
    allowNull: false,
    unique: true
  },
  email: {
    type: DataTypes.TEXT,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true
    }
  },
  password: {
    type: DataTypes.TEXT,
    allowNull: false,
    validate: {
      len: [8, 255] // Mot de passe entre 8 et 255 caractères
    }
  }
}, {
  tableName: 'User',
  timestamps: false
});

// Ajout de méthodes statiques
UserModel.findById = async function (id) {
  return await this.findOne({ where: { id } });
};

UserModel.findByEmail = async function (email) {
  return await this.findOne({ where: { email } });
};

// Ajout de getters et setters (via le prototype)
UserModel.prototype.getPseudo = function () {
  return this.pseudo;
};

UserModel.prototype.getEmail = function () {
  return this.email;
};

UserModel.prototype.getPassword = function () {
  return this.password;
};

UserModel.prototype.setPseudo = function (newPseudo) {
  this.pseudo = newPseudo;
};

UserModel.prototype.setEmail = function (newEmail) {
  this.email = newEmail;
};

UserModel.prototype.setPassword = function (newPassword) {
  if (newPassword.length < 8) {
    throw new Error('Le mot de passe doit comporter au moins 8 caractères');
  }
  this.password = newPassword;
};

// Synchronisation du modèle avec la base de données (si nécessaire)
await sequelize.sync();

export default UserModel;
