const casados = require('../Models/casados')
module.exports = {
  nombre: "marry",
  alias: ['matrimonio', 'casarse'],
  descripcion: "Cásate con alguien en el server!",
  uso: "[miembro]",
  categoria: "privada",
  run: (Discord, client, message, args) => {
    const miembro = message.mentions.members.first() || message.guild.members.resolve(args[0]) || message.guild.members.cache.find(m => m.user.username.toLowerCase() == args[0])
    if(!args[0] || !miembro) return message.channel.send('Tienes que mencionar a alguien')
    let buscar1 = casados.findOne({ user: message.author.id })
    let buscar2 = casados.findOne({ pareja: message.author.id })
    if (buscar1) {
      return message.channel.send('Ya estás casado!')
    } else if (buscar2) {
      return message.channel.send('Ya estás casado!')
    }
    let datos = new casados({
      user: message.author.id,
      pareja: miembro.id
    })
    datos.save((e, d) => {
      if(e) {
        message.channel.send('Hubo un problema')
        console.log(e)
      }
      else message.channel.send('Felicitaciones! Te casaste con <@' + miembro.id + '>')
    })
  }
}