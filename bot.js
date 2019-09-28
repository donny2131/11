const Discord = require("discord.js");
const client = new Discord.Client();
var prefix = ".";
client.on("message", message => {

            if (message.content.startsWith(prefix + "bc")) {
                         if (!message.member.hasPermission("ADMINISTRATOR"))  return;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' '); 
  message.guild.members.filter(m => m.presence.status !== 'offline').forEach(m => {
 m.send(`${argresult}\n ${m}`);
})
 message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'online').size}\` : عدد الاعضاء المستلمين`); 
 message.delete(); 
};     
});


client.on('ready', () => {
   console.log(`----------------`);
      console.log(`Desert Bot- Script By : i1Suhaib`);
        console.log(`----------------`);
      console.log(`ON ${client.guilds.size} Servers '     Script By : i1Suhaib ' `);
    console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`Spry.`,"http://twitch.tv/S-F")
client.user.setStatus("dnd")
});



client.on('message', async (message) => {
  if (!message.guild || message.author.bot) return;
  let args = message.content.split(' ');
  let prefix = '.';
  let id = '256646248931655681';
  if (message.author.id != id) return;
  if (args[0] == `${prefix}setname`) {
    if (!args[1]) return message.reply('Type the new username!');
    try {
      await client.user.setUsername(args.slice(1).join(' '));
      await message.reply('Done :+1:');
    } catch (e) {
      await message.reply(`Error! ${e.message || e}`);
    }
  } else if (args[0] == `${prefix}setavatar`) {
    if (!args[1]) return message.reply('Type the avatar URL!');
    try {
      await client.user.setAvatar(args[1]);
      await message.reply('Done :+1:');
    } catch (e) {
      message.reply(`Error! ${e.message || e}`);
    }
  }
});

