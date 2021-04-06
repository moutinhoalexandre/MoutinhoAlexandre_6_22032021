const bcrypt = require("bcrypt"); //Permet de hasher et saler les mots de passe
const jwt = require("jsonwebtoken"); //Permet de créer un token utilisateur
const MaskData = require("../node_modules/maskdata");

const User = require("../models/user");

//On masque l'email
const emailMask2Options = {
    maskWith: "*", 
    unmaskedStartCharactersBeforeAt: 0,
    unmaskedEndCharactersAfterAt: 0,
    maskAtTheRate: false
};

//Output: ********@**********

//Enregistrement d'un nouvel utilisateur
exports.signup = (req, res, next) => {
  bcrypt
    .hash(req.body.password, 10) //On hash le mot de passe et on le sale 10 fois
    .then((hash) => {
      const user = new User({
        email: MaskData.maskEmail2(req.body.email, emailMask2Options),//l'email masqué
        password: hash, //le mot de passe crypté
      });
      user
        .save() //on sauvegarde les données du nouvel utilisateur dans la bdd
        .then(() => res.status(201).json({ message: "Utilisateur créé !" }))
        .catch((error) => res.status(400).json({ error }));
    })
    .catch((error) => res.status(500).json({ error }));
};

//Connection d'un utlisateur existant
exports.login = (req, res, next) => {
  User.findOne({
    email: MaskData.maskEmail2(req.body.email, emailMask2Options),
  }) //On cherche l'email correspondant dans la collection
    .then((user) => {
      if (!user) {
        return res.status(401).json({ error: "Utilisateur non trouvé !" });
      }
      bcrypt
        .compare(req.body.password, user.password) //on compare le mot de passe de la requête avec le hash de l'utilisateur
        .then((valid) => {
          if (!valid) {
            return res.status(401).json({ error: "Mot de passe incorrect !" });
          }
          res.status(200).json({
            userId: user._id,
            token: jwt.sign(
              //On attribue un token d'authentification
              { userId: user._id },
              process.env.JWT_SECRET_TOKEN,
              { expiresIn: "24h" }
            ),
          });
        })
        .catch((error) => res.status(500).json({ error }));
    })
    .catch((error) => res.status(500).json({ error }));
};
