const mysql = require("mysql2/promise");

const pool = mysql.createPool({
    // aws ip
    host: "3.39.232.191",
    // mysql username
    user: "ssafy",
    // mysql user password
    password: "",
    // db name
    database: "ssafy",
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
})

module.exports = { pool }