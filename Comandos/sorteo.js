const ms = require("ms")
module.exports = {
  nombre: "sorteo",
  alias: ["gcreate", "giveaway"],
  cooldown: 900000,
  descripcion: "Crea un sorteo",
  categoria: "privada",
  run: async (Discord, client, message, args) => {

    const csorteo = ["838213962167877632"]
    const ccomandos = ["808451500007227473"]

    const pganadores = new Discord.MessageEmbed()
    .setDescription("Cuántos ganadores quieres que tenga?")
    .setColor(0x000001)

    const ppremio = new Discord.MessageEmbed()
    .setDescription("Qué quieres sortear?")
    .setColor(0x000001)
    
    const ptiempo = new Discord.MessageEmbed()
    .setDescription("Cuánto quieres que dure?")
    .setColor(0x000001)
    
    const prol = new Discord.MessageEmbed()
    .setDescription("A qué rol quieres que se limite?")
    .setColor(0x000001)

    const listo = new Discord.MessageEmbed()
    .setDescription("Tu sorteo se ha hecho")
    .setColor(0x000001)


    if(!args[0] && ccomandos.includes(message.channel.id)) {
      message.channel.send({ embeds: [ppremio] })
      let rpremio = await message.channel.awaitMessages(msg => msg.author.id === message.author.id, { max: 1, time: 20000 })

      message.channel.send({ embeds: [ptiempo] })
      let rtiempo = await message.channel.awaitMessages(msg => msg.author.id === message.author.id, { max: 1, time: 20000 })

      message.channel.send({ embeds: [pganadores] })
      let rganadores = await message.channel.awaitMessages(msg => msg.author.id === message.author.id, { max: 1, time: 20000 })

      message.channel.send({ embeds: [prol] })
      let rrol = await message.channel.awaitMessages(msg => msg.author.id === message.author.id, { max: 1, time: 20000 })

      message.channel.send({ embeds: [listo] })


      const sorteo = new Discord.MessageEmbed()
      .setTitle(`${rpremio.first().content}`)
      .setDescription("Hecho por - <@" + message.author + ">\nDuración - " + `${rtiempo.first().content}`)
      .setColor(0x000001)

      if(rrol.first().content !== "No") {
        sorteo.setDescription("Hecho por - <@" + message.author + ">\nDuración - " + `${rtiempo.first().content}` + "\nRol Requerido - <@&" + `${rrol.first().content}` + ">")
      }

      client.channels.cache.get("838213962167877632").send({ embeds: [sorteo] }).then(m => {
        m.react("🎉")
      })

    }

    if(args && csorteo.includes(message.channel.id)) {
      
    }
  }
}