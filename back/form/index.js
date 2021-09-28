// Adresse du serveur pour faire les requêtes via Postman
// https://frmi-form.herokuapp.com/

// Activer les variables d'environnement
// Terminal -> npm i dotenv si pas encore installé
require("dotenv").config();

// package serveur
// Terminal -> npm i express si pas encore installé
const express = require("express");
const app = express();

// package express-formidable
// Terminal -> npm i express-formidable si pas encore installé
const formidable = require("express-formidable");
app.use(formidable());

// package cors
// Terminal -> cors si pas encore installé
const cors = require("cors");
app.use(cors());

// importer les routes
const userRoutes = require("./routes/user.js");
app.use(userRoutes);

app.get("/", (req, res) => {
  res.json({ message: "Hi" });
});

app.get("*", (req, res) => {
  res.json({ message: "route not found" });
});

app.listen(process.env.PORT, () => {
  console.log("Server started");
});
