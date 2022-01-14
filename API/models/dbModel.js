const mysql = require('mysql');
require('dotenv').config();

const pool = mysql.createPool({
    host     : process.env.DBHOST,
    user     : process.env.DBUSER,
    password : process.env.DBPASS,
    database : process.env.DBNAME
});

pool.getConnection((err, connection)=>{
    if (err) throw err;
    console.log(`Connected to MySQL database: ${process.env.DBNAME}.\nConnectioID:${connection.threadId}`);
});

module.exports = pool;
