var mongoose = require('mongoose')
var Schema = mongoose.Schema

const GroupSchema = mongoose.Schema({
    identifier: {
      type: String,
      index:true
    },
    friends: String
})

var Genre = module.exports = mongoose.model('Genre', GroupSchema);
