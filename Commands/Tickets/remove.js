const { ticketModel } = require("../Owner/models/tickets/guild");
module.exports = {
  name: "remove",
  description: "Remove an user from the ticket!",
  cooldown: 3,
  run: async(client, message, args) => {
    const guild = message.guild;
    let member = guild.member(
      message.mentions.users.first() || guild.members.cache.get(args[0])
    );

    const ticketDoc = await ticketModel.findOne({
      guild: message.guild.id,
      owner: message.author.id,
    });
    if (message.channel.id !== ticketDoc.channelID)
      return message.channel.send(`This channel isnt a ticket!`);
    try {
      message.channel.updateOverwrite(member.user, {
        VIEW_CHANNEL: false,
        SEND_MESSAGES: false,
        READ_MESSAGE_HISTORY: false,
      });
    } catch (err) {
      message.channel.send(
        "A unexpected error has ocured Please contact the developer!"
      );
      console.log(err);
    }
  },
};