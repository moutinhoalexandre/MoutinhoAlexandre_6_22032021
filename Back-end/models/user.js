const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator"); //Nous permet de vérifier que le champ avec la propriété unique n'est pas déjà présent dans la bdd

mongoose.set("useCreateIndex", true);//On utilise createIndex() à la place de ensureIndex(), déprécié mais appelé par défaut par Mongoose 5.X

//On crée un schéma de données grâce à mongoose avec les propriétés désirées
const userSchema = mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

//et on applique unique-validator au schema
userSchema.plugin(uniqueValidator);

//Puis on l'exporte ce shéma en tant que modèle
module.exports = mongoose.model("User", userSchema);
