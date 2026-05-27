// Import express
const express = require("express");

// Create app
const app = express();

// Port number
const PORT = 3000;

// Set EJS
app.set("view engine", "ejs");

// Static folder
app.use(express.static("public"));

// Home route
app.get("/", (req, res) => {

    res.render("index");

});

// Start server
app.listen(PORT, () => {

    console.log(`Server running on http://localhost:${PORT}`);

});