import Card from './models/cardModel.js'; // Chemin vers votre modèle

async function insertCards() {
  try {
    await Card.create({
      question: "Les 24 stylos de Ambre sont de 3 sortes : les feutres, les surligneurs et les pastels. Trois quarts ne sont pas des feutres et deux tiers ne sont pas des pastels. Combien Ambre a -t-elle de surligneurs ?",
      reponse: ["10", "DIX", "dix"],
      thematique: "Calculs",
    });

    await Card.create({
      question: "Donne l'écriture décimale de : 2 × 10² + 10¹ + 10⁻¹ + 2 × 10⁻³",
      reponse: ["210,102"],
      thematique: "Calculs",
    });

    console.log("Cartes insérées avec succès !");
  } catch (error) {
    console.error("Erreur lors de l'insertion des cartes :", error);
  }
}

insertCards();
