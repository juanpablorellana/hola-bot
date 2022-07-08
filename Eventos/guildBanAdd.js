const Discord = require("discord.js")
const Zeew = require("zeew")
module.exports = async (client, ban) => {
  if(ban.guild.id !== '849454800718135306') return

  const img = new Zeew.img(process.env.zeew)

  let fotoo = new img.card.bienvenida()
  .token(process.env.zeew)
  .estilo("classic")
  .avatar(ban.user.displayAvatarURL({format: "png"}))
  .fondo("https://i.imgur.com/66mYIgG.png")
  .colorTit("#000000")
  .titulo(`Baneado ${ban.user.username}`)
  .colorDesc("#000000")
  .descripcion("")
  let foto = await img.card.render(fotoo)
  client.channels.cache.get("849456583125762068").send({ content: `<@${ban.user.id}> Tonto te banearon, a la próxima lee las reglas <:jijijijaja:850568722124505099>`,  files: [foto] })
}