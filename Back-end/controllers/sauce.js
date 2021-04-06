const Sauce = require("../models/sauce"); //On importe le modèle de sauce
const fs = require('fs'); //système de gestion de fichier de Node

//Créer une sauce
exports.createSauce = (req, res, next) => {
  const sauceObject = JSON.parse(req.body.sauce);// extraire l'object JSON
  delete sauceObject._id;//retire l'id généré automatiquement par MongoDb
  const sauce = new Sauce({
    ...sauceObject,//Utilise l'opérateur spread pour copier les infos du corps de la requête
    imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`,//On génère l'url par rapport à son nom de fichier
  });
  sauce.save()//Sauvegarde la nouvelle sauce dans la bdd
  .then(() => res.status(201).json({ message: 'Sauce enregistrée !' }))
  .catch(error => res.status(400).json({ error }));
};

//Modifie une sauce
exports.modifySauce = (req, res, next) => {
  const sauceObject = req.file
    ? {
        ...JSON.parse(req.body.sauce),
        imageUrl: `${req.protocol}://${req.get("host")}/images/${
          req.file.filename
        }`,
      }
    : { ...req.body };
  Sauce.updateOne(
    { _id: req.params.id },
    { ...sauceObject, _id: req.params.id }
  )
      .then(() => res.status(200).json({ message: "Sauce modifiée !" }))
    .catch((error) => res.status(404).json({ error }));
};

//Supprime une sauce
exports.deleteSauce = (req, res, next) => {
  Sauce.findOne({ _id: req.params.id})//Trouve la sauce correspondant à l'id
    .then(sauce => {
      const filename = sauce.imageUrl.split('/images/')[1];
      fs.unlink(`images/${filename}`, () => {//on supprime l'image du dossier images
        Sauce.deleteOne({ _id: req.params.id })//et supprime la sauce de la collection
          .then(() => res.status(200).json({ message: 'Sauce supprimée !'}))
          .catch(error => res.status(400).json({ error }));
      })
    })
    .catch(error => res.status(500).json({ error }));
}

//Récupère une sauce
exports.getOneSauce = (req, res, next) => {
  Sauce.findOne({ _id: req.params.id })
    .then((sauce) => res.status(200).json(sauce))
    .catch((error) => res.status(404).json({ error }));
};

//Récupère toutes les sauces
exports.getAllSauces = (req, res, next) => {
  Sauce.find()
    .then((sauces) => res.status(200).json(sauces))
    .catch((error) => res.status(400).json({ error }));
};
