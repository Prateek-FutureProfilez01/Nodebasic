// const express = require('express')
// // const cors = require('cors')
// const port = 5000

// const app = express()
// app.use(express.json())
// // app.use(cors())

// const cors = require("cors");

// const corsOptions = {
//   origin: "*", // Allowed origins
//   methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
//   allowedHeaders: "*", // Allow all headers
//   credentials: true,
//   optionsSuccessStatus: 200, // for legacy browsers
// };
// app.use(cors(corsOptions));

// const mongoose  = require('mongoose')
// mongoose.connect('mongodb://localhost:27017/ecommerce')

// const user = require('./user')

// app.post('/login',(req,res) =>{
//     const{ email, password } = req.body
//     user.findOne({email:email})
//     .then(user =>{
//         if(user){
//             if(user.password === password){
//                 res.send("Success")
//             }else{
//                 res.status(401).json('password is incorrect')
//             }
//         }else{
//             res.send('no data found')
//         }
//     })
//     .catch((err) => res.json(err))
//     })





// // app.post('/registerd',(req,res) => {
// //     user.create(req.body)
// //     .then((user) => res.json(user))
// //     .catch((err) => res.json(err));
// // })

// app.get('/', (req, res) => res.send('Hello World!'))
// app.listen(port, () => console.log(`Example app listening on port ${port}!`))