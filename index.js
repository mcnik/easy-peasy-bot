/**
 * A Bot for Slack!
 */

// Setting up custom integration
var customIntegration = require('./lib/custom_integrations');
var token = process.env.TOKEN;
var controller = customIntegration.configure(token);

// Handle events related to the websocket connection to Slack
controller.on('rtm_open', function (bot) {
    console.log('** The RTM api just connected!');
});

controller.on('rtm_close', function (bot) {
    console.log('** The RTM api just closed');
    // you may want to attempt to re-open
});


/**
 * bot logic goes here!
 */
// BEGIN EDITING HERE!
controller.hears('hello', 'direct_message', function (bot, message) {
    bot.reply(message, 'Hello!');
});

// When your bot joins a channel, it announces it's presence. Spooky? I know!
controller.on('bot_channel_join', function (bot, message) {
    bot.reply(message, "I'm here!")
});
