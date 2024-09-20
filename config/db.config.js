const mysql = require("mysql");

/** Connection pool creation - START */
const db = mysql.createPool({
  port: 3306,
  host: "eu-cluster-west-01.k8s.cleardb.net", // Ispravi host
  user: "bb925c3ad21d89",
  password: "ca24d9e0",
  database: "heroku_735170c87d3266a",
  connectionLimit: 10,
});
/** Connection pool creation - END */

module.exports = db;
