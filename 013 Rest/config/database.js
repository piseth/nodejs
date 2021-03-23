const mysql = require('mysql');
const config = require('../config.json');
const { colorLog } = require('../helper/console');

//* Create mysql connection
const connection = mysql.createConnection({
    host : config.db_host,
    user : config.db_user,
    password : config.db_password,
    database : config.db_name
});

//* Connect to mysql server
connection.connect(error => {
    if(error) throw error;
    colorLog('Connected to Mysql Server','info');
});

module.exports = connection;