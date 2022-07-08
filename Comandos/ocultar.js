module.exports = {
  nombre: "ocultar",
  alias: ["ghost"],
  descripcion: "⚠️Mucho cuidado con este comando, el __on__ oculta todos los canales a @everyone, el __off__ lo muestra, lo cual deja ver los canales de staff y demás, todavía tengo que arrgelar que no muestre los canales ocultos al hacer off y que no desconfigure todo, por ahora funciona para el backup nomás.⚠️",
  uso: "[on / off]",
  categoria: "privada",
  run: (Discord, client, message, args) => {
    const channels = message.guild.channels.cache.filter(ch => ch.type !== "category");
    if (!message.member.permissions.has(Discord.Permissions.FLAGS.ADMINISTRATOR)) return message.react(":x:")
    if (args[0] === "on") {
      channels.forEach(channel => {
        channel.updateOverwrite(message.guild.roles.everyone, {
          VIEW_CHANNEL: false
        })
        return
      })
    } else if (args[0] === "off") {
      channels.forEach(channel => {
        channel.updateOverwrite(message.guild.roles.everyone, {
          VIEW_CHANNEL: true
        })
        return
      })
    }
  }
}