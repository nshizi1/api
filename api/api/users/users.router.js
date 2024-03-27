const router = require("express").Router()
const { addUser, getUsers } = require("./users.controller");


router.post('/users', addUser);
router.get('/users/:username', getUsers);


module.exports = router;