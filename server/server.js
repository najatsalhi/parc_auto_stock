const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());
//data connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "malak",
  database: "parc_auto_stock",
});
//login
app.post("/login", (req, res) => {
  const sql = "SELECT * FROM users WHERE email= ? AND password = ?";
  db.query(sql, [req.body.email, req.body.password], (err, data) => {
    if (err) return res.json("errors");
    return res.json(data.length > 0 ? "success" : "errors");
  });
});
//add user
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
//geting users
app.get("/users", (req, res) => {
  const sql = "SELECT * FROM users";
  db.query(sql, (err, data) => {
    if (err) return res.json("errors");
    return res.json(data.length > 0 ? data.length : err);
  });
});
//rapport
app.post("/Layout/Rapports", (req, res) => {
  const sql = "INSERT INTO rapport_veh (type, date_gener, contenu, format) VALUES (?)";
  const values = [
    req.body.type,
    req.body.date_gener,
    req.body.contenu,
    req.body.format,
  ];
  db.query(sql, [values], (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});
app.get("/Layout/Rapports", (req, res) => {
  const sql = "SELECT * FROM rapport_veh";
  db.query(sql, (err, data) => {
    if (err) return res.json("errors");
    return res.json(data.length > 0 ? data.length : err);
  });
});
//reparation
app.post("/Layout/Reparation", (req, res) => {
  const sql = "INSERT INTO reparation_veh (type, date_reparation, cout, fournisseur,facture,id_vehicule) VALUES (?)";
  const values = [
    req.body.type,
    req.body.date_reparation,
    req.body.cout,
    req.body.fournisseur,
    req.body.facture,
    req.body.id_vehicule,
  ];
  db.query(sql, [values], (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});
app.get("/Layout/Reparation", (req, res) => {
  const sql = "SELECT * FROM reparation_veh";
  db.query(sql, (err, data) => {
    if (err) return res.json("errors");
    return res.json(data.length > 0 ? data.length : err);
  });
});
app.listen(3001, () => {
  console.log("server data");
});
