//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "davidcyril209@gmail.com";
global.location = "Abuja, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/Queen_Anita-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg";
global.devs = "https://t.me/deecee_x";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "8035249163";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/H4qeXwa.jpeg,https://telegra.ph/file/ba9ced500f9eca7db8acb.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSUdpa2MwRkt4dFNEbko3djFhZFBiMmJYS1hzbnJXU2JqWGM3QXBybloycz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNFVJT1NIV2dRalJOL0I4QTFYZUlSTHRLNGVlVjJQaG82V1hqZWRVbmszRT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDS0RNRkl1NDEwYmZ1YUpydEZkUEVQWnp0WW5meTc3ODEvRi9GTVM2S2swPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJOQm5NdldLTFg5UTFpT3NwU3hrY1ROalY1SkJYUDdyQXNNUTI4cEZZNFd3PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IldCM3BBai9IUmRhMmp0YUQyN2lqUnl1WENzTDYyektidWNwWVRpRzh3bTg9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InJNNm1WRmxIRHNXTVpsQkt5bUNVRTM1K2V3NS9QTldmMkFKM2FJV2lIRlk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK01FSjJBRHVFSFhLUGtxbHF5ODJUTVNTbW5MalpkRkpqSnVmaXh0emtFTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiM1JIYUI2S1A3eHd3d3dlNjZYZC9xVzdicjJFaTJkcWF0WlF1SUhFbVp6dz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im1JOXFhb0ZzcXB6TVlMckkrbXF1SjhqWUI4UlpwTEJCY0NlaFFyZDZFMitJT2lVZkpLcytEQmlERkM0S2ZVbUt6TWpMUGYyU0p0VVplQUtaUXo2WUNRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTEyLCJhZHZTZWNyZXRLZXkiOiJTSHd4alRKZGdwUzFuOThMU3RoME1ucEJGWXZHUWtGZFNvQ0I3M2dmeFprPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJfaXZScVBxNVNVS2Z3TFNzMVdRWFBBIiwicGhvbmVJZCI6Ijc1YmI2ZmVlLWUxNzctNDM5Mi05M2U4LWE5YjFkMWI5NDQ2MiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJaQW9uSlQ4d2RLSkRhd2JVaEVxTHM1QkxkZVk9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiN3Z3dWQ2UWRsYmJ2SjdxalE2UHZpalNNU0pjPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjFWWERXR0FSIiwibWUiOnsiaWQiOiIyMzQ4MDM1MjQ5MTYzOjNAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiQW1rIEtpdGNoZW4gRXNzZW50aWFscyJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTTZkK2ZVSkVMRFhncmNHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiTDNra2ZwSThWckdGdXkyczZoODhvZDF3citXU09SR1NHWi9jZElYb2NYND0iLCJhY2NvdW50U2lnbmF0dXJlIjoiN1ROVWRTOHJiY0xkcjJQdDh4MjVTaUhncFdJd2EvVFJkbGgxZVMyVVlmdkVpa2FvMThhUVVDQmpDQWloZzNkdUxvQmxOSWVvVlZHdlFvQ253SVhZQnc9PSIsImRldmljZVNpZ25hdHVyZSI6IlV4cHlqRnU3Yk1EbHk4cjdFcW5KOWdXenE5QmlGam95NTcrM09oM2JPM215RHFGNGliYkVlN2JpeHB0V1l6dERTR1pkYWkxWWZFQzVFMHpaZWo1QkFRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjM0ODAzNTI0OTE2MzozQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlM5NUpINlNQRmF4aGJzdHJPb2ZQS0hkY0svbGtqa1JraG1mM0hTRjZIRisifX1dLCJwbGF0Zm9ybSI6InNtYmkiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjYwMDAwNjJ9"
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ANITA-V2™`",
  author: process.env.PACK_AUTHER || "QUEEN_ANITA-V2",
  packname: process.env.PACK_NAME || "A N I T A",
  botname: process.env.BOT_NAME || "QUEEN_ANITA-V2",
  ownername: process.env.OWNER_NAME || "David Cyril",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "A N I T A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
