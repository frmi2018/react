// Activer les variables d'environnement
// Terminal -> npm i dotenv si pas encore installé
require("dotenv").config();

const express = require("express");
const router = express.Router();

// Mailgun configuration
// Terminal -> npm i mailgun-js si pas encore installé
const mailgun = require("mailgun-js")({
  apiKey: process.env.API_KEY_MAILGUN,
  domain: process.env.DOMAIN_MAILGUN,
});

router.post("/user/form", async (req, res) => {
  try {
    // Destructuring
    const { firstName, lastName, email, subject, message } = req.fields;
    // ----------
    // Envoi d'un mail pour prévenir de la réception d'un formulaire
    // ----------
    // 1. créer l'objet à envoyer //
    const data = {
      from: `${firstName} ${lastName} <${email}>`,
      to: process.env.MY_MAIL,
      subject: subject,
      text: message,
    };
    // 2. envoi de l'objet à l'adresse mail via le service Mailgun //
    mailgun.messages().send(data, (error, body) => {
      if (!error) {
        console.log(body);
        res.status(200).json({ message: "Données reçues et mail envoyé." });
      } else {
        console.log(error);
        res.status(401).json(error);
      }
    });
  } catch (error) {
    res.json({ error: { message: error.message } });
  }
});

module.exports = router;
