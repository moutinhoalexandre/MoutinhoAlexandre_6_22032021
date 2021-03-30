const express = require("express"); //Import du framework express pour node.js
const mongoose = require("mongoose"); //Importe mongoose qui permet la création de modèle pour mongoDb
require('dotenv').config();//Permet de créer un environnement de variables


const app = express(); //Applique le framework express

mongoose //Connecte l'API à la base de données mongoDB grâce à mongoose
  .connect(
    //TODO : penser a déplacer dans un fichier .env
    `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_CLUSTER}.6vps7.mongodb.net/${process.env.MONGO_DATABASE}?retryWrites=true&w=majority`,
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch(() => console.log("Connexion à MongoDB échouée !"));

//Définit les paramètres d'en-tête
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*"); //Permet l'accès à l'API depuis n'importe quelle origine
  res.setHeader(
    //Autorise les en-têtes spécifiés
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    //Permet l'utilisation des méthodes définies ci-dessous
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

//Permet de récupérer le corps de la requête au format json
app.use(express.json());

module.exports = app;
