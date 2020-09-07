const Discord = require("discord.js");
const AsciiTable = require("ascii-table");
const config = require('../config.json')

module.exports.run = async (client, message, args) => {
    if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send(new Discord.MessageEmbed().setColor(config.Colour).setDescription(`Você **não possui** a permissão necessária para utilizar este comando.`));

    const id = args[0];

    if (!args[0]) return message.channel.send(new Discord.MessageEmbed().setColor(config.colour).setDescription(`Você não especificou o **ID!**`));

    const doc = await client.db.Character.findOne({ where: { id: args[0] } });

    if (!doc) return message.channel.send(new Discord.MessageEmbed().setColor(config.colour).setDescription(`**ID** ${id} inválido ou não encontrado no banco de dados.`));

    const table = new AsciiTable();
    for (const key of Object.keys(doc.dataValues)) {
        table.addRow(key, doc.dataValues[key]);
    }
    table.setAlign(0, AsciiTable.LEFT).setAlign(1, AsciiTable.LEFT);

    message.channel.send(new Discord.MessageEmbed().setColor(config.colour).setFooter(message.author.username, message.author.displayAvatarURL()).setTimestamp().setAuthor("Tabela MYSQL - Characters", 'https://cdn.discordapp.com/attachments/740342283341267005/752381554113642547/logo-mysql-mysql-logo-png-images-are-download-crazypng-21.png').setDescription(`\`\`\`\n${table.toString()}\n\`\`\``));

};