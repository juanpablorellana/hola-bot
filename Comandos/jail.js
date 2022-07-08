const ms = require("ms")
module.exports = {
  nombre: "carcel",
  alias: ["jail", "encarcelar"],
  cooldown: 2000,
  descripcion: "Encarcela a un miembro",
  uso: "[miembro] (tiempo) (razón)",
  categoria: "mod",
  run: (Discord, client, message, args) => {
    const miembro = message.mentions.members.first() || message.guild.members.resolve(args[0]) || message.guild.members.cache.find(m => m.user.username.toLowerCase() == args[0])
    var razon
    var tiempo
    if (!args[1]) {
      razon = "No especificada"
    } else if (!isNaN(args[1].slice(0, args[1].length - 1)) && args[1].toLowerCase().endsWith("m") || args[1].toLowerCase().endsWith("h")) {
      razon = args.slice(2).join(" ") || "No especificada"
      tiempo = args[1]
      setTimeout(() => {
        miembro.roles.remove("849456488858910740").then(() => {
          const embed2 = new Discord.MessageEmbed()
            .setDescription(`**${miembro.user.tag} desencarcelado**\nRazón - Terminó el tiempo de encarcelamiento por - ${razon}\nDesencarcelado por - <@${message.member.user.id}>`)
            .setColor(0x000001)
          client.channels.cache.get("849456580562780190").send({ embeds: [embed2] })
        }).catch(e => {
          console.log(e)
          message.channel.send("Hubo un error")
        })
      }, ms(args[1]))
    } else razon = args.slice(1).join(" ")
    const embed = new Discord.MessageEmbed()
      .setColor(0x000001)
    function mensajerror() {
      message.channel.send({ embeds: [embed] }).then(m => setTimeout(() => m.delete(), 5000))
    }

    if (!message.member.permissions.has(Discord.Permissions.FLAGS.BAN_MEMBERS)) {
      return message.react("<:non:843389719895080981>")
    } else if (!args[0]) {
      embed.setDescription("Debes mencionar a un miembro")
      return mensajerror()
    } else if (!miembro) {
      embed.setDescription("No encontré a ese usuario")
      return mensajerror()
    } else if (message.member.roles.highest.comparePositionTo(miembro.roles.highest) <= 0) {
      embed.setDescription("No puedes mutear a este usuario")
      return mensajerror()
    } else {
      embed.setDescription(`**${miembro.user.tag} encarcelado${tiempo ? ` por ${tiempo}` : ' indefinidamente'}** || Razón - ${razon}`)
      miembro.roles.add("849456488858910740", razon).then(() => {
        message.channel.send({ embeds: [embed] })
        const embed2 = new Discord.MessageEmbed()
          .setDescription(`**${miembro.user.tag} encarcelado${tiempo ? ` por ${tiempo}` : ' indefinidamente'}**\nRazón - ${razon}\nEncarcelado por - <@${message.member.user.id}>`)
          .setColor(0x000001)
        client.channels.cache.get("849456580562780190").send({ embeds: [embed2] })
      }).catch(e => {
        console.log(e)
        message.channel.send("Hubo un error")
      })
    }
  }
}