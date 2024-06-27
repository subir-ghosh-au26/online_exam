const mongoose = require('mongoose');


mongoose.connect(process.env.MONGODB_URL);

const connection = mongoose.connection;

connection.on('connected', () => {
    console.log('connected to Database')
});

connection.on('error', () => {
    console.log('Database connection failed')
});


module.exports = connection;