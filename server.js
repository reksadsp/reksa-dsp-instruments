const express = require('express');
const axios = require('axios');
const app = express();
const PORT = 3000;
const API_KEY = "votre_cle_api"; // ⚠️ Gardée secrète côté serveur

app.get('/api/games', async (req, res) => {
  try {
    const response = await axios.get(
      'https://api.itch.io/profile/votre-nom/games',
      { headers: { "Authorization": `Bearer ${API_KEY}` } }
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Erreur lors de la récupération des jeux" });
  }
});

app.listen(PORT, () => {
  console.log(`Serveur démarré sur http://localhost:${PORT}`);
});
