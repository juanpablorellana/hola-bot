const Zeew = require("zeew")
module.exports = {
  nombre: "kiss",
  alias: ["beso", "besos", "besar"],
  cooldown: 15000,
  descripcion: "Dale un besito a alguien 🥺",
  uso: "(miembro)",
  categoria: "jajaj",
  run: async (Discord, client, message, args) => {
    if (["849456609071726623"].includes(message.channel.id) && !message.member.roles.cache.has("849500924980625468")) return  message.react("❌")
    const sfw = new Zeew.sfw(process.env.zeew)
    let foto = await sfw.kiss()
    let mencion = message.mentions.users.first()
    const embed = new Discord.MessageEmbed()
      .setImage(foto)
      .setColor("RANDOM")
    if(mencion) embed.setDescription(`${message.author} besó a <@${mencion.id}>`)
    message.channel.send({ embeds: [embed] })
  }
}