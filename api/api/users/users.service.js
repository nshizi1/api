const { pool } = require("../../config/database");

module.exports = {
    insertUser: (data, callback) => {
        pool.query(`INSERT INTO users(names, username, password) values(?, ?, ?)`, 
        [
            data.names, 
            data.username, 
            data.password
        ], (err, results, fields) => {
            if(err) {
                return callback(err);
            }

            return callback(null, results);
        });
    },
    selectUsers: (data, callback) => {
        pool.query(`SELECT * from users where username = ?`,
        [
            data.username
        ],
        (err, results, fields) => {
            if(err) {
                return callback(err);
            }

            return callback(null, results);
        })

    }
}
