const express = require("express");//Import du framework express pour node.js

const app = express();//Applique le framework express

//Définit les paramètres d'en-tête
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*"); //Permet l'accès à l'API depuis n'importe quelle origine
  res.setHeader( //Autorise les en-têtes spécifiés
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader( //Permet l'utilisation des méthodes définies ci-dessous
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});


//Permet de récupérer le corps de la requête au format json
app.use(express.json());



module.exports = app;
