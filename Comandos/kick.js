module.exports = {
    nombre: "kick",
    alias: ["expulsar", "kickear"],
    cooldown: 2000,
    descripcion: "Kickea a un usuario",
    uso: "[miembro] (razón)",
    categoria: "mod",
    run: async (Discord, client, message, args) => {
        const embed = new Discord.MessageEmbed()
            .setColor(0x000001)
        const razon = args.slice(1).join(" ") || "No especificada"
        const miembro = message.mentions.members.first() || message.guild.members.resolve(args[0]) || message.guild.members.cache.find(m => m.user.username.toLowerCase() == args[0])
        function mensajerror() {
          message.channel.send({ embeds: [embed] }).then(m => setTimeout(() => m.delete(), 5000))
        }

        if (!message.member.permissions.has(Discord.Permissions.FLAGS.KICK_MEMBERS)) {
            return message.react("<:non:843389719895080981>")
        } else if (!args[0]) {
            embed.setDescription("Debes mencionar a un usuario")
            return mensajerror()
        } else if (!miembro) {
            embed.setDescription("No encontré a ese usuario")
            return mensajerror()
        } else if (message.member.roles.highest.comparePositionTo(miembro.roles.highest) <= 0) {
            embed.setDescription("No puedes kickear a este usuario")
            return mensajerror()
        } else if (!miembro.kickable) {
            embed.setDescription("No puedo kickear a ese usuario")
            return mensajerror()
        } else {
            embed.setDescription(`**${miembro.user.tag} expulsado** || Razón - ${razon}`)
            message.guild.members.kick(miembro, razon).then(() => {
                message.channel.send({ embeds: [embed] })
                const embed2 = new Discord.MessageEmbed()
                    .setDescription(`**${miembro.user.tag} expulsado**\nRazón - ${razon}\nKickeado por - <@${message.member.user.id}>`)
                    .setColor(0x000001)
                client.channels.cache.get("849456580562780190").send({ embeds: [embed2] })
            }).catch(e => {
                console.log(e)
                message.channel.send("Hubo un error")
            })
        }
    }
}