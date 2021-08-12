const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors")
const helmet = require("helmet");

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(cors());
app.use(helmet());

app.use("/api", (_, res) => {
    res.json({ data: "The API is operational." })
})

app.listen(port, () => {
    console.log(`Server up and running. Fun stuff happening here.`);
});