const Discord = require('discord.js')
const mongoose = require("mongoose")
module.exports = async (client) => {
  client.invites = {}
  for (guild of client.guilds.cache.values()) {
    client.invites[guild.id] = await guild.invites.fetch()
  }
  function estado() {
    let estados = [{
      name: ',ayuda',
      type: 'PLAYING'
    }, {
      name: `${client.guilds.resolve('849454800718135306').memberCount - client.guilds.resolve('849454800718135306').members.cache.filter(m => m.user.bot).size} Miembros!`,
      type: 'WATCHING'
    }]
    client.user.setPresence({
      status: "online",
      activities: [estados[Math.floor(estados.length * Math.random())]]
    })
  }
  setInterval(estado, 300000)

  let frases = [
    '¿Sabías que puedes conseguir muchas ventajas si consigues dinero en <#849456625097113600>? ¡Podrías incluso tener tu propio rol personalizado!',
    'Puedes escoger tus roles en <#849456587512217610>',
    'Mándame un MD para confesarte! <#849456623411134484>',
    '¡No te olvides de invitar a tus amigos al servidor!',
    'Si tienes alguna duda qué quieras preguntar, ¡Hazlo en <#849456639144493116> y te responderemos encantados!'
  ]
  /*
  setInterval(() => {
    client.channels.cache.get("849456609071726623").send(frases[Math.floor(Math.random() * frases.length)])
  }, 3600000)
  */

  mongoose.connect(process.env.mongo_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
  }).then(() => console.log("DB Conectada")).catch(e => console.log(e))
  
  console.log(`${client.user.username} Conectado!`)
}