const ms = require("ms")
module.exports = {
  nombre: "mute",
  alias: ["callar", "mutear"],
  cooldown: 2000,
  descripcion: "Mutea a un miembro",
  uso: "[miembro] [tiempo] (razón)",
  categoria: "mod",
  run: (Discord, client, message, args) => {
    const miembro = message.mentions.members.first() || message.guild.members.resolve(args[0]) || message.guild.members.cache.find(m => m.user.username.toLowerCase() == args[0])
    const razon = args.slice(2).join(" ") || "No especificada"
    const embed = new Discord.MessageEmbed()
      .setColor(0x000001)
    function mensajerror() {
      message.channel.send({ embeds: [embed] }).then(m => setTimeout(() => m.delete(), 5000))
    }
    const regexp = new RegExp(/^[0-9]+(m|h)$/gi)

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
    } else if (!args[1] || !regexp.test(args[1])) {
      embed.setDescription("Debes agregar el tiempo")
      return mensajerror()
    } else {
      embed.setDescription(`**${miembro.user.tag} muteado por ${args[1]}** || Razón - ${razon}`)
      miembro.roles.add("849456488187297792", razon).then(() => {
        message.channel.send({ embeds: [embed] })
        const embed2 = new Discord.MessageEmbed()
          .setDescription(`**${miembro.user.tag} muteado**\nRazón - ${razon}\nMuteado por - <@${message.member.user.id}>`)
          .setColor(0x000001)
        client.channels.cache.get("849456580562780190").send({ embeds: [embed2] })
      }).catch(e => {
        console.log(e)
        message.channel.send("Hubo un error")
      })
      setTimeout(() => {
        miembro.roles.remove("849456488187297792", `Terminó el tiempo de mute por - ${razon}`).then(() => {
          const embed2 = new Discord.MessageEmbed()
            .setDescription(`**${miembro.user.tag} desmuteado**\nRazón - Terminó el tiempo de mute por - ${razon}\nDesmuteado por - <@${message.member.user.id}>`)
            .setColor(0x000001)
          client.channels.cache.get("849456580562780190").send({ embeds: [embed2] })
        }).catch(e => {
          console.log(e)
          message.channel.send("Hubo un error")
        })
      }, ms(args[1]))
    }
  }
}