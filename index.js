const express = require('express')
const app = express()
app.use(express.json())
const user = require('./user');


const cors = require("cors");
const corsOptions = {
    origin: "*", // Allowed origins
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    allowedHeaders: "*", // Allow all headers
    credentials: true,
    optionsSuccessStatus: 200, // for legacy browsers
};
app.use(cors(corsOptions));

const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/ecommerce')


app.post('/registerd', async (req, res) => {
    try {
        const { email, username, phone_number, first_name, last_name, password } = req.body;
        console.log("req" ,req.body)

        const existingUser = await user.findOne({ email } && { phone_number } && { username });

        if (existingUser) {
            return res.status(400).json({
                status: false,
                message: "User Already Exists"
            });
        }

        const newUser = new user({
            email,
            username,
            phone_number, first_name, last_name, password
        });

        const savedUser = await newUser.save();

        return res.status(201).json({
            message: "User added successfully",
            status: true,
            records: savedUser
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            status: false,
            message: "Internal Server Error"
        });
    }
});

app.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body
        const dataFound = await user.findOne({ email:email })
        if (dataFound) {
            if (dataFound.password === password)
                res.status(200).json({
            status: true,
            message: "LogedIN Successfully"
        })
        else{
            res.status(400).json({
                status: false,
                message: "Incorrect Password"
            })
        }
        console.log("dataFound.password",dataFound.password)
        console.log("password",password)
        }
        else{
            res.status(400).json({
                status: false,
                message: "Invalid UserId"  
            })
        }

        }
    catch (error) {
        console.error(error);
        return res.status(500).json({
            status: false,
            message: "Internal Server Error"
        });
    }  
})

app.get('/', (req, res) => res.send('Hello World!'))
const port = 5000

app.listen(port, () => console.log(`listening on port ${port}!`))



    // $or: [
    //     { email },
    //     { phone_number },
    //     { username }
    // ]
