// This will be our express web server backend.
require("dotenv").config();
const express = require("express");

const app = express();

const root = "dist/book-app";

app.use(express.static(root));

// Route incoming server requests to the correct files
app.get("/*", (_req, res) => res.sendFile("index.html", { root }));

// console.log(process.env.SOME_HIDDEN_KEY);
// Start the app on the default Heroku port
app.listen(process.env.PORT || 8080);
