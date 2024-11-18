//načtení modulu express
const express = require("express");
const cors = require("cors");
const path = require("path");

// cashflow

// volejbalalaci
const toDoListController = require("./controller/to-do-list");

//inicializace nového Express.js serveru
const app = express();
//definování portu, na kterém má aplikace běžet na localhostu
const port = process.env.PORT || 8080;

// Parsování body
app.use(express.json()); // podpora pro application/json
app.use(express.urlencoded({ extended: true })); // podpora pro application/x-www-form-urlencoded

app.use(cors());

// app.use(express.static(path.join(__dirname, "build")));

app.use("/toDoList", toDoListController);

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

//nastavení portu, na kterém má běžet HTTP server
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
