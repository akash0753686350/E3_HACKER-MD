const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ARSLAN-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOE5UMzhXalkxT3ZFblMwaEo5VGVJbVNXcjhJaTNYR0UreGRrd2NyYnVGOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWmRNTVhHR1JlTi80aHdTa3B3eStTMkhZaWluSFd1eGpMOUp3ajhCeEJ4VT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJzRGVLVGExVktuaGhINzUzOVhEODRQKzdWRWc5M3ZBazJzRjVFenlWNW4wPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIvMmorSFRKVmpsNGk1OUNJaTBzbnpwbmNYV2d1M0RzWG5mR2hNVjFBdG5nPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImNBVTlTKzhaTEh5UHpKMHU3N1N4ZHp6R1hndzNqTzB6Wjh6NStpVUJLRzA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkpXK1g5VlV1ZUpBcUNUR2VBQ01DNTc3Y1EvNGgxZ2Fod3o0ZjJVWkFHRVE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQU84MFJtYm54SmpYaEZyMUlPbS9xdGkrRTRIeVZFdnlWZW01Q2dSbngwST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRDM5OE1hQnByejMxY3FZcXowd3o4K0JZYmZidktpdVRoa01YUFFsK2ZSdz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkZXVHNDeWR1NEdTelYrYTVUbTU0ZG5ranBpSit3K2dqZ1h6Ny9jY1JYSDNyOTRaQVFiSHN2TnZvMTVNRDNuNVJ1S0drdUhSU250Vll6UFpPS0JWeGlnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTE4LCJhZHZTZWNyZXRLZXkiOiJKV1hLTlBBcEI5UnM0Z0tETWFRZ0YxNElidUd1TVpHQmdmWGZCN0JCdGZBPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjkyMzEzNzQ0NjkxM0BzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiIzRjNCM0FDMDEyNjU4MERFQzI3RkYwRkU2MEQxNUFBNyJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzU1MzMzNDM3fSx7ImtleSI6eyJyZW1vdGVKaWQiOiI5MjMxMzc0NDY5MTNAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiNDdGQ0NGRjE0MTU4N0Y0NTI4REIzRDk0NkExQzlFOEUifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc1NTMzMzQzN30seyJrZXkiOnsicmVtb3RlSmlkIjoiOTIzMTM3NDQ2OTEzQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjI3MEMyMTE4MjUzQjg2QzJCQUFDQzQyQjM2OEFCMTc2In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTUzMzM0Mzh9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJyZWdpc3RlcmVkIjp0cnVlLCJwYWlyaW5nQ29kZSI6IllEV1pDWFRZIiwibWUiOnsiaWQiOiI5MjMxMzc0NDY5MTM6MUBzLndoYXRzYXBwLm5ldCIsImxpZCI6IjE0MTQ1NTQ1MjU4NjAxNDoxQGxpZCIsIm5hbWUiOiJIQUNLIEJZIEUzIEhBQ0tSIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNLQ1BxT2dERUxpR2djVUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiIzTjFqOUxJeCtvbnpORHM2Sk9QVk1tQTBWd3l4TnhVL0x3V1NZZmFZS1c0PSIsImFjY291bnRTaWduYXR1cmUiOiJuR0RjLy8rSkRZOUhiU1MzenJQN1hrdFNidUplWnBDNm9zbTIrR3p2VFE0OWMvbUtjeUVjb1owd0xBY1dVcFM3bXlwZ1RlNW1QNnZBWlVzT090U3lEdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoieGlQYjFBbUtsOHZhazUrUk42WmJCTFkwRGg4WkJiLzduU0xwVHQ2R0ZGclNaSmlCcjJMMzIrOG5zczA2b0dhTDdnSVZyODk5M1hwRE84djNzY2hYaEE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5MjMxMzc0NDY5MTM6MUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJkemRZL1N5TWZxSjh6UTdPaVRqMVRKZ05GY01zVGNWUHk4RmttSDJtQ2x1In19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQVVJQ0E9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NTUzMzM0MzUsImxhc3RQcm9wSGFzaCI6IjNSOVozOSIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBT05rIn0=",
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
