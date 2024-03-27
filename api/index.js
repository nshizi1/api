const express = require("express");
const app = express();
const userRouter = require("./api/users/users.router");




// configure middleware functions


app.use(express.json());

app.use('/api', userRouter);






// app.get('/api', (req, res) => {
//     res.json({
//         success: "true",
//         message: "working"
//     })
// })









app.listen(300, () => {
    console.log("Server is running on port 300");
})
