const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "malak",
  database: "parc_auto_stock",
});

app.post("/login", (req, res) => {
  const sql = "SELECT * FROM users WHERE email= ? AND password = ?";
  db.query(sql, [req.body.email, req.body.password], (err, data) => {
    if (err) return res.json("errors");
    return res.json(data.length > 0 ? "success" : "errors");
  });
});

app.post("/addUser", (req, res) => {
  const sql = "INSERT INTO users (nom, prenom, email, password) VALUES (?)";
  const values = [
    req.body.nom,
    req.body.prenom,
    req.body.email,
    req.body.password,
  ];
  db.query(sql, [values], (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.get("/users", (req, res) => {
  const sql = "SELECT * FROM users";
  db.query(sql, (err, data) => {
    if (err) return res.json("errors");
    return res.json(data.length > 0 ? data.length : err);
  });
});

app.post("/Reports", (req, res) => {
  const sql = "INSERT INTO rapport_veh ( type,date_gener,contenu,format,id_rapport_veh) VALUES (?,STR_TO_DATE(?, '%m/%d/%Y'), ?, ?)";
  const values = [
    req.body.type,
    req.body.date_gener,
    req.body.contenu,
    req.body.format,
    req.body.id_rapport_veh
  ];
  db.query(sql, [values], (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.listen(3001, () => {
  console.log("server data");
});
