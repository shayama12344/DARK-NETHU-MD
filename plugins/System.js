const config = require('../config')
const {cmd , commands} = require('../command')
const os = require("os")
const {runtime} = require('../lib/functions')
cmd({
    pattern: "system",
    alias: ["status","botinfo"],
    desc: "Check up time , ram usage and more",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let status = `┌───────────────────────
├ ⏰ *Runtime:-* ${runtime(process.uptime())}
├ 📟 *Ram usage:-* ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
├ ⚙️ *Platform:-* ${os.hostname()}
├ 👨‍💻 *Owners:-* shadow-md
├ 🧬 *Version:-* 6.0.0
└───────────────────────

*❯❯❯ ꜱʜᴀᴅᴏᴡ-ᴍᴅ ᴡᴀᴛꜱ ᴀᴘᴘ ʙᴏᴛ ➣*
`
            let buttons = [
            {
                name: "quick_reply",
                    buttonParamsJson: JSON.stringify({
                        display_text: "ping",
                        id: ".ping"
                }),
            }]
        let opts = {
          
                header: '',
                footer: 'fuck',
                body: status

            }
            return await conn.sendButtonMessage(from, buttons, m, opts)
        } catch (e) {
            reply('*Error !!*')
            console.log(e)
        }
    })
