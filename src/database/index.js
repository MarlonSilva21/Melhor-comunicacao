const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/desafiomelhor').then(() => {
    console.log('successfully connected')
}).catch((err) => {
    console.log('An error occurred connecting to the Database: '+ err)
})

mongoose.Promise = global.Promise;

module.exports = mongoose;
