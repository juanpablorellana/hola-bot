const mongoose = require("mongoose")
const datos = new mongoose.Schema({
  usos: Number
})
module.exports = mongoose.model("datos", datos)