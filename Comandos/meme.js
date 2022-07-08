module.exports = {
  nombre: "meme",
  alias: ["m", "momo", "momazo"],
  cooldown: 15000,
  descripcion: "Manda un meme aleatorio del servidor 😈",
  categoria: "jajaj",
  run: (Discord, client, message, args) => {
    var Momos = ["https://cdn.discordapp.com/attachments/849456575755714621/881902349147332608/vkpmlX4.mp4",
    "https://i.imgur.com/dpkOgwl.jpg", "https://i.imgur.com/3I4bL2j.png", "https://i.imgur.com/UvvTnSK.png", "https://i.imgur.com/Y7us8mJ.png", "https://i.imgur.com/qWdmR2f.png", "https://i.imgur.com/8i5UgTx.png", "https://i.imgur.com/cdwCNqm.png", "https://i.imgur.com/CrSFotS.png", "https://i.imgur.com/54xDXsD.png", "https://i.imgur.com/W4qmbLT.jpg", "https://i.imgur.com/bX7luCA.jpg", "https://i.imgur.com/leXhCdM.jpg", "https://i.imgur.com/7zwSX7S.jpg", "https://i.imgur.com/vd18FXt.jpg", "https://i.imgur.com/bp9pbc7.png", "https://i.imgur.com/PeFU4gS.png", "https://i.imgur.com/yJbMDhT.png", "https://i.imgur.com/R9bvjwg.png", "https://imgur.com/hB00Uo1.mp4", "https://imgur.com/6vd68JM.mp4", "https://imgur.com/9mPUo2i.mp4", "https://imgur.com/CLuggQr.mp4", "https://imgur.com/C76OSyD.mp4", "https://i.imgur.com/Uu0HSAe.png", "https://i.imgur.com/sIR1qpG.jpg", "https://i.imgur.com/dcz0hqQ.jpg", "https://i.imgur.com/SqEXbJ4.jpg", "https://i.imgur.com/eBFA9TF.jpg", "https://i.imgur.com/LO3LL96.jpg", "https://i.imgur.com/y4HKcUD.jpg", "https://i.imgur.com/CF24eYw.jpg", "https://i.imgur.com/lRUc2Nw.jpg",
    "https://i.imgur.com/wer7s3j.png",
    "https://i.imgur.com/4ID8D10.jpg",
    "https://i.imgur.com/ASnWn7N.png",
    "https://i.imgur.com/qnWynXe.jpg"]
    var Aleatorio = Math.floor(Math.random() * Momos.length)
    let random = Momos[Aleatorio]
    const embed = new Discord.MessageEmbed()
      .setColor(0x000001)
      .setTitle("**Meme aleatorio del server :smiling_imp:**")
    if (random.endsWith(".mp4")) {
      const video = new Discord.MessageAttachment(random)
    return message.channel.send({ embeds: [embed], files:[video]})
    } else {
      embed.setImage(random)
    return message.channel.send({ embeds: [embed] });
    }
  }
}