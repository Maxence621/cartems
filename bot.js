const fs = require('fs');
const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('ready', () => {
    console.log('I am ready!');

bot.user.setPresence({ activity: { name: '::help' }, status: 'online' })
  .then(console.log)
  .catch(console.error)
});

bot.on('message', message => {
	if(message.author.id == '301689152163020802'){
		if(message.content == '<@!828258980769562634>'){
			console.log(message.content);
			message.reply('ce n\'est que la vérité');
		}
		
	}
});
bot.on('message', message => {
	console.log(message);

	switch(message.content){
		case "::pancakes":
			message.reply('Tu veux un pancake ? :pancakes:');
			break;
		case "::maxence":
			message.reply('Shaco ma vie');
			break;
		case "::ange":
			console.log(message);
			message.channel.send('<@301689152163020802> tu es une crotteuh');
			break;
		case "::help":
			var leMess = "::ange  = renvoie la vérité \n"
						+"::pancakes = ... \n " ;
			message.channel.send(leMess);
			break;
		default:
			break;	
	}
});


// THIS  MUST  BE  THIS  WAY

bot.login(process.env.BOT_TOKEN);//BOT_TOKEN is the bot Secret
