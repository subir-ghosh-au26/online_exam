const express = require('express')
require('dotenv').config()
const app = express()

app.use(express.json());

const dbconfig = require('./config/dbconfig');

const usersRoute = require('./routes/userRoutes');

app.use('/api/users', usersRoute);

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server running at port ${port}`)
});


