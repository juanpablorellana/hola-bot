module.exports = {
  nombre: "avergonzar",
  alias: ["avr", "embarrass"],
  cooldown: 3000,
  descripcion: "Hace como si tú u otro usuario manda un mensaje un tanto vergonzoso, si no mencionas a nadie, lo hará de ti mismo",
  uso: "(miembro)",
  categoria: "jajaj",
  run: async (Discord, client, message, args) => {
    let usuario = message.mentions.members.first() || message.guild.members.resolve(args[0]) || message.member
    if(!usuario.roles.cache.has('849456544667664385')) return message.react("<:non:843389719895080981>")
    var frases = [
      "UwU",
      "Me gusta el yiff",
      "Soy fan de Anonimeitor 😅",
      "El Pepe 😂",
      "Ete Sech 😂",
      "pOtaTziO 😂",
      "Está muy fresco el pana 😳👌",
      "Una vez me senté sobre un plátano y claro eso cambió  mi vida",
      "Me gusta creer que doggo volverá a follarme 🤤",
      "OwO?",
      "Te voy a dar mi pene, espero lo disfrutes uwu * le da la pija *",
      "Amo las pollas como nadie, me gusta que los hombres me dominen y me digan cositas malas al oido... Es tan excitante, solo me gusta no tener oportunidad de defenderme y la boca llena 😍",
      "Fuera de mi cesped XDxdXD :v",
      "wOwOwoWoWo tranquilo viejo Bv <:SDLGlogo:460907602037964800>",
      "Mi elfa <:vv:367824995046391808>",
      "Quedé 👁👄👁",
      "Me gustaría que me den su rellenito UwU",
      "Como quisiera hacer una orgía con furros 😍",
      "Deseo pene wafle OwO",
      "Me beso con albañiles arrugados",
      "Ayer mi perro me estaba poniendo su verga en mi rostro y aproveché uwu",
      "Quisiera que me dejaran de follar con demaciada fuerza esque me duele mi oyito U.U",
      "Onii chan no muy fuerte U/n\\U",
      "Si me van a follar corranse en mi ano por que no quiero limpiar mi ropa 😡",
      "Llamame al whatsapp para subir la colaboración de gacha life en tiktok amigx",
      "Quisiera que me follaran bien rico por mi oyito uwu y me dejen con un rico rellenito OwO",
      "Orgulloso de ser gay 😍",
      "Me hice pipí en la cama",
      "Yao Cabrera 🤤",
      "Ojalá pidou me meta su polla bien grande 😍",
      "Ver porno de minecraft no es malo 🙄",
      "Me gustaria que Nicky me diera su gran pene OwO",
      "Quisiera conocer a yolo porque el es mejor 😍",
      "#HailGrasaBv",
      "Ponlo pa dentro papi ❤️",
      "Me pregunto como se sentiran 2 vergas bien grandes y venudas en mi ano 🤔",
      "Si tuviera un deseo pediría que todos ustedes puedan follarme al mismo tiempo ❤️",
      "Lo admito soy furro y me gusta el pilin de mi perrito",
      "Hoy estaban follando 2 vagabundos y no dudé en unirme a ellos",
      "No entiendo por que a mis padres les molesta que use faldita y me ponga a hablar como una neko kwai >.<",
      "No me gusta ponerme falda porque se me ven los huevos 🥲",
      "Doggo si lees esto te amo y quisiera tener sexo salvaje contigo 😍",
      "Como olvidar el día que mis vecinos se organizaron para violarme y llenarme de rica lechita en mi oyito",
      "Estaria chido que los Pokemons existieran en la vida real. |Así podria capturar a una eevee hembra, evolucionarlo a vaporeon y ganarme su confianza para asi un dia normal encerrar a mi Vaporeon en una habitación y penetrarla por el ano y la vagina y poder perder la virginidad junto a ella, y como ella me tendria confianza ya que soy su entrenador de toda la vida se dejaria >:)|",
      "Me gustaria me mi perro me meta su pilin UwU",
      "Confieso que la otra ves estaba en la escuela y vi que la chica que me gusta traia falda y se le vieron sus calzonsitos u //// u entonces fui al baño por que se me paro D: y entonces estaba  jalandome mi cosita con unas fotos de furritas que traía en el celular u //// uy entonces abrió puerta del baño un amigo y me vine en mi suéter para que no me viera mi cosita >A< Ayuda porfavor desde ese día me dicen el  masturbador y me molestan y me empiezo a cortar por que siento que no valgo nada T.T u.u",
      "Cógeme por Dios cógeme tan duro hasta el punto de romperme la médula espinal y dejarme inválido para el resto de mi vida total voy a estar feliz ya que me quedé parapléjico por tener la mejor cogida de todas en la historia de la humanidad que hasta la virgen maría va a estar celosa",
      "Por favor fóllame tan fuerte que me hagas gritar y me quede sin voz para que así puedas seguir partiendome sin gritos ni molestias. Cógeme, por favor no sé de que otra forma pedirtelo soy tuyo, rómpeme, cogeme tan fuerte hasta que pida piedad, pégame hasta que mi piel empiece a sangrar, por favor te lo pido",
      "Te quiero chupar tanto la pija, pero literalmente quiero dejarte los huevos secos, quiero chuparte la pija hasta que te duela mear, quiero que cojamos hasta que ninguno pueda más, por Dios te lo pido voy a complacer todas tus necesidades solo haceme tuyo",
      "Quiero tu pija rompiéndome los dientes, que me llegue hasta el estómago, la quiero chupar hasta dejarte esteril y que después no necesitemos anticonceptivos",
      "Quien quitó cuties? 😾",
      "Agáchate y conócelo 😳",
      "Follar con femboys es mi pasión",
      "No le sabes al shitpost papu Bv",
      "Algún día le haré un raid a esta basura de server"
    ]
    message.delete()
    const webhooks = await message.channel.fetchWebhooks()
    const encontrar = webhooks.find(w => w.name === "hola")
    if (!encontrar) {
      let crear = await message.channel.createWebhook(usuario.displayName, { avatar: usuario.user.displayAvatarURL({ format:"png" }) });
      await crear.send(frases[Math.floor(Math.random() * (frases.length))])
      await crear.edit({ name: "hola", avatar: client.user.displayAvatarURL() })
    } else {
      await encontrar.edit({ name: usuario.displayName, avatar: usuario.user.displayAvatarURL({ format:"png" }) })
      await encontrar.send(frases[Math.floor(Math.random() * (frases.length))])
      await encontrar.edit({ name: "hola", avatar: client.user.displayAvatarURL() })
    }
  }
}