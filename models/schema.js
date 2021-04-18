const mongoose = require('mongoose');

const dbdata = new mongoose.Schema({
discription:{
    type: String,
    require: true
},
 date:{
    type: Date ,
    require: true
},
 category:{
    type: String ,
    require: true
}
})
const DbSchema = mongoose.model('DbSchema',dbdata )

module.exports = DbSchema;