const express = require("express");

const app = express();

app.get("/api/notes", (req, res) => {
  res.send("YEEEY");
});

app.listen(5001, () => {
  console.log("OKEEE");
});
