// routes/userRoutes.js
import express from 'express';
const router = express.Router();
import User from '../models/userModel.js'; // Assure-toi que le modèle est bien configuré
import crypto from 'crypto';
import jwt from 'jsonwebtoken';

function hashPassword(password) {
  return crypto.createHmac('sha256', 'secret_key').update(password).digest('hex');
}

// Route GET pour récupérer tous les utilisateurs
router.get('/', async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la récupération des utilisateurs' });
  }
});

router.post('/create', async (req, res) => {
  console.log("Données reçues :", req.body); // Log pour vérifier les données
  const { pseudo, email, password } = req.body;
  
  if (!password) {
    console.error("Le champ 'password' est manquant.");
    return res.status(400).json({ error: "Le mot de passe est requis." });
  }

  try {
    const hashedPassword = hashPassword(password); // Hachage simple du mot de passe

    const newUser = await User.create({
      pseudo,
      email,
      password: hashedPassword, // Stocker le mot de passe haché
    });

    res.status(201).json(newUser);
  } catch (error) {
    console.error('Erreur lors de la création de l\'utilisateur:', error);
    res.status(500).json({ error: 'Erreur lors de la création de l\'utilisateur' });
  }
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ where: { email: email } });

    if (!user) {
      return res.status(401).json({ error: 'Utilisateur non trouvé' });
    }

    const hashedPassword = hashPassword(password);

    if (hashedPassword === user.password) {
      // Crée un token avec l'ID de l'utilisateur
      const token = jwt.sign({ userId: user.id }, 'SECRET_KEY', { expiresIn: '24h' });

      res.status(200).json({ message: 'Connexion réussie', token, user });
    } else {
      res.status(401).json({ error: 'Mot de passe incorrect' });
    }
  } catch (error) {
    console.error('Erreur lors de la connexion:', error);
    res.status(500).json({ error: 'Erreur lors de la connexion' });
  }
});

// Route protégée d'exemple (à utiliser dans d'autres fichiers)
router.get('/protected', (req, res) => {
  if (req.session.user) {
    res.json({ message: "Bienvenue dans la route protégée !" });
  } else {
    res.status(401).json({ message: "Accès non autorisé" });
  }
});

router.put('/update', async (req, res) => {
  const { email, pseudo, currentPassword, newPassword } = req.body;

  try {
    // Récupérer l'utilisateur par email
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(404).json({ error: 'Utilisateur non trouvé' });
    }

    // Si l'utilisateur souhaite changer son mot de passe
    if (newPassword) {
      // Hacher le mot de passe actuel fourni par l'utilisateur
      const hashedCurrentPassword = hashPassword(currentPassword);

      // Vérifier le mot de passe actuel
      if (user.password !== hashedCurrentPassword) {
        return res.status(401).json({ error: 'Mot de passe actuel incorrect' });
      }

      // Hacher et mettre à jour avec le nouveau mot de passe
      user.password = hashPassword(newPassword);
    }

    // Mettre à jour les autres informations du profil
    user.pseudo = pseudo;
    await user.save();

    res.status(200).json({ message: 'Profil mis à jour avec succès' });
  } catch (error) {
    console.error('Erreur lors de la mise à jour du profil :', error);
    res.status(500).json({ error: 'Erreur lors de la mise à jour du profil' });
  }
});


router.get('/profile', async (req, res) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ error: 'Token manquant' });
  }

  try {
    const decoded = jwt.verify(token, 'SECRET_KEY');
    const user = await User.findOne({
      where: { id: decoded.userId },
      attributes: ['pseudo', 'email']
    });

    if (!user) {
      return res.status(404).json({ error: 'Utilisateur non trouvé' });
    }

    res.status(200).json(user);
  } catch (error) {
    console.error('Erreur lors de la récupération du profil utilisateur:', error);
    res.status(500).json({ error: 'Erreur lors de la récupération du profil utilisateur' });
  }
});


export default router;