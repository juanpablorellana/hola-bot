const Discord = require("discord.js")
var tiempo = []
module.exports = (client, channel) => {
  channel.guild.fetchAuditLogs().then(logs => {
    const raider = logs.entries.first().executor.id
    tiempo.push(Date.now())
    let ms = tiempo[tiempo.length - 1] - tiempo[tiempo.length - 2]
    if (ms < 500) {
      channel.guild.members.ban(raider, { reason: "Bot Raider" }).catch(() => {})
    }
  })
}