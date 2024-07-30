const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="Kipkogeimeshack6@gmail.com"
global.location="Kapsabet,kenya."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Nairobi";
global.github=process.env.GITHUB|| "https://github.com/DJMESHK/Suhail-Md";
global.gurl  =process.env.GURL  || ;
global.website=process.env.GURL || ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "*ᴘᴏᴡᴇʀᴇᴅ ʙʏ MeshTech*" 


global.devs = "254707541188" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254707541188";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,254xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,254xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "254707541188,254xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_13_19_07_30_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDE5NixcbiAgICAgICAgNTgsXG4gICAgICAgIDc2LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTcwLFxuICAgICAgICAyNCxcbiAgICAgICAgMTgsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTc4LFxuICAgICAgICAyMTEsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTMyLFxuICAgICAgICAyMTMsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNTEsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMyxcbiAgICAgICAgOTMsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTEwLFxuICAgICAgICAxODMsXG4gICAgICAgIDkyLFxuICAgICAgICAyNixcbiAgICAgICAgMzcsXG4gICAgICAgIDQzLFxuICAgICAgICA2MixcbiAgICAgICAgMzAsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTIzLFxuICAgICAgICAxMDdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTcyLFxuICAgICAgICAyMjksXG4gICAgICAgIDIzOCxcbiAgICAgICAgNDYsXG4gICAgICAgIDM4LFxuICAgICAgICA1OCxcbiAgICAgICAgMTAxLFxuICAgICAgICA0MixcbiAgICAgICAgNDgsXG4gICAgICAgIDI2LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMTAsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMDksXG4gICAgICAgIDIxNixcbiAgICAgICAgMTQzLFxuICAgICAgICAyNDMsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxOCxcbiAgICAgICAgMjI1LFxuICAgICAgICA1NSxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMixcbiAgICAgICAgMTAyLFxuICAgICAgICAxMSxcbiAgICAgICAgMTIzLFxuICAgICAgICA0MixcbiAgICAgICAgMTE2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjQsXG4gICAgICAgIDM3LFxuICAgICAgICAxMDUsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjExLFxuICAgICAgICAxNTUsXG4gICAgICAgIDQwLFxuICAgICAgICA5LFxuICAgICAgICAyMDksXG4gICAgICAgIDIyLFxuICAgICAgICA1LFxuICAgICAgICAxMzQsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMzMsXG4gICAgICAgIDg2LFxuICAgICAgICAyNDUsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNDcsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNzQsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTUsXG4gICAgICAgIDY2LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNSxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMCxcbiAgICAgICAgMzcsXG4gICAgICAgIDU0LFxuICAgICAgICAxMThcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA3LFxuICAgICAgICAxNTksXG4gICAgICAgIDEzMixcbiAgICAgICAgODIsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNTQsXG4gICAgICAgIDIxLFxuICAgICAgICAxNzcsXG4gICAgICAgIDUzLFxuICAgICAgICAyNDMsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTc3LFxuICAgICAgICAyMjIsXG4gICAgICAgIDI1NSxcbiAgICAgICAgODAsXG4gICAgICAgIDI4LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTgxLFxuICAgICAgICAyNTQsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTA1LFxuICAgICAgICA1OSxcbiAgICAgICAgMTA5LFxuICAgICAgICA5MyxcbiAgICAgICAgMzIsXG4gICAgICAgIDkzLFxuICAgICAgICAxOTgsXG4gICAgICAgIDYyLFxuICAgICAgICAyNSxcbiAgICAgICAgNjhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTc4LFxuICAgICAgICAzMCxcbiAgICAgICAgMTEwLFxuICAgICAgICAxNjYsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTMyLFxuICAgICAgICA0MCxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMzEsXG4gICAgICAgIDQ3LFxuICAgICAgICAxODcsXG4gICAgICAgIDI2LFxuICAgICAgICAyMDYsXG4gICAgICAgIDI1LFxuICAgICAgICAzMyxcbiAgICAgICAgMSxcbiAgICAgICAgMTc3LFxuICAgICAgICA4NCxcbiAgICAgICAgNzksXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMCxcbiAgICAgICAgMCxcbiAgICAgICAgNjgsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTIzLFxuICAgICAgICAxNjgsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjE4LFxuICAgICAgICAxNzEsXG4gICAgICAgIDEyNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODYsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTkwLFxuICAgICAgICAxMDQsXG4gICAgICAgIDExMCxcbiAgICAgICAgNTQsXG4gICAgICAgIDkxLFxuICAgICAgICAxNzYsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNzksXG4gICAgICAgIDczLFxuICAgICAgICA4MSxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMjYsXG4gICAgICAgIDEyOCxcbiAgICAgICAgODQsXG4gICAgICAgIDgzLFxuICAgICAgICAyMTIsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjExLFxuICAgICAgICAxNzEsXG4gICAgICAgIDMyLFxuICAgICAgICAyMyxcbiAgICAgICAgMTczLFxuICAgICAgICA2LFxuICAgICAgICA2MSxcbiAgICAgICAgMjA5LFxuICAgICAgICA3MSxcbiAgICAgICAgMTczLFxuICAgICAgICAxNjYsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTIxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI0LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICA4N1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxOCxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDc1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzgsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjAwLFxuICAgICAgICA2NCxcbiAgICAgICAgMTU1LFxuICAgICAgICA0MCxcbiAgICAgICAgMTQsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTA4LFxuICAgICAgICAyNTIsXG4gICAgICAgIDI1NCxcbiAgICAgICAgOTUsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTE2LFxuICAgICAgICAzMCxcbiAgICAgICAgODYsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTM2LFxuICAgICAgICAyOCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNzEsXG4gICAgICAgIDYsXG4gICAgICAgIDUwLFxuICAgICAgICAxMzYsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTUsXG4gICAgICAgIDQxLFxuICAgICAgICAyMzksXG4gICAgICAgIDExNSxcbiAgICAgICAgMTYzLFxuICAgICAgICAyNTUsXG4gICAgICAgIDgsXG4gICAgICAgIDQsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMzMsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTE0LFxuICAgICAgICAzMixcbiAgICAgICAgMTA2LFxuICAgICAgICAxNjAsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTIsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNzQsXG4gICAgICAgIDIyLFxuICAgICAgICAxODgsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjM3LFxuICAgICAgICAxODQsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAzOSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMjIsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTk0LFxuICAgICAgICA2MixcbiAgICAgICAgOTYsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMSxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogOTIsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiZzVqb0dkZzdpNkYvQnJmQ1JQSXN3RjJPaGFyUWEwRVdKWlNxMU5PYlBEaz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiTUdVaHl4SXFSTkdYbE1Cb2NiQy1td1wiLFxuICBcInBob25lSWRcIjogXCIwMzZlNzcxMS0xZjViLTRmZDMtYTRkZi0wNWQxNWUzNzc1ZmJcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTI0LFxuICAgICAgMTcsXG4gICAgICAxMjQsXG4gICAgICA2MyxcbiAgICAgIDIxMixcbiAgICAgIDUyLFxuICAgICAgNzksXG4gICAgICAyNDgsXG4gICAgICAxODgsXG4gICAgICAzOCxcbiAgICAgIDg1LFxuICAgICAgMTg3LFxuICAgICAgMjA0LFxuICAgICAgNjgsXG4gICAgICAyMixcbiAgICAgIDQzLFxuICAgICAgMTg5LFxuICAgICAgMzEsXG4gICAgICAzNixcbiAgICAgIDIxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDU1LFxuICAgICAgMjEzLFxuICAgICAgMTEsXG4gICAgICAxODEsXG4gICAgICAyMzIsXG4gICAgICAxMDEsXG4gICAgICAxMDEsXG4gICAgICA4MSxcbiAgICAgIDIyNyxcbiAgICAgIDExMSxcbiAgICAgIDE2NixcbiAgICAgIDQ5LFxuICAgICAgNzYsXG4gICAgICAxNzksXG4gICAgICAxNyxcbiAgICAgIDIyMyxcbiAgICAgIDEyMixcbiAgICAgIDU2LFxuICAgICAgNzYsXG4gICAgICAyNDRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiUzFOUjFDUEZcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1NDcwNzU0MTE4ODoyN0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjA3NjMyMDU2OTk2MDc3OjI3QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0xlWDErRUVFT2ZRbzdVR0dCZ2dBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiekoxdndsd0tON2s4UkgxVzZ0RldaUTFHR05DOE1CRkhCOEJCNWpsYm9IWT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJIU2VOTUQ3Z2pGSVhoQmJ5RHFCMW4zZmpYRk0wREpWOTUwTjhlWGVFTG1tNVNZeXk2M3pmS2pENEhET2lTbzlNU2diRHZpS2pVangycXdaa3BPVkJBZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJlQjlBUGx5RlFvWmQ1NUd3SmJYWEJSaFVLSUZiajRjUTFmQjZQMEVjQ0NsbHlnZ2VXV3Z5Q0JrbGhhN0xkbnNXOWRFc0djNmc4MkJscTZaL0VCeXpCdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTQ3MDc1NDExODg6MjdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTE4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjIzNDU1NzksXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFPV2RcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU9XZC5qc29uIjogIntcImtleURhdGFcIjpcIm5YcXE5M25DdVJ1WlJCeVNLcUxsbmp2STZ5a1BWVDRGRVNPaG9ya3pPR009XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTI3ODU5Mzk3NSxcImN1cnJlbnRJbmRleFwiOjQsXCJkZXZpY2VJbmRleGVzXCI6WzAsMSw0XX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "*Powered by MeshTech*", 
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "*MESH-TECH*",
  ownername:process.env.OWNER_NAME|| "MeshTech",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "Public",
  LANG: ( process.env.THEME ||  "Mesh"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
