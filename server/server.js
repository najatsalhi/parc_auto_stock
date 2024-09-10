const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const bodyParser = require('body-parser');


const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


{/* Connection to database */}

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "malak",
  database: "parc_auto_stock",
});

{/* Login */}

app.post("/login", (req, res) => {
  const sql = "SELECT * FROM users WHERE email= ? AND password = ?";
  db.query(sql, [req.body.email, req.body.password], (err, data) => {
    if (err) return res.json("errors");
    return res.json(data.length > 0 ? "success" : "errors");
  });
});
{/* Stock */}

/// Routes pour les utilisateurs
app.post('/users', (req, res) => {
  const { nom, prenom, email, password, role, telephone } = req.body;
  const hashedPassword = bcrypt.hashSync(password, 10);
  const sql = "INSERT INTO users (nom, prenom, email, password, role, telephone) VALUES (?, ?, ?, ?, ?, ?)";
  db.query(sql, [nom, prenom, email, hashedPassword, role, telephone], (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.status(201).json({ message: 'Utilisateur ajouté avec succès', data: result });
  });
});

app.get('/users', (req, res) => {
  db.query("SELECT * FROM users", (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
});

// Routes pour les articles
app.get('/articles', (req, res) => {
  db.query('SELECT * FROM article', (err, result) => {
    if (err) {
      console.error('Error fetching articles:', err);
      res.status(500).send(err);
      return;
    }
    res.send(result);
  });
});

app.post('/articles', (req, res) => {
  const { nom, description, departement, etat, date_stockage, id_stock } = req.body; // Include id_stock here
  const query = 'INSERT INTO article (nom, description, departement, etat, date_stockage, id_stock) VALUES (?);'
  db.query(query, [nom, description, departement, etat, date_stockage, id_stock], (err, result) => {
    if (err) {
      console.error('Error adding article:', err);
      res.status(500).send(err);
      return;
    }
    res.send('Article added successfully');
  });
});




// Routes pour les réparations
app.get('/repairs', async (req, res) => {
  try {
    const repairs = await db.query('SELECT * FROM repairs'); // Adjust your query as needed
    res.json(repairs);
  } catch (error) {
    console.error('Error fetching repairs:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.post('/repairs', (req, res) => {
  const { type, date_reparation, cout, fournisseur, facture, id_article } = req.body;
  const sql = "INSERT INTO repparation_art (type, date_reparation, cout, fournisseur, facture, id_article) VALUES (?, ?, ?, ?, ?, ?)";
  db.query(sql, [type, date_reparation, cout, fournisseur, facture, id_article], (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.status(201).json({ message: 'Réparation ajoutée avec succès', data: result });
  });
});



// Routes pour les rapports
app.post('/reports', (req, res) => {
  const { type, date_gener, contenu, format, id_article } = req.body;
  const sql = "INSERT INTO rapport_art (type, date_gener, contenu, format, id_article) VALUES (?, ?, ?, ?, ?)";
  db.query(sql, [type, date_gener, contenu, format, id_article], (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.status(201).json({ message: 'Rapport ajouté avec succès', data: result });
  });
});

app.get('/reports', (req, res) => {
  db.query("SELECT * FROM rapport_art", (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
});

{/* Recharts */}
// app.get('/layout/Recharge', (req, res) => {
//   const query = "SELECT quantite , date_recharge from recharge_carb ";

//   db.query(query, (err, results) => {
//     if (err) {
//       console.error('Error fetching fuel recharges:', err);
//       res.status(500).json({ error: 'Database error' });
//       return;
//     }

//     res.json(results); // Send the aggregated data as JSON
//   });
// });



{/* Add Membre */}

app.post("/layout/members", (req, res) => {
  const sql = "INSERT INTO users (nom, prenom, email, password, role, telephone) VALUES (?)";
  const values = [
    req.body.nom,
    req.body.prenom,
    req.body.email,
    req.body.password,
    req.body.role,
    req.body.telephone,
  ];
  db.query(sql, [values], (err, data) => {
    if (err) {
      console.error("SQL Error:", err);
      return res.status(500).json({ error: "Database error occurred." });
    }    
    return res.json(data);
  });
});

{/* Geting Membres */}

app.get("/layout/members", (req, res) => {
  const sql = "SELECT * FROM users";
  db.query(sql, (err, data) => {
    if (err) return res.json("errors");
    return res.json(data);
  });
});

{/* Add Personnel */}

app.post("/layout/Personnel", (req, res) => {
  const sql = "INSERT INTO chauffeur (nom, prenom, telephone, email, permie, date_debut, date_fin, id_vehicule) VALUES (?)";
  const values = [
    req.body.nom,
    req.body.prenom,
    req.body.telephone,
    req.body.email, 
    req.body.permie,
    req.body.date_debut,
    req.body.date_fin,
    req.body.id_vehicule,
  ];
  db.query(sql, [values], (err, data) => {
    if (err) {
      console.error("SQL Error:", err);
      return res.status(500).json({ error: "Database error occurred." });
    }    
    return res.json(data);
  });
});

{/* Geting Personnel */}

app.get("/layout/Personnel", (req, res) => {
  const sql = "SELECT * FROM chauffeur";
  db.query(sql, (err, data) => {
    if (err) return res.json("errors");
    return res.json(data);
  });
});


{/* Add Vehicule */}

app.post("/layout/Vehicules", (req, res) => {
  const sql = "INSERT INTO vehicule ( marque, modele, etat, couleur, kilometrage, type_carburant, num_immatriculation, carte_grise, assurance, vignette, visite_technique, assurance_date, vignette_date, visite_technique_date) VALUES (?)";
  const values = [
    req.body.marque,
    req.body.modele,
    req.body.etat,
    req.body.couleur,
    req.body.kilometrage,
    req.body.type_carburant,
    req.body.num_immatriculation,
    req.body.carte_grise,
    req.body.assurance,
    req.body.vignette,
    req.body.visite_technique,
    req.body.assurance_date,
    req.body.vignette_date,
    req.body.visite_technique_date,
  ];
  db.query(sql, [values], (err, data) => {
    if (err) {
      console.error("SQL Error:", err);
      return res.status(500).json({ error: "Database error occurred." });
    }    
    return res.json(data);
  });
});

{/* Geting Vehicule */}

app.get("/layout/Vehicules", (req, res) => {
  const sql = "SELECT * FROM vehicule";
  db.query(sql, (err, data) => {
    if (err) return res.json("errors");
    return res.json(data);
  });
});

{/* Add Missions */}

app.post("/layout/Missions", (req, res) => {
  const sql = "INSERT INTO Mission (type, date_debut, date_fin, cout, destination, id_chauffeur,id_vehicule) VALUES (?)";
  const values = [
    req.body.type,
    req.body.date_debut,
    req.body.date_fin,
    req.body.cout,
    req.body.destination,
    req.body.id_chauffeur,
    req.body.id_vehicule,
  ];
  db.query(sql, [values], (err, data) => {
    if (err) {
      console.error("SQL Error:", err);
      return res.status(500).json({ error: "Database error occurred." });
    }    
    return res.json(data);
  });
});

{/* Getting Missions */}

app.get("/layout/Missions", (req, res) => {
  const sql = "SELECT * FROM Mission";
  db.query(sql, (err, data) => {
    if (err) return res.json("errors");
    return res.json(data);
  });
});

{/* Add Recharge */}

app.post("/layout/Recharge", (req, res) => {
  const sql = "INSERT INTO recharge_carb (type, date_recharge, cout,quantite,fournisseur,facture,id_vehicule) VALUES (?)";
  const values = [
    req.body.type,
    req.body.date_recharge,
    req.body.cout,
    req.body.quantite,
    req.body.fournisseur,
    req.body.facture,
    req.body.id_vehicule,
  ];
  db.query(sql, [values], (err, data) => {
    if (err) {
      console.error("SQL Error:", err);
      return res.status(500).json({ error: "Database error occurred." });
    }    
    return res.json(data);
  });
});

{/* Getting Recharge */}

app.get("/layout/Recharge", (req, res) => {
  const sql = "SELECT * FROM recharge_carb";
  db.query(sql, (err, data) => {
    if (err) return res.json("errors");
    return res.json(data);
  });
});

{/* Add Rapport */}

app.post("/layout/Rapports", (req, res) => {
  const sql = "INSERT INTO rapport_veh (type, date_gener, contenu, format,id_vehicule) VALUES (?)";
  const values = [
    req.body.type,
    req.body.date_gener,
    req.body.contenu,
    req.body.format,
    req.body.id_vehicule,
  ];
  db.query(sql, [values], (err, data) => {
    if (err) {
      console.error("SQL Error:", err);
      return res.status(500).json({ error: "Database error occurred." });
    }
    return res.json(data);
  });
});

{/* Getting Rapport */}

app.get("/layout/Rapports", (req, res) => {
  const sql = "SELECT * FROM rapport_veh";
  db.query(sql, (err, data) => {
    if (err) return res.json("errors");
    return res.json(data);
  });
});

{/* Add Reparation */}

app.post("/layout/Reparation", (req, res) => {
  const sql = "INSERT INTO reparation_veh (type, date_reparation, cout, fornisseur,facture,id_vehicule) VALUES (?)";
  const values = [
    req.body.type,
    req.body.date_reparation,
    req.body.cout,
    req.body.fornisseur,
    req.body.facture,
    req.body.id_vehicule,
  ];
  db.query(sql, [values], (err, data) => {
    if (err) {
      console.error("SQL Error:", err);
      return res.status(500).json({ error: "Database error occurred." });
    }    
    return res.json(data);
  });
});

{/* Getting Reparation */}

app.get("/layout/Reparation", (req, res) => {
  const sql = "SELECT * FROM reparation_veh";
  db.query(sql, (err, data) => {
    if (err) return res.json("errors");
    return res.json(data);
  });
});

{/* Api listening port */}

app.listen(3001, () => {
  console.log("server data is running correctly");
});
