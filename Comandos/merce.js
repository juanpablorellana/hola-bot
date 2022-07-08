module.exports = {
  nombre: "merce",
  alias: [],
  cooldown: 15000,
  descripcion: "Comando comprado por <@826175608555044914> en <#849456625097113600>",
  categoria: "jajaj",
  run: (Discord, client, message, args) => {
    var zupra = ['https://i.imgur.com/IbW3fZg.jpg',
    'https://i.imgur.com/CuwTpg4.jpg',
    'https://i.imgur.com/pysMUOg.jpg',
    'https://i.imgur.com/9RwKqLP.jpg',
    'https://i.imgur.com/uZjQKRV.jpg',
    'https://i.imgur.com/fnRZKhv.png',
    'https://i.imgur.com/423XJZA.png',
    'https://i.imgur.com/dr5tPLX.jpg',
    'https://i.imgur.com/bhsr6CB.jpg',
    'https://i.imgur.com/Mezz1jA.jpg']
    const embed = new Discord.MessageEmbed()
      .setColor(0x000001)
      .setImage(zupra[Math.floor(Math.random() * zupra.length)])
      .setFooter('Comando de Merce!')
    message.channel.send({ embeds: [embed] })
  }
}