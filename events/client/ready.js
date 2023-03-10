const client = require("../../index.js");
const { loadCommands } = require("../../systems/cmdHandler.js");

module.exports = {
    name: 'Ready',
};

client.on('ready', () => {
    loadCommands(client);
    console.log(`${client.user.username}` + ' ' + 'successfully logged in.');
    client.user.setActivity(`on ${client.guilds.cache.size} server(s).`);
});