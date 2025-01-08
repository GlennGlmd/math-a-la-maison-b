import { Sequelize, DataTypes } from 'sequelize';

// Connexion à la base de données SQLite
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: '../math_a_la_maison.db'  
});

// Modèle Card
const Card = sequelize.define('Card', {
  question: {
    type: DataTypes.TEXT,
    allowNull: false,
    unique: true,
    validate: {
        notEmpty: true, // Pas de chaîne vide
    }
  },
  reponse: {
    type: DataTypes.TEXT,
    allowNull: false,
    get() {
      const rawValue = this.getDataValue('reponse');
      return rawValue ? JSON.parse(rawValue) : [];
    },
    set(value) {
      this.setDataValue('reponse', JSON.stringify(value));
    }
  },
  thematique: {
    type: DataTypes.TEXT,
    allowNull: false
  },
}, {
  tableName: 'Card',
  timestamps: false
});

// Ajout de méthodes statiques
Card.findById = async function (id) {
  return await this.findOne({ where: { id } });
};

Card.getAllCardsByThematique = async function (thematique) {
  return await this.findAll({ where: { thematique } });
};

Card.getAllCards = async function () {
    return await Card.findAll();
};

Card.deleteCard = async function (id) {
    return await Card.destroy({ where: { id } });
};

// Ajout de getters pour chaque champ
Card.prototype.getQuestion = function () {
  return this.question;
};

Card.prototype.getReponse = function () {
  return this.reponse;
};

Card.prototype.getThematique = function () {
  return this.thematique;
};

// Méthode pour vérifier si une réponse est correcte
Card.prototype.isCorrectAnswer = function (userAnswer) {
    const validAnswers = this.reponses.map(ans => ans.trim().toLowerCase());
    return validAnswers.includes(userAnswer.trim().toLowerCase());
  };

await sequelize.sync();

export default Card;
