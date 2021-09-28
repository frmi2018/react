const express = require("express");
// const bodyParser=require("body-parser"); plus utile inclus dans express
// http://expressjs.com/en/resources/middleware/cookie-parser.html
const cookieParser = require("cookie-parser");
const userRoutes = require("./routes/user.routes");
const postRoutes = require("./routes/post.routes");
require("dotenv").config({ path: "./config/.env" });
require("./config/db");
const { checkUser, requireAuth } = require("./middleware/auth.middleware");
const cors = require("cors");
const app = express();

const corsOptions = {
  origin: process.env.CLIENT_URL,
  credentials: true,
  allowedHeaders: ["sessionId", "Content-Type"],
  exposedHeaders: ["sessionId"],
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  preflightContinue: false,
};

app.use(cors(corsOptions));

// app.use(bodyParser.json()); plus utile inclus dans express
// app.use(bodyParser.urlencoded({extended:true})); plus utile inclus dans express
app.use(cookieParser());

// mettre requête au bon format (plus besoin de bodyParser)
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// jwt

app.get("*", checkUser);
app.get("/jwtid", requireAuth, (req, res) => {
  res.status(200).send(res.locals.user._id);
});

// routes

app.use("/api/user", userRoutes);

app.use("/api/post", postRoutes);

// server
app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`);
});
