const mysql2 = require('mysql2');

const dbConnection = mysql2.createPool({
    socketPath: "/Applications/MAMP/tmp/mysql/mysql.sock",
    user: process.env.USERR,
    database: process.env.DATABASE,
    host: process.env.HOST,
    password: process.env.PASSWORD,
    connectionLimit:10
});

// dbConnection.execute("select 'test' ", (err,result) => {
//     if (err) {
//         console.log(err.message)
//     }else {
//         console.log(result)
//     }
// })

module.exports = dbConnection.promise()