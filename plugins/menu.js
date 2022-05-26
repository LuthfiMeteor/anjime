let levelling = require('../lib/levelling')
let { MessageType } = require('@adiwajshing/baileys')
let fs = require('fs')
let path = require('path')
let fetch = require('node-fetch')
let moment = require('moment-timezone')
let { performance } = require('perf_hooks')
let neww = Math.round(performance.now())
let old = Math.round(performance.now())
const chats = conn.chats.all()
const groups = chats.filter(v => v.jid.endsWith('g.us'))
const defaultMenu = {
  before: `

        ··────━•〔 llıѕнιиивσтཻུ⸙͎ 〕•━────··

🎐 *Name:* %name
🎐 *Premium:* %prems
🎐 *Age:* %age
🎐 *Limit:* %limit
🎐 *Money:* %money
🎐 *Role:* %role
🎐 *Level:* %level [%xp4levelup]
🎐 *Xp:* %exp / %maxexp
🎐 *Total Xp:* %totalexp

                   *〔 llı TODAY ıll 〕*

🎐 *${ucapan()} %name!*
🎐 *Tanggal:* %week %weton, %date
🎐 *Tanggal Islam:* %dateIslamic
🎐 *Waktu:* %time

                    *〔 llı INFO ıll 〕*      

🎐 *Nama Bot:* %me
🎐 *Mode:* ${global.opts['self'] ? 'Private' : 'Publik'}
🎐 *Prefix:* [ Multi Prefix ]
🎐 *Speed:* ${neww - old} ms
🎐 *Battery:* ${conn.battery != undefined ? `${conn.battery.value}% ${conn.battery.live ? '🔌 pengisian' : ''}` : 'tidak diketahui'}
🎐 *Uptime:* %uptime (%muptime)
🎐 *Database:* %rtotalreg dari %totalreg

          *〔 llı INFO COMMAND ıll 〕*     

*Ⓟ* = Premium
*Ⓛ* = Limit

%readmore`.trimStart(),
  header: '*╭────━•〔 %category 〕•━────┐*',
  body: '│ ⸙͎۪۫ %cmd %islimit %isPremium',
  footer: '*╰──────────━⃝┅⃝━────────┘*',
  after: `⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘ ⌕.
     %me
`,
}
let handler = async (m, { conn, usedPrefix: _p, args, command }) => {
	let bzz = './audio/robot.m4a'
	let { anon, anticall, antispam, antitroli, backup, jadibot, groupOnly, nsfw } = global.db.data.settings[conn.user.jid]
    let totaljadibot = [...new Set([...global.conns.filter(conn => conn.user && conn.state !== 'close').map(conn => conn.user)])]

    let _uptime = process.uptime() * 1000
    let uptime = clockString(_uptime)
  let tags
  let teks = `${args[0]}`.toLowerCase()
  let arrayMenu = ['all', 'game', 'edukasi', 'news', 'nsfw', 'xp', 'stiker', 'image', 'anime', 'kerangajaib', 'sound', 'vn', 'quotes', 'admin', 'rpg', 'grup', 'premium', 'internet', 'anonymous', 'nulis', 'downloader', 'tools', 'fun', 'database', 'quran', 'audio', 'jadibot', 'info', 'vote', 'tanpakategori', 'owner', 'gift', 'thnks']
  if (!arrayMenu.includes(teks)) teks = '404'
  if (teks == 'all') tags = {
    'main': 'Utama',
    'game': 'Game',
    'rpg': 'Epic Rpg',
    'xp': 'Exp & Limit',
    'fun': 'Fun',
    'jodoh': 'Jodoh',
    'gift': 'Gift',
    'anime': 'Anime',
    'hentai': `NSFW`,
    'premium': 'Premium',
    'anonymous': 'Anonymous Chat',
    'kerang': 'Kerang Ajaib',
    'sound': 'Sound Music',
    'vn': 'Vn Imuet',
    'quotes': 'Quotes',
    'absen': 'Absen',
    'vote': 'Voting',
    'admin': `Admin`,
    'group': 'Grup',
    'news': 'News',
    'internet': 'Internet',
    'edukasi': 'Edukasi',
    'quran': 'Islam',
    'image': 'Random Image',
    'sticker': 'Stiker',
    'nulis': 'MagerNulis & Logo',
    'audio': 'Pengubah Suara',
    'downloader': 'Downloader',
    'tools': 'Tools',
    'database': 'Database',
    'jadibot': 'Jadi Bot',
    'info': 'Info',
    '': 'Tanpa Kategori',
    'thnks': 'THANKS TO',
  }
  if (teks == 'game') tags = {
    'game': 'Game'
  }
  if (teks == 'xp') tags = {
    'xp': 'Exp & Limit'
  }
  if (teks == 'news') tags = {
    'news': 'News'
  }
  if (teks == 'edukasi') tags = {
    'edukasi': 'Edukasi'
  }
  if (teks == 'nsfw') tags = {
    'hentai': 'NSFW',
    'nsfw': 'HENTAI',
  }
  if (teks == 'stiker') tags = {
    'sticker': 'Stiker'
  }
  if (teks == 'rpg') tags = {
    'rpg': 'Epic Rpg'
  }
  if (teks == 'kerangajaib') tags = {
    'kerang': 'Kerang Ajaib'
  }
if (teks == 'sound') tags = {
    'sound': 'Sound Music'
  }
if (teks == 'vn') tags = {
    'vn': 'Vn Imuet'
  }
  if (teks == 'quotes') tags = {
    'quotes': 'Quotes'
  }
  if (teks == 'admin') tags = {
    'admin': `Admin ${global.opts['restrict'] ? '' : '(Dinonaktifkan)'}`
  }
  if (teks == 'grup') tags = {
    'group': 'Grup'
  }
  if (teks == 'premium') tags = {
    'premium': 'Premium'
  }
  if (teks == 'internet') tags = {
    'internet': 'Internet'
  }
  if (teks == 'image') tags = {
    'image': 'Random Image'
  }
  if (teks == 'anonymous') tags = {
    'anonymous': 'Anonymous Chat'
  }
  if (teks == 'nulis') tags = {
    'nulis': 'MagerNulis & Logo'
  }
  if (teks == 'downloader') tags = {
    'downloader': 'Downloader'
  }
  if (teks == 'tools') tags = {
    'tools': 'Tools'
  }
  if (teks == 'fun') tags = {
    'fun': 'Fun',
    'jodoh': 'Jodoh'
  }
  if (teks == 'jodoh') tags = {
    'jodoh': 'Jodoh'
  }
  if (teks == 'database') tags = {
    'database': 'Database'
  }
  if (teks == 'vote') tags = {
    'vote': 'Voting',
    'absen': 'Absen'
  }
    if (teks == 'anime') tags = {
    'anime': 'Anime'
  }
  if (teks == 'quran') tags = {
    'quran': 'Islam'
  }
  if (teks == 'gift') tags = {
    'gift': 'Gift'
  }
  if (teks == 'audio') tags = {
    'audio': 'Pengubah Suara'
  }
  if (teks == 'jadibot') tags = {
    'jadibot': 'Jadi Bot'
  }
  if (teks == 'info') tags = {
    'info': 'Info'
  }
  if (teks == 'tanpakategori') tags = {
    '': 'Tanpa Kategori'
  }
  if (teks == 'thnks') tags = {
    'thnks': 'THANKS TO'
  }
  if (teks == 'owner') tags = {
    'owner': 'Owner',
    'host': 'Host',
    'advanced': 'Advanced'
  }



  try {
    let package = JSON.parse(await fs.promises.readFile(path.join(__dirname, '../package.json')).catch(_ => '{}'))
    let { money, age, exp, limit, level, role, registered } = global.db.data.users[m.sender]
    let premium = global.db.data.users[m.sender].premium
    let prems = `${premium ? 'Yes': 'No'}`
    let wm = global.botwm
    let logo = global.logo
    let { min, xp, max } = levelling.xpRange(level, global.multiplier)
    let name = registered ? global.db.data.users[m.sender].name : conn.getName(m.sender)
    let d = new Date(new Date + 3600000)
    let locale = 'id'
    // d.getTimeZoneOffset()
    // Offset -420 is 18.00
    // Offset    0 is  0.00
    // Offset  420 is  7.00
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(d)
    let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
    let _uptime = process.uptime() * 1000
    let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let muptime = clockString(_muptime)
    let uptime = clockString(_uptime)
    let totalreg = Object.keys(global.db.data.users).length
    let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
    let help = Object.values(global.plugins).filter(plugin => !plugin.disabled).map(plugin => {
      return {
        help: Array.isArray(plugin.help) ? plugin.help : [plugin.help],
        tags: Array.isArray(plugin.tags) ? plugin.tags : [plugin.tags],
        prefix: 'customPrefix' in plugin,
        limit: plugin.limit,
        premium: plugin.premium,
        enabled: !plugin.disabled,
      }
    })
    if (teks == '404') {
      return conn.relayWAMessage(conn.prepareMessageFromContent(m.chat, {
        "listMessage": {
          "title": `*───────[ DASHBOARD ]───────*`.trim(),
          "description": `${ucapan()}, ${name} !`.trim(),
          "footerText": `「 *Bσt Ɩnfσrmαtισn* 」
🌸 Aktif selama ${uptime}
🌸 Baterai ${conn.battery != undefined ? `${conn.battery.value}% ${conn.battery.live ? '🔌 pengisian' : ''}` : 'tidak diketahui'}
🌸 Prefix : [Multi Prefix]
🌸 *${Object.keys(global.db.data.users).length}* Pengguna
🌸 *${totaljadibot.length}* Jadibot
🌸 *${conn.blocklist.length}* Terblock
🌸 *${Object.entries(global.db.data.chats).filter(chat => chat[1].isBanned).length}* Chat Terbanned
🌸 *${Object.entries(global.db.data.users).filter(user => user[1].banned).length}* Pengguna Terbanned

         🗓️ ${week}, ${date}`,
          "buttonText": "Click Here!",
          "listType": "SINGLE_SELECT",
          "sections": [
                            {
                                "rows": [{
                                         "title": "📊 › 𐐪-〚 Status 〛-𐑂",
                                         "description": "Status 赤 SHINN - BOT",
                                         "rowId": ".botstat"
                                    }, {
                                         "title": "⚡› 𐐪-〚 Speed 〛-𐑂",
                                         "description": "Menampilkan Kecepatan Respon 赤 SHINN - BOT",
                                         "rowId": ".ping"
                                    }, {
                                         "title": "🗒️› 𐐪-〚 Info 〛-𐑂",
                                         "description": "Menampilkan Info 赤 SHINN - BOT",
                                         "rowId": ".info"
                                    }, {
                                         "title": "🎐 › 𐐪-〚 Creator 〛-𐑂",
                                         "description": "Kontak Creator Ku ^~^",
                                         "rowId": ".owner"
                                    }, {
                                         "title": "❗ › 𐐪-〚 Rules 〛-𐑂",
                                         "description": "Patuhi Rules Untuk Kenyamanan Bersama",
                                         "rowId": ".rules"
                                    }, {
                                         "title": "🪙 › 𐐪- 〚 Leaderboard 〛 -𐑂",
                                         "description": "Cek Posisi Mu",
                                         "rowId": ".lb"  
                                    }, {
                                         "title": "💌 › 𐐪-〚 Group Bot 〛-𐑂",
                                         "description": "Join Ke Grup Official Shinnbotz",
                                         "rowId": ".gcbot" 
                                    }, {
                                         "title": "🦄 › 𐐪-〚 Group Setting 〛-𐑂",
                                         "description": "Setting Grup",
                                         "rowId": ".setelangrub" 
                                     }, {
                                         "title": "🤖 › 𐐪-〚 Bot Setting 〛-𐑂",
                                         "description": "Setting Bot",
                                         "rowId": ".botsett" 

      }],
                    "title": "▮𝗦𝘁𝗮𝘁𝘂𝘀 」"
                }, {
                  "rows": [{
                  "title": "💬 〉ɞ 『 Semua Perintah 』",
                  "description": "Memberikan Semua Fitur 赤 SHINN - BOT",
                  "rowId": ".? all"
                }, {
                  "title": "🎮 〉ɞ 『 Game 』",
                  "description": "Gamenya seru seru kak...",
                  "rowId": ".? game"
                }, {
                  "title": "🌱 〉ɞ 『 Rpg 』",
                  "description": "Game Epic Rpg ! ",
                  "rowId": ".? rpg"
                }, {
                  "title": "📈 〉ɞ 『 Exp & Limit 』",
                  "description": "Ayo tingkatkan level mu..!",
                  "rowId": ".? xp"
                }, {
                  "title": "🧩 〉ɞ 『 Fun 』",
                  "description": "Sangat Family Friendly...",
                  "rowId": ".? fun"
                }, {
                  "title": "🎁 〉ɞ 『 Gift 』",
                  "description": "Suprice!",
                  "rowId": ".? gift"
                }, {
                  "title": "🔞 〉ɞ 『 Nsfw 』",
                  "description": "Adick adick jangan liat ya...",
                  "rowId": ".? nsfw"
                }, {
                  "title": "⛩️ 〉ɞ 『 Anime 』",
                  "description": "Bang? Anjir wibu...",
                  "rowId": ".? anime"
                }, {
                  "title": "📰 〉ɞ 『 News ",
                  "description": "Berita Doang kok kak...",
                  "rowId": ".? News"
                },  {
                  "title": "☪️ 〉ɞ 『 Islamic 』",
                  "description": "Tobat Yuk Kak...",
                  "rowId": ".? quran"
                }, {
                  "title": "📚 〉ɞ 『 Edukasi 』",
                  "description": "Belajar kak biar pinter",
                  "rowId": ".? edukasi"
                }, {
                  "title": "🖼️ 〉ɞ 『 Image 』",
                  "description": "Radom Image & something...",
                  "rowId": ".? image"
                },  {
                  "title": "🎫 〉ɞ 『 Sticker 』",
                  "description": "Membuat sticker yang unik!",
                  "rowId": ".? stiker"
                }, {
                  "title": "🐚 〉ɞ 『 Kerang 』",
                  "description": "Menurut Kerang ajaib...!",
                  "rowId": ".? kerangajaib"
                }, {
                  "title": "🎵 〉ɞ 『 Sound Music 』",
                  "description": "Dengar Music Singkat",
                  "rowId": ".? sound"
                }, { 
                  "title": "😣 〉ɞ 『 Vn Imuet 』",
                  "description": "Mendengarkan Vn Yang Sangat Imuet",
                  "rowId": ".? vn"                                                      
                }, {
                  "title": "📑 〉ɞ 『 Quotes 』",
                  "description": "Random Teks...",
                  "rowId": ".? quotes"
                }, {
                  "title": "🏛️ 〉ɞ 『  Group Settings 』",
                  "description": "Admin Group Only!",
                  "rowId": ".? admin"
                }, {
                  "title": "👥 〉ɞ 『 Group 』",
                  "description": "Group Only!",
                  "rowId": ".? grup"
                }, {
                  "title": "🌟 〉ɞ 『 Premium 』",
                  "description": "Premium Users Only!",
                  "rowId": ".? premium"
                }, {
                  "title": "💻 〉ɞ 『 Internet 』",
                  "description": "Cari Sesuatu yang menarik!",
                  "rowId": ".? internet"
                }, {
                  "title": "🎭 〉ɞ 『 Anonymous 』",
                  "description": "Berbicara dengan orang tidak dikenal...",
                  "rowId": ".? anonymous"
                }, {
                  "title": "🖊️ 〉ɞ 『 Editz Menu 』",
                  "description": "Menulis dan Membuat Logo, dll...",
                  "rowId": ".? nulis"
                }, {
                  "title": "📥 〉ɞ 『 Downloader 』",
                  "description": "Download Sesuatu diBot!",
                  "rowId": ".? downloader"
                }, {
                  "title": "🧰 〉ɞ 『 Tools 』",
                  "description": "Mungkin ini bisa membantu mu...",
                  "rowId": ".? tools"
                }, {
                  "title": "📂 〉ɞ 『 Database 』",
                  "description": "Menyimpan sesuatu DiBot",
                  "rowId": ".? database"
                }, {
                  "title": "🗳️ 〉ɞ 『 Vote & Absen 』",
                  "description": "Group only!",
                  "rowId": ".? vote"
                }, {
                  "title": "🎙️ 〉ɞ 『 Voice 』",
                  "description": "Voice Changer...",
                  "rowId": ".? audio"
                }, {
                  "title": "🌐 〉ɞ 『 Multi-Session 』",
                  "description": "Salah Satunya Jadibot",
                  "rowId": ".? jadibot"
                }, {
                  "title": "ℹ️ 〉ɞ 『 Info 』",
                  "description": "Fitur fitur info...",
                  "rowId": ".? info"
                }, {
                  "title": "❓ 〉ɞ 『 No Category 』",
                  "description": "Fitur yang terlupakan...",
                  "rowId": ".? tanpakategori"
                }, {
                  "title": "👩🏻‍💻 〉ɞ 『 Owner 』",
                  "description": "Hanya Untuk Owner Shinn",
                  "rowId": ".? owner"
                }],
                                "title": "▮𝗖𝗮𝘁𝗲𝗴𝗼𝗿𝘆 」"
                                }, {
                                "rows": [{                                	
                                "title": "📝 ∫ » Catatan Perubahan «",
                                "description": "Tentang Update Terakhir ",
                                "rowId": ".notes"
                 }],
                                "title": "▮𝗜𝗻𝗳𝗼 𝗨𝗽𝗱𝗮𝘁𝗲 」"
                                }, {
                                "rows": [{
                                "title": "🗳️ ∫ » Donasi «",
                                "description": "Donasi kak, jangan enak pakenya doang",
                                "rowId": ".donasi"
                                }, {
                                "title": "🔖 ∫ » Sewa «",
                                "description": "Menampilkan List harga sewabot",
                                "rowId": ".sewa"
                                }, {
                                "title": "🌟 ∫ » Premium «",
                                "description": "Menampilkan List Harga premium",
                                "rowId": ".premium"
                                }, {
                                "title": "🔬  ∫ » Script «",
                                "description": "Script Yang Di Pakai 赤 SHINN - BOT",
                                "rowId": ".sc"
                                }, {
                                "title": "💭 ∫ » Pertanyaan Tentang Bot Ini «",
                                "description": "Especially WhatsApp users whose numbers start with +212",
                                "rowId": ".QnA"
                                }, {
                                "title": "🎖️ ∫  » Thanks To «",
                                "description": "Terima kasih banyak untuk user yang telah berpartisipasi dalam 赤 SHINN - BOT",
                                "rowId": ".? thnks"
                                }, {
                                "title": "☎️ ∫ » Kata penutup «",
                                "description": "Terimakasih untuk user yang telah menggunakan bot, jika ada kesalahan atau permintaan bisa chat ke nomor owner\nNote: chat P/main² tidak akan di respon(user bisa terkena banned/block)",
                                "rowId": ".creator"
                                }],
                                "title": "▮𝗜𝗻𝗳𝗼 」"
                            }
                        ], "contextInfo": 
                         { "stanzaId": m.key.id,
                        "participant": m.sender,
                        "quotedMessage": m.message
                        }
                    }
                 }, {}), {waitForAck: true})
  
    }
    // gunakan ini jika kamu menggunakan whatsapp bisnis
    //   throw `
    // ┌〔 DAFTAR MENU 〕
    // ├ ${_p + command} all
    // ├ ${_p + command} game
    // ├ ${_p + command} xp
    // ├ ${_p + command} stiker
    // ├ ${_p + command} kerang
    // ├ ${_p + command} quotes
    // ├ ${_p + command} admin
    // ├ ${_p + command} group
    // ├ ${_p + command} premium
    // ├ ${_p + command} internet
    // ├ ${_p + command} anonymous
    // ├ ${_p + command} nulis
    // ├ ${_p + command} downloader
    // ├ ${_p + command} tools
    // ├ ${_p + command} fun
    // ├ ${_p + command} database
    // ├ ${_p + command} vote
    // ├ ${_p + command} quran
    // ├ ${_p + command} audio
    // ├ ${_p + command} jadibot
    // ├ ${_p + command} info
    // ├ ${_p + command} tanpa kategori
    // ├ ${_p + command} owner
    // └────  
    //     `.trim()
    let groups = {}
    for (let tag in tags) {
      groups[tag] = []
      for (let plugin of help)
        if (plugin.tags && plugin.tags.includes(tag))
          if (plugin.help) groups[tag].push(plugin)
      // for (let tag of plugin.tags)
      //   if (!(tag in tags)) tags[tag] = tag
    }
    conn.menu = conn.menu ? conn.menu : {}
    let before = conn.menu.before || defaultMenu.before
    let header = conn.menu.header || defaultMenu.header
    let body = conn.menu.body || defaultMenu.body
    let footer = conn.menu.footer || defaultMenu.footer
    let after = conn.menu.after || (conn.user.jid == global.conn.user.jid ? '' : `Dipersembahkan oleh https://wa.me/${global.conn.user.jid.split`@`[0]}`) + defaultMenu.after
    let _text = [
      before,
      ...Object.keys(tags).map(tag => {
        return header.replace(/%category/g, tags[tag]) + '\n' + [
          ...help.filter(menu => menu.tags && menu.tags.includes(tag) && menu.help).map(menu => {
            return menu.help.map(help => {
              return body.replace(/%cmd/g, menu.prefix ? help : '%p' + help)
                .replace(/%islimit/g, menu.limit ? '*Ⓛ*' : '')
                .replace(/%isPremium/g, menu.premium ? '*Ⓟ*' : '')
                .trim()
            }).join('\n')
          }),
          footer
        ].join('\n')
      }),
      after
    ].join('\n')
    text = typeof conn.menu == 'string' ? conn.menu : typeof conn.menu == 'object' ? _text : ''
    let replace = {
      '%': '%',
      p: _p, uptime, muptime,
      me: conn.user.name,
      npmname: package.name,
      npmdesc: package.description,
      version: package.version,
      exp: exp - min,
      maxexp: xp,
      totalexp: exp,
      xp4levelup: max - exp <= 0 ? `Siap untuk *${_p}levelup*` : `${max - exp} XP lagi untuk levelup`,
      github: package.homepage ? package.homepage.url || package.homepage : '[unknown github url]',
      money, age, prems, level, limit, name, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role,
      readmore: readMore
    }
    text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
    // await conn.send3ButtonLoc(m.chat, await (await fetch(fla + teks)).buffer(), text.trim(), '🎮 SHINN BOT', 'Creator', '.creator', 'Donasi', '.donasi', 'Rules', '.infobot', m)
    await conn.send3ButtonLoc(m.chat, logo, '────━⃝┅ *D A S H B O A R D* ┅⃝━────', text.trim(), 'Creator', '.creator', 'Donasi', '.donasi', 'Rules', '.rules', m)
    let nama = await conn.getName(m.sender)
    let fkon = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: '16504228206@s.whatsapp.net' } : {}) }, message: { contactMessage: { displayName: `${name}`, vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${name}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}}


  logo2 = global.logo
  kanna = fs.readFileSync('./src/logo3.jpg')
  kannaImg = (await conn.prepareMessage('0@s.whatsapp.net', kanna, MessageType.image, { thumbnail: Buffer.alloc(0) })).message.imageMessage
  sumberImg = await (await fetch(fla + teks + ' menu')).buffer()
  image = (await conn.prepareMessage('0@s.whatsapp.net', logo2, MessageType.image, { thumbnail: Buffer.alloc(0) })).message.imageMessage
  /*res = await conn.prepareMessageFromContent(m.chat, {
    "productMessage": {
      "product": {
        "productImage": image,
        "productId": "4938174216214248",
        "title": '✧───────···[ Menu ]···────────✧',
        "description": `\n${wm}\n` + text,
        "retailerId": `${week}, ${date}  |  BY ADRI ‷♪`,
        "url": '\n',
        "descriptionCount": "999999999",
        "productImageCount": "1",
      },
      "businessOwnerJid": "0@s.whatsapp.net",
      "contextInfo": {
        "forwardingScore": 9999,
        "isForwarded": true
      }
    }
  },
    { quoted: fkon })
  conn.relayWAMessage(res)*/
  } catch (e) {
    conn.reply(m.chat, 'Maaf, menu sedang error', m)
    throw e
  }
}
handler.help = ['menu', '?', 'help']
handler.tags = ['main']
handler.command = /^(menu|\?|help)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.register = true

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 3

module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4201)

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
function ucapan() {
  const time = moment.tz('Asia/Jakarta').format('HH')
  res = "Selamat dinihari"
  if (time >= 4) {
    res = "Selamat pagi 🌄"
  }
  if (time > 10) {
    res = "Selamat siang ☀️"
  }
  if (time >= 15) {
    res = "Selamat sore 🌇"
  }
  if (time >= 18) {
    res = "Selamat malam 🌙"
  }
  return res
}