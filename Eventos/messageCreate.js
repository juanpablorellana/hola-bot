const Discord = require('discord.js')
const cooldown = new Set()
const canales = ["849456609071726623",//general
  "849456574921834576",//superiores
  "849456575755714621",//staff
  "849456578537062410",//spam staff
  "849456623940009985",//comandos
  "849474766573797385",//comandos sorteos
  "849456594625626112",//sorteos
  "811396596670922782",//privado
  "843598644430110740",//spam
  "811391237818024000"]//canal
module.exports = async (client, message) => {
  if (message.author.username === "Nuevo Formulario" && message.channel.id === "849456574921834576") {
    message.react("✅")
    message.react("❌")
  }
  if (message.content.includes(client.token)) message.delete()
  if (message.author.bot) return

  ///// DM /////

  if (message.channel.type === 'DM') {
    if (cooldown.has(message.channel.id)) return
    cooldown.add(message.channel.id)
    setTimeout(() => {
      cooldown.delete(message.channel.id)
    }, 25000)
    if (client.guilds.resolve('849454800718135306').members.resolve(message.author.id).roles.cache.has('849456488187297792') || client.guilds.resolve('849454800718135306').members.resolve(message.author.id).roles.cache.has('849456488858910740')) return message.channel.send('No puedes escribirme estando muteado!')
    const embedm = new Discord.MessageEmbed()
      .setTitle(`MD ${client.user.username}`)
      .addField("`Confesión` - 🤫", "Manda un mensaje anónimo (o no) a <#849456623411134484>, esto es 100% seguro")
      .setColor(0x000001)
    message.channel.send({ embeds: [embedm] }).then(n => {
      n.react("🤫")
      n.awaitReactions({
        time: 10000, filter: async (reaccion, user) => {
          if (user.bot) return
          if (reaccion.emoji.name === "🤫") {
            let baniaos = ["805135169111588965", "779211372029542401"]
            if (baniaos.includes(message.author.id)) return message.channel.send("No puedes mandar confesiones")
            await message.channel.send("Quieres que sea anónima?").then(m => {
              m.react("✅")
              m.react("❌")
              m.awaitReactions({
                time: 5000, filter: async (reaccion, user) => {
                  if (user.bot) return
                  if (reaccion.emoji) {
                    message.channel.send("Escribe tu confesión")
                    let filtro = m => m.author.id === message.author.id
                    let confesion = await message.channel.awaitMessages({ filter: filtro, max: 1, time: 45000 })
                    if (confesion.size < 1) return message.channel.send("Tardaste mucho en contestar")
                    const embedconfe = new Discord.MessageEmbed()
                      .setDescription(`${confesion.first().content}`)
                      .setColor(0x000001)
                    const log = new Discord.MessageEmbed()
                      .setTitle("Confesión")
                      .setAuthor(message.author.tag + " (" + message.author.id + ")", message.author.displayAvatarURL({ dynamic: true }))
                      .setDescription(`${confesion.first().content}`)
                      .setColor(0x000001)
                    const logcanal = client.channels.cache.get("843598644430110740")
                    const webhooks = await client.channels.cache.get("849456623411134484").fetchWebhooks()
                    const hook = webhooks.find(webhook => webhook.name === "Anónimo")
                    if (reaccion.emoji.name === "✅") {
                      await hook.edit({ name: "Anónimo", avatar: "https://i.imgur.com/M4gzSHn.png" })
                      await hook.send({ embeds: [embedconfe] }).catch()
                      await logcanal.send({ embeds: [log] })
                      return message.channel.send("Se mandó tu confesión en <#849456623411134484>")
                    } else if (reaccion.emoji.name === "❌") {
                      await hook.edit({ name: message.author.username, avatar: message.author.avatarURL({ format: "png" }) })
                      await hook.send({ embeds: [embedconfe] }).catch()
                      await logcanal.send({ embeds: [log] })
                      await hook.edit({ name: "Anónimo", avatar: "https://i.imgur.com/M4gzSHn.png" })
                      return message.channel.send("Se mandó tu confesión en <#849456623411134484>")
                    }
                  }
                }
              })
            })
          }
        }
      })
    })
  }

  ///// AUTOMOD /////

  let prohibidas = [
    "puto",
    "maldito"]
  let contenido = message.content.toLowerCase()
  if (prohibidas.some(prohibidas => contenido.includes(prohibidas))) {
    message.channel.send(`> <@${message.author.id}>\n**Por favor no uses esas palabras!**`).then(m => setTimeout(() => m.delete(), 5000))
  }
  let antigringos = ["pls rob", "pls use wishlist", "pls use wish", "pls rich", "pls steal", "pls use ro", "pls use robbers", "pls richest", "pls use rob", "pls use robbers wishlist", "pls use list", "pls use st", "pls use be", "pls use rs", "pls use bbe"]
  if (antigringos.some(antigringos => contenido.includes(antigringos)) && !message.member.roles.cache.has("849456544667664385")) {
    message.member.roles.add("849456488858910740")
  }

  let invitacion = new RegExp(`(discord\.gg\/|discord\.com\/invite\/)(?!hola)\S*`, 'gim').test(message.content)

  if (invitacion /*&& client.invites['849454800718135306'].some(i => i.code === code)*/) {
    if(['849456646492651580', '849456647519731772'].includes(message.channel.id)) return
    message.delete()
    message.member.roles.add("849456488187297792", 'Link de invitación').then(() => {
      message.channel.send(`> <@${message.author.id}>\n**No está permitido mandar links de invitación**`).then(m => setTimeout(() => m.delete(), 5000))
      const logm = new Discord.MessageEmbed()
        .setDescription(`**${message.author.tag} muteado por 30m**\nRazón - Link de invitación`)
        .setColor(0x000001)
      client.channels.cache.get("849456580562780190").send({ embeds: [logm] })
    }).catch(e => console.log(e))
    setTimeout(() => {
      message.member.roles.remove("849456488187297792", `Terminó el tiempo de mute por - Link de invitación`).then(() => {
        const logu = new Discord.MessageEmbed()
          .setDescription(`**${message.author.tag} desmuteado**\nRazón - Terminó el tiempo de mute por - Link de invitación`)
          .setColor(0x000001)
        client.channels.cache.get("849456580562780190").send({ embeds: [logu] })
      }).catch(e => console.log(e))
    }, 1800000)
  }

  if (message.content.toLowerCase().startsWith('~grab')) {
    setTimeout(() => {
      message.channel.messages.fetch({ limit: 15 }).then(mensajes => {
        if (message.channel.id === '849456628695826453') return
        message.channel.bulkDelete(mensajes.filter(m => m.author.id == '346353957029019648'))
      })
    }, 5000)
  }

  ///// COMANDOS /////

  const prefixes = [",", '<!@811400051715866684>', '<@811400051715866684>']
  let prefix = false
  for (const thisPrefix of prefixes) {
    if (message.content.startsWith(thisPrefix)) prefix = thisPrefix
  }
  if (!prefix || !message.content.startsWith(prefix)) return
  const args = message.content.slice(prefix.length).trim().split(/ +/g)
  const command = args.shift().toLowerCase()
  let comando = client.comandos.get(command) || client.comandos.find(c => c.alias && c.alias.includes(command))
  if (!comando) return
  if (!canales.includes(message.channel.id) && comando.categoria === 'jajaj') return
  if (comando.categoria === 'privada' && message.author.id !== "753600264740536330") return message.react("<:non:843389719895080981>")
  if (cooldown.has(message.channel.id && comando.nombre)) return message.react("⌛")
  cooldown.add(message.channel.id)
  cooldown.add(comando.nombre)
  setTimeout(() => {
    cooldown.delete(message.channel.id)
    cooldown.delete(comando.nombre)
  }, comando.cooldown)
  comando.run(Discord, client, message, args)
}