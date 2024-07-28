const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "parc_auto_stock",
});

app.post("/addUser", (req, res) => {
  const sql =
    "INSERT INTO users ('1',`nom`,`email` , `password`,`role`) VALUES (?)";
  const values = [
    req.body.id,
    req.body.nom,
    req.body.email,
    req.body.password
  ]
  db.query(sql, {values}, (errors, data) => {
    if (errors) return res.json(errors);
    return res.json(data);
  });
});



app.listen(8081, () => {
  console.log("server data");
});
