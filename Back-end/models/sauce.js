//On crée un schéma de données grâce à mongoose avec les propriétés désirées
const mongoose = require("mongoose");

const sauceSchema = mongoose.Schema({
    userId: { type: String, required : true},
    name: {type: String, required : true},
    manufacturer: {type: String, required : true},
    description: {type: String, required : true},
    mainPepper: {type: String, required : true},
    imageUrl: {type: String, required : true},
    heat: {type: String, required : true},
    likes: { type: Number, required: false, default: 0 },
    dislikes: { type: Number, required: false, default: 0 },
    usersLiked: { type: [String], required: false },
    usersDisliked: { type: [String], required: false }
});
//Puis on l'exporte en tant que modèle
module.exports = mongoose.model("Sauce", sauceSchema);


