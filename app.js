const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const indexRouter = require('./routes/index');
require('dotenv').config();

const app = express();
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/api', indexRouter); // /api/tasks

const mongoURL = process.env.MONGODB_LOCAL;
mongoose
    .connect(mongoURL)
    .then(() => console.log('mongoose connected'))
    .catch((err) => console.log('db connected fail', err));

app.listen(5000, () => console.log('server on at 5000'));
