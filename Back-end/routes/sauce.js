const express = require("express");
const router = express.Router();//Permet de charger le middleware niveau routeur

const sauceCtrl = require('../controllers/sauce');//On appelle la logique métier de nos routes
const auth = require("../middleware/auth");//On appelle le middleware d'authentification

router.post('/', sauceCtrl.createSauce);//Permet de créer une sauce
router.put('/:id', sauceCtrl.modifySauce);//Permet de modifier une sauce existante
router.delete('/:id', sauceCtrl.deleteSauce);//Supprime une sauce
router.get('/:id', sauceCtrl.getOneSauce);//Récupère une seule sauce
router.get('/', sauceCtrl.getAllSauces);//Récupère toutes les sauces

module.exports = router;
