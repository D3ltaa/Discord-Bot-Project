let Discord = require('discord.js')
let Canvas = require('canvas')
require('dotenv').config();
const delta = new Discord.Client({
    partials: [
        Discord.Partials.Channel,
        Discord.Partials.User,
        Discord.Partials.GuildMember,
    ],
    intents:[
        Discord.GatewayIntentBits.Guilds,
        Discord.GatewayIntentBits.GuildMembers,
        Discord.GatewayIntentBits.GuildMessages
    ]
})

delta.on('ready',async() =>{
    console.log(`${delta.user.username} is ready and running`)
})

delta.on('guildMemberAdd',async member=>{
    let image = await createWelcomeImage({
        username: member.user.username,
        memberCount: member.guild.memberCount,
        avatarURL: member.user.displayAvatarURL({extension:'png'})
    })

    let attachment = new Discord.AttachmentBuilder(image, { name: 'welcome.png' })
    let channel = await member.guild.channels.cache.get(process.env.WelcomeChannel)
    if(!channel) return console.log('No Channel')
    channel.send({files:[attachment],content: `**${member} welcome to ${member.guild.name}**`})
})


async function createWelcomeImage({ username, memberCount, avatarURL }) {
    const width = 900;
    const height = 400;
    const canvas = Canvas.createCanvas(width, height);
    const ctx = canvas.getContext('2d');
    const borderThickness = 20; // Thickness of the outer grey border
    // Background
    ctx.fillStyle = '#17181e';
    ctx.fillRect(0, 0, width, height);

    // Fill inner area with black
    ctx.fillStyle = '#060608';
    ctx.fillRect(
        borderThickness,
        borderThickness,
        width - borderThickness * 2,
        height - borderThickness * 2
    );

    // Load avatar
    const avatarSize = 180;
    const avatarX = width / 2;
    const avatarY = 140;

    const avatar = await Canvas.loadImage(avatarURL);

    // Draw avatar in circle
    ctx.save();
    ctx.beginPath();
    ctx.arc(avatarX, avatarY, avatarSize / 2, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.clip();

    ctx.drawImage(
        avatar,
        avatarX - avatarSize / 2,
        avatarY - avatarSize / 2,
        avatarSize,
        avatarSize
    );
    ctx.restore();

    // Username Text
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 36px Arial'; // Use your custom font if you want
    ctx.textAlign = 'center';
    ctx.fillText(`${username} just joined the server`, width / 2, 280);

    // Member count
    ctx.fillStyle = '#aaa';
    ctx.font = '24px Arial';
    ctx.fillText(`Member #${memberCount}`, width / 2, 320);


    return canvas.toBuffer('image/png');
}

delta.login(process.env.BotToken)