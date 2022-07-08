const { Client } = require('unb-api')
const unb = new Client(process.env.unb)
const casados = require('../Models/casados')
module.exports = {
  nombre: "perfil",
  alias: ["pr", "profile"],
  descripcion: "Te muestra tu perfil en el servidor",
  categoria: "privada",
  run: async (Discord, client, message, args) => {
    const miembro = args[0] || message.author.id
    
    const bal = await unb.getUserBalance('849454800718135306', miembro)

    let buscar1 = casados.findOne({ user: message.author.id })
    let buscar2 = casados.findOne({ pareja: message.author.id })
    let matrimonio = buscar1.pareja || buscar2.user || "Solterx"

    const embed = new Discord.MessageEmbed()
      .setDescription(`Dinero - ${bal.total}\nMatrimonio - ${matrimonio}`)
      .setColor(0x000001)
    message.channel.send({ embeds: [embed] })
  }
}