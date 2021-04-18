const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/form_data_db');

const db = mongoose.connection;
 db.on('error',console.error.bind(console, 'error connecting to db'));

 db.once('open', function(){

    console.log('sucessfully connected to database')
 })