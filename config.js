const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="Kipkogeimeshack6@gmail.com"
global.location="Kapsabet,kenya."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://Hamza:3800380ww@cluster0.uwommwq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://Hamza:3800380ww@cluster0.uwommwq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Nairobi";
global.github=process.env.GITHUB|| "https://github.com/DJMESHK/Mesh-Tech";
global.gurl  =process.env.GURL  || "";
global.website=process.env.GURL || ""; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/DJMESHK/Mesh-Tech/blob/main/lib/assets/Suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "*ᴘᴏᴡᴇʀᴇᴅ ʙʏ MeshTech*" 


global.devs = "254716091070" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254716091070";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "true" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://github.com/DJMESHK/Mesh-Tech/blob/main/lib/assets/Suhail.jpg?raw=true" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,254xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,254xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "254716091070,254xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_16_10_08_07_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAxNjYsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNjYsXG4gICAgICAgIDE5LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE0LFxuICAgICAgICAxODEsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTMzLFxuICAgICAgICA1MyxcbiAgICAgICAgOTksXG4gICAgICAgIDk4LFxuICAgICAgICA2NyxcbiAgICAgICAgMTU2LFxuICAgICAgICA2NCxcbiAgICAgICAgMSxcbiAgICAgICAgMTEsXG4gICAgICAgIDE4LFxuICAgICAgICAyNixcbiAgICAgICAgODIsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTcsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTUsXG4gICAgICAgIDk5LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNCxcbiAgICAgICAgNDEsXG4gICAgICAgIDg1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MixcbiAgICAgICAgNjYsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTM1LFxuICAgICAgICAzMixcbiAgICAgICAgNDksXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTA3LFxuICAgICAgICAxNSxcbiAgICAgICAgMSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxODQsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTM0LFxuICAgICAgICA1NSxcbiAgICAgICAgMzMsXG4gICAgICAgIDEwNixcbiAgICAgICAgODIsXG4gICAgICAgIDIyLFxuICAgICAgICA2NCxcbiAgICAgICAgMTYwLFxuICAgICAgICAzNCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNCxcbiAgICAgICAgNzIsXG4gICAgICAgIDExMixcbiAgICAgICAgMTU4LFxuICAgICAgICAxLFxuICAgICAgICA4MyxcbiAgICAgICAgNjAsXG4gICAgICAgIDIwNSxcbiAgICAgICAgODlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MCxcbiAgICAgICAgNDIsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjM3LFxuICAgICAgICAyNDksXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjIsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMCxcbiAgICAgICAgNDcsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMDksXG4gICAgICAgIDQsXG4gICAgICAgIDE1LFxuICAgICAgICA3NSxcbiAgICAgICAgMjIzLFxuICAgICAgICA3OSxcbiAgICAgICAgMzIsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTg3LFxuICAgICAgICAxNzQsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMzksXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMTcsXG4gICAgICAgIDk0LFxuICAgICAgICAxMTgsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA2LFxuICAgICAgICAyMTIsXG4gICAgICAgIDIyLFxuICAgICAgICAxMzUsXG4gICAgICAgIDYzLFxuICAgICAgICAyMSxcbiAgICAgICAgMTc5LFxuICAgICAgICAyNSxcbiAgICAgICAgNzcsXG4gICAgICAgIDExNyxcbiAgICAgICAgMzIsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMTUsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTMsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjIyLFxuICAgICAgICAyMTksXG4gICAgICAgIDE4OCxcbiAgICAgICAgNDcsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjUyLFxuICAgICAgICA4OSxcbiAgICAgICAgNTMsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjAyLFxuICAgICAgICA2MSxcbiAgICAgICAgMjI1LFxuICAgICAgICA0MCxcbiAgICAgICAgMTc4LFxuICAgICAgICA0NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICA0MixcbiAgICAgICAgMjA5LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMTksXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTMsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMyxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMzEsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjE5LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNTksXG4gICAgICAgIDQxLFxuICAgICAgICAyNyxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMzQsXG4gICAgICAgIDY2LFxuICAgICAgICAyMSxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMzEsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjUsXG4gICAgICAgIDM5LFxuICAgICAgICA3NSxcbiAgICAgICAgMTA4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU2LFxuICAgICAgICAyNDcsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTY1LFxuICAgICAgICAyMTksXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMDAsXG4gICAgICAgIDY0LFxuICAgICAgICAxNTgsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTk2LFxuICAgICAgICA5NCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxOTIsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjgsXG4gICAgICAgIDkyLFxuICAgICAgICAxNTIsXG4gICAgICAgIDE1LFxuICAgICAgICAxMDAsXG4gICAgICAgIDk3LFxuICAgICAgICAyMzcsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMzQsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTY4LFxuICAgICAgICA5OSxcbiAgICAgICAgNDZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTE0XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDY3LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxMTBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTMsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNDgsXG4gICAgICAgIDQ2LFxuICAgICAgICA0MSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE2LFxuICAgICAgICA0LFxuICAgICAgICA0NSxcbiAgICAgICAgMjcsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTcwLFxuICAgICAgICA2OCxcbiAgICAgICAgNjUsXG4gICAgICAgIDIxMCxcbiAgICAgICAgODYsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjAyLFxuICAgICAgICA2OSxcbiAgICAgICAgNTAsXG4gICAgICAgIDc5LFxuICAgICAgICAxMjAsXG4gICAgICAgIDg4LFxuICAgICAgICAxNTcsXG4gICAgICAgIDgxLFxuICAgICAgICA5MyxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMjEsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNjUsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjA3LFxuICAgICAgICAxMDMsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNjIsXG4gICAgICAgIDQsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMSxcbiAgICAgICAgMjcsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTMzLFxuICAgICAgICA0LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE0MixcbiAgICAgICAgOTEsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjEsXG4gICAgICAgIDIxOCxcbiAgICAgICAgODAsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTI2LFxuICAgICAgICA2OCxcbiAgICAgICAgMTg3LFxuICAgICAgICAyNCxcbiAgICAgICAgMjM5LFxuICAgICAgICAxNDIsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjM5LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjI3LFxuICBcImFkdlNlY3JldEtleVwiOiBcIjJOcm9DbE5ScE9sUkJ1dHJNalAxYVZiS2Y1eW1qanh6QUp6UU9mbXNmMW89XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInVyWWlzQ1VTUUFXX181Vm5mNDNCLXdcIixcbiAgXCJwaG9uZUlkXCI6IFwiNGVhMTkzNTYtZGM4NS00ZDM1LTk1NWYtN2YzNjUwZjQ5MmY1XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE5NCxcbiAgICAgIDIyNyxcbiAgICAgIDI0OCxcbiAgICAgIDIwLFxuICAgICAgMTIxLFxuICAgICAgMTM5LFxuICAgICAgMTU3LFxuICAgICAgMTA1LFxuICAgICAgMjEsXG4gICAgICAxMTIsXG4gICAgICAxMTksXG4gICAgICAxODUsXG4gICAgICAxMTYsXG4gICAgICAxNjcsXG4gICAgICAxMixcbiAgICAgIDE3OCxcbiAgICAgIDQ4LFxuICAgICAgMTU5LFxuICAgICAgMTAyLFxuICAgICAgMTU4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDQ4LFxuICAgICAgMTA1LFxuICAgICAgOTMsXG4gICAgICAyNDgsXG4gICAgICAyMTEsXG4gICAgICA5MSxcbiAgICAgIDUyLFxuICAgICAgMTIwLFxuICAgICAgMTA2LFxuICAgICAgNzcsXG4gICAgICA1NixcbiAgICAgIDIzNyxcbiAgICAgIDk2LFxuICAgICAgODIsXG4gICAgICA2MyxcbiAgICAgIDQwLFxuICAgICAgMTQ3LFxuICAgICAgMTU5LFxuICAgICAgNzcsXG4gICAgICAxMjJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiTEhDTkhYQk1cIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1NDcxNjA5MTA3MDo5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyNDEwNTk5Mzg0NzE5NTU6OUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPWElvcmdFRU5tNHpyVUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkpwaWI3Zm1IcVV5WUh2RzR5a1doYUU3Z28wdHUvYnpjamt4QVdiQ0RnMDg9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiZWN2Y3N5UUlnSzdKUS9ZWHdqZWpQTldYODZ1VGpQdmF2MG43UkdETFFVZE1lem03Y0dNKzArK3lYTG05NGMyQ1pWbGdQWFFHdjRFV0dMLzBFRkQ4RHc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiTmpRNXlyTUM4S0RFMjV4TGxJRWlpZkpKa3c2YmJOOWh5a0hhK296ekExdHh6OVIrTjR1ZVYrSktDWFNvSXlVbW5uRGNhMGNJMlhxN3ZEVTNHekNpQmc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU0NzE2MDkxMDcwOjlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgNzlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMzA0NzAwNyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQVAwVlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBUDBWLmpzb24iOiAie1wia2V5RGF0YVwiOlwiLytZSWViWkcycWt6SG5OUlNuZkhWaVpOZTZTZ3JzZWZ4V01LbWdIcVFnMD1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMTkxNzQ4NzA2LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "", 
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "*MESH-TECH*",
  ownername:process.env.OWNER_NAME|| "Mesh KE",


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
