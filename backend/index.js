const connectToMongo = require('./db');
const express = require('express');
var cors = require('cors');

connectToMongo();

const app = express();
const port = 8080;

app.use(cors());
app.use(express.json());

//Routes
app.use('/api/auth', require("./routes/auth"));
app.use('/api/product', require("./routes/products"));

app.listen(port, () => {
    console.log(`UnityServe backend listening at http://localhost:${port}`);
})
