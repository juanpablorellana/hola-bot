const Zeew = require("zeew")
module.exports = async (client, member) => {
  if(member.guild.id !== '849454800718135306') return

  let baneado = await guild.bans.fetch(member.user.id).catch(() => {})
  if (baneado) return

  const img = new Zeew.img(process.env.zeew)
  
  let despedida = new img.card.bienvenida()
  .token(process.env.zeew)
  .estilo("classic")
  .avatar(member.user.displayAvatarURL({format: "png"}))
  .fondo("https://i.imgur.com/66mYIgG.png")
  .colorTit("#000000")
  .titulo(`Adiós ${member.user.username}`)
  .colorDesc("#000000")
  .descripcion("")
  let foto = await img.card.render(despedida)
  client.channels.cache.get("849456583125762068").send({ content: `<@${member.user.id}> ¡Adiós! Esperamos vuelvas pronto <a:nooo:849656722372034580>`, files: [foto] })
}