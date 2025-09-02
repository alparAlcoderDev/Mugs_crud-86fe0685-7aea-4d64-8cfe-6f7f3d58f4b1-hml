const express = require('express');
const cors = require('cors');
const apiController = require('./controllers/apiController');
const errorHandler = require('./utils/errorHandler');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api', apiController);
app.use(errorHandler);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server is running on port ${port}`));