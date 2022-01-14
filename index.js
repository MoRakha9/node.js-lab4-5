require("express-async-errors");
require("dotenv").config({ path: "./.env" })
const express = require("express");
const mongoose = require("mongoose");
const authRouter = require("./routes/auth");
const planRouter = require("./routes/plan")
const Subscribe = require("./routes/subscribe")
const planUnSubRouter = require("./routes/unsubscribe")
const auth = require("./middleware/authntication")

const app = express();

app.use(express.json());

app.use("/api/auth", authRouter);


app.use(auth)

app.use("/plans/subscribe", Subscribe);
app.use("/plans/unsubscribe", planUnSubRouter)
app.use("/plans", planRouter);





mongoose.connect(process.env.MONGO_URL).then(() => {
    console.log("Bingo");
    app.listen(7000, () => {
        console.log("listening on port 7000");
    })
}).catch(e => console.log(e.message))