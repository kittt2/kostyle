const express = require('express')
const { connection } = require('./configs/db');
const { userModel } = require('./models/model');
const bcrypt = require('bcrypt');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(express.json());
app.use(cors());

app.get('/', function (req, res) {
    res.send('Hello World')
});

app.post('/signup', async (req, res) => {
    const { name, password, email, phone } = req.body;

    if (name == "" || password == "" || email == "" || phone == "") {
        return res.send({ "msg": "please provide all details" });

    }

    const alreadyExit = await userModel.find({ email });
    try {
        if (alreadyExit[0]) {
            return res.send({ "msg": "already exit" });
        }
        else {

            bcrypt.hash(password, 5, async (err, hash) => {
                const user = new userModel({ name, password: hash, email, phone });
                await user.save();
                res.send({ "msg": "your account is created" })

            });

        }
    } catch (error) {
        console.log(error)
    }

});


//   login&*******************************************************************************************
//   ************************************************************************************************************
app.post('/login', async (req, res) => {
    const { password, email } = req.body;

    if (password == "" || email == "") {
        return res.send({ "msg": "please provide all details" });

    }
    let alreadyExit;
    try {

        alreadyExit = await userModel.findOne({ email: email });

        if (alreadyExit) {
            bcrypt.compare(password, alreadyExit.password, async (err, result) => {
                if (result) {
                    return res.status(200).send({ "msg": `user successfully  login with   ${alreadyExit.email}`,"email":alreadyExit.email });
                }
                else if (!alreadyExit || alreadyExit.password != password) {
                    res.status(401).send({ "msg": "Check your email and password" });
                }
                else {
                    console.log(error);
                }
            });
        }
        else {
            return res.status(501).send({ "msg": "please create your account first " });
        }
    } catch (error) {
        console.log(error);

    }
});

app.listen(8000, async () => {


    try {
        await connection
        console.log("finally")

    } catch (error) {

    }
    console.log("server is running");
}) 