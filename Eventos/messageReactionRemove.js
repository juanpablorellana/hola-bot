module.exports = (client, reaccion, user) => {
  client.rsnipes = new Map()
  client.rsnipes.set(reaccion.message.channel.id, {
    emoji: reaccion.emoji,
    autor: user
  })
}