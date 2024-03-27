const { insertUser, selectUsers } = require("./users.service");

module.exports = {
    addUser: (req, res) => {
        const body = req.body;
        insertUser(body, (error, results) => {
            if (error) {
                return res.status(500).json({
                    success: false,
                    message: "User not added",
                    error: error
                });
            }
            return res.status(200).json({
                success: true,
                message: "User added successfully",
                data: results
            });
        })
    },
    getUsers: (req, res) => {
        const username = req.params.username
        const data = {
            username: username
        }
        selectUsers(data, (error, results) => {
            if(error) {
                return res.status(500).json({
                    status: false,
                    message: "Failed to retrieve data",
                    error: error
                })
            }

            return res.status(200).json({
                success: true,
                message: "Data retrieved successfully",
                data: results
            })
        })
    }
}

