module.exports = {
  nombre: "votar",
  alias: ["vote"],
  cooldown: 39600000,
  descripcion: "Te manda información de como votar y que beneficio tiene",
  categoria: "privada",
  run: (Discord, client, message, args) => {
    const embed = new Discord.MessageEmbed()
    .setTitle("Votar")
    .setDescription("[Vota aquí](https://top.gg/servers/849454800718135306/vote) para poder mandar imágenes en <#849456609071726623>.\nPuedes hacer esto cada 12h")
    .setColor(0x000001)
    message.channel.send({ embeds: [embed] })
  }
}