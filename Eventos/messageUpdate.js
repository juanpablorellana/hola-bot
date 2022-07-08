module.exports = (client, viejo, nuevo) => {
  client.esnipes = new Map()
  client.esnipes.set(nuevo.channel.id, {
    mensaje: viejo.content,
    autor: viejo.author,
    fotos: viejo.attachments
  })
}