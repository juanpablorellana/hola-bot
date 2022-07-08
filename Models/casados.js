const mongoose = require('mongoose')
const casados = new mongoose.Schema({
  user: String,
  pareja: String
})
module.exports = mongoose.model('casados', casados)