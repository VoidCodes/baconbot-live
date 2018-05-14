const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  var images = ["https://cdn.discordapp.com/attachments/424667806320033814/437807617965031424/unnamed_1.gif", "https://cdn.glitch.com/5df641e3-8d98-4abb-9045-d5482434003a%2FJake_pat.gif?1524497996034", "https://media.tenor.com/images/cdc004bbbaba6f60d8e62a1f127516e0/tenor.gif"];
var rand = Math.floor(Math.random() * images.length);
var randomImage = images[rand];

const patEmb = new Discord.RichEmbed()
.setColor(0xA901DB)
.setImage(randomImage);
const sadEmb = new Discord.RichEmbed()
.setColor(0xA901DB)
.setImage('https://media.giphy.com/media/Y4z9olnoVl5QI/giphy.gif');
if(!args[0]) {
  message.channel.send(`<@${message.author.id}> pat <@${message.author.id}>.. Oh wait! You can't pat yourself!`, {embed: sadEmb});
  return;
}

if (!message.mentions.users.first()) return message.channel.send(`Please mention someone!`).then(msg => {
    msg.delete(3000)
  });
message.channel.send(`<@${message.author.id}> pat ${args[0]}`, {embed: patEmb});

  
}

module.exports.help = {
    name: "pat"
  }