import express from 'express';
import Card from '../models/cardModel.js';

const router = express.Router();

// Route pour récupérer toutes les cartes
router.get('/', async (req, res) => {
    try {
      const cards = await Card.getAllCards(); // Appel correct à la méthode statique du modèle
      res.json(cards);
    } catch (err) {
      console.error('Erreur lors de la récupération des cartes :', err);
      res.status(500).json({ error: 'Erreur lors de la récupération des cartes.' });
    }
});

// Route pour récupérer toutes les cartes par thématique
router.get('/thematique/:thematique', async (req, res) => {
    const { thematique } = req.params;
    try {
      const cards = await Card.getAllCardsByThematique(thematique);
      res.json(cards);
    } catch (err) {
      console.error('Erreur lors de la récupération des cartes par thématique :', err);
      res.status(500).json({ error: 'Erreur lors de la récupération des cartes par thématique.' });
    }
});

// Route pour supprimer une carte par ID
router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    try {
      const result = await Card.deleteCard(id);
      if (result === 0) {
        return res.status(404).json({ error: 'Carte non trouvée.' });
      }
      res.status(200).json({ message: 'Carte supprimée avec succès.' });
    } catch (err) {
      console.error('Erreur lors de la suppression de la carte :', err);
      res.status(500).json({ error: 'Erreur lors de la suppression de la carte.' });
    }
});

router.post('/check-answer/:id', async (req, res) => {
    const { id } = req.params;
    const { userAnswer } = req.body;
  
    try {
      const card = await Card.findById(id);
  
      if (!card) {
        return res.status(404).json({ message: "Carte non trouvée" });
      }
  
      const isCorrect = card.isCorrectAnswer(userAnswer);
  
      res.status(200).json({ isCorrect });
    } catch (error) {
      console.error("Erreur lors de la vérification de la réponse :", error);
      res.status(500).json({ error: "Erreur lors de la vérification de la réponse" });
    }
});
  
  

export default router;