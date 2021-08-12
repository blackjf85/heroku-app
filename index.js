const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors")
const helmet = require("helmet");
const path = require("path");

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(express.static(path.join(__dirname, "client/build")));

app.use("/api/", (_, res) => {
    res.json({ data: "The API is operational." })
});

app.use("*", (_, res) => {
    res.sendFile(path.join(__dirname, "client/build", "index.htm"))
});

app.listen(port, () => {
    console.log(`Server up and running. Fun stuff happening here.`);
});