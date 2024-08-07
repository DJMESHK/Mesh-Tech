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
global.github=process.env.GITHUB|| "https://github.com/DJMESHK/Suhail-Md";
global.gurl  =process.env.GURL  || "";
global.website=process.env.GURL || ""; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/DJMESHK/Suhail-Md/blob/main/lib/assets/Suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_22_03_07_30_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICA0MCxcbiAgICAgICAgNzQsXG4gICAgICAgIDM5LFxuICAgICAgICA5MCxcbiAgICAgICAgNTgsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjE4LFxuICAgICAgICAxNixcbiAgICAgICAgNTcsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjQsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTAwLFxuICAgICAgICA5LFxuICAgICAgICAyMTAsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNjgsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTk5LFxuICAgICAgICAxODksXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjM2LFxuICAgICAgICA3NixcbiAgICAgICAgMzcsXG4gICAgICAgIDUsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMTNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTUsXG4gICAgICAgIDE4NixcbiAgICAgICAgNjksXG4gICAgICAgIDE3MSxcbiAgICAgICAgNjEsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMDcsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNDQsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMzAsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMixcbiAgICAgICAgMjM2LFxuICAgICAgICAxNzIsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTk3LFxuICAgICAgICAxNzAsXG4gICAgICAgIDQyLFxuICAgICAgICAyNCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNDEsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTkzLFxuICAgICAgICA1LFxuICAgICAgICA4LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNTVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MixcbiAgICAgICAgMTg1LFxuICAgICAgICAxNixcbiAgICAgICAgMTYwLFxuICAgICAgICAxODAsXG4gICAgICAgIDY5LFxuICAgICAgICAxNjQsXG4gICAgICAgIDgxLFxuICAgICAgICAxNjYsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjM2LFxuICAgICAgICA3MixcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMTMsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTkwLFxuICAgICAgICA1MSxcbiAgICAgICAgMTA5LFxuICAgICAgICA5NCxcbiAgICAgICAgMjMsXG4gICAgICAgIDI3LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMzQsXG4gICAgICAgIDczLFxuICAgICAgICA4MSxcbiAgICAgICAgMTY4LFxuICAgICAgICA4MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzUsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTE2LFxuICAgICAgICA5NyxcbiAgICAgICAgMTAsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTMxLFxuICAgICAgICAyMTMsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNTMsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTA1LFxuICAgICAgICAyMTIsXG4gICAgICAgIDU3LFxuICAgICAgICAxMSxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNTQsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMyxcbiAgICAgICAgNzIsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjcsXG4gICAgICAgIDM5LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjUzLFxuICAgICAgICAyMjksXG4gICAgICAgIDYzLFxuICAgICAgICAyMzMsXG4gICAgICAgIDE3MCxcbiAgICAgICAgODNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwOCxcbiAgICAgICAgNzUsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNDUsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNjAsXG4gICAgICAgIDExLFxuICAgICAgICAxNTksXG4gICAgICAgIDIzLFxuICAgICAgICAxMjEsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNzEsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTc1LFxuICAgICAgICAxNDAsXG4gICAgICAgIDIxNixcbiAgICAgICAgNDAsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMjcsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNzEsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMzcsXG4gICAgICAgIDIzOCxcbiAgICAgICAgODVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQwLFxuICAgICAgICAxNixcbiAgICAgICAgMzAsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjI2LFxuICAgICAgICA2MSxcbiAgICAgICAgNjQsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMjMsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjExLFxuICAgICAgICAxOSxcbiAgICAgICAgMSxcbiAgICAgICAgMTY1LFxuICAgICAgICAzMixcbiAgICAgICAgMTUyLFxuICAgICAgICAyMTMsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMTAsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjE0LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTYyLFxuICAgICAgICAxODAsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTc2LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTMyLFxuICAgICAgICA4MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTA2XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEyNixcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMixcbiAgICAgICAgICA4MixcbiAgICAgICAgICAzNixcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAyNVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMjQsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjEwLFxuICAgICAgICAyNDUsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTAyLFxuICAgICAgICAyNDgsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTc3LFxuICAgICAgICA1MCxcbiAgICAgICAgMTA0LFxuICAgICAgICAyNTMsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMjYsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMCxcbiAgICAgICAgMTg1LFxuICAgICAgICA2OSxcbiAgICAgICAgMjIsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTQsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMCxcbiAgICAgICAgMjUzLFxuICAgICAgICAyNDEsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNTcsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjI4LFxuICAgICAgICAyNCxcbiAgICAgICAgMTcsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTI1LFxuICAgICAgICA0MCxcbiAgICAgICAgMTg3LFxuICAgICAgICAxOTksXG4gICAgICAgIDg4LFxuICAgICAgICAxNTksXG4gICAgICAgIDM1LFxuICAgICAgICAyMDcsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNzQsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTc2LFxuICAgICAgICA5NSxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMzIsXG4gICAgICAgIDkwLFxuICAgICAgICA1MyxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMTgsXG4gICAgICAgIDExNyxcbiAgICAgICAgNDksXG4gICAgICAgIDY4LFxuICAgICAgICA4MCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxOTMsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTE1LFxuICAgICAgICAxMjIsXG4gICAgICAgIDlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDcxLFxuICBcImFkdlNlY3JldEtleVwiOiBcInhPU1d6WE5Fekl6L29VSWh6OXhlVm9KNmI5Q28xU2FuTE9hbDhsOVJ4UlE9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkdncXdQM3p0U1ZhdXBiMnRjN3lGeGdcIixcbiAgXCJwaG9uZUlkXCI6IFwiYWY1Zjg1NzgtZDFlOS00OTNmLWEzMzQtMmI5NWFlMDExNzkwXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDc2LFxuICAgICAgMTI5LFxuICAgICAgMTI4LFxuICAgICAgMjAxLFxuICAgICAgMTMyLFxuICAgICAgMjA4LFxuICAgICAgNzYsXG4gICAgICA3OCxcbiAgICAgIDY0LFxuICAgICAgMTExLFxuICAgICAgNixcbiAgICAgIDkyLFxuICAgICAgMzAsXG4gICAgICA2NSxcbiAgICAgIDIwOSxcbiAgICAgIDg0LFxuICAgICAgMjA3LFxuICAgICAgMjQ3LFxuICAgICAgMTE1LFxuICAgICAgN1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxODksXG4gICAgICA4MSxcbiAgICAgIDE0MyxcbiAgICAgIDIwOSxcbiAgICAgIDIwLFxuICAgICAgNzAsXG4gICAgICAxNDQsXG4gICAgICAxOTEsXG4gICAgICAxNDYsXG4gICAgICAxNDgsXG4gICAgICAyMzYsXG4gICAgICAzNixcbiAgICAgIDIzNCxcbiAgICAgIDIsXG4gICAgICA4MCxcbiAgICAgIDE1NixcbiAgICAgIDE5OCxcbiAgICAgIDE2NCxcbiAgICAgIDksXG4gICAgICAxODhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiU0JCVEdURkRcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1NDcwNzU0MTE4ODoyOEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjA3NjMyMDU2OTk2MDc3OjI4QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0xlWDErRUVFSkxHcGJVR0dCa2dBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiekoxdndsd0tON2s4UkgxVzZ0RldaUTFHR05DOE1CRkhCOEJCNWpsYm9IWT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCI4YVJiNmpQSWhaM0YyeHlqRWZMZTdRelc2S2R3c24vWE5Ya1I3OGFqeVBvZG9EbGFhZXdpMTFGbkZPWmhxUW8wOThmTjduOVd2UlBuRTZDbzdyb3NDZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCIzQmlKd3NtTHg1K0RnR3liLzhrRFdwV2g2RmdVeHZmaDVtd1B6OXorSDNUaTYyWFNNbWxsSXE5eTNpaHIrT1dReEkza3lxZUdHUVB1TmpqNUExOXdEdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTQ3MDc1NDExODg6MjhAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTE4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjIzNzY5ODIsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFPV2RcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU9XZC5qc29uIjogIntcImtleURhdGFcIjpcIm5YcXE5M25DdVJ1WlJCeVNLcUxsbmp2STZ5a1BWVDRGRVNPaG9ya3pPR009XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTI3ODU5Mzk3NSxcImN1cnJlbnRJbmRleFwiOjQsXCJkZXZpY2VJbmRleGVzXCI6WzAsMSw0XX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="

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
