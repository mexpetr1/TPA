var express = require('express');
const { databaseDB } = require('./database');

require('dotenv').config();
const port = process.env.PORT || 3333;
const express = require('express');

var app = express();

// Connexion à la base de données
databaseDB();

// Route de base pour tester
app.get('/', (req, res) => {
  res.send('Yeah ! Ça marche ! Je suis dans le navigateur ! 🎉🚀');
});

app.listen(3030, () => {
	console.log(`🚀🚀 Lancement avec succès du server`);
});

module.exports = app;