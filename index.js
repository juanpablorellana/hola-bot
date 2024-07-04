require('dotenv').config()
const Discord = require('discord.js')
const client = new Discord.Client({ intents: 32767, partials: ['CHANNEL'] })

const express = require('express')
const app = express()
app.get('/', (req, res) => res.send('Lindo'))
app.listen(3000)

///// HANDLERS /////
let { readdirSync } = require("fs")

for (const archivo of readdirSync('./Eventos/')) {
  let nombre = archivo.substring(0, archivo.length - 3)
  let evento = require(`./Eventos/${archivo}`)
  client.on(nombre, evento.bind(null, client))
}
client.comandos = new Discord.Collection()
for (var archivo of readdirSync('./Comandos')) {
  let comando = require(`./Comandos/${archivo}`)
  client.comandos.set(comando.nombre, comando)
}
client.slash = new Discord.Collection()
for (var archivo of readdirSync('./Slash')) {
  let comando = require(`./Slash/${archivo}`)
  client.slash.set(comando.nombre, comando)
}

//

process.on('unhandledRejection', e => console.error(e))

client.login(process.env.nekot).catch(e => console.log(e))