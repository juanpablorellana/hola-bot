module.exports = {
  nombre: "ping",
  alias: ["pong"],
  cooldown: 2000,
  descripcion: "Muestra el tiempo de respuesta del Bot en milisegundos (ms)",
  categoria: "general",
  run: (Discord, client, message, args) => {
    let pingapi = Math.floor(message.client.ws.ping)
    let pingbot = Math.floor(Date.now() - message.createdTimestamp)
    const embed = new Discord.MessageEmbed()
      .setTitle("Pong!")
      .setDescription(`Bot __${pingbot}ms__\nDiscordAPI __${pingapi}ms__`)
      .setColor(0x000001)
    message.channel.send({ embeds: [embed] })
  }
}