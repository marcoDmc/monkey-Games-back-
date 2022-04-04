require("dotenv").config();
const express = require("express");
const app = express();
const db = require("./database/db");
const router = require("./routes/router");
const cors = require("cors");


app.use(express.json());
app.use(cors());
app.use(router);

app.listen(process.env.PORT, () =>
  console.log("conect a server sucessfully 🔥")
);
