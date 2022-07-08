const Discord = require('discord.js');
module.exports = (client, invite) => {
  if(invite.guild.id !== '849454800718135306') return

  const embed = new Discord.MessageEmbed()
    .setTitle("**Nueva Invitación**")
    .addField("**Creada por**", `${invite.inviter}\n${invite.inviter.tag}\n${invite.inviter.id}`)
    .addField("**Código**", `[/${invite.code}](${invite.url})`, true)
    .addField("**Canal**", `${invite.channel}`, true)
    .addField("**Usos Máximos**", `${invite.maxUses === 0 ? "∞" : invite.maxUses}`, true)
    .setThumbnail(invite.guild.iconURL({dynamic:true}))
    .setColor(0x000001)
  client.channels.cache.get("849456579429269525").send({ embeds: [embed] })
}