module.exports = {
  nombre: "mencionar",
  alias: ["pingsorteo", "pingchatmuerto"],
  cooldown: 900000,
  descripcion: "Usen este comando para pingear en <#849456594625626112>, o staff para hacer <@&849456555841290270> en <#849456609071726623>. Deben agregar __here__, __sorteo__ o __chat__ para elejir el tipo de ping.",
  uso: "[here / sorteo // here]",
  categoria: "sorteos",
  run: (Discord, client, message, args) => {
    let sorteos = ["849456594625626112"]
    let general = ["849456609071726623"]

    if (!args[0]) {
      message.react("❌")
      setTimeout(() => message.delete(), 10000)
    }
    if (args[0].toLowerCase() === "here") {
      if (!sorteos.includes(message.channel.id)) return
      message.delete()
      message.channel.send("> @here")
    }
    if (args[0].toLowerCase() === "sorteo") {
      if (!sorteos.includes(message.channel.id)) return
      message.delete()
      message.channel.send("> <@&849456553894739969>\nAnda a <#849456587512217610> si quieres desactivar este ping")
    }

    if (args[0].toLowerCase() === "chat") {
      if (!general.includes(message.channel.id)) return
      if (!message.member.permissions.has(Discord.Permissions.FLAGS.BAN_MEMBERS)) return message.react("❌")
      message.delete()
      message.channel.send("> <@&849456555841290270>")
    }
  }
}