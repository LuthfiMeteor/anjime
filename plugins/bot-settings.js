let handler = async (m, { conn }) =>
conn.relayWAMessage(conn.prepareMessageFromContent(m.chat, {
                    "listMessage":  {
                        "title": `Hai Kak ${conn.getName(m.sender)}\n━━〔 𝗦𝗘𝗧𝗧𝗜𝗡𝗚 𝗕𝗢𝗧 〕━━`,
                        "description": "\n\n*@AxellXyz*",
                        "footerText": "𝗖𝗟𝗜𝗖𝗞 𝗕𝗘𝗟𝗢𝗪 𝗔𝗡𝗗 𝗖𝗛𝗢𝗢𝗦𝗘",
                        "buttonText": "𝗖𝗟𝗜𝗖𝗞 𝗛𝗘𝗥𝗘❗",
                        "listType": "SINGLE_SELECT",
                        "sections": [
                            {
                                "rows": [
                                    {
                                    	"title": "WELCOME👋",
                                        "description": "mengaktifkan fitur Welcome",
                                        "rowId": ".on welcome"
                                        },{
                                    	"title": "OFF WELCOME👋",
                                        "description": "menonaktifkan fitur Welcome",
                                        "rowId": ".off welcome"
                                        },{
                                    	"title": "ANTI DELETE⛔",
                                        "description": "mengaktifkan fitur Anti Delete",
                                        "rowId": ".on delete"
                                        },{
                                        "title": "OFF ANTI DELETE⛔",
                                        "description": "menonaktifkan fitur Anti Delete",
                                        "rowId": ".off delete"
                                        },{
                                        "title": "VIEWONCE💾",
                                        "description": "mengaktifkan fitur Viewonce",
                                        "rowId": ".on viewonce"
                                        },{
                                        "title": "OFF VIEWONCE💾",
                                        "description": "menonaktifkan fitur Viewonce",
                                        "rowId": ".off viewonce"             
                                        },{
                                        "title": "DETECT🧿",
                                        "description": "mengaktifkan fitur Detect",
                                        "rowId": ".on detect"
                                        },{
                                        "title": "OFF DETECT🧿",
                                        "description": "menonaktifkan fitur Detect",
                                        "rowId": ".off detect"
                                        },{
                                    	"title": "ANTIBADWORD🚫",
                                        "description": "mengaktifkan fitur Antibadword",
                                        "rowId": ".on antibadword"
                                        },{
                                    	"title": "OFF ANTIBADWORD🚫",
                                        "description": "menonaktifkan fitur Antibadword",
                                        "rowId": ".off antibadword"
                                        },{
                                    	"title": "ANTILINK❗",
                                        "description": "mengaktifkan fitur Antilink",
                                        "rowId": ".on antilink"
                                        },{
                                    	"title": "OFF ANTILINK❗",
                                        "description": "menonaktifkan fitur Antilink",
                                        "rowId": ".off antilink"
                                        },{
                                    	"title": "ANONYMOUS🥷",
                                        "description": "mengaktifkan fitur Anonymous Chat",
                                        "rowId": ".on anon"
                                        },{
                                    	"title": "OFF ANONYMOUS🥷",
                                        "description": "menonaktifkan fitur Anonymous Chat",
                                        "rowId": ".off anon"
                                        },{
                                    	"title": "ANTI CALL☎️",
                                        "description": "mengaktifkan fitur Anti Call",
                                        "rowId": ".on anticall"
                                        },{
                                    	"title": "OFF ANTI CALL☎️",
                                        "description": "menonaktifkan fitur Anti Call",
                                        "rowId": ".off anticall"
                                        },{
                                    	"title": "ANTI SPAM💮",
                                        "description": "mengaktifkan fitur Anti Spam",
                                        "rowId": ".on antispam"
                                        },{
                                    	"title": "OFF ANTI SPAM💮",
                                        "description": "menonaktifkan fitur Anti Spam",
                                        "rowId": ".off anticall"
                                        },{
                                    	"title": "ANTI TROLI🛒",
                                        "description": "mengaktifkan fitur Anti Troli",
                                        "rowId": ".on antitroli"
                                        },{
                                    	"title": "OFF ANTI TROLI🛒",
                                        "description": "menonaktifkan fitur Anti Troli",
                                        "rowId": ".off antitroli"
                                        },{
                                    	"title": "AUTO READ👀",
                                        "description": "mengaktifkan fitur Auto Read",
                                        "rowId": ".on autoread"
                                        },{
                                    	"title": "OFF AUTO READ👀",
                                        "description": "menonaktifkan fitur Auto Read",
                                        "rowId": ".off autoread"
                                        },{
                                    	"title": "BACKUP🗃️",
                                        "description": "mengaktifkan fitur Backup",
                                        "rowId": ".on backup"
                                        },{
                                    	"title": "OFF BACKUP🗃️",
                                        "description": "menonaktifkan fitur Backup",
                                        "rowId": ".off backup"
                                        },{
                                    	"title": "GROUP ONLY🎀",
                                        "description": "mengaktifkan fitur Group Only",
                                        "rowId": ".on grouponly"
                                         },{
                                    	"title": "OFF GROUP ONLY🎀",
                                        "description": "menonaktifkan fitur Group Only",
                                        "rowId": ".off grouponly"
                                         },{
                                    	"title": "JADI BOT🤖",
                                        "description": "mengaktifkan fitur Jadi Bot",
                                        "rowId": ".on jadibot"
                                        },{
                                    	"title": "OFF JADI BOT🤖",
                                        "description": "menonaktifkan fitur Jadi Bot",
                                        "rowId": ".off jadibot"
                                        },{
                                    	"title": "NSFW 🔞",
                                        "description": "mengaktifkan fitur Nsfw",
                                        "rowId": ".on nsfw"
                                        },{
                                    	"title": "OFF NSFW 🔞",
                                        "description": "menonaktifkan fitur Nsfw",
                                        "rowId": ".off nsfw"
                                        },{
                                    	"title": "PUBLIC🌍",
                                        "description": "mengaktifkan fitur Public",
                                        "rowId": ".on public"
                                        },{
                                    	"title": "OFF PUBLIC🌍",
                                        "description": "menonaktifkan fitur Public",
                                        "rowId": ".off public"
                                        },{
                                    	"title": "AUTO LEVEL UP📊",
                                        "description": "mengaktifkan Auto Level Up",
                                        "rowId": ".on autolevelup"
                                        },{
                                    	"title": "OFF AUTO LEVEL UP📊",
                                        "description": "menonaktifkan fitur Auto Level Up",
                                        "rowId": ".off autolevelup"
                                        },{
                                    	"title": "RPG🗡️",
                                        "description": "mengaktifkan fitur Rpg",
                                        "rowId": ".on rpg"
                                        },{
                                    	"title": "OFF RPG🗡️",
                                        "description": "Menonaktifkan fitur Rpg",
                                        "rowId": ".off rpg"                                        
                                        },{
                                    	"title": "STICKER🌸",
                                        "description": "mengaktifkan fitur Sticker",
                                        "rowId": ".on stiker"
                                        },{
                                    	"title": "OFF STICKER🌸",
                                        "description": "menonaktifkan fitur Sticker",
                                        "rowId": ".off stiker"
                                        },{
                                    	"title": "SIMI✨",
                                        "description": "mengaktifkan fitur Simi",
                                        "rowId": ".on simi"
                                        },{
                                    	"title": "OFF SIMI✨",
                                        "description": "menonaktifkan fitur Simi",
                                        "rowId": ".off simi"
                                    }
                                ]
                            }
                        ], "contextInfo": { "stanzaId": m.key.id,
"participant": "0@s.whatsapp.net",
"quotedMessage": m.message
}
                    }
                 }, {}), {waitForAck: true})

handler.help = ['botsettings']
handler.tags = ['owner']
handler.command = /^(botsett|settingsbot|botsettings|settbot|botzsett)$/i
handler.owner = true
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
