require('express-async-errors');
require('dotenv').config();
const cors = require('cors');
const express = require('express');

const router = require('./routes/asset.route');
const error = require('./middlewares/error.middleware');

const app = express();
const { PORT } = process.env;

app.use(cors());
app.use(express.json());
app.use('/assets', router);
app.use(error);

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}`));
