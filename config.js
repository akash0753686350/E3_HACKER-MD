const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ARSLAN-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib0p4aW50WklVWDI2RVlZb0x5NXB2dEtQNmFPL3h0RnhCV0VxOGo3ZGYzYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiblRZbWVWb3pISDhwSzBjcVVPOWNNaVVpQkI0Zkw3L2JPcW1Ub3JESUNDST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIySG9wM0wxeE81SHYrNkpKK3NEa2w1aE82SUtlOHZoaGluSzh3WW9HQkhzPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJnWldDRGdSZXlOT1JNRHFsNEEyaVV2WU9scFVxKzZ4ekFLRGZYV1RuUXlZPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IklJYzB4VlBPWFZ2MmIvYzBobmNaV1BaOGVlT3JwSHljWWFjZncreDRTbEk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Inh6OWJGZm1OcGxSYWNqSmR0VitpR1M0UHo1eFV6NHhpREFpRlI4Zy9YQ1k9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT0ZlcFFaYTdWVmR3aUIwYkpkSitKR08vSWFjNEttcnBidEZQbVRHSGkwTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNFhuU3NTNTlORlo3QnhpbjZEN21mNU9YejBPYTN0RjNweGVVRzIyQnFqcz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InlGbG9aSUJxaUxBTmxDa29oWi9pUFUwN1RHbDROY3UvNkRYMVl2Wi9ESEJHU1l2eXZDbHoxYi9qblUwYXdVdXpMQUpVK2V5a05SMVlzQVl2RlJBYmd3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NTksImFkdlNlY3JldEtleSI6IjZ5bk05RnhNeUZnenZ0UE1LdFRVbXV2N0wrMm5jSW1GRVFPL2puWjhYTXc9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJyZWdpc3RlcmVkIjp0cnVlLCJwYWlyaW5nQ29kZSI6Ik4zQlYxWURRIiwibWUiOnsiaWQiOiI5MjMxMzU2MTc2Mzc6NThAcy53aGF0c2FwcC5uZXQiLCJsaWQiOiIxMzIwMzYzNTQ0MzcxNDQ6NThAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNOWGU3dWdHRUtESzdjUUdHQUlnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJNdWdockNCZDdWYVJyaWUwYTlyeWJVNGhVQkpDVTFHY3hwRW9SQzl2VzBFPSIsImFjY291bnRTaWduYXR1cmUiOiJScGMzMVhWemVsYlRweDY1WG94ckhMdVlqdkc0UStPRlBjQURvNUVrb2l0YnZSRCtqWW5qcEp1c0thbHQ5cmw4dDlhaFphcDRXNWJuemE1QkR3czFDQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiR3FhYVMzZW95Rkx1blhPRGplUzRoQWpmTnU4aEhhRTdGWU85VmpyUXhMbGFNbkx5UnYxbjMzUFlCMGZMTnUxOHMxb0dlaXJxMXh3TkttbEF4Z1g5amc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5MjMxMzU2MTc2Mzc6NThAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVExvSWF3Z1hlMVdrYTRudEd2YThtMU9JVkFTUWxOUm5NYVJLRVF2YjF0QiJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FnSUJRPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzU1MDE0NDM2LCJsYXN0UHJvcEhhc2giOiIyVjc3cVUiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUljMyJ9",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY E3_HACKER-MD 🤍*",
// set the auto reply massage on status reply  
ANTI_DELETE: process.env.ANTI_DELETE || "true",
// set true false for anti delete     
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat     
WELCOME: process.env.WELCOME || "true",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
MENTION_REPLY: process.env.MENTION_REPLY || "false",
// make true if want auto voice reply if someone menetion you 
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/p4yxcn.png",
// add custom menu and mention reply image url
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "E3_HACKER-MD",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "E3_HACKER-MD",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "923495178663",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "*E3_HACKER-MD*",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ E3_HACKER-MD ❣️*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/p4yxcn.png",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> Zinda Hun Yar ⚡",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "false",
// make anti link true,false for groups 
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "923495178663",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
