module.exports = (client, message) => {
  client.snipes = new Map()
  client.snipes.set(message.channel.id, {
    mensaje: message.content,
    autor: message.author,
    fotos: message.attachments
  })
}