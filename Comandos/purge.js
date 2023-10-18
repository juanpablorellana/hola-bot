module.exports = {
  nombre: "purge",
  alias: ['clear', 'limpiar'],
  cooldown: 0,
  descripcion: "",
  categoria: "privada",
  run: (Discord, client, message, args) => {
    if (!message.member.permissions.has("MANAGE_MESSAGES")) return message.author.send(":no_entry: ****Disculpe****: Pero no posees permisos en el servidor que deseas eliminar los mensajes.").catch(() => {});
    if (!args[0] || isNaN(args[0]) || args[0] > 100 || args[0] <= 0) return message.channel.send({
      embeds: [{
        color: 0x000001,
        title: ":warning: ¿Cuántos mensajes quieres que elimine?",
        description: "__Forma de usar el comando:__ ,purge [Número de mensajes] {Máx 100}",
        footer: {
          text: "[] -> Obligatorio | {} -> Aclaración"
        }
      }]
    }).then(m => m.delete({ timeout: 10000 }))
    message.channel.messages.fetch({ limit: args[0] }).then(mensajes => {
      message.delete();
      message.channel.send(":white_check_mark: **LIMPIANDO**").then(m => {
        setTimeout(() => {
          message.channel.bulkDelete(mensajes.filter(msj => msj !== m)).then(() => {
            m.edit(":white_check_mark: **Mensajes eliminados.**").then(m => m.delete({ timeout: 6000 }))
          }).catch(() => {
            message.author.send(":warning: **Error**: Al parecer a ocurrido un error, verifique el comando o contacte con el ****Staff**** del servidor.").catch(() => { });
          })
        }, 1000)
      })
    })
  }
}