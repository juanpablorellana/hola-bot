const Discord = require('discord.js');
module.exports = (client, oldMember, newMember) => {
  if (oldMember.guild.id !== '849454800718135306') return
  oldMember.guild.fetchAuditLogs().then(() => {
    if (oldMember.roles.cache.size !== newMember.roles.cache.size) {
      function agregar(rol, canal, mensaje) {
        if (!oldMember.roles.cache.has(rol) && newMember.roles.cache.has(rol)) {
          client.channels.cache.get(canal).send(mensaje)
        }
      }
      function quitar(rol, canal, mensaje) {
        if (oldMember.roles.cache.has(rol) && !newMember.roles.cache.has(rol)) {
          client.channels.cache.get(canal).send(mensaje)
        }
      }
      if (oldMember.roles.cache.has("849456487495499780") && !newMember.roles.cache.has("849456487495499780")) {
        client.channels.cache.get("849456585847603280").send("<@" + newMember.id + ">").then(x => x.delete())
      }
      quitar("849456487495499780", "849456609071726623", "> <@" + newMember.id + ">\nHola! Espero la pases muy bien :)\nRecuerda leer las <#849456585847603280> para evitar problemas.\nEs importante no ser tóxico, bienvenido a la familia <3")
      quitar("849456487495499780", "849456579429269525", "<@" + newMember.id + "> Se verificó")
      if (!oldMember.roles.cache.has("849456551902314516")
        && newMember.roles.cache.has("849456551902314516")) {
        newMember.send("Hola! Obtiviste el rol de Creador de Contenido, esto te permite promocionar tu canal de YouTube en <#849456634229293086> si es que tú también nos promocionas.\nEscríbele al MD de <@753600264740536330> o de <@397762013226336266> para que puedan poner tu canal!").catch(() => {})
      }
      if (!oldMember.roles.cache.has("849456556583288842") && newMember.roles.cache.has("849456556583288842")) {
        newMember.send("Hola! Obtuviste el rol COC, aquí está la invitación al clan.\nhttps://link.clashofclans.com/es?action=OpenClanProfile&tag=2YJ9PCJUC").catch(() => {})
      }
      agregar("849456485385764884", "849456575755714621", `> <@${newMember.id}>\nBienvenido, revisa <#849456574108139520> para tener todo claro :)`)
      agregar("849456483905437726", "849456574921834576", `> <@${newMember.id}>\nBienvenido lol, no abuses de tu poder`)
      agregar("849456488858910740", "849456648442740756", `> <@${newMember.id}>\nTe han encarcelado`)
      agregar("849456513646067742", "849474766573797385", "> <@" + newMember.id + ">\n\nHola! Usa este canal para hacer los comandos para sortear cosas!\n\n__Mira los mensajes fijados! Estos son algunos comandos útiles__\n`,ayuda mencionar`\n`%gstart`\n`%greroll (ID del mensaje)`\n`!ghelp`")
      quitar("849456488187297792", "849456609071726623", `> <@${newMember.id}>\nHas sido desmuteado`)
      quitar("849456488858910740", "849456609071726623", `> <@${newMember.id}>\nHas vuelto de la cárcel`)
      if (!oldMember.roles.cache.has("849500924980625468") && newMember.roles.cache.has("849500924980625468")) {
        /*849456488187297792
        client.channels.cache.get("814367166060167188").createInvite({
          maxUses: 1,
          maxAge: 1800,
          unique: true
        }).then(invite => { bla bla invite.url})
        */
        newMember.send("**Hola! Muchísimas gracias por boostear el servidor.**\n\nYa obtuviste la mayoría de tus beneficios, pero faltan algunos.\nPor favor háblale por privado a algún Administrador o rol mayor para que pueda darte los siguientes beneficios\n- Rol Personalizado (Nombre y color, de preferencia el código hexadecimal)\n- Link de tu canal de YouTube (Si es que tienes)").catch(() => {
          client.channels.cache.get('849456574921834576').send(`No le pude mandar el mensaje de gracias e info al nuevo booster <@${newMember.id}>`)
        })
      }
      quitar("849500924980625468", "849456574921834576", "> <@" + newMember.id + ">\nDejó de Boostear")
      //
      if (newMember.guild.roles.cache.filter(r => r.comparePositionTo('849456514899902500') > 0).some(r => newMember.roles.cache.has(r.id))) {
        newMember.roles.add("849456514899902500").catch(() => {})
      } else {
        newMember.roles.remove("849456514899902500").catch(() => {})
      }
      
      if (newMember.guild.roles.cache.filter(r => r.comparePositionTo('849456546614214706') < 0 && r.comparePositionTo('849456562539593758') > 0).some(r => newMember.roles.cache.has(r.id))) {
        newMember.roles.add("849456546614214706").catch(() => {})
      } else {
        newMember.roles.remove("849456546614214706").catch(() => {})
      }
    }
  })
}