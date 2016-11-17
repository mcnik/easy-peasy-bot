# Using Botkit for Custom Bots
1. Fork this project.
2. Open up your favorite terminal app, and clone your new repository to your local computer.
3. This is a Node.js project, so you’ll need to install the various dependencies by running:
    npm install
4. Edit `package.json` to give your bot a name and update the GitHub URLs to reflect the location of your fork in GitHub.
5. Go to https://my.slack.com/apps/new/A0F7YS25R-bots and pick a name for your new bot.
6. Once you’ve clicked “Add integration,” you’ll be taken to a page where you can further customize your bot. Of importance is the bot token—take note of it now.
7. Once you have the token, you can run your bot easily:

    ```bash
    TOKEN=xoxb-your-token-here npm start
    ```

    Your bot will now attempt to log into your team, and you should be able talk to it. Try telling your new bot “hello”. It should say “Hello!” back!

## Hurrah!

8. Botkit provides us with event listeners. In your file you will find the "hear" listener. This listens for a certain message and then takes an action. See:

    ```javascript
    controller.hears('hello','direct_message', function(bot,message) {
        bot.reply(message, 'Hello!');
    });
    ```
In this case when the bot receives a direct message from a user that contains the word “hello”, it responds with, “Hello!”

9. You can configure your bot to listen to mentions by using 'mention' as a keyword. You can include more greetings too:
    ```javascript
    controller.hears(['hello', 'hi', 'greetings'], ['direct_mention', 'mention', 'direct_message'], function(bot,message) {
         bot.reply(message, 'Hello!');
     });
    ```

(Restart your bot after each edit!)
