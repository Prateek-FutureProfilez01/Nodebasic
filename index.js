const express = require('express')
const port = 5000


const app = express()
app.use(express.json())


const cors = require("cors");
const corsOptions = {
  origin: "*", // Allowed origins
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  allowedHeaders: "*", // Allow all headers
  credentials: true,
  optionsSuccessStatus: 200, // for legacy browsers
};
app.use(cors(corsOptions));

const mongoose  = require('mongoose')
mongoose.connect('mongodb://localhost:27017/ecommerce')

const user = require('./user')

app.post('/registerd',(req,res) => {
    const{ email, password, user_name, phone } = req.body
    user.findOne()
})

// app.post('/registerd',(req,res) => {
//     user.create(req.body)
//     .then((user) =>{
//         if(res.user.user_name !== req.user.user_name){
//             res.status(200).json("valid userName")
//         }else{
//             res.status(400).json("Invalid userName")
//         }

//         if(res.user.phone !== req.user.phone){
//             res.status(200).json("valid Phone_no")
//         }else{
//             res.status(400).json("Invalid Phone_no")
//         }

//         if(res.user.email !== req.user.email){
//             res.status(200).json("valid Email")
//         }else{
//             res.status(400).json("Invalid Email")
//         }
//         res.json(user)
//     }).catch((err) => res.json(err));
// })


app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`listening on port ${port}!`))