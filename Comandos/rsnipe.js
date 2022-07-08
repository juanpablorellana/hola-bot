module.exports = {
  nombre: "reactionsnipe",
  alias: ['rs'],
  cooldown: 5000,
  descripcion: "Muestra la reacción quitada más reciente del canal",
  uso: '(canal)',
  categoria: "general",
  run: (Discord, client, message, args) => {
    let canal = message.mentions.channels.first() || message.channel
    let mensaje = client.rsnipes.get(canal.id)
    let embed = new Discord.MessageEmbed()
      .setColor(0x000001)
    if(!mensaje) {
      embed.setDescription('No se ha quitado ninguna reacción recientemente')
      message.reply({ embeds: [embed] }).then(m => setTimeout(() => m.delete(), 5000))
    } else {
      embed.setAuthor(mensaje.autor.tag, mensaje.autor.displayAvatarURL({dynamic: true}))
      embed.setDescription(`${mensaje.emoji}`)
      message.reply({ embeds: [embed] })
    }
  }
}