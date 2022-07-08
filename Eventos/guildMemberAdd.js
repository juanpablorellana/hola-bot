const Discord = require("discord.js")
const moment = require("moment")
const Zeew = require("zeew")
const datos = require('../Models/datos.js')
module.exports = async (client, member) => {
  if(member.guild.id !== '849454800718135306') return

  let guildInvites = client.invites[`${member.guild.id}`]
  client.invites[`${member.guild.id}`] = await member.guild.invites.fetch()
  let invite = client.invites[`${member.guild.id}`].find((inv) => inv.uses > (guildInvites.get(inv.code) || {}).uses)

  const canal = client.channels.cache.get("849456579429269525")
  const embed = new Discord.MessageEmbed()
  .addField("**Usuario**", "<@" + member.user.id + ">\n" + member.user.tag + "\n" + member.user.id + "\n**Creada " + moment(member.user.createdAt).locale("es").startOf().fromNow() + "**", true)
  .setColor(0x000001)
  .setThumbnail(member.user.displayAvatarURL({dynamic:true}))

  console.log(invite)
  if(invite) {
    if (invite.code === "tNzX2rXFCN") {
      embed.addField("**\nInvitación Permanente**", "\u200b", true)
    } else if (invite.code === "YUp9Qu4yVs") {
      embed.addField("**\n!d bump**", "\u200b", true)
    } else if (invite.code === "WzhybbzVFR") {
      embed.addField("**\nAlianzas**", "\u200b", true)
    } else {
      embed.addField("**Invitador**", "<@" + invite.inviter + ">\n" + invite.inviter.tag + "\n" + invite.inviter.id + "\n**Creada " + moment(invite.inviter.createdAt).locale("es").startOf().fromNow() + "**", true)
    }
    canal.send({ embeds: [embed] }).catch(e => console.log(e))
  } else {
    embed.addField("**\nNo sé como entró**", "\u200b", true)
    canal.send({ embeds: [embed] }).catch(e => console.log(e))
  }

  const img = new Zeew.img(process.env.zeew)

  let bienvenida = new img.card.bienvenida()
  .token(process.env.zeew)
  .estilo("classic")
  .avatar(member.user.displayAvatarURL({format: "png"}))
  .fondo("https://i.imgur.com/66mYIgG.png")
  .colorTit("#000000")
  .titulo(`Bienvenido ${member.user.username}`)
  .colorDesc("#000000")
  .descripcion('')
  let foto = await img.card.render(bienvenida)
  client.channels.cache.get("849456582155829298").send({ content: `<@${member.user.id}> ¡Hola! Bienvenido, esperamos te la pases bien en el servidor y conozcas a muchas personas, pero antes lee <#849456585847603280> para evitar cualquier problema <:sii:849655365985632267>`, files: [foto] })
  
  setTimeout(() => {
    if (member.roles.cache.has("849456487495499780")) {
    member.user.send("Hola! Para verificarte en **hola** debes ir al canal <#849456564145881088> y reaccionar al mensaje!\nSi tienes problemas para entrar no dudes en consultar con algún staff conectado.").catch(() => {})
    }
  }, 30000)
}