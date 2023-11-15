var express = require('express');
const { databaseDB } = require('./database');

require('dotenv').config();
const port = process.env.PORT || 3333;

const twig = require('twig');

var app = express();

// Connexion à la base de données
databaseDB();
app.use(express.static('public'));
app.set('view engine', 'twig');
app.set('views', './views');

app.get('/', (req, res) => {
  res.render('pages/home');
});

// Route de base pour tester


app.listen(3030, () => {
	console.log(`🚀🚀 Lancement avec succès du server`);
});

module.exports = app;