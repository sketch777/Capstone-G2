const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mysql = require('mysql');
const cors = require('cors');

const db = mysql.createPool({
    host:'localhost',
    user: 'root',
    password:'',
    database: 'CRUDDatabase1',
});
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
app.use(express.json());


app.post("/api/insert", (req, res) => {

    const name = req.body.name
    const email = req.body.email
    const message = req.body.message

    const sqlInsert = "INSERT INTO contact (name, email, message) VALUES (?,?,?)";
    db.query(sqlInsert, [name, email, message,], (err, result) => {
        console.log(err)
    })
});


app.get('/', (req, res) => {

 
});

app.listen(4000, () => {
    console.log('running on port 4000');
});