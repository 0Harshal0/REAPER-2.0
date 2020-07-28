const Discord = require("discord.js");

module.exports = {
    name: "announce",
    description: "Make an Announcemnet in your Server",
    run: async (clinet, message, args) => {
        const ann = args.join(" ");
        if(!message.member.hasPermission("MANAGE_MESSAGES")) {
        return message.channel.send("You don't have enogh Permissions")
        }
        if(!message.guild.me.hasPermission("MANAGE_MESSAGES")) {
        return message.channel.send("I don't have enough Permissions")
        }
        if (!ann) {
        return message.channel.send("Please add some text to make an Announcement")
        }

        let embed = new Discord.MessageEmbed()
        .setTitle("New Server Annoncement")
        .setDescription(`${ann}`)
        .setColor("RANDOM")
        .setFooter(`Announcement By ${message.author.username}`);
        message.channel.send(embed);
        message.delete();
    }
}