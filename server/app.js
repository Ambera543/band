const express = require("express");
const app = express();
const port = 3003;
const mysql = require("mysql");
const cors = require("cors");
app.use(cors());

app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

const con = mysql.createConnection({
  host: "localhost",
  user: "newuser",
  password: "",
  database: "nuoma",
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});

//Read Node
app.get("/scooters", (req, res) => {
  const sql = `
        SELECT *
        FROM scooters
    `;
  con.query(sql, (err, results) => {
    if (err) {
      throw err;
    }
    res.send(results);
  });
});

//Create Node
app.post("/scooters", (req, res) => {
  const sql = `
        INSERT INTO scooters
        (registration_code, is_busy, last_use_time, total_ride_kilometres)
        VALUES (?, ?, ?, ? )
    `;
  con.query(
    sql,
    [
      req.body.registration_code,
       req.body.is_busy,
      req.body.last_use_time,
      req.body.total_ride_kilometres,
    ],
    (err, results) => {
      if (err) {
        throw err;
      }
      res.send(results);
    }
  );
});

//Update Node
app.put("/scooters/:id", (req, res) => {
  const sql = `
        UPDATE scooters
        SET registration_code = ?, is_busy = ?, last_use_time = ?, total_ride_kilometres = ?
        WHERE id = ?
    `;
  con.query(
    sql,
    [
      req.body.registration_code,
      req.body.is_busy,
      req.body.last_use_time,
      req.body.total_ride_kilometres,
      req.params.id,
    ],
    (err, results) => {
      if (err) {
        throw err;
      }
      res.send(results);
    }
  );
});

//Delete Node
app.delete("/scooters/:id", (req, res) => {
  const sql = `
        DELETE FROM scooters
        WHERE id = ?
        `;
  con.query(sql, [req.params.id], (err, result) => {
    if (err) {
      throw err;
    }
    res.send(result);
  });
});

app.get("/stats", (req, res) => {
  const sql = `
        SELECT COUNT(id) as count, 
        SUM(total_ride_kilometres) as kilometres
        FROM scooters
    `;
  con.query(sql, (err, results) => {
    if (err) {
      throw err;
    }
    res.send(results);
  });
});

//Filter Node
app.get("/scooters-filter/:t", (req, res) => {
  const sql = `
        SELECT *
        FROM scooters
        WHERE is_busy = ?
    `;

  con.query(sql, [req.params.t], (err, results) => {
    if (err) {
      throw err;
    }
    res.send(results);
  });
});

//Search Node
app.get("/scooters-search", (req, res) => {
  const sql = `
        SELECT *
        FROM scooters
        WHERE last_use_time LIKE ?
    `;
  con.query(sql, ["%" + req.query.s + "%"], (err, results) => {
    if (err) {
      throw err;
    }
    res.send(results);
  });
});

app.listen(port, () => {
    // console.log(`Example app listening at http://localhost:${port}`);
});