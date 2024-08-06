const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="eliakimkiplagat441@gmail.com"
global.location="Kapsabet,kenya."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://Hamza:3800380ww@cluster0.uwommwq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://Hamza:3800380ww@cluster0.uwommwq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Nairobi";
global.github=process.env.GITHUB|| "https://github.com/DJELIAKIM/Suhail-Md";
global.gurl  =process.env.GURL  || "";
global.website=process.env.GURL || ""; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "*ᴘᴏᴡᴇʀᴇᴅ ʙʏ eliakimtech*" 


global.devs = "254745931715" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254745931715";




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
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "254745931715,254xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_13_10_08_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICA1MixcbiAgICAgICAgMTUzLFxuICAgICAgICAxNSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNjEsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMTAsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMjksXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMTIsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjI5LFxuICAgICAgICA3NSxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNzYsXG4gICAgICAgIDAsXG4gICAgICAgIDYsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTI1LFxuICAgICAgICAxODgsXG4gICAgICAgIDAsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNDAsXG4gICAgICAgIDQxLFxuICAgICAgICAxMjYsXG4gICAgICAgIDg0LFxuICAgICAgICAxMTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTgwLFxuICAgICAgICAyLFxuICAgICAgICAyMDcsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTk3LFxuICAgICAgICAxMjIsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNSxcbiAgICAgICAgMTc0LFxuICAgICAgICAyMjcsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMzcsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTM3LFxuICAgICAgICAxOTYsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjQsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTUyLFxuICAgICAgICAxNixcbiAgICAgICAgMTgyLFxuICAgICAgICAxMzEsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNjgsXG4gICAgICAgIDE4OCxcbiAgICAgICAgODcsXG4gICAgICAgIDk0LFxuICAgICAgICA4MSxcbiAgICAgICAgMzdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk2LFxuICAgICAgICAxNCxcbiAgICAgICAgNTgsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjM5LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNzksXG4gICAgICAgIDM2LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxOTEsXG4gICAgICAgIDg4LFxuICAgICAgICA1NCxcbiAgICAgICAgMTAzLFxuICAgICAgICAyNTQsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTg5LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTg1LFxuICAgICAgICAzMixcbiAgICAgICAgMTE2LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMixcbiAgICAgICAgMTQ0LFxuICAgICAgICAyNDMsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNzBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzcsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTc1LFxuICAgICAgICA0NixcbiAgICAgICAgNTQsXG4gICAgICAgIDEyMixcbiAgICAgICAgNDUsXG4gICAgICAgIDUxLFxuICAgICAgICA5NCxcbiAgICAgICAgMjI4LFxuICAgICAgICAyNDQsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTU0LFxuICAgICAgICAyMjAsXG4gICAgICAgIDkzLFxuICAgICAgICAxOTIsXG4gICAgICAgIDIsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTUyLFxuICAgICAgICAxMzUsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTAxLFxuICAgICAgICA5NixcbiAgICAgICAgMjQxLFxuICAgICAgICAxOTksXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNSxcbiAgICAgICAgNixcbiAgICAgICAgMTA4LFxuICAgICAgICA1MSxcbiAgICAgICAgMTEzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjAsXG4gICAgICAgIDQ1LFxuICAgICAgICA3NCxcbiAgICAgICAgMjE5LFxuICAgICAgICAyMyxcbiAgICAgICAgODYsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTIxLFxuICAgICAgICA0MSxcbiAgICAgICAgMTIxLFxuICAgICAgICAyMzMsXG4gICAgICAgIDI0LFxuICAgICAgICA0NixcbiAgICAgICAgMTgwLFxuICAgICAgICAxNjksXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTE0LFxuICAgICAgICAxOTYsXG4gICAgICAgIDEyMixcbiAgICAgICAgODcsXG4gICAgICAgIDcwLFxuICAgICAgICAyNTUsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTY3LFxuICAgICAgICA2NyxcbiAgICAgICAgNTMsXG4gICAgICAgIDc1LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE2NyxcbiAgICAgICAgODUsXG4gICAgICAgIDM3LFxuICAgICAgICA5N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzMSxcbiAgICAgICAgODUsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNzcsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjIyLFxuICAgICAgICAxOTEsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNjgsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMTEsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMDQsXG4gICAgICAgIDczLFxuICAgICAgICAyMjgsXG4gICAgICAgIDExNixcbiAgICAgICAgODIsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNjMsXG4gICAgICAgIDUsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNDcsXG4gICAgICAgIDgwLFxuICAgICAgICAxMDUsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMixcbiAgICAgICAgMTEwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDksXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDExM1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICA1MCxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgNzBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTMsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjMwLFxuICAgICAgICAyOSxcbiAgICAgICAgMjA3LFxuICAgICAgICAyMzIsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMjIsXG4gICAgICAgIDI4LFxuICAgICAgICAxMTAsXG4gICAgICAgIDIzNyxcbiAgICAgICAgODQsXG4gICAgICAgIDE4LFxuICAgICAgICAxMixcbiAgICAgICAgMjQ4LFxuICAgICAgICA3OCxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMTMsXG4gICAgICAgIDY5LFxuICAgICAgICA1NSxcbiAgICAgICAgMjAyLFxuICAgICAgICA1NyxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMTMsXG4gICAgICAgIDExMyxcbiAgICAgICAgMzgsXG4gICAgICAgIDMsXG4gICAgICAgIDg5LFxuICAgICAgICA0NSxcbiAgICAgICAgMjAzLFxuICAgICAgICAxOTUsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjI3LFxuICAgICAgICA5MyxcbiAgICAgICAgNSxcbiAgICAgICAgMTE2LFxuICAgICAgICA1NyxcbiAgICAgICAgMTQ2LFxuICAgICAgICA4MyxcbiAgICAgICAgMzUsXG4gICAgICAgIDc0LFxuICAgICAgICAyNCxcbiAgICAgICAgMTUzLFxuICAgICAgICAyNDIsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNzAsXG4gICAgICAgIDk3LFxuICAgICAgICAwLFxuICAgICAgICAxNzEsXG4gICAgICAgIDYwLFxuICAgICAgICAxNyxcbiAgICAgICAgMzEsXG4gICAgICAgIDM3LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxLFxuICAgICAgICAxNDMsXG4gICAgICAgIDEyLFxuICAgICAgICAxNzEsXG4gICAgICAgIDUwLFxuICAgICAgICA4XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA2NyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCIvaDBOOUtTdUJ2emFBOXJpT3Jkb25PakQvUnNtWlNHcldpRHJ2Ti91aDVJPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJSTEtxSWl0N1RNYVVTdXBWQldSdUVnXCIsXG4gIFwicGhvbmVJZFwiOiBcImZhYWE2NzJkLWM3M2QtNDczZi04YzZiLTAyYTI0OWJkOTcxNFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMyxcbiAgICAgIDIyMixcbiAgICAgIDMsXG4gICAgICAxMzAsXG4gICAgICAxNjcsXG4gICAgICA0OSxcbiAgICAgIDIxLFxuICAgICAgMjksXG4gICAgICAzMixcbiAgICAgIDQwLFxuICAgICAgMTgwLFxuICAgICAgNDAsXG4gICAgICAyMyxcbiAgICAgIDQxLFxuICAgICAgMTcxLFxuICAgICAgMTIsXG4gICAgICA1OCxcbiAgICAgIDQsXG4gICAgICAxNjQsXG4gICAgICA3NFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxODUsXG4gICAgICAxMTQsXG4gICAgICA4NSxcbiAgICAgIDEyLFxuICAgICAgMTgxLFxuICAgICAgMTQ1LFxuICAgICAgMjEsXG4gICAgICAxMzAsXG4gICAgICAxMDQsXG4gICAgICAxODUsXG4gICAgICAyMDYsXG4gICAgICA2NCxcbiAgICAgIDE1OCxcbiAgICAgIDIwMSxcbiAgICAgIDEyMyxcbiAgICAgIDIzMixcbiAgICAgIDE4MyxcbiAgICAgIDIwOSxcbiAgICAgIDI1MixcbiAgICAgIDEyNlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJESjhaMUpORFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU0NzQ1OTMxNzE1OjhAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJAZmF5ZXpcIixcbiAgICBcImxpZFwiOiBcIjE3OTc3NDkxNTg4NzIxMzo4QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1BIeDlaMEJFTkxCeUxVR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiWmdWMjlMSDNtWTM3NGpKMHN3QmdMdUF4VTdkbUtqQzVpVUl0S3FGUVgybz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJCZlFJNE5SKysxcW5HNGV4eEIwUTFXWi9MV0k2Z1hUNzlJWnhRblMzTXZkNHFseUFZdXU2QU9hamFQdS9OdTBwNE4rRzJ4NWUwMkpuZ0sxaFVyTUtBUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJVSU14Q1FtZVZFWkpnRkhrakxDejdCYVN4b1JQSVhKbC9CVkNmZHlNRFJBOEV0TWUxcXZER3ZwYTlISm4yaTVtZzVDa0E4K2hmdXhlTUZCNCtiRkVEUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTQ3NDU5MzE3MTU6OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICA1LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDEwNlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIyOTQ5ODQ2XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "", 
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "*ELIAKIM-TECH*",
  ownername:process.env.OWNER_NAME|| "eliakim KE",


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
