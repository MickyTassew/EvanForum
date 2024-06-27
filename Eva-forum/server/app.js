require("dotenv").config()
const express = require('express');
const app = express();
const port = process.env.PORT;


const cors = require('cors')


app.use(cors())


// db connection
const dbconnection = require("./db/dbConfig")


// user routes middleware
const userRoutes = require("./routes/userRoute")

// questions routes middleware
const questionRoutes = require("./routes/questionRoute");

// auth middleware file
const authMiddleware = require('./middleware/authMiddleware');





// json middleware to extract json data
app.use(express.json());

app.use("/api/users", userRoutes)

// question routes middleware ??
app.use("/api/questions", authMiddleware,questionRoutes)


async function start() {
    try {
        const result = await dbconnection.execute("select 'test' ")
        await app.listen(port)
        console.log("database connection established")
        console.log(`listening on ${port}`)
    } catch (error) {
        console.log(error)
    }
}

start()




