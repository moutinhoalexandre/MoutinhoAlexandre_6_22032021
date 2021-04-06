const express = require("express");
const router = express.Router();//Permet de charger le middleware niveau routeur

const sauceCtrl = require('../controllers/sauce');//On appelle la logique métier de nos routes
const auth = require("../middleware/auth");//On appelle le middleware d'authentification
const multer = require('../middleware/multer-config');//On appelle le middleware pour la gestion des images

router.post('/', auth, multer, sauceCtrl.createSauce);//Créer une sauce
router.put('/:id', auth, multer, sauceCtrl.modifySauce);//Modifier une sauce existante
router.delete('/:id', auth, sauceCtrl.deleteSauce);//Supprimer une sauce
router.get('/:id', auth, sauceCtrl.getOneSauce);//Récupèrer une seule sauce
router.get('/', auth, sauceCtrl.getAllSauces);//Récupèrer toutes les sauces

module.exports = router;
