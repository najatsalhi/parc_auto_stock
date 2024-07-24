const express = require('express');
const mysql = require('mysql');
const cors = require ('cors');
const app = express();
app.use(express.json());
app.use(cors());

const Db = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "",
    database : "parc_auto_stock"
})

app.post('/parc_auto_stock',(req,res) => {
    const sql = "insert into users ('nom','email' , 'password','role') values (?)";
    const values = [
        req.body.user,
        req.body.email,
        req.body.password,
        req.body.role,
    ]
    Db.query(sql, [values], (err,data) => {
        if(err){
            return res.json("Error")
        }
        return res.json("data")
})}
)
app.listen(3000,()=>{console.log("server data") })

