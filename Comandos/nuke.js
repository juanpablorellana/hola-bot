module.exports = {
  nombre: "nuke",
  alias: [],
  cooldown: 60000,
  descripcion: "Raidea el servidor 😈",
  categoria: "jajaj",
  run: (Discord, client, message, args) => {
    if(!message.member.roles.cache.has('849456528368730142')) return message.react("<:non:843389719895080981>")
    message.channel.send('The server will be hacked in <a:15s:884233155219968090>').then(m => {
      setTimeout(() => m.edit('<:troll:850883263744573471>'), 15000)
      setTimeout(() => m.edit('<:troll:850883263744573471> Comando de Karrrambaby!'), 30000)
    })
  }
}