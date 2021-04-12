const express = require("express");
const router = express.Router();//Permet de charger le middleware niveau routeur

const sauceCtrl = require('../controllers/sauce');//On appelle la logique métier de nos routes
const auth = require("../middleware/auth");//On appelle le middleware d'authentification
const multer = require('../middleware/multer-config');//On appelle le middleware pour la gestion des images


//Lier les routes aux controllers
router.post('/', auth, multer, sauceCtrl.createSauce);// C Créer une sauce
router.post("/:id/like", auth, sauceCtrl.likeDislikeSauce);// C Like et dislike une sauce
router.get('/:id', auth, sauceCtrl.getOneSauce);// R Récupèrer une seule sauce
router.get('/', auth, sauceCtrl.getAllSauces);// R Récupèrer toutes les sauces
router.put('/:id', auth, multer, sauceCtrl.modifySauce);// U Modifier une sauce existante
router.delete('/:id', auth, sauceCtrl.deleteSauce);// D Supprimer une sauce

module.exports = router;
