const express = require("express");

const app = express();

app.get("/api/notes", (req, res) => {
  res.status(200).send("you got 20 notes");
});

app.get("/api/notes", (req, res) => {
  res.status(201).json({ message: "note created success" });
});

app.get("/api/notes/:id", (req, res) => {
  res.status(200).json({ message: "you got 20 notes" });
});

app.get("/api/notes", (req, res) => {
  res.status(200).send("you got 20 notes");
});

app.listen(5001, () => {
  console.log("OKEEE");
});
