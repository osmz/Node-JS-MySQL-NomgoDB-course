require("dotenv").config();
const express = require("express");
const cors = require("cors");
const morganBody = require("morgan-body");
const dbConnect = require("./config/mongo");
const app = express();

app.use(cors())
app.use(express.json())
app.use(express.static("storage"))

const loggerStream = {
    write: message => {
        console.log('Capturando el LOG', message)
    },
};

morganBody(app, {
    noColors:true,
    stream: loggerStream
})

const port = process.env.PORT || 3000


/**
 * Aqui llamamos a las rutas
 */

app.use("/api", require("./routes"))


app.listen(port, () => {
    console.log(`Tu app esta lista por http://localhost:${port}`)
})

dbConnect()
