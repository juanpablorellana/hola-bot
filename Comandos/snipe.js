module.exports = {
  nombre: "snipe",
  alias: ['s'],
  cooldown: 5000,
  descripcion: "Muestra el mensaje borrado más reciente del canal",
  uso: '(canal)',
  categoria: "general",
  run: (Discord, client, message, args) => {
    let canal = message.mentions.channels.first() || message.channel
    let mensaje = client.snipes.get(canal.id)
    let embed = new Discord.MessageEmbed()
      .setColor(0x000001)
    if(!mensaje || mensaje.mensaje.toLowerCase().startsWith(',avr')) {
      embed.setDescription('No se ha borrado ningún mensaje recientemente')
      message.reply({ embeds: [embed] }).then(m => setTimeout(() => m.delete(), 5000))
    } else {
      embed.setAuthor(mensaje.autor.tag, mensaje.autor.displayAvatarURL({dynamic: true}))
      embed.setDescription(mensaje.mensaje.slice(0, 1000))
      if (mensaje.fotos.size > 0) {
        if (mensaje.fotos.first().url.endsWith('.png') || mensaje.fotos.first().url.endsWith('.jpg') || mensaje.fotos.first().url.endsWith('.gif')) embed.setImage(mensaje.fotos.first().url)
      }
      message.reply({ embeds: [embed] })
    }
  }
}