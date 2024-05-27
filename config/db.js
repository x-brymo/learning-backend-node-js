const mysql = require('mysql');
const db = mysql.createPool({ 
    host: 'localhost',  
    user: 'root',
    password: '',
    database: 'wartell'
});
+ db.getConnection((err) => {
    console.log('connected');
    if (err) {
        console.log("Have a Error"+err);
    }
})
module.exports = db

