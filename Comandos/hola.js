const datos = require("../Models/datos.js")
module.exports = {
  nombre: "hola",
  alias: ["hi", "ola"],
  cooldown: 1000,
  descripcion: "Hola",
  categoria: "general",
  run: async (Discord, client, message, args) => {
    const a = new Discord.MessageEmbed()
    .setDescription("hola")
    .setColor(0x000001)
    message.channel.send("Hola")
    message.delete()
    /*
    datos.find((error, datos) => {
      console.log(datos)
    })
    
    datos.updateOne({ _id:"60f8cc8d95d8610198ca877f" }, { datos:2126 }, (error) => {
      if (error) console.log(error)
      else console.log("actualizado")
    })
  */
  }
}