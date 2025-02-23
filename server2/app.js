const express = require('express');
const userRoutes = require('./routes/userRoutes');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

// Middleware
app.use(express.json());
app.use(cors("http://localhost:3000"));
app.use(bodyParser.json());

app.use('/',userRoutes);
module.exports = app;