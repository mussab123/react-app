const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "",
  database: "database",
});


app.post("/insert1", (req, res) => {
  const name = req.body.firstname;
  const choice = req.body.choice;
  const size = req.body.size;
  const status = "Active";

  db.query(
    "INSERT INTO data1 (name, price) VALUES (?, ?)",
    [name, choice],
    (err, result) => {
      if (err) {
        console.log(name);
        console.log(err);
      } else {
        res.send("Values Inserted");
      }
    }
  );
});


app.post("/insert", (req, res) => {
  const name = req.body.firstname;
  const choice = req.body.choice;
  const size = req.body.size;
  const status = "Active";

  db.query(
    "INSERT INTO data (name, choices, size, status) VALUES (?, ?, ?, ?)",
    [name, choice, size, status],
    (err, result) => {
      if (err) {
        console.log(name);
        console.log(err);
      } else {
        res.send("Values Inserted");
      }
    }
  );
});

app.get("/select", (req, res) => {
  db.query("SELECT * FROM data", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.post("/update", (req, res) => {
  let n = req.body.name;

  var sql = `UPDATE data SET status = 'ready' WHERE name = '${n}'`;
  db.query(sql, function (err, result) {
    if (err) throw err;
    console.log("status updated");
  });
  res.redirect("/");

});




app.post("/delete", (req, res) => {

  const n = req.body.fname;

  var sql = `DELETE FROM data WHERE name = '${n}'`;

  db.query(sql, function (err, result) {
    if (err) throw err;
    console.log(n)

    console.log("1 record deleted");
  });
});

app.listen(3001, () => {
  console.log("Yey, your server is running on port 3001");
});
